$(document).ready(function () {

  $('.tgl').before('<span><font color=red>more »</font></span>');

  $('.tgl').css('display', 'none')

  $('span', '#ajuda').click(function () {

      $(this).next().slideToggle('slow')

          .siblings('.tgl:visible').slideToggle('fast');

      $(this).toggleText('more »', '« less')

          .siblings('span').next('.tgl:visible').prev()

          .toggleText('more »', '« less')

  });

})