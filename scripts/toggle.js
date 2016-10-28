$(function() {
  $.each($('.chart:not(.full.no-toggle)'), function(index, chart) {
    var graph = $(this).find('.andover').attr('class').replace(/(andover)[\s]/,'');
    if (index%2 == 0) {
      $(this).find('.exeter').hide();
      $(this).parent().find('.quotebox.'+ graph + ' .exeter').hide();
    }
    else {
      $(this).find('.andover').hide();
      $(this).parent().find('.quotebox.'+ graph + ' .andover').hide();
    }
  });
  $.each($('.toggle'), function(index, button) {
    if (index%2 == 0) {
      $(this).html("<a class='active' data-school='a'>Andover</a><a data-school='e'>Exeter</a>");
    }
    else {
      $(this).html("<a data-school='a'>Andover</a><a class='active' data-school='e'>Exeter</a>");
    }
  });
  $('.toggle a').on('click', function() {
    $(this).addClass('active');
    $(this).siblings().removeClass();
    var graph = $(this).parent().parent().find('.andover').attr('class').replace(/(andover|exeter)[\s]/,'');
    if ($(this).data('school') === 'a') {
      $(this).parent().parent().find('.exeter').hide();
      $(this).parent().parent().find('.andover').show();
      $(this).parent().parent().parent().find('.quotebox.'+ graph + ' .exeter').hide();
      $(this).parent().parent().parent().find('.quotebox.'+ graph + ' .andover').show();
    }
    else {
      $(this).parent().parent().find('.exeter').show();
      $(this).parent().parent().find('.andover').hide();
      $(this).parent().parent().parent().find('.quotebox.'+ graph + ' .andover').hide();
      $(this).parent().parent().parent().find('.quotebox.'+ graph + ' .exeter').show();
    }
  });
});
