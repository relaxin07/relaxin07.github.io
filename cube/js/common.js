window.onload = function() {
	class myCube{
		constructor(wrapper){
			this.wrapper = document.querySelector(wrapper);
			this.attrRow = null;
			this.attrItem = null;
			this.createCube(4,4);
			this.allColumn = document.querySelectorAll('.cube__item');
			this.allRow = document.querySelectorAll('.cube__row');
			this.allBtnRemove = document.querySelectorAll('.cube__remove');
			this.btnRemoveColumn = document.querySelector('.cube__remove-item');
			this.btnRemoveRow = document.querySelector('.cube__remove-row');
			this.btnAddColumn = document.querySelector('.cube__add-item');
			this.btnAddRow = document.querySelector('.cube__add-row');
			this.createAttrInDiv();
			this.coordsRemoveBtn();
			this.showBtn();
			this.hiddenBtn();
			this.addRow();
			this.addColumn();
			this.removeColumn();
			this.removeRow();
		}

		createElement(name  , classes , innerHtml = null , parents){  //Функция для создания элемента
			this.element = document.createElement(name);
			this.classAll = classes;
			this.wrapBlock = document.querySelectorAll(parents);
			if(typeof this.classAll === 'object'){
				for(let i = 0 ; i < this.classAll.length ; i++){
					this.element.classList.add(this.classAll[i]);
				}
			}
			else{
				this.element.classList.add(this.classAll);
			}
			this.element.innerHTML = innerHtml;
			for(let i = 0; i < this.wrapBlock.length; i++){
				this.wrapBlock[i].appendChild(this.element);
			}	
		}
		createCube(rows , cols){ 	// Отрисовываем куб
			this.createElement('div',['cube__remove','cube__remove-row'] ,"<span> <i class=\"fas fa-minus\"></i> </span>" , '.cube' );
			this.createElement('div',['cube__remove', 'cube__remove-item'] ,"<span> <i class=\"fas fa-minus\"></i> </span>" , '.cube' );
			this.createElement('div',['cube__add', 'cube__add-item'] ,"<span> <i class=\"fas fa-plus\"></i> </span>" ,'.cube');
			this.createElement('div',['cube__add', 'cube__add-row'] ,"<span> <i class=\"fas fa-plus\"></i> </span>",'.cube' );
			this.colsNumber = cols;
			this.rowsNumber = rows;
			for(let i = 0 ; i < this.colsNumber ; i++ ){
				this.createElement('div', 'cube__row',null,'.cube');
				for(let j = 0; j < this.rowsNumber ; j++){
					this.createElement('div', 'cube__item',null,'.cube__row');
				}
			}
		}
		createAttrInDiv(){ 	// Создаем атрибуты
			this.allRow.forEach(function(rowItem , i){
				rowItem.setAttribute('data-number', i);
				rowItem.childNodes.forEach(function(childList,j){
					childList.setAttribute('data-number',j);
				})
			})
		}
		attrRowAndCol(){  // Определяем атрибуты для кнопок удлаения
			this.wrapper.addEventListener('mouseover',(e) =>{
				if(e.target.classList.contains('cube__item')){
					this.attrItem = e.target.getAttribute('data-number');
					this.attrRow  = e.target.parentElement.getAttribute('data-number');
					this.btnRemoveColumn.setAttribute('data-number',this.attrItem);
					this.btnRemoveRow.setAttribute('data-number',this.attrRow);
				}
			})
		}
		coordsRemoveBtn(){ // координаты для кнопок удаления
			this.wrapper.addEventListener('mouseover',(e) =>{
				if(e.target.classList.contains('cube__item')){
					this.btnRemoveRow.style.top =  1 + e.target.parentElement.offsetTop + 'px';
					this.btnRemoveColumn.style.left = 2 + e.target.offsetLeft + 'px';
				}
			})
		}
		hiddenBtn(){	//прячем кнопки
			this.wrapper.addEventListener('mouseout',() =>{
				for(let i = 0; i < this.allBtnRemove.length; i++){
					this.allBtnRemove[i].classList.remove('active');
				}
			})
		}
		showBtn(){ // показываем кнопки
			this.wrapper.addEventListener('mouseover',(e) =>{
				this.attrRowAndCol();
				if(e.target.classList.contains('cube__add') || e.target.closest('.cube__add')){
					e.stopPropagation();
				}
				else{
					this.allRow.forEach( (item , i) =>{
						if(item.childNodes.length > 1){
							this.btnRemoveColumn.classList.add('active');
						}
						if(this.allRow.length > 1){
							this.btnRemoveRow.classList.add('active');
						}
					})
				}
			})
		}
		addRow(){ 	 // Добавляем ряд
			this.btnAddRow.addEventListener('click' , ()=>{
				this.wrapper.appendChild(this.allRow[0].cloneNode(true));
				this.allRow = document.querySelectorAll('.cube__row');
				this.allColumn = document.querySelectorAll('.cube__item');
				this.createAttrInDiv();
			})
		}
		addColumn(){	// Добавляем колонку
			this.btnAddColumn.addEventListener('click' , ()=>{
				this.allRow.forEach((item,i)=>{
					item.appendChild(this.allColumn[0].cloneNode(true));
				})
				this.allRow = document.querySelectorAll('.cube__row');
				this.allColumn = document.querySelectorAll('.cube__item');
				this.createAttrInDiv();
			})

		}
		removeColumn(){	// Удаляем колонку
			this.btnRemoveColumn.addEventListener('click', (e)=>{
				this.btnRemoveColumn.classList.remove('active');
				this.allColumn.forEach( (item) =>{
					if(this.btnRemoveColumn.getAttribute('data-number') == item.getAttribute('data-number') ){
						item.remove();
					}
				},true);
				this.createAttrInDiv();
				this.allRow = document.querySelectorAll('.cube__row');
				this.allColumn = document.querySelectorAll('.cube__item');
			})
			
		}
		removeRow(){ // Удаляем ряд
			this.btnRemoveRow.addEventListener('click', (e)=>{
				this.btnRemoveRow.classList.remove('active');
				this.allRow.forEach( (item) =>{
					if(this.btnRemoveRow.getAttribute('data-number') == item.getAttribute('data-number') ){
						item.remove();
					}
				},true);
				this.createAttrInDiv();
				this.allRow = document.querySelectorAll('.cube__row');
			})
		}
	}
	let cube = new myCube('.cube');
}