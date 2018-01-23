$(document).ready(function() {

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

  $('.exampleToggle').click(function(){
    // var parentClass = '.'+$(this).parent().attr('class');
    // console.log(parentClass+' .classNames');
    // $(parentClass+' .plusMinus').toggleClass('active');
    // $(parentClass+' .classNames').toggle();
    // $('.classNames').toggle();
    $('.plusMinus').toggleClass('active');
    $('.showHide').toggleClass('active');
    $('.example').toggle();
  });
  
});