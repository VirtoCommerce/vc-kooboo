
jQuery(function($){
	$.datepicker.regional['zh-CN'] = {"Name":"zh-CN","closeText":"Close","prevText":"Prev","nextText":"Next","currentText":"Today","monthNames":["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""],"monthNamesShort":["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""],"dayNames":["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],"dayNamesShort":["周日","周一","周二","周三","周四","周五","周六"],"dayNamesMin":["日","一","二","三","四","五","六"],"dateFormat":"yy/mm/d","firstDay":0,"isRTL":false};
	$.datepicker.setDefaults($.datepicker.regional['zh-CN']);
});