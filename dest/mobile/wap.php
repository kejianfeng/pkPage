<?php $this->beginPage()
/*
<!--
 * 目录名称：1-159
 * 企业的ID：1
 * 开发线ID：0
 * 测试线ID：1912
 * 正式线ID：http://1.vrm.cn/159
 * author：柯剑烽
 * 修改者：kejianfeng
 * 修改时间：2019-07-02 11:10:29
 * undefined
 * developer
 -->
**/
 ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <?=\yii\helpers\Html::csrfMetaTags();?>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,minimum-scale=1,maximum-scale=1">
    <meta name="format-detection" content="telephone=no">
    <meta name="renderer" content="webkit">
    <meta content="telephone=no" name="format-detection" />
    <meta content="black" name="apple-mobile-web-app-status-bar-style">
    <title>有保障更安心-万丈DMP服务</title>
    <script>!(function(d){var c=750;var e=d.document;var g=e.documentElement;var b="orientationchange" in d?"orientationchange":"resize";var a=(function f(){var h=g.getBoundingClientRect().width;g.style.fontSize=Math.max(Math.min(20*(h/c),20),8.55)*5+"px";return f})();g.setAttribute("data-dpr",d.navigator.appVersion.match(/iphone/gi)?d.devicePixelRatio:1);if(/iP(hone|od|ad)/.test(d.navigator.userAgent)){e.documentElement.classList.add("ios");if(parseInt(d.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1],10)>=8){e.documentElement.classList.add("hairline")}}if(!e.addEventListener){return}d.addEventListener(b,a,false);e.addEventListener("DOMContentLoaded",a,false)}(window));</script>

    <link rel="stylesheet" href="//images.vrm.cn/assets/1_159_20190626/75bf0d470a84c58cbddba51345c1894f.css">

    <link rel="stylesheet" href="https://images.vrm.cn/2019/04/10/service-x.css">

    <?php $this->head() ?>
</head>

<body>
    <?php $this->beginBody() ?>
    <div id="message" class="hide"></div>
    <!-- 内容 -->
     <div id="banner">
        <div class="logo"></div>
        <div class="main-content"></div>
        <div class="swiper-container mySwiper">
            <div class="swiper-wrapper">
            </div>
        </div>
    </div>
    <div id="container">
        <p class="title">今日已有12889名用户领取</p>
        <div class="form-main">
            <!-- <div class="title">
                橙杏携手各大保险公司，为广大烟友提供免费福利
            </div> -->
          <!--   <div class="count-main">
                今日剩余：<span class="c-countDown"></span>份
            </div> -->
            <form action="/index/create" method="POST" id="ajax-create">
                <!-- 固定参数 -->
                <input type="hidden" name="<?= Yii::$app->request->csrfParam; ?>" value="<?= Yii::$app->request->getCsrfToken(); ?>">
                <?php foreach($get as $key=>$value){?>
                <input type="hidden" name="<?=$key?>" value="<?= $value;?>">
                <?php }?>
                    <!-- 表单 -->
                <div class="top-msg">填写信息，马上领取<em>最高100万保障福利</em></div>
                <div class="form-area">
                    <!-- name & sex -->
                    <div class="form-item name-item clearfix">
                        <div class="name-wrap">
                            <!-- <span class="form-title">姓名</span> -->
                             <div class="form-input">
                                 <input type="text" name="name" data-required="name" autocomplete='off' value placeholder="请输入您的姓名">
                             </div>
                            
                        </div>
                        <div class="sex-wrap">
                            <label>
                                <input type="radio" name="sex" data-required="sex" value="1" checked class="hidden">
                                <span>男</span>
                            </label>
                            <label>
                                <input type="radio" name="sex" data-required="sex" value="2">
                                <span>女</span>
                            </label>
                        </div>
                    </div>
                    <!-- birthday -->
                    <div class="form-item birthday-item">
                        <div class="birthday-wrap">
                          <!--   <span class="form-title">年龄</span> -->
                            <div class="form-input">
                                 <input type="text" name="birthday" class="val-error" id="birthday" data-required="birthday" value placeholder="请选择您的出生日期">
                                 <i class="icon-right iconfont"></i>
                            </div>
                           
                        </div>
                    </div>
                    <!-- mobile -->
                    <div class="form-item mobile-item">
                        <div class="mobile-wrap">
                           <!--  <span class="form-title">手机</span> -->
                            <div class="form-input">
                                <input type="tel" name="mobile" data-required="mobile" maxlength="11" id="mobile" value placeholder="请输入手机号码">
                            </div>
                            
                        </div>
                    </div>
                    <div class="form-item name-item clearfix">
                        <div class="send-wrap">
                            <!-- <span class="form-title">验证码</span> -->
                            <div class="form-input">
                                <input type="text" name="mobileCode" id="mobileCode" value="<?= $get['mobileCode']; ?>" maxlength="6" class="input-mobileCode val-error" data-required="mobileCode" placeholder="请输入验证码" autocomplete='off'>
                            </div>
                        </div>
                        <div class="send-btn disabled" id="send-btn">
                            获取验证码
                        </div>
                    </div>
                    <div class="form-item">
                     <!--    <button type="submit" class="btn btn-receive">免费领取</button> -->
                        <!-- type如果是submit,点击后就会直接提交表单,这样获取不到虚拟身份证 -->
                        <button type="button" class="btn btn-receive" data-role="submit">免费领取</button>
                        <input type="hidden" name="is_ai_idcard" value="" >
                        <!-- 这里的idcard字段，为身份证填充字段,接口返回的身份证要填充在这里  -->
                        <!-- 这里id为vir-idcard 是为了区分身份证弹层  -->
                        <input type="hidden" name="idcard" id="vir-idcard"  value="" >
                    </div>
                     <!-- aggre -->
                    <div class="form-item agreed-item">
                        <label>
                            <input type="checkbox" name="agreecCall" value="1" data-required="agreed">
                            <i class="aggred-icon"></i>
                            <span class="text">本人已阅读并同意接受客户<span class="infoBtn">《信息授权条款》</span>和<span class="serviceBtn">《服务协议》</span>同意大都会人寿专线致电联系事宜</span>
                        </label>
                        <p class="promise">*郑重承诺：我们将严格遵守信息保密制度</p>
                        <p class="limit-area">该活动仅限部分地域参加，查看<em class="activity-area">活动区域</em></p>
                    </div>
                </div>
            </form>
        </div>
        <div class="detail-main">
            <div class="content"></div>
            <div class="title check-detail">查看保障详情</div>
        </div>
    </div>
    <!--保障详情弹层-->
    <div class="layer-box hide" id="layer-detail">
        <div class="layer-content">
            <a href="javascript:;" class="closeBtn">×</a>
            <div class="main" >
                <div class="title-style title-1"></div>
                <p class="title-1-dowm">交通综合意外保险产品计划</p>
                <p class="msg-1">保障时间：30天</p>
                <table class="table-1">
                    <tbody>
                        <tr>
                            <th class="left-top">保障责任</th>
                            <th  class="right-top">保障金额</th>
                        </tr>
                        <tr>
                            <td>水陆空交通意外身故+意外伤残</td>
                            <td>10万元+1万元</td>
                        </tr>
                        <tr>
                            <td>航空意外身故+意外伤残</td>
                            <td>100万元+10万元</td>
                        </tr>
                        <tr>
                            <td class="left-bottom">自驾意外身故+意外伤残</td>
                            <td class="right-bottom">10万元+1万元</td>
                        </tr>
                    </tbody>
                </table>
                <div class=" title-style title-2"></div>
                <p class="title-1-dowm">交通综合意外保险产品计划</p>
                <p class="msg-1">保障时间：365天</p>
                <table class="table-1">
                    <tbody>
                        <tr>
                            <th class="left-top">保障责任</th>
                            <th  class="right-top">保障金额</th>
                        </tr>
                        <tr>
                            <td class="left-bottom">一般意外身故+意外伤残</td>
                            <td class="right-bottom">5000+500元</td>
                        </tr>
                    </tbody>
                </table>
                <div class="title-style title-3"></div>
                <p class="title-1-dowm">交通综合意外保险产品计划</p>
                <p class="msg-1">保障时间：365天</p>
                <table class="table-1">
                    <tbody>
                        <tr>
                            <th class="left-top">保障责任</th>
                            <th  class="right-top">保障金额</th>
                        </tr>
                        <tr>
                            <td class="left-bottom">法定节假日意外身故+意外伤残</td>
                            <td class="right-bottom">5000+500元</td>
                        </tr>
                    </tbody>
                </table>
                <button class="btn-layer">马上领取</button>

            </div>
        </div>
    </div>
  <!--   提交成功弹层 -->
   <div class="layer-box hide" id="layer-success">
      <div class="layer-content layer-que">
        <span class="close"></span>
        <form action="/index/update" method="POST" id="ajax-update">
          <!-- 固定参数 -->
          <input type="hidden" name="<?= Yii::$app->request->csrfParam; ?>" value="<?= Yii::$app->request->getCsrfToken(); ?>">
          <input type="hidden" name="activityId" value="<?= $get['a_id'] ? $get['a_id'] : $data['id']; ?>">
       
          <!-- 固定参数 -->
          <div id="questionList">
            <div class="question-bg">
              <div class="successText">领取成功！</div>
              <div class="tipsText">大都会人寿的专属客服将在<span>5~7个工作日内</span>
                <br>给您致电，请您保持手机畅通~</div>
            </div>
            <div class="question-info">
              <h2><span>3秒</span>完成小调查, 给您更贴心的保障服务</h2>
              <ul>
                <li class="quest-item quest-item-1">
                  <h3 class="qitem-title">1、生活中，您对谁的呵护更多？</h3>
                  <div class="quest-info">
                    <label class="answer">
                      <input type="radio" name="question1" value="生活中，您对谁的呵护更多？||| 伴侣[投保对象-配偶]" class="val-error" data-required="question1">
                      <span>伴侣</span>
                    </label>
                    <label class="answer">
                      <input type="radio" name="question1" value="生活中，您对谁的呵护更多？|||子女[投保对象-子女]" class="val-error" data-required="question1">
                      <span>子女</span>
                    </label>
                    <label class="answer">
                      <input type="radio" name="question1" value="生活中，您对谁的呵护更多？|||父母[投保对象-父母]" class="val-error" data-required="question1">
                      <span>父母</span>
                    </label>
                  </div>
                </li>
                <li class="quest-item quest-item-2">
                  <h3 class="qitem-title">2、出行时，您会选择哪种方式？</h3>
                  <div class="quest-info">
                    <label class="answer">
                      <input type="radio" name="question2" value="出行时，您会选择哪种方式？|||自驾[出行习惯-自驾车]" class="val-error" data-required="question2">
                      <span>自驾</span>
                    </label>
                    <label class="answer">
                      <input type="radio" name="question2" value="出行时，您会选择哪种方式？|||公共交通[出行习惯-公交、地铁、轮船]" class="val-error" data-required="question2">
                      <span>公共交通</span>
                    </label>
                    <label class="answer">
                      <input type="radio" name="question2" value="出行时，您会选择哪种方式？|||步行[出行习惯-自行车、步行]" class="val-error" data-required="question2">
                      <span>步行</span>
                    </label>
                  </div>
                </li>
                <li class="quest-item quest-item-3">
                  <h3 class="qitem-title">3、具备什么保障，才能让您和家人安心？</h3>
                  <div class="quest-info">
                    <label class="answer">
                      <input type="radio" name="question3" value="具备什么保障，才能让您和家人安心？|||出行安全[具体产品类别-意外]" class="val-error" data-required="question3">
                      <span>出行安全</span>
                    </label>
                    <label class="answer">
                      <input type="radio" name="question3" value="具备什么保障，才能让您和家人安心？|||身体健康[具体产品类别-健康]" class="val-error" data-required="question3">
                      <span>身体健康</span>
                    </label>
                    <label class="answer">
                      <input type="radio" name="question3" value="具备什么保障，才能让您和家人安心？|||养老投资[具体产品类别-养老]" class="val-error" data-required="question3">
                      <span>养老投资</span>
                    </label>
                  </div>
                </li>
              </ul>
              <div class="tc que-sub">
                <button type="submit" class="ajax-ubtn">提交调查</button>
                <div class="deer-element-tail-layer"></div>
              </div>
            </div>
            <!--question-info end -->
          </div>
        </form>
      </div>
    </div>
    <!-- 意外弹层 -->
    <div class="layer-box hide " id="layer-trail">
        <div class="layer-content fadeIn">
        <span class="close"></span>
        <div class="banner">

        </div>
        <div class="title">
            更好呵护爱，2步订制保障方案
        </div>
        <div class="layer-main">
                <form id="ajax-trail" action="/index/update" method="post">
                    <input type="hidden" name="<?= Yii::$app->request->csrfParam; ?>" value="<?= Yii::$app->request->getCsrfToken(); ?>">
                    <input type="hidden" name="activityId" value="<?= $data['id']; ?>">

                    <div class="questionnaire">
                        <ul>
                            <li class="quest-list">
                                <h4>1、意外风险来袭，您觉得需要多少保障？</h4>
                                <p class="answer-all">
                                    <label class="answer">
                                        <input type="radio" name="amount" value="5万" data-required="amount">
                                        <span>5万</span>
                                    </label>
                                    <label class="answer">
                                        <input type="radio" name="amount" value="10万" data-required="amount">
                                        <span>10万</span>
                                    </label>
                                    <label class="answer">
                                        <input type="radio" name="amount" value="15万" data-required="amount">
                                        <span>15万</span>
                                    </label>
                                    <label class="answer">
                                        <input type="radio" name="amount" value="20万" data-required="amount">
                                        <span>20万</span>
                                    </label>
                                </p>
                            </li>
                            <li class="quest-list">
                                <h4>2、购买一份保障，您会选择哪种交费方式？</h4>
                                <p class="answer-all">
                                    <label class="answer">
                                        <input type="radio" name="paymentway" value="月交" class="val-error" data-required="paymentway">
                                        <span>月交</span>
                                    </label>
                                    <label class="answer">
                                        <input type="radio" name="paymentway" value="年交" data-required="paymentway">
                                        <span>年交</span>
                                    </label>
                                </p>
                            </li>
                        </ul>
                        <button type="submit" class="btn btn-trial">马上提交</button>
                    </div><!-- end .questionnaire -->
                </form>
            </div><!-- end .layer-main -->
        </div>
    </div>
    <!-- 重疾弹层 -->
    <div class="layer-box  hide" id="layer-disease">
        <div class="layer-content fadeIn">
        <span class="close"></span>
        <div class="banner-2">

        </div>
        <div class="title">
            更好呵护爱，2步订制保障方案
        </div>
        <div class="layer-main">
                <form id="ajax-disease" action="/index/update" method="post">
                    <input type="hidden" name="<?= Yii::$app->request->csrfParam; ?>" value="<?= Yii::$app->request->getCsrfToken(); ?>">
                    <input type="hidden" name="activityId" value="<?= $data['id']; ?>">

                    <div class="questionnaire">
                        <ul>
                            <li class="quest-list">
                                <h4>1、您期望的保障金额是？</h4>
                                <p class="answer-all">
                                    <label class="answer">
                                        <input type="radio" name="amount" value="5万" data-required="amount">
                                        <span>5万</span>
                                    </label>
                                    <label class="answer">
                                        <input type="radio" name="amount" value="10万" data-required="amount">
                                        <span>10万</span>
                                    </label>
                                    <label class="answer">
                                        <input type="radio" name="amount" value="15万" data-required="amount">
                                        <span>15万</span>
                                    </label>
                                    <label class="answer">
                                        <input type="radio" name="amount" value="20万" data-required="amount">
                                        <span>20万</span>
                                    </label>
                                </p>
                            </li>
                            <li class="quest-list">
                                <h4>2、您倾向哪种保障年限（保终身）？</h4>
                                <p class="answer-all">
                                    <label class="answer">
                                        <input type="radio" name="paymentway" value="月交" class="val-error" data-required="paymentway">
                                        <span>10年交</span>
                                    </label>
                                    <label class="answer">
                                        <input type="radio" name="paymentway" value="年交" data-required="paymentway">
                                        <span>20年交</span>
                                    </label>
                                </p>
                            </li>
                        </ul>
                        <button type="submit" class="btn btn-trial">马上提交</button>
                    </div><!-- end .questionnaire -->
                </form>
            </div><!-- end .layer-main -->
        </div>
    </div>
  <!--   结束弹层 -->
    <div class="layer-box hide" id="layer-end">
        <div class="layer-content fadeIn">
          <span class="close"></span>
          <div class="header">
            <div class="title">
              <img src="https://images.vrm.cn/2019/03/21/gou1.png" alt="">
                提交成功
            </div>
              <p>感谢您参与活动，后续大都会人寿专属客服将通过<i>95308</i>致电确认赠险生效事宜并提供产品保障方案，谢谢！</p>
              
              <div class="RS-btn">
                <span class="again-btn btn-trialYiwai">重新测算</span>
              </div>
            </div>
        </div><!--layer-content结束  -->
    </div>
    <!-- 投保须知 -->
    <div class="layer-box hide " id="layer-security">
        <div class="layer-content">
            <a href="javascript:;" class="close" title="关闭"></a>
            <div class="layer-title">
                <span>投保须知</span>
            </div>
            <!-- end .layer-title -->
            <div class="layer-main">
            <dl>
                <dd>您申请的是由中美联泰大都会人寿保险有限公司（以下简称“大都会人寿”）销售并承保的保险产品。请在购买前，认真阅读本投保须知。</dd>

                <dd>1、关于大都会人寿</dd>
                <dd>大都会人寿是由美国大都会集团下属公司和上海联和投资有限公司合资组建而成。凭借美国大都会集团在保险业的丰富经验以及上海联和投资有限公司对中国市场的深刻认识，大都会人寿致力于为中国消费者提供值得信赖和专业的保险方案大都会人寿注册地在上海，目前在上海、北京、天津、浙江、江苏、广东、四川、重庆、辽宁、湖北、福建（不含厦门）设有分支机构，如欲了解大都会人寿及其分支机构的更多信息,请登录
                </dd>
                <dd>
                    <a href="httdds://www.metlife.com.cn/about-us/disclosures/info_annouce.html">
                        httdds://www.metlife.com.cn/about-us/disclosures/info_annouce.html
                    </a>
                </dd>

                <dd>2、阅读条款</dd>

                <dd>请您不要将保险产品的广告、公告、招贴画等宣传材料视同为保险合同，应当要求销售人员向您提供相关保险产品的条款。请您认真阅读条款内容，重点关注保险责任、责任免除、投保人及被保险人权利和义务、免赔额或免赔率的计算、申请赔款的手续、退保相关约定、费用扣除、产品期限等内容。</dd>

                <dd>3、 为未成年子女选择保险产品时保险金额应适当 　如果您为未成年子女购买保险产品，因被保险人死亡给付的保险金总和应符合中国保监会的有关规定。其主要目的是为了保护未成年人权益，防止道德风险；同时，从整个家庭看，父母是家庭的主要经济来源和支柱，以父母为被保险人购买保险，可以使整个家庭获得更加全面的保险保障。
                </dd>

                <dd>4、 保险合同和发票</dd>

                <dd>网上投保为您提供电子保险合同，根据《中华人民共和国合同法》第十一条规定，数据电文是合法的合同表现形式，电子保险合同与纸质保险合同具有同等法律效力。如您需要纸质保单，请拨打客服热线：4008188168。</dd>

                <dd>5、 告知义务</dd>

                <dd>投保人和被保险人应就本公司提出的询问如实告知，否则本公司将按《保险法》相关规定处理。投保单中填写各项内容均属实，或有告知不实，大都会人寿有权解除保险合同，对于合同解除前发生的任何事故，大都会人寿不承担任何责任。</dd>

                <dd>6、 投保声明</dd>

                <dd>本人承诺投保人、被保人不是外国政要或国际组织高级管理人员。</dd>

                <dd>7、个人信息使用授权</dd>

                <dd>本人在此授权大都会人寿，继承人、受让人、关联方以及大都会人寿授权的第三方服务者在中国法律允许或要求的范围内，在中国境内外，从各种渠道收集与本保险申请有关的任何本人的个人资料，并同意大都会人寿在下列情况下收集、使用、存储、披露、传送或以其他的方式处理任何本人身份信息（“个人资料”）：
                    <br>（1）审核本申请书，履行可能订立的关于本申请书的合同，并/或提供其他相关产品和服务时；
                    <br>（2）遵守大都会人寿的合规计划时；
                    <br>（3）接受大都会人寿拟提供的其他产品和服务时；
                    <br>（4）大都会人寿因拟提供其他相关售后服务及其他金融产品和服务、进行直接促销及资料等处理需要而向其中国境内外任何第三方提供相关信息时。同时本人在此确认已经获得本人所指定的受益人和其他相关人员的同意，为上述目的向大都会人寿提供他们的个人信息资料。</dd>

                <dd>8、 您的隐私和信息安全 </dd>
                <dd>我们严格遵守现行的关于个人信息、数据及隐私保护的法律法规，采取充分的技术手段和制度管理，保护您提供给我们的个人信息、数据和隐私不受到非法的泄露或披露给未获授权的第三方。</dd>

                <dd>9、理赔服务</dd>

                <dd>A.理赔报案</dd>

                <dd>•保险事故发生后，投保人、被保险人或受益人应及时通知保险公司，或直接与我们的代理人取得联系</dd>
                <dd>•形式：您可以通过电话、传真或亲自上门等形式报案</dd>
                <dd>•报案内容：出险人的姓名、身份证号码、保险单号码、联系方式，事故经过（包括事故发生时间、地点、经过、原因，经治医院、治疗情况、目前状况等）；</dd>
                <dd>•公司理赔人员在接到理赔报案时，将了解保险事故详情，解答咨询并指导您理赔申请。</dd>

                <dd>B．理赔申请</dd>

                <dd>•待保险事故处理完毕，受益人应依据保险条款或理赔人员指导尽快备齐理赔所需资料，提起理赔申请；</dd>
                <dd>•您可以直接到公司办理理赔申请，也可以委托代理人代为办理；</dd>
                <dd>•《理赔申请书》应由受益人逐项如实填写并亲笔签名确认。</dd>

                <dd>理赔申请资料</dd>

                <dd>一般资料包括保险合同原件、身份证复印件、受益人银行存折复印件（后两项要求签名并注明理赔专用）；由于每位客户投保我公司的保险产品不尽相同，且保险事故类型也存在差异，您申请理赔时还所需的其他理赔资料，可依据保险条款或理赔人员指导，我公司在《理赔申请书》附件中有详细的书面指导。</dd>

                <dd>C．理赔审核 </dd>

                <dd>理赔时效：</dd>

                <dd>•申请资料齐全，事实清楚的一般理赔案件，我们会在五个工作日内结案</dd>
                <dd>•需调查的理赔案件（主要针对索赔金额较高的重大疾病、残疾、身故类等案件），理赔时效可能会超过五个工作日，但我们保证会在法定时效内及时结案，同时我们会主动与代理人或您进行沟通，以便使您了解案件的进展程度。</dd>

                <dd>D．结案通知 </dd>

                <dd>公司依据《理赔申请书》上标明的开户银行、户名、账号或提供的存折复印件等信息，将理赔款转入受益人的账户中。 如您有何疑问，请与公司理赔部门取得联系。</dd>

                <dd>9、咨询、投诉和建议：</dd>
                <dd>如果您需要咨询有关投保、退保、保全、理赔等保单服务或者进行维权投诉，或者发现假冒我公司名义的网站、网页或APP应用，以及与我司品牌、产品和服务有关的虚假信息或欺诈行为，您可以通过拨打我公司的客户服务热线4008188168，或者莅临我司办公地点。
                    <br>（点击
                    <a href="https://www.metlife.com.cn">https://www.metlife.com.cn</a>了解详情 ），与我们联系。
                </dd>
            </dl>
            </div>
            <!-- end .layer-main -->
        </div>
        <!-- end .layer-content -->
    </div>
    <!-- end #layer-security -->
    <div class="layer-box hide" id="layer-limit">
        <div class="layer-content" style="width: auto; height: auto;">
        <a href="javascript:;" class="closeBtn">×</a>
            本活动仅限广东／浙江／江苏／福建／重庆/上海/四川/北京/天津等区域参与，敬请谅解。
        </div>
    </div>
    <!--end 尾部引流弹层 -->
    <!--服务弹层-->
    <!-- <div class="layer-box hide" id="serviceAgreement">
        <div class="layer-content">
            <a href="javascript:;" class="closeBtn"></a>
            <div id="scroll-content">
            </div>
        </div>
    </div> -->
    <script type="text/javascript">
        var activityId = "<?= $data['id']; ?>";
        var corpId = "<?=\ Yii::$app->params['corpId'] ?>";
        var yinliuUserId = '<?= $get['yinliuUserId'] ? $get['yinliuUserId'] : null ?>';
        var yinliuActivityId = '<?= $get['yinliuActivityId'] ? $get['yinliuActivityId'] : null ?>';
        var yinliu_company_id = '<?= $get['yinliu_company_id'] ? $get['yinliu_company_id'] : null ?>';
    </script>
    <script src="//images.vrm.cn/assets/1_159_20190626/75bf0d470a84c58cbddba51345c1894f.js"></script>

    <script src="https://images.vrm.cn/2019/03/27/service.js"></script>
    <script src="https://images.vrm.cn/2019/03/27/service-bx.js"></script>
   <!--  推啊 -->
    <script type="text/javascript" src="//yun.tuisnake.com/h5-mami/log.js" id="send_log"></script>
    <!-- <script type="text/javascript" src="//images.vrm.cn/2019/05/20/service_juhepage_4-17.js<?='?v='.time()?>"></script> -->
    <?php $this->endBody() ?>
</body>

</html>
<?php $this->endPage() ?>