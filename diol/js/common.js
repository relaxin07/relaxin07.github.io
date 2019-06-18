$(function(){

  $('.counter__plus').on('click' , function(e){
    e.preventDefault;
    var inp = $(this).closest('.product__count').find('input');
    var count = parseInt(inp.val()) + 1;
    inp.val(count + ' шт.');
  })
  $('.counter__minus').on('click' , function(e){
    e.preventDefault;
    var inp = $(this).closest('.product__count').find('input');
    var count = parseInt(inp.val()) -1;
    if(count < 0 ){
      return false;
    }
    inp.val(count + ' шт.');
  })

  var heightCount = 0;
  
  $('.product__name').each(function(){
    var prodHeight = $(this).height();
    if(prodHeight > heightCount){
      heightCount = prodHeight;
    }
  })
  $('.product__name').height(heightCount);
  heightCount = 0;
  $('.product__text').each(function(){
    var prodHeight = $(this).height();
    if(prodHeight > heightCount){
      heightCount = prodHeight;
    }
  })
  $('.product__text').height(heightCount);

  $('.checkbox__item label').click(function(){
    $('.checkbox__item label').parent('.checkbox__item').find('input').prop('checked' , false);
 });

})