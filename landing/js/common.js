window.onload = function() {

  let headerTop = document.querySelector('.header__top-wrapper');
  
  window.addEventListener('scroll' , () => {
    if(document.documentElement.scrollTop > 0){
      headerTop.classList.add('fixed');
    }
    else{
      headerTop.classList.remove('fixed');
    }
  })

}