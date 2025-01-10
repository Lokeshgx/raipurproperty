$(document).ready(function(){

  $('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('nav').toggleClass('nav-toggle');
  });

  $(window).on('scroll load',function(){
    $('.fa-bars').removeClass('fa-times');
    $('nav').removeClass('nav-toggle');
  });

  $('.count').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
    {
      duration: 500,
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum + '+');
      }
    });
  });

  $('.project').magnificPopup({
    delegate:'a',
    type:'image',
    gallery:{
      enabled:true
    }
  });


  jQuery('.whatsappBtn').on('click',function(event){
  jQuery('.whChatSec').toggleClass('wh-active');
  jQuery('.whTxt').toggleClass('downTooltip');
  });
  jQuery('.whtCls').on('click',function(){	
  jQuery('.whChatSec').removeClass('wh-active');	
  });
  if ($(window).width() > 993) {
  $.fn.scrollEnd = function(callback, timeout) {          
  jQuery(this).scroll(function(){
    var $this = jQuery(this);
    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }
     $this.data('scrollTimeout', setTimeout(callback,timeout));
    });
   };
   jQuery(window).scroll(function(){
    jQuery('.whatsappBtn').addClass('wh-close');
   });
   jQuery(window).scrollEnd(function(){
    jQuery('.whatsappBtn').removeClass('wh-close');
   }, 1800);
   };
});




