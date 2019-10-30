class MyCube{
	constructor(wrapper , countRows , countCols){
		this.createCube(wrapper,countRows,countCols);
		this.myThis = this;
	}
	createCube(wrapper ,countRows, countCols){ 	// Отрисовываем куб
		this.wrapper = document.querySelector(wrapper);
		this.btnRemoveRows = this.createElement('div',['cube__remove','cube__remove-row'] ,"<span>-</span>" , '.cube' );
		this.btnRemoveCols = this.createElement('div',['cube__remove', 'cube__remove-item'] ,"<span>-</span>" , '.cube' );
		this.btnAddCols = this.createElement('div',['cube__add', 'cube__add-item'] ,"<span>+</span>",'.cube');
		this.btnAddRows = this.createElement('div',['cube__add', 'cube__add-row'] ,"<span>+</span>",'.cube' );
		this.allRows = [];
		this.allCols = [];
		
		for(let i = 0 ; i < countRows ; i++ ){
			this.allRows.push(this.createElement('div', 'cube__row',null,'.cube'));
			for(let j = 0; j < countCols ; j++){
				this.allCols.push(this.createElement('div', 'cube__item',null,'.cube__row'));
			}
		}
		this.marginTopCols = parseInt(getComputedStyle(this.allCols[0],true).marginTop);
		this.paddingWrapper = parseInt(getComputedStyle(this.wrapper,true).paddingLeft);

		this.createAttrInRowsAndCols();
		this.wrapper.addEventListener('mouseover', this.showBtn.bind(this));
		this.wrapper.addEventListener('mouseover', this.setAttrInBtnRemoveColsRow.bind(this));
		this.btnAddRows.addEventListener('click', this.addRow.bind(this , this.createAttrInRowsAndCols.bind(this)));
		this.btnAddCols.addEventListener('click', this.addCol.bind(this));
		this.btnRemoveCols.addEventListener('click', this.removeCols.bind(this));
		this.btnRemoveRows.addEventListener('click', this.removeRows.bind(this));
		this.wrapper.addEventListener('mouseout',  this.hiddenBtn.bind(this));
		this.wrapper.addEventListener('mouseover', this.setCoordinatesForBtnRemoveColsRows.bind(this));
	}
	createAttrInRowsAndCols(){ 	// Создаем атрибуты
		for(let i = 0; i < this.allRows.length; i++){
			this.allRows[i].setAttribute('data-number',i);
			for(let j =0; j < this.allRows[i].childNodes.length; j++){
				this.allRows[i].childNodes[j].setAttribute('data-number',j);
			}
		}
	}

	hiddenBtn(){	//прячем кнопки
		this.btnRemoveRows.classList.remove('active');
		this.btnRemoveCols.classList.remove('active');
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
		return this.element;
	}

	showBtn(){ // показываем кнопки
		if(event.target.classList.contains('cube__add') || event.target.closest('.cube__add')){
			event.stopPropagation();
		}
		else{
			this.allRows.forEach( (item , i) =>{
				if(item.childNodes.length > 1){
					this.btnRemoveCols.classList.add('active');
				}
				if(this.allRows.length > 1){
					this.btnRemoveRows.classList.add('active');
				}
			})
		}
	}
	setAttrInBtnRemoveColsRow(){  // Определяем атрибуты для кнопок удлаения
		if(event.target.classList.contains('cube__item')){
			this.attrCol = event.target.getAttribute('data-number');
			this.attrRow  = event.target.parentElement.getAttribute('data-number');
			this.btnRemoveCols.setAttribute('data-number',this.attrCol);
			this.btnRemoveRows.setAttribute('data-number',this.attrRow);
		}
	}
	setCoordinatesForBtnRemoveColsRows(){ // координаты для кнопок удаления
		if(event.target.classList.contains('cube__item')){
			this.btnRemoveRows.style.top = this.marginTopCols + event.target.parentElement.offsetTop + 'px';
			this.btnRemoveCols.style.left = this.paddingWrapper + event.target.offsetLeft + 'px';
		}
	}
	addRow(){ 	// Добавляем ряд
		this.allRows.push(this.wrapper.appendChild(this.allRows[0].cloneNode(true)));
		for(let i = 0; i<this.allRows[0].childElementCount;i++){
			this.allCols.push(this.allCols[i].cloneNode(true));
		}
		this.createAttrInRowsAndCols();
	}
	addCol(){	// Добавляем колонку
		for(let i = 0 ; i < this.allRows.length; i++){
			let cols = this.allRows[i].appendChild(this.allCols[0].cloneNode(true));
			this.allCols.push(cols);
		}
		this.createAttrInRowsAndCols();
	}
	removeCols(){	// Удаляем колонку
		this.btnRemoveCols.classList.remove('active');
		for(let i=0; i<this.allRows.length;i++){
			for(let j = 0; j < this.allRows[i].childNodes.length ; j++){
				if(this.btnRemoveCols.getAttribute('data-number') == this.allRows[i].childNodes[j].getAttribute('data-number')){
					let colsRemove = this.allRows[i].childNodes[j];
					colsRemove.remove();
					let index = this.allRows.indexOf(colsRemove);
					this.allCols.splice(index,1);			
				}
			}
		}
		this.createAttrInRowsAndCols();
	}
	removeRows(){ // Удаляем ряд
		this.btnRemoveRows.classList.remove('active');
		this.allRows.forEach( (item) =>{
			if(this.btnRemoveRows.getAttribute('data-number') == item.getAttribute('data-number') ){
				item.remove();
				let index = this.allRows.indexOf(item);
				this.allRows.splice(index,1);
			}
		},true);
		this.createAttrInRowsAndCols();
	}
}
let cube = new MyCube('.cube' , 4, 4);