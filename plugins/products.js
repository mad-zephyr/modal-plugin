$.products = function (options) {

	const $product = _createProduct(options)  
	const product = {
		buy() {},
		delete(){}, 
	}

	$product.forEach(card => {
		document.querySelector('[data-products]').appendChild(card)
		card.style.margin = "0 5px"
	})

	return Object.assign(product, {})
 
}