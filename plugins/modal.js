$.modal = function (options) {  
	const ANIMATION_SPEED = 300
	const $modal = _createModal(options)
	let closing = false
	let destroyed = false

	const modal = {
		open() {
			if (destroyed) {
				return console.log('Modal is Destroyed')
			}
			!closing && $modal.classList.add('open')
		},
		close() { 
			closing = true  
			$modal.classList.remove('open')
			$modal.classList.add('hide')
		
			setTimeout(() => {
				$modal.classList.remove('hide')
				closing = false
			}, ANIMATION_SPEED)
		}
	}

	const listener = event => {
		if (event.target.dataset.close) {
			modal.close() 
		}
	}

	$modal.addEventListener('click', listener)

	return Object.assign(modal, {
		destroy() {
			$modal.parentNode.removeChild($modal)
			$modal.removeEventListener('click', listener)
			destroyed = true 
		},
		setContent(html) {
			$modal.querySelector('[data-content]').innerHTML = html
		} 
	})
}
 
Element.prototype.appendAfter = function(element){
	element.parentNode.insertBefore(this, element.nextSibling)
}

function noop(){}

function _createModalFooter(buttons = []) {
	if (buttons.length === 0) {
		return document.createElement('div')
	}

	const wrap = document.createElement('div')
		wrap.classList.add('modal-footer')

		buttons.forEach(btn => {
			const $btn = document.createElement('button')

			$btn.textContent = btn.text
			$btn.classList.add(`btn-${btn.type || 'secondary'}`)
			$btn.onclick = btn.handler || noop

			wrap.appendChild($btn) 
		})

		return wrap
}

function _createModal(options) {
	const DEFAULT_WIDTH = 600
	const modal = document.createElement('div')
	modal.classList.add('vmodal')

	modal.insertAdjacentHTML('beforeend', `
		<div class="modal-overlay" data-close="true">
			<div class="modal-window" style="width: ${options.width || DEFAULT_WIDTH}px ">
				<div class="modal-header">
					<span class="modal-title">${options.title || 'Окно'}</span>
					${options.closable ? '<span class="modal-close" data-close="true" >&times;</span>' : ""}
				</div>
				<div class="modal-body" data-content>
					${options.content  || ''}
				</div> 
			</div>
		</div>
	`)

	const footer = _createModalFooter(options.footerButtons)
	footer.appendAfter(modal.querySelector('[data-content]'))
	document.body.appendChild(modal)
	return modal
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
				<img  style=" object-fit: cover;" src="${card.img}" class="card-img-top" alt="${card.title}">
				<div class="card-body">
					<h5 class="card-title" style="display: flex; justify-content: space-between">${card.title} <span>${card.price} Mdl</span></h5>
					<a href="#" class="btn btn-primary">Посмотреть Цену</a>
					<a href="#" class="btn btn-danger">Удалить</a>
				</div>
			`) 
			products.push($card)
	})

	console.log( products)
	return products
}