$(document).ready(function() {
  // typography font weight hovering functionality
  function removeWeightClass(element){
    var weights= ['bds-txt-light', 'bds-txt-regular', 'bds-txt-semi-bold', 'bds-txt-bold'];
    for (var i = 0; i < weights.length; i++) {
        element.removeClass(weights[i]);
    }
  }

  $('.typography-weights > span').hover(function(){
    var changedWeight=$(this).attr('class');
    $('.heading-prefix').html(changedWeight);
    /* change weight of headings */
    $('.typography-headings *').attr('class', changedWeight);
    /* change weight for subheader, body, and legal*/
    $('.typography-other > div').each(function(index) {
      if($(this).hasClass('bds-txt-light') || $(this).hasClass('bds-txt-regular') || $(this).hasClass('bds-txt-bold') || $(this).hasClass('bds-txt-semi-bold')){
        removeWeightClass($(this));
        $(this).addClass(changedWeight);
      }
      else
        $(this).addClass(changedWeight);
    });
  });

  //toggling examples
  $('.exampleToggle').click(function(){
    $('.plusMinus').toggleClass('active');
    $('.showHide').toggleClass('active');
    $('.example').toggle();
  });





  //check if on screen
  function isScrolledIntoView(elem){
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  function Utils() {}
  Utils.prototype = {
      constructor: Utils,
      isElementInView: function (element, fullyInView) {
          var pageTop = $(window).scrollTop();
          var pageBottom = pageTop + $(window).height();
          var elementTop = $(element).offset().top;
          var elementBottom = elementTop + $(element).height();

          if (fullyInView === true) {
              return ((pageTop < elementTop) && (pageBottom > elementBottom));
          } else {
              return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
          }
      }
  };
  var Utils = new Utils();

  function boldNavItem(ele){
    $('nav > ul li a').removeClass('bds-txt-bold');
    $('nav > ul li[data-section='+ele+'] a').addClass('bds-txt-bold');
  }

  function checkInView(){
    var in_view_typography = Utils.isElementInView($('#typography'), false);
    var in_view_colorPalette = Utils.isElementInView($('#colorPalette'), false);
    var in_view_spacing = Utils.isElementInView($('#spacing'), false);
    var in_view_breakpoints = Utils.isElementInView($('#breakpoints'), false);
    var in_view_buttons = Utils.isElementInView($('#buttons'), false);
    var in_view_utilities = Utils.isElementInView($('#utilities'), false);
    var in_view_hideshow= Utils.isElementInView($('#hideshow'), false);
    var in_view_flexbox = Utils.isElementInView($('#flexbox'), false);

    if (in_view_typography==true){ boldNavItem('typography')}
    if (in_view_colorPalette==true){ boldNavItem('colorPalette')}
    if (in_view_spacing==true){ boldNavItem('spacing')}
    if (in_view_breakpoints==true){ boldNavItem('breakpoints')}
    if (in_view_buttons==true){ boldNavItem('buttons')}
    if (in_view_utilities==true){ boldNavItem('utilities')}
    if (in_view_hideshow==true){ boldNavItem('hideshow')}
    if (in_view_flexbox==true){ boldNavItem('flexbox')}
  }

  document.addEventListener('scroll', function (event) {
    checkInView();
  }, true /*Capture event*/);

  checkInView();
  
});