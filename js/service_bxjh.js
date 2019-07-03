  var $serviceAgreement = $("#layer-service");
  var serviceCon = '  <div class="layer-content">\n' +
    '    <a href="javascript:;" class="close"></a>\n' +
    '    <h1>服务协议</h1>\n' +
    '    <div class="scroll-content">\n' +
    '    <p>为明确各方的权利和义务，甲方（信息提供人/投保人/被保险人），乙方：【中国】及其关联方、授权方（广东百家投资咨询有限公司，以下简称：百家公司），本着平等互利的原则，就甲方同意乙方为提供与本网站平台推广的保险产品相关的服务进行个人信息的收集、使用、存储、披露、传送等活动达成服务协议。</p>\n' +
    '    <p>甲方在使用乙方提供的网站平台服务之前，请您务必审慎阅读、充分理解本协议，特别是隐私条款、免责条款，在提交过程中勾选<strong class="txt-underline">“我已经阅读并同意 《服务协议》”</strong>，即表示甲方确认对本协议全部条款含义已充分理解并完全接受。<strong class="txt-underline">阅读本协议的过程中，如果甲方不同意本协议或其中任何条款约定，应立即停止个人信息提交程序。</strong></p>\n' +
    '    <h2>一、服务内容与方式</h2>\n' +
    '    <p>1.1 服务内容：本网站仅提供保险产品的宣传推广以及个人信息的收集、存储、使用、分析、处理、传送、传输等服务，以最终实现由百家公司其关联方为甲方提供保险服务的目的。</p>\n' +
    '    <p>1.2 服务方式：甲方同意百家公司为甲方参与本网站平台推出的赠险等活动而收集、使用、存储甲方的个人信息，并将甲方个人信息披露、传送给百家公司其关联方，从而更好的由百家公司其关联方向甲方提供保险产品宣传推介、申请、合同订立与履行、售后等服务。</p>\n' +
    '    <h2>二、甲方的权利与义务</h2>\n' +
    '    <p>2.1  甲方自愿在本平台填写个人信息，并在提交成功之后有权享有乙方提供的服务。</p>\n' +
    '    <p>2.2  甲方在提交申请时需要填写合法有效的个人信息；甲方须保证所填写的个人信息和所提供的资料真实、准确、完整，对于因甲方提供的信息不真实、不准确或不完整导致的损失由甲方承担。</p>\n' +
    '    <p>2.3  甲方自愿提供个人信息并使用本网站平台提供的服务，确认以本网站要求的技术操作方式填写信息并自愿承担责任。</p>\n' +
    '    <h2>三、乙方的权利与义务</h2>\n' +
    '    <p>3.1  因以下情况没有正确执行甲方提交的指令，乙方不承担任何责任：</p>\n' +
    '    <p>（1）甲方未能按照网站平台的规则进行操作；</p>\n' +
    '    <p>（2）不可抗力或意外事件；</p>\n' +
    '    <p>（3）运营商等非乙方可控制原因导致的网络堵塞、中断；</p>\n' +
    '    <p>（4）其他乙方无过失的情况。</p>\n' +
    '    <p>3.２  乙方对甲方的个人信息负有保密义务，并保证乙方及必要第三方与乙方具有同等保密责任。但以下情况除外：</p>\n' +
    '    <p>（1）应国家相关法律法规的规定或政府部门的要求必须披露；</p>\n' +
    '    <p>（2）经甲方同意披露。</p>\n' +
    '    <h2>四、协议的效力</h2>\n' +
    '    <p>4.1  如本协议中的任何条款无论因何种原因完全或部分无效或不具有执行力，本协议的其余条款仍应有效并且有约束力，除非该其余条款或者本协议整体被法院的最终裁判认定无效。</p>\n' +
    '    <p>4.2  本协议自甲方完成提交其个人信息时起生效。</p>\n' +
    '    <h2>五、隐私条款</h2>\n' +
    '    <p>5.1  甲方同意其个人信息用于以下一项或多项用途：</p>\n' +
    '    <p>（1）由百家公司及其关联方对收集的甲方个人信息进行数据存储、分析与处理；</p>\n' +
    '    <p>（2）由百家公司将甲方的个人信息提供给百家公司及其关联方；</p>\n' +
    '    <p>（3）由百家公司及关联方向甲方提供保险产品及服务的销售、合同订立、履行及售后服务等保险经营服务；</p>\n' +
    '    <p>（4）应甲方的咨询由乙方与甲方联络（包括：短信、电话、邮件以及互联网等方式）；</p>\n' +
    '    <p>（5）向甲方发送有关优惠广告、最新推荐或促销优惠等内容；</p>\n' +
    '    <p>（6）向甲方推介其他可能感兴趣的金融产品。</p>\n' +
    '    <p>5.2  为保持数据的准确性，防止非法入侵及确保甲方个人信息的合法、合规使用，乙方采取了适当的硬件、电子及管理措施以保障甲方个人信息的保密性。</p>\n' +
    '    <p>5.3  百家公司收集甲方个人信息的内容包括：</p>\n' +
    '    <p>（1）个人身份信息：包括但不限于姓名、性别、年龄、出生日期、证件类型、证件号码、手机号码、联系地址、电子邮件等；</p>\n' +
    '    <p>（2）个人背景信息：包括但不限于职业、健康情况、兴趣爱好、家庭情况、收入情况等；</p>\n' +
    '    <p>（3）个人网络信息：使用Cookies、IP地址和其它技术方式收集甲方非个人化信息，以使乙方在甲方访问网站时可辨认其身份；</p>\n' +
    '    <p>（4）其他乙方为提供服务所需要的个人信息。</p>\n' +
    '    <p> 5.4  如甲方系未成年人应事先得到其监护人的同意，监护人应承担未成年人在本网站平台享受服务过程中隐私权保护的首要责任。</p>\n' +
    '    <p> 5.5  若经未成年人监护人同意，乙方可对未成年人个人信息进行收集，但乙方将会向监护人披露此未成年人个人信息，监护人的同意包括但不限于口头的、书面的或者其他形式。</p>\n' +
    '    <p> 5.6  甲方及其监护人应对己方所提供信息的真实性负责，如乙方无法从甲方所提供信息判断出甲方为未成年人，那么乙方则不承担保护未成年隐私权的责任。</p>\n' +
    '    <p> 5.7  某些服务需由百家公司的合作伙伴（包括但不限于提供相关技术服务商、信息服务商、邮寄公司、提供奖品公司等）提供或共同提供，为了向甲方提供此类服务，百家公司有必要将从百家公司获取的甲方个人信息与提供该服务的合作伙伴共享。</p>\n' +
    '    <p> 5.8  乙方及其合作伙伴承诺除为提供本协议约定之服务以外，不会将甲方的个人信息用于其他商业目的，也不会将甲方的个人信息泄露给任何无关第三方。<br>\n' +
    '  <strong class="txt-underline">乙方承诺采取严格的隐私政策， 尊重并保护甲方隐私， 请甲方仔细阅读本条款并了解； 本条款自本协议签署时生效， 具有独立法律效力， 不因协议未生效或无效而受影响。</strong></p>\n' +
    '    <h2>六、法律适用与争议解决</h2>\n' +
    '    <p>6.1  本协议的成立、生效、履行和解释，均适用中国人民共和国法律；法律无明文规定的，可适用通行的行业惯例。如本协议相关条款与中华人民共和国法律相抵触时，则这些条款将完全按法律规定重新解释，而其它条款则依旧保持对甲乙双方产生法律效力和影响。</p>\n' +
    '    <p>6.2  甲乙双方在履行本协议的过程中，如发生争议，应协商解决。协商不成的，双方均可向百家公司所在地有管辖权的人民法院起诉。</p>\n' +
    '    <h2>七、免责条款</h2>\n' +
    '    <p>7.1 乙方在以下情况下不承担责任，包括但不限于：</p>\n' +
    '    <p>（1）如甲方在网吧等公众场所的公用电脑或其他网络设备、他人电脑或其他网络设备登录本网站平台，须谨慎操作，由此造成的信息泄露损失乙方不承担责任。</p>\n' +
    '    <p>（2）如果甲方在共享环境下或在电脑被远程监控的情况下登录本网站平台，由此造成的信息泄露损失乙方不承担责任。</p>\n' +
    '    <p>（3）如因无法预见、无法避免且无法克服的不可抗力事件，导致乙方及其关联方、授权方在本协议项下的义务无法履行或无法按时履行，则不应视为违约，也无需为此承担任何违约责任。</p>\n' +
    '    <p>（4）如果甲方蓄意欺诈、不按照适用于甲方的本协议条款和条件履行合理谨慎义务或不遵守安全操作要求，由此造成的损失乙方及其关联方、授权方不承担责任。</p>\n' +
    '    <p>（5）对于受到网络堵塞、中断、计算机病毒、木马或其他恶意程序、黑客攻击所造成的损失。</p>\n' +
    '    <h2>八、本协议的更新</h2>\n' +
    '    <p>8.1  在本协议履行过程中，因国家法律法规变化及本网站平台运营需要，百家公司可根据情况对本服务协议进行修改。一旦本协议的内容发生变动，百家公司将通过平台公布最新的服务协议，不再向甲方作个别通知。如果甲方不同意乙方对本协议所做的修改，甲方有权停止使用乙方服务。如果甲方继续使用服务，则视为甲方接受百家公司对本协议所做的修改，并应遵照修改后的协议执行。</p>\n' +
    '    <h2>九、其他</h2>\n' +
    '    <p>9.1  本协议内容中以黑体、加粗、下划线、斜体等方式显著标识的条款，请甲方着重阅读。</p>\n' +
    '  </div>';
  '  </div>';

/*
百年人寿股份有限公司
北大方正人寿保险有限公司
中美联泰大都会人寿保险有限公司
华夏人寿保险股份有限公司
中国平安人寿保险股份有限公司
泰康人寿保险有限责任公司
阳光人寿保险股份有限公司
招商信诺人寿保险有限公司
中意人寿保险有限公司
中英人寿保险有限公司
中银三星人寿保险有限公司
太平人寿保险有限公司
*/

  var serviceCorp = "【百年人寿股份有限公司、北大方正人寿保险有限公司、中美联泰大都会人寿保险有限公司、华夏人寿保险股份有限公司、中国平安人寿保险股份有限公司、泰康人寿保险有限责任公司、阳光人寿保险股份有限公司、招商信诺人寿保险有限公司、中意人寿保险有限公司、中英人寿保险有限公司、中银三星人寿保险有限公司、太平人寿保险有限公司、合众人寿保险股份有限公司、富德生命人寿保险股份有限公司、中国人寿保险股份有限公司、中国人民保险集团股份有限公司】";
  var getCompanyUrl = window.location.href.split('.');
  var companyName;
  if(getCompanyUrl[1] === 'vrm') {
    companyName = "（广东万丈金数信息技术股份有限公司，以下简称“万丈金数”）";
    serviceCon = serviceCon.replace(/（广东百家投资咨询有限公司，以下简称：百家公司）/g, companyName);
    serviceCon = serviceCon.replace(/百家公司/g, "万丈金数");
  }
  serviceCon = serviceCon.replace(/【中国】/g, serviceCorp);
  $serviceAgreement.append(serviceCon);
