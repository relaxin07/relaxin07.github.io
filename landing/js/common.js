window.onload = function() {

  let headerTop = document.querySelector('.header__top-wrapper');
  let headerContainer = document.querySelector('.header__container');
  let headerContainerHeight = headerContainer.clientHeight;

  window.addEventListener('scroll' , () => {
    headerContainer.style.height = headerContainerHeight + 'px';
    if(document.documentElement.scrollTop > 0){
      headerTop.classList.add('fixed');
    }
    else{
      headerTop.classList.remove('fixed');
    }
  })

}