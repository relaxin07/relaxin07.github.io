window.onload = function() {

  let headerTop = document.querySelector('.header__top');
  
  window.addEventListener('scroll' , () => {
    if(document.documentElement.scrollTop > 0){
      headerTop.classList.add('sticky');
    }
    else{
      headerTop.classList.remove('sticky');
    }
  })

}