const products = $.products({
	cards:[
		{
			id: 1, 
			title: 'Яблоки',
			price: 20,
			img: 'https://ezsai.com/wp-content/uploads/2021/02/firefox_2018-07-10_07-50-11.png',
		},
		{
			id: 2,
			title: 'Груши',
			price: 36,
			img: 'https://cdn.tveda.ru/thumbs/942/9429839adce20718e184d3965ffd79cf/d141ef1e86924b2eb9a5eca650ae1060.jpg'
		},
		{
			id: 3,
			title: 'Персики',
			price: 27,
			img: 'https://st.depositphotos.com/1002351/1351/i/600/depositphotos_13513640-stock-photo-ripe-peach-fruit.jpg'
		}
	] 
})
 
const modal = $.modal({
	title: 'New Title',
	closable: true,
	content: ` 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
    `,
	width: 400,
	footerButtons: [{
			text: 'Ok',
			type: 'primary',
			handler() {
				console.log('Pramary BTN')
				modal.close()
			}
		},
		{
			text: 'Cancel',
			type: 'danger',
			handler() {
				modal.close()
			}
		}
	]
})

