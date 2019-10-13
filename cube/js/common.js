window.onload = function() {
	let wrapper = document.querySelector('.cube');
	function createCube(params1  , params2){ 					//отрисовываем айтемы для куба.
		let rowsNumber = params1;
		let itemNumber = params2;

		let removeBtnLeft = document.createElement('div'); 		// кнопка удаления слева
		removeBtnLeft.classList.add('cube__remove' , 'cube__remove-row');
		removeBtnLeft.innerHTML = " <span> <i class=\"fas fa-minus\"></i> </span>";
		wrapper.appendChild(removeBtnLeft);

		let removeBtnBottom = document.createElement('div'); 	// кнопка удаления сверху
		removeBtnBottom.classList.add('cube__remove' , 'cube__remove-item');
		removeBtnBottom.innerHTML = " <span> <i class=\"fas fa-minus\"></i> </span>";
		wrapper.appendChild(removeBtnBottom);

		let addBtnRight = document.createElement('div'); 		// кнопка добавления справа
		addBtnRight.classList.add('cube__add' , 'cube__add-item');
		addBtnRight.innerHTML = " <span> <i class=\"fas fa-plus\"></i> </span>";
		wrapper.appendChild(addBtnRight);

		let addBtnBottom = document.createElement('div');		 // кнопка добавления снизу
		addBtnBottom.classList.add('cube__add' , 'cube__add-row');
		addBtnBottom.innerHTML = " <span> <i class=\"fas fa-plus\"></i> </span>";
		wrapper.appendChild(addBtnBottom);
		
		for(let i = 0 ; i < rowsNumber; i++){

			let rowsDiv = document.createElement('div');
			rowsDiv.classList.add('cube__row');
			wrapper.appendChild(rowsDiv);

			for(let j = 0 ; j < itemNumber; j++){
				let itemDiv = document.createElement('div');
				itemDiv.classList.add('cube__item');
				rowsDiv.appendChild(itemDiv);
			} 
			
		}
	}
	createCube(4,4);

	function createAttrItem(){ 										// создаем атрибуты для блоков
		let myItem = document.querySelectorAll('.cube__row');
		myItem.forEach(function(rowItem , i){
			rowItem.setAttribute('data-number', i);
			let childItem = rowItem.childNodes;
			childItem.forEach(function(childList,j){
				childList.setAttribute('data-number',j);
			})

		})
	}
	createAttrItem();

	function removeBtn(){											// скрываем кнопки удаления .
		let allBtn =  document.querySelectorAll('.cube__remove ');
		allBtn.forEach(function(allBtnItem){
			allBtnItem.classList.remove('active')
		})
	}

	function hoverBtn(){
		let boxItem = document.querySelectorAll('.cube__item');
		boxItem.forEach(function(item){
			item.addEventListener('mouseover', function(){       	//записываем атрибут в кнопку удаления по наведению на блок
				let itemAttr = item.getAttribute('data-number'); 	// по атрибутам будем удалять ряд и стобик.
				let removeTop = document.querySelector('.cube__remove-item');
				let allRow = document.querySelectorAll('.cube__row');
				removeTop.setAttribute('data-number' , itemAttr );
				allRow.forEach(function(allRowItem){           		
					if(allRowItem.childNodes.length > 1){			//  скрываем кнопку если меньше 1 ряда.
						removeTop.classList.add('active');
					}
					else{
						removeTop.classList.remove('active');
					}
				})
				
				removeTop.style.left =  2+ (itemAttr * 71) + (itemAttr * 1) +'px';  // данные css для кнопки удаления столбцов.
				let rowAttr = this.parentNode.getAttribute('data-number');
				
				let removeLeft = document.querySelector('.cube__remove-row');
				if(allRow.length > 1){ 									//  скрываем кнопку если меньше 1 ряда.
					removeLeft.classList.add('active');
				}
				else{
					removeLeft.classList.remove('active');
				}
				removeLeft.setAttribute('data-number', rowAttr);
				removeLeft.style.top =  2+ (rowAttr * 71) + (rowAttr * 1) +'px'; // данные css для кнопки удаления рядов.
			})
			
		})
	}
	hoverBtn();

	function outMouse(){    //функция для скрытия кнопок
		wrapper.addEventListener('mouseleave',function(e){
			removeBtn();
		})
	}
	outMouse();

	let removeRow = document.querySelectorAll('.cube__remove-row');		// удаление строки и колонки

	removeRow.forEach(function(item ){
		item.addEventListener('click' , function(){
			this.classList.remove('active');
			rowAttr = this.getAttribute('data-number');
			let allRow = document.querySelectorAll('.cube__row');
			allRow.forEach(function(itemRow , i){
				if(rowAttr == itemRow.getAttribute('data-number')){
					itemRow.remove();
				}
			})
			createAttrItem();
			hoverBtn();
		})
	})

	let removeItem = document.querySelectorAll('.cube__remove-item');

	removeItem.forEach(function(item){
		item.addEventListener('click' , function(){
			this.classList.remove('active');
			let removeAttribute = this.getAttribute('data-number');
			let allDiv = document.querySelectorAll('.cube__item');
			allDiv.forEach(function(itemDiv){
				if(itemDiv.getAttribute('data-number') == removeAttribute  ){
					itemDiv.remove();
				}
			})
			createAttrItem();
			hoverBtn();

		})
	})

	let addRow = document.querySelectorAll('.cube__add-row'); 			//Добавление строки и колонки 
	addRow.forEach(function(item){	
		item.addEventListener('click' , function(){
			let newRow = document.querySelector('.cube__row').cloneNode(true);
			wrapper.appendChild(newRow);
			createAttrItem();
			hoverBtn();
		})
	})

	let addItem = document.querySelector('.cube__add-item');			
	addItem.addEventListener('click', function(){
		let myRow = document.querySelectorAll('.cube__row');
		myRow.forEach(function(thisRow,i){
			let myItem = document.querySelector('.cube__item').cloneNode(true);
			thisRow.appendChild(myItem);
			createAttrItem();
			hoverBtn();
		})

	})

}