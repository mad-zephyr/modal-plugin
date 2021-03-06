$.products = function (options) {

	const $product = _createProduct(options)  
	const product = {
		buy() {

		},
		delete() {}, 
	}

	const listener = event => {
		if (event.target.dataset.btn === 'price'){

			const card = event.target.parentNode.parentNode

			console.log(card.querySelector('.card-title'))
 
			const img = card.querySelector('img').getAttribute('src')
			const title = card.querySelector('.card-title') 

			// console.log(title)
			// modal.setContent(`
			// 	<div>${console.log(this.products)}</div>
			// `)
			
			modal.open()

			console.log('Price')
			
		} else if (event.target.dataset.btn === 'delete') {
			console.log('Delete')
		}
	}

	$product.forEach(card => {
		document.querySelector('[data-products]').appendChild(card)
		card.style.margin = "0 5px"

		card.addEventListener('click', listener)
	})
 
	return Object.assign(product, {})
 
}

function _createProduct(options) {

	const products = []

	if (options.length === 0) {
		return document.createElement('div')
	}

	options.cards.forEach(card => { 
		const $card = document.createElement('div')
			$card.classList.add('card')
			$card.style.width = "18rem"
			$card.insertAdjacentHTML('beforeend', `
				<img  style=" object-fit: cover;" src="${card.img}" class="card-img-top" alt="${card.title}" data-img="${card.img}">
				<div class="card-body">
					<h5 class="card-title" style="display: flex; justify-content: space-between" data-title="${card.title}">${card.title} <span cla>${card.price} Mdl</span></h5>
					<a href="#" class="btn btn-primary" data-btn="price" >Подробнее</a>
					<a href="#" class="btn btn-danger" data-btn="delete" >Удалить</a>
				</div>
			`) 
			products.push($card)
	})

	console.log(products)
	return products
}