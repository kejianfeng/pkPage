var gulp = require('gulp');
var md5 = require('md5');
var qiniu = require('gulp-qiniu');
var cheerio = require('gulp-cheerio');
var clean = require('gulp-clean');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var compass = require('gulp-compass');
var minifyCss = require('gulp-minify-css');
var yuicompress = require('gulp-yuicompressor');
var browserSync = require("browser-sync");
var reload = browserSync.reload;
var htmlmin = require('gulp-htmlmin');
var cleanCss = require('clean-css');
var argv = require('yargs').argv;
var fs = require('fs');
var sourcemaps = require('gulp-sourcemaps');
var htmlreplace = require('gulp-html-replace');
var replace = require('gulp-replace');
var upload = require('gulp-upload');
var path = require('path');
var through = require('through2');
var insert = require('gulp-insert');
var developer = require('../js/developer.js'); //添加修改者和时间

/**
 * activity_dirname :  活动目录名称，即 local-assets文件夹下对应此活动的目录名称
 * 自动获取活动文件夹名称
 */
var activity_dirname = path.basename(process.cwd());

/**
 * qn_dir : 七牛服务器上的当前活动的目录
 * 在第一次开发此活动时，新建一个目录名，命名规则：活动英文名 + 下划线 + 活动诞生日，如：cmc_20160330
 * ** 若只是修改，则不需要修改目录名。 **
 * 在2016-03-31前活动的gulpfile就不要再改动了
 */
var qn_dir = 'assets/' + activity_dirname.replace(/-/g, '_') + '_20190626/';

/**
 * 方便定位-定义页面注释：目录、各线ID
 * name      ：活动目录名称
 * busID     ：企业的ID
 * devID     ：开发线ID
 * testID    ：测试线ID
 * formalID  ：正式线ID
 * author    ：页面开发者：两个端不同人开发者的名称-'author：'+ (argv.m ? '手机端' : '电脑端')
 * devName   ：页面修改人名称
 * devTime   ：页面修改时间
 */
var folders = {
  name: '目录名称：' + activity_dirname,
  busID: '企业的ID：' + 1,
  devID: '开发线ID：' + 0,
  testID: '测试线ID：' + 1912,
  formalID: '正式线ID：' + 'http://1.vrm.cn/159',
  author: 'author：柯剑烽',
  devName: '修改者：' + developer.name,
  devTime: '修改时间：' + developer.modify,
  // design: 'X:\精准营销事业部/场景业务部/项目工作/橙杏/页面优化/设计（廖晓敏20190625）'
};

/**
 * 配置信息
 * timesamp         : 时间戳，用于生成文件的命名
 * cdn              : 云服务器地址
 * image            : 待上传的本地图片（本次活动所需的本地图片）
 * imagePath    : html中引入本地图片的相对路径，如： <img src="/local-assets/cmc-janking/images/xxxx.png" />
 */
var config = {
  timesamp: md5(+new Date()),
  cdn: '//images.vrm.cn/' + qn_dir,
  image: './images/*',
  font: './font/*',
  imagePath: '/local-assets/' + activity_dirname + '/images/',
  flexible: '../js/flexible/ydui.flexible.js'
};

/**
 * PC端页面配置
 * html    : html文件路径
 * css     : pc端所需的css文件
 * js      : pc端所需的js文件
 * dest    : pc端资源打包后的路径
 */
var pc = {
  html: '../../../views/local-assets/' + activity_dirname + '/pc.php',
  css: [
    '../js/communal/dest/pc/communal.pc.css',
    './css/pc.css'
  ],
  js: [
    '../js/lib/jquery.min.js',
    '../js/iui/iui.pc-1.5.0.js',
    '../js/laydate/laydate.js',
    '../js/city/jquery.cityselector.add.extend.js',
    '../js/city/jquery.cityselector.add.js',
    '../js/autoComplete/mailAutoComplete-4.0.js',
    './js/pc.js'
  ],
  dest: './dest/pc/',
  maps: './dest/maps/'
};
/**
 * 移动端端页面配置
 * html    : 移动端的html文件路径
 * css     : 移动端所需的css文件
 * js      : 移动端所需的js文件
 * dest    : 移动端资源打包后的路径
 */
var mobile = {
  html: '../../../views/local-assets/' + activity_dirname + '/wap.php',
  css: [
    '../js/communal/dest/mobile/public.mobile.css',
    '../js/swiper-3.1.7/css/swiper.min.css',
    './css/wap.css'
  ],
  js: [
    '../js/lib/jquery.min.js',
    '../js/iui/iui.wap-1.5.0.js',
    '../js/wap/newdata/mobiscroll.custom-2.17.1.min.js',
    '../js/swiper-3.1.7/js/swiper.jquery.js',
    '../js/countDown/countDown.js',
    './js/wap.js',
    
  ],
  dest: './dest/mobile/',
  maps: './dest/maps/'
};

/**
 * 监听配置 : 用于 compass watch 或自动刷新时监听的资源路径
 */
var watch = {
  html: './{,*/}*.html',
  js: './js/{,*/}*.js',
  css: './css/{,*/}*.css',
  scss: './sass/{,*/}*.scss'
};

/**
 * build 判断编译 「移动端」 还是 「pc端」
 */
var build = argv.m ? mobile : pc;

/**
 * gulp upload ：将 ./dest 中的所有文件上传到 cdn
 * 命令行加 -n 就是只上传js/css 文件
 * 带资源覆盖功能
 */

gulp.task('upload', function() {
  var src = [build.dest + '*.js', build.dest + '/*.css', config.font, config.image];
  src = argv.n ? src.slice(0, 2) : src;

  return gulp.src(src)
    .pipe(through.obj(function(file, enc, cb) {
      var paths = qn_dir + file.relative;

      gulp.src(file.path)
        .pipe(upload({
          server: 'http://upimage.vrm.cn/index.php/api/upload',
          data: {
            action: 'upload',
            type: 'aliyun',
            dir: qn_dir,
            old_file: paths,
            file_cover: '1'
          },
          timeout: 30000,
          fileinputname: 'file',
          callback: function(err, data, res) {
            if (err) {
              console.log('error:' + err.toString());
            } else {
              console.log(data.toString());
            }
          }
        }));
      cb();
    }));
});

/**
 * gulp clean ：清除 ./dest 下的所有文件
 */
gulp.task('clean', function() {
  gulp.src(build.dest).pipe(clean({
    force: true
  }));
});

/**
 * gulp html ：替换 html 里 css , js ,images 的路径
 * -m ：目标为移动端,若无则pc端
 */
gulp.task('html', function() {
  gulp.src(build.html)
    .pipe(htmlreplace({
      'css': config.cdn + config.timesamp + '.css',
      'js': config.cdn + config.timesamp + '.js',
      'flexible': gulp.src([config.flexible])
        .pipe(concat('all.js'))
        .pipe(yuicompress({ type: 'js' }))
        .pipe(insert.wrap('<script>', '</script>'))
    }))
    .pipe(replace(config.imagePath, config.cdn))
    .pipe(replace("/local-assets/<?= $get['local']; ?>/images/", config.cdn))
    .pipe(replace('{-folders-}', '* ' +
      folders.name + '\n * ' +
      folders.busID + '\n * ' +
      folders.devID + '\n * ' +
      folders.testID + '\n * ' +
      folders.formalID + '\n * ' +
      folders.author + '\n * ' +
      folders.devName + '\n * ' +
      folders.devTime + '\n * ' +
      folders.design))
    .pipe(gulp.dest(build.dest));
});

/**
 * gulp css ：合并压缩css文件
 * -m ：目标为移动端,若无则pc端
 */
gulp.task('css', function() {
  gulp.src(build.css)
    .pipe(concat(config.timesamp + '.css'))
    .pipe(yuicompress({ type: 'css' }))
    .pipe(replace('../images/', config.cdn))
    .pipe(replace('../font/', config.cdn))
    .pipe(gulp.dest(build.dest));
});

/**
 * gulp check ：校验js语法是否符合规范
 * -m ：目标为移动端,若无则pc端
 */
gulp.task('check', function() {
  gulp.src(build.js).pipe(jshint()).pipe(jshint.reporter('default'));
});

/**
 * gulp js ：合并压缩js文件
 * -m   : 目标为移动端,若无则pc端
 * --dev : 有 sourcemaps  ** 注意是两个减号符 **
 */
gulp.task('js', function() {
  if (argv.dev) {
    gulp.src(build.js)
      .pipe(sourcemaps.init())
      .pipe(concat(config.timesamp + '.js'))
      .pipe(yuicompress({
        type: 'js'
      }))
      .pipe(sourcemaps.write())
      .pipe(replace(config.imagePath, config.cdn))
      .pipe(gulp.dest(build.dest));
  } else {
    gulp.src(build.js)
      .pipe(concat(config.timesamp + '.js'))
      .pipe(yuicompress({
        type: 'js'
      }))
      .pipe(replace(config.imagePath, config.cdn))
      .pipe(gulp.dest(build.dest));
  }
});


/**
 * gulp auto ：一键处理打包
 * 顺序为 ： html --> css --> js --> upload
 */
gulp.task('auto', ['clean'], function() {
  setTimeout(function() {
    gulp.run(['html', 'css', 'js']);
    setTimeout(function() {
      gulp.run('upload');
    }, 4000);
  }, 2000);
});

/**
 * gulp watch ：监听 watch 配置下的文件，一旦改变就自动刷新
 * 仅用于 edm或静态页面 开发
 */
gulp.task('watch', ['browser-sync', 'compass', 'fresh'], function() {
  gulp.watch([watch.html, watch.js], ['fresh']);
  gulp.watch([watch.scss], ['compass']);
});

/**
 * browser-sync : 启动一个微型服务器
 * gulp watch 时需要用到
 */
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./"
    }
  });
});
/**
 * fresh : 监听文件有改变时触发刷新浏览器
 * gulp watch 时需要用到
 */
gulp.task('fresh', function() {
  gulp.src([watch.html, watch.css, watch.js]).pipe(reload({
    stream: true
  }));
});
/**
 * compass 编译 sass
 * gulp watch 时需要用到
 */
gulp.task('compass', function() {
  gulp.src(watch.scss).pipe(compass({
    comments: true,
    css: 'css',
    sass: 'sass'
  })).
  on('error', function(err) {
    console.log(err);
  }).pipe(reload({
    stream: true
  }));
});

/**
 * gulp edm : 将外链的css文件内容解析为 style嵌入到对应标签
 */
gulp.task('edm', function() {
  var cssMap = {};
  var fileContent = fs.readFileSync("./edm.css", "utf8");
  var _cssStr;
  fileContent = new cleanCss().minify(fileContent).styles;
  _cssStr = fileContent.split('}');
  _cssStr.splice(_cssStr.length - 1, 1);
  _cssStr.forEach(function(val, key) {
    var parse = val.split('{');
    var _name;
    var _value;
    if (parse[0] !== '') {
      _name = parse[0];
      _value = parse[1];
    }
    if (/\:hover|\:active|\:link|\:visited/.test(_name)) return;
    cssMap[_name] = _value;
  });
  gulp.src('./edm.html').pipe(cheerio({
    run: function($, file) {
      $('link').remove();
      for (var name in cssMap) {
        var propArr = cssMap[name].split(';');
        var tmp = {};
        var propName;
        var propValue;
        for (var i = 0; i < propArr.length; i++) {
          propName = propArr[i].split(':')[0];
          propValue = propArr[i].split(':')[1];
          tmp[propName] = propValue;
        }
        $(name).css(tmp);
      }
    },
    parserOptions: {
      decodeEntities: false
    }
  })).pipe(gulp.dest('./dest/'));
});



gulp.task('default', ['help']);

gulp.task('help', function() {
  console.log('   gulp auto           一键清除，打包，上传');
  console.log('   gulp watch          文件监控');
  console.log('   gulp upload         资源上传 (-m 上传mobile资源)');
  console.log('   gulp check          JS语法检测 (-m 检测mobile资源)');
  console.log('   gulp clean          清空build文件夹');
  console.log('   gulp edm            编译edm');
  console.log('\n   **********************************\n\n   js，css的压缩都是引用Yuicompress，\n   因此需要安装一下java sdk环境，\n   Yui是老牌压缩神器，稳定，值得信赖\n\n   **********************************');
});
