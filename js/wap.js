// JavaScript Document
$(function() {

  showService($(".serviceBtn"), getType({
    '北大方正人寿': '大都会人寿' 
  }, serviceCon));
  var $body = $('body');

  // 引流代码
  if (location.href.indexOf('20044') > -1) {
    $.getJSON(encodeURI('//20044.ybj.com/'+ '/index/click-field?activityId=' + yinliuActivityId + '&field=skipActivityId&value=' + activityId + '&uniqueId=' + yinliuUserId));
    $.getJSON(encodeURI('//20044.ybj.com/' + '/index/click-field?activityId=' + yinliuActivityId + '&field=skip_company_id&value=' + corpId + '&uniqueId=' + yinliuUserId));
  } 
  else if(location.href.indexOf('vrm') > -1 || location.href.indexOf('ybj') > -1) {
    $.getJSON(encodeURI('//20.vrm.cn'+ '/index/click-field?activityId=' + yinliuActivityId + '&field=skipActivityId&value=' + activityId + '&uniqueId=' + yinliuUserId));
    $.getJSON(encodeURI('//20.vrm.cn' + '/index/click-field?activityId=' + yinliuActivityId + '&field=skip_company_id&value=' + corpId + '&uniqueId=' + yinliuUserId));
  }

  /**========BEGIN 滚动=========== */

  // 获取滚动的手机号
  // function getMobile(){
  //   var prefixArray = new Array("130", "131", "132", "133", "135", "137", "138", "170", "187", "189");
  //   var i = parseInt(10 * Math.random());
  //   var prefix = prefixArray[i]+'****';

  //   for (var j = 0; j < 4; j++) {
  //     prefix = prefix + Math.floor(Math.random() * 10);
  //   }
  //   return prefix;
  // }
  // 获取滚动的姓
  function getName(resultLen){
    var name = ['王', '李', '张', '刘', '陈', '杨', '黄', '赵', '吴', '周', '徐', '孙', '马', '朱', '胡', '郭', '何', '林', '高', '罗', '郑', '梁', '谢', '宋', '唐', '许', '邓', '韩', '冯', '曹', '彭', '曾', '肖', '田', '董', '潘', '袁', '蔡', '蒋', '余', '于', '杜', '叶', '程', '魏', '苏', '吕', '丁', '任', '卢'];
    name = name.sort(function () {
      return .5 - Math.random();
    });
    var result=[];
    var len = name.length - 1;
    var min = Math.floor(Math.random(0, len) * len);
    for (var i = 0; i < resultLen; i++) {
      var index = min + i;
      index = index > len ? index - len : index;
      var _name = name[index];
      result.push(_name);
    }
    return result;
  }
  // 生成数据
  function getScrollData(){
    var tpl = '<div class="swiper-slide">'+
      '<p class="swiper-tips"><span class="tips-left">{{name}}**</span>领取了100万出行保障</p>'+
    '</div>';
    var num=5;
    var nameArr = getName(num);
    var html='';
    for (var i = 0; i < num; i++) {
      var name=nameArr[i];
      // var mobile = getMobile();
      html+=tpl.replace('{{name}}', name);
    }
    $('.swiper-wrapper').html(html);
    // 调用滚动
    new Swiper('.mySwiper', {
      direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项
      autoplay: 1000
    });
  }
  
  // 调用渲染html
  getScrollData();

 /**========弹层注册=========== */

  var layerDetail = $("#layer-detail").IUI("layer", {
      closeHandle: ".closeBtn",
  });
  var layerSuccess = $("#layer-success").IUI("layer", {
      closeHandle: ".close",
      cancelCall: function() {
        window.location.reload();
      }
  });
  var layerTrail = $("#layer-trail").IUI("layer", {
      closeHandle: ".close",
      cancelCall: function() {
        window.location.reload();
      }
  });
   var layerDisease = $("#layer-disease").IUI("layer", {
      closeHandle: ".close",
      cancelCall: function() {
        window.location.reload();
      }
  });
  var layerEnd = $("#layer-end").IUI("layer", {
      closeHandle: ".close",
      cancelCall: function() {
        window.location.reload();
      }
  });
  var layerSecurity = $("#layer-security").IUI("layer", {
      closeHandle: ".close",
      cancelCall: function() {
        window.location.reload();
      }
  });
  var layerLimit = $('#layer-limit').IUI('layer', {
      closeHandle: ".closeBtn",
      cancelCall: function() {
        window.location.reload();
      }
  });



  /**========监听=========== */
  $('.check-detail').on("click", function() {
      layerDetail.showLayer();
   });
  
  $(".btn-layer").on('click', function(){
    layerDetail.hideLayer();
    $("input[name=name]").focus();
  });
  $('.again-btn').on("click", function() {
    layerEnd.hideLayer();
    layerTrail.showLayer();
  });
  $(".infoBtn").on("click", function(e) {
    e.preventDefault();
    layerSecurity.showLayer();  
  });
  $(".serviceBtn").on("click", function(e) {
    e.preventDefault();
  });
  $(".activity-area").on("click", function() {
    layerLimit.showLayer();
  });


/**========BEGIN 领取人数=========== */

  function getInitTime(min, max) {
    var localStorageName = corpId + '-' + activityId + '-c-countDown'
    var LOCALSTORAGE = window.localStorage;
    // 今天是几号
    var date = new Date().getDate();
    // 本地缓存是几号
    var localDate = Number(LOCALSTORAGE.getItem('localDate'));
    // 本地缓存的计时时间
    var time = LOCALSTORAGE.getItem(localStorageName);
    // 没有本地缓存则设置
    if (!localDate) {
      LOCALSTORAGE.setItem('localDate', date);
    }
    // 有本地缓存但过了24点重置
    if (time && (localDate !== date)) {
      LOCALSTORAGE.setItem('localDate', date);
      LOCALSTORAGE.setItem(localStorageName, '');
      time = '';
    }
    var random = Math.floor(Math.random(1, 10) * 10);
    // 最小98，最大588
    time = time && time > min ? time - random : time && time < min ? min : max;
    LOCALSTORAGE.setItem(localStorageName, time);
    return time;
  }

  // 渲染领取人数
  $.countDown({
    target: '.c-countDown',
    format: '#{D}#{h}#{m}#{s}',
    initTime: getInitTime(98,588),
    type: 3,
    minTime: 98,
    speed:6,
    saveSpeed:6
  });
  // 日期插件
  var curr = new Date().getFullYear();
  var nowDate = new Date(),
    month = nowDate.getMonth() + 1,
    day = nowDate.getDate(),
    minyear = curr - 50,
    maxyear = curr - 25;

  var opionts = {
    theme: 'android-holo-light', //android-ics light
    mode: 'scroller', //mixed
    display: 'modal',
    minDate: new Date(minyear, month - 1, day),
    maxDate: new Date(maxyear, month - 1, day),
    defaultValue: new Date(new Date().setFullYear(curr - 35)),
    dateFormat: 'yy-mm-dd',
    dateOrder: 'yymmdd',
    closeOnOverlay: false,
    scrollLock: !1,
    tap: !1,
    lang: 'zh', //中文
    onBeforeShow: function () { //点击显示的回调
      $('#birthday').blur();
      $body.find('#message').addClass('hide');
    },
    onCancel: function () { //取消的回调
      $('#birthday').blur();
    },
    onSelect: function () { //确定的回调
      $('#birthday').blur();
    }
  };

  $('#birthday').mobiscroll('destroy').date(opionts);

  // 同意致电选择
  $.ichecked({
    type: 'checkbox',
    obj: '.agreed-item',
    parent: '.checkbox',
    success: function () {
      $('.btn-receive').prop('disabled', false).removeClass('disabled');
      $body.find('#message').addClass('hide');
    },
    abandon: function () {
      $('.btn-receive').prop('disabled', true).addClass('disabled');
      $.alert({
        text: '勾选后客服致电是为了说明赠险生效的事宜~',
        timeout: 5000
      });
    }
  });

  //手机号码验证：用于发送短信验证码
  var validateMobi = $('#ajax-create').IUI('validate', {
    globalMessage: '#message',
    infoClass: '请填写手机号码',
    collections: [{
      required: 'mobile',
      context: '.form-input',
      matches: {
        isNonEmpty: {
          errMsg: '手机必须填写'
        },
        isMobile: {
          errMsg: '手机格式不对'
        }
      }
    }]
  });

  // 手机自己勾选同意
  $body.on('keyup', '#mobile', function () {
    // 验证手机是否通过
    console.info(validateMobi.batch(true))
    var isValidate = validateMobi.batch(true);
    // 判断表单是否填写完成，是就把同意致电给勾选
    $.automatic(isValidate);
    // if (validate.verify.call(validate.cache.mobile.self, validate) >= 2) {
    //   $.automatic(false);

    //   return false;
    // } else {
    //   // 判断表单是否填写完成，是就把同意致电给勾选
    //   $.automatic(true);
    // }
  });

  //** start  虚拟身份证  **
// 点击按钮先验证表单信息
  $('[data-role="submit"]').on('click', function(event) {
    // 验证组件做事情
    if (validate.batch(true) === false) {
        var msg = $body.find('.validate-error').text();
        $.alert({
            text: msg,
            timeout: 2000
        });
        return false;
    }
    var data = {
        birthday :  $("input[name='birthday']").val(),  //生日
        mobile : $("input[name='mobile']").val(), //电话
        sex : $("input[name='sex']:checked").val() //性别  1=男 2=女
    };
    console.log(111);
    console.log(data);
    // 提交接口获取系统返回身份证
    $.ajax({
        url: '/index/idcard',
        data: data,
        dataType: 'json',
        type: 'GET',
        cache: false,
        beforeSend: function(){},
        success: function(data){
            console.log(data);
            if (data && data.code === 0) {
                // 设置页面输入框值，在提交表单
                $("#vir-idcard ").val(data.data); // 这里id为vir-idcard 是为了区分身份证弹层
                $("input[name='is_ai_idcard']").val("是");
            }
            // 正式提交表单
            $('#ajax-create').submit();
        },
        error: function(){}, 
        complete: function(){} 
    });
  
  });

  
  //发送短信验证码
  $('#send-btn').on('click', function () {
    var $this = $(this);
    var mobile;
    var time = 60;
    var timer = null;
    var timeFun;
    var $error = $("#message");
    $error.addClass('hide');
    if (validateMobi.batch(true) === false) {
      $error.removeClass('hide');
      setTimeout(function () {
        $error.addClass('hide');
      }, 2000);
      console.log("validateMobi");
      return false;
    }

    $this.prop('disabled', true).addClass('disabled');
    mobile = $('#mobile').val();
    console.log(mobile)
    timeFun = function () {
      timer = setTimeout(function () {
        if (time <= 0) {
          clearTimeout(timer);
          $this.html('重发').prop('disabled', false).removeClass('disabled');
        } else {
          time--;
          $this.html(time + 's');
          timeFun();
        }
      }, 1000);
    };
    $this.html("60s");
    timeFun();
    $.verification({
      mobile: mobile,
      success: function (e) {
        console.log("e:", e);
        if (e.status == 0) {
          $error.removeClass('hide');
          setTimeout(function () {
            $error.addClass('hide');
          }, 2000);
        }
      },
      error: function (e) {
        console.log('到这里', e)
        if (e.status == 0) {
          $error.removeClass('hide');
          $error.html(e.info);
          setTimeout(function () {
            $error.addClass('hide');
          }, 2000);
          time = -1;
        }
        $this.html('重试').prop('disabled', false).removeClass('disabled');
      }
    });
  });

  // 注册验证
  var validate = $('#ajax-create').IUI('validate', {
    globalMessage: '#message',
    collections: [{
      required: 'name',
      context: '.form-input',
      matches: {
        isNonEmpty: {
          errMsg: '姓名必须填写'
        },
        between: {
          errMsg: '姓名必须2到10位',
          range: [2, 10]
        },
        onlyZh: {
          errMsg: '姓名必须为中文'
        }
      }
    }, {
      required: 'sex',
      context: '.sex-wrap',
      type: 'radio',
      matches: {
        isChecked: {
          errMsg: '请选择性别'
        }
      }
    }, {
      required: 'birthday',
      context: '.form-input',
      delay: 500,
      matches: {
        isNonEmpty: {
          errMsg: '生日必须填写'
        },
        isBirthday: {
          errMsg: '生日格式不对'
        },
        birthdayRange: {
          errMsg: '生日范围不对',
          range: [minyear + '-' + month + '-' + day, maxyear + '-' + month + '-' + day]
        }
      }
    },
    {
      required: 'mobile',
      context: '.form-input',
      matches: {
        isNonEmpty: {
          errMsg: '手机必须填写'
        },
        isMobile: {
          errMsg: '手机格式不对'
        }
      }
    },
    {
      required: 'mobileCode',
      context: '.form-input',
      matches: {
        isNonEmpty: {
          errMsg: '验证码必须填写'
        },
        onlyInt: {
          errMsg: '验证码必须为数字'
        }
      }
    }]
  });

  //问题验证
  var validateUpdate = $('#ajax-update').IUI('validate', {
    globalMessage: '.message',
    infoClass: '',
    collections: [{
      required: 'question1',
      context: '.quest-info',
      type: 'radio',
      matches: {
        isChecked: {
          errMsg: '亲，你还没有回答问题一哦~'
        }
      }
    }, {
      required: 'question2',
      context: '.quest-info',
      type: 'radio',
      matches: {
        isChecked: {
          errMsg: '亲，你还没有回答问题二哦~'
        }
      }
    }, {
      required: 'question3',
      context: '.quest-info',
      type: 'radio',
      matches: {
        isChecked: {
          errMsg: '亲，你还没有回答问题三哦~'
        }
      }
    }]
  });
  // 意外测保验证
  var validateUpdate1 = $('#ajax-trail').IUI('validate', {
    globalMessage: '.message',
    collections: [{
      required: 'amount',
      context: '.answer',
      matches: {
        isNonEmpty: {
          errMsg: '请选择保额'
        }
      }
    }, 
    {
      required: 'paymentway',
      context: '.answer',
      matches: {
        isNonEmpty: {
          errMsg: '请选择交费年限'
        }
      }
    }]
  });
   // 意外测保验证
  var validateUpdate2 = $('#ajax-disease').IUI('validate', {
    globalMessage: '.message',
    collections: [{
      required: 'amount',
      context: '.answer',
      matches: {
        isNonEmpty: {
          errMsg: '请选择保额'
        }
      }
    }, 
    {
      required: 'paymentway',
      context: '.answer',
      matches: {
        isNonEmpty: {
          errMsg: '请选择交费年限'
        }
      }
    }]
  });
  
  // 注册表单
  $('#ajax-create').IUI('ajaxForm', {
    before: function () {
      // 验证组件做事情
      // if (validate.batch(true) === false) {
      //   var msg = $body.find('.validate-error').text();

      //   $.alert({
      //     text: msg,
      //     timeout: 2000
      //   });
      //   return false;
      // }

      // 显示loading加载
      $.loading(true);
    },
    success: function (data, config) {
      // var $this = $(this),
      //   serializeData = $this.serialize();

      // 判断后台返回状态
      if (data.status) {
        try{
          countLog.init();
        }
        catch(err){
          console.log("推啊出错啦");
        }
         $.loading(false);
          layerSuccess.showLayer();
      } else {
        $.loading(false);
        $.ajaxError({
          data: data
        });
      }
    }
  }).on('validate.focus', function (event, matches) {
    $body.find('#message').addClass('hide');
  }).on('validate.change', function (event, matches) {
    $body.find('#message').addClass('hide');
  });
  $('#ajax-update').IUI('ajaxForm', {
    before: function () {
      if (validateUpdate.batch(true) === false) {
        $('.message').removeClass('hide');
        tiptime = setTimeout(function () {
          $('.message').addClass('hide');
        }, 3000);
        console.log(123);
        return false;
      }
      var ins = {
        '具备什么保障，才能让您和家人安心？|||出行安全[具体产品类别-意外]': 'trail',
        '具备什么保障，才能让您和家人安心？|||身体健康[具体产品类别-健康]': 'disease',
        '具备什么保障，才能让您和家人安心？|||养老投资[具体产品类别-养老]': 'trail',
      };
      question3 = ins[$('input[name="question3"]:checked').val()];
      $.loading(true);
    },
    success: function (data) {
      $.loading(false);
      if (data.status) {
        if (question3 == 'trail') {
          console.log(question3, '意外');
          layerSuccess.hideLayer();
          layerTrail.showLayer();
        }
        else if (question3 == 'disease') {
          console.log(question3, '重疾');
          layerSuccess.hideLayer();
          layerDisease.showLayer();
        }
        else {
          $.ajaxError({
            data: data,
            hide: 'hide'
          });

        }
      }
    }
  }).on('validate.focus', function (event, matches) {
    clearTimeout(tiptime);
    $body.find('.message').addClass('hide').html('');
  }).on('validate.change', function (event, matches) {
    // var $this = $(this);
    // q1 = $this.find('input[name="question1"]:checked').val();
    // q2 = $this.find('input[name="question2"]:checked').val();
    // q3 = $this.find('input[name="question3"]:checked').val();

    // //判断问题是否所有都选择了，才做url拼接
    // if (localUrl && q1 && q2 && q3) {
    //   localUrl = localUrl + encodeURIComponent('&question1=' + q1 + '&question2=' + q2 + '&question3=' + q3);
    // }
    // clearTimeout(tiptime);
    $body.find('.message').addClass('hide').html('');
  });
   // 意外测保提交
  $('#ajax-trail').IUI('ajaxForm', {
    before: function () {
      // 验证组件做事情
      if (validateUpdate1.batch(true) === false) {
        var msg = $body.find('.validate-error').text();

        $.alert({
          text: msg,
          timeout: 2000
        });
        return false;
      }

      // 显示loading加载
      $.loading(true);
    },
    success: function (data, config) {
      // var $this = $(this),
      //   serializeData = $this.serialize();

      // 判断后台返回状态
      if (data.status) {
        $.loading(false);
        layerTrail.hideLayer();
        layerEnd.showLayer();
      } else {
        $.loading(false);
        $.ajaxError({
          data: data
        });
      }
    }
  }).on('validate.focus', function (event, matches) {
      $body.find('#message').addClass('hide');
  }).on('validate.change', function (event, matches) {
      $body.find('#message').addClass('hide');
  });
   // 重疾测保提交
  $('#ajax-disease').IUI('ajaxForm', {
    before: function () {
      // 验证组件做事情
      if (validateUpdate2.batch(true) === false) {
        var msg = $body.find('.validate-error').text();

        $.alert({
          text: msg,
          timeout: 2000
        });
        return false;
      }

      // 显示loading加载
      $.loading(true);
    },
    success: function (data, config) {
      // var $this = $(this),
      //   serializeData = $this.serialize();

      // 判断后台返回状态
      if (data.status) {
        $.loading(false);
        layerDisease.hideLayer();
        layerEnd.showLayer();
      } else {
        $.loading(false);
        $.ajaxError({
          data: data
        });
      }
    }
  }).on('validate.focus', function (event, matches) {
      $body.find('#message').addClass('hide');
  }).on('validate.change', function (event, matches) {
      $body.find('#message').addClass('hide');
  });
});


$.extend({
  countDown: function (options) {
    var speed = options.speed||1000;
    var isSaveLocal = options.isSaveLocal;
    var saveStep = options.saveStep || 10;
    var activeTime = options.initTime;
    var $container = $(options.target || '.c-countDown');
    var format = options.format || '#{h|小时}#{m|分钟}#{s|秒}';
    var type = options.type || 1;
    var maxTime = options.maxTime;
    var minTime = options.minTime || 0;
    var timer;
    var saveTimer;
    var nameArr = ['second', 'minute', 'hour', 'day', 'month', 'year'];
    var saveLocalFn = function () {
      window.localStorage.setItem('countDown', activeTime);
    };
    var fillTime = function (time) {
      return time >= 10 ? time : '0' + time;
    };
    var getDate = function () {
      var timeArr = [1, 60, 60, 24, 30, 12];
      var arr = format.match(/#[^#]+/g);
      // 存储每次计算后的剩余时间
      var nextTime = activeTime;
      // 存储单位
      var unit = [];
      // 存储倍数
      var time = [];
      for (var i = 0; i < arr.length; i++) {
        var _format = arr[i].slice(2, -1).split('|');
        // 存储计算所需倍数
        var _time = i === 0 ? timeArr[0] : timeArr[i] * time[i - 1];
        time.push(_time);
        unit.push(_format[1] || '');
      }
      // 存储计算后的结果
      var resultTime = [];
      for (var j = time.length - 1; j >= 0; j--) {
        resultTime.unshift(fillTime(Math.floor(nextTime / time[j])));
        nextTime = nextTime % time[j];
      }
      return {
        // 顺序是：s,m,h,d,M,Y
        time: resultTime,
        // 单位名
        unit: unit.reverse()
      };
    };
    var getNumber = function () {
      var arr = format.match(/#[^#]+/g);
      // 存储每次计算后的剩余时间
      var nextTime = activeTime;
      if (nextTime < minTime) {
        nextTime = minTime;
      }

      // 存储单位
      var unit = new Array(arr.length);
      // 存储计算后的结果
      var resultTime = (nextTime + '').split('');
      var fillNum = new Array(arr.length - resultTime.length + 1).join(0).split('');
      resultTime = fillNum.concat(resultTime);
      return {
        // 顺序是：s,m,h,d,M,Y
        time: resultTime.reverse(),
        // 单位名
        unit: unit
      };
    };
    var countDownFn = function () {
      var isRun = type === 2 || type === 4 ? activeTime <= maxTime : activeTime >= minTime;
      if (isRun || type === 3 || type === 4) {
        var result = type === 3 || type === 4 ? getNumber() : getDate();
        // 渲染html
        var html = '';
        for (var i = 0; i < result.unit.length; i++) {
          var _unit = result.unit[i] || '';
          var _name = 'c-countDown-' + nameArr[i];
          html = '<span class="c-countDown-time ' + _name + '">' + result.time[i] + '</span>' + _unit + html;
        }
        // $container[0].html(html);
        type === 1 || type === 3 ? --activeTime : ++activeTime;
      }
      if (!isRun) {
        clearInterval(timer);
        if (saveTimer) {
          clearInterval(saveTimer);
        }
      }
    };
    countDownFn();
    timer = setInterval(countDownFn, speed);
    if (isSaveLocal) {
      saveLocalFn();
      saveTimer = setInterval(saveLocalFn, saveStep * 1000);
    }
  },
  automatic: function (ischecked) {
    // 判断表单是否填写完成，是就把同意致电给勾选
    if (ischecked) {
      $('input[name="agreecCall"]').prop('checked', true);
      // 如果存在禁止按钮的，就把它清掉
      $('.btn-receive').prop('disabled', false);
      // 验证码按钮
      $('#send-btn').removeClass('disabled');
    } else {
      $('input[name="agreecCall"]').prop('checked', false);
      $('.btn-receive').prop('disabled', true);
      $('#send-btn').addClass('disabled');
    }
  }
});