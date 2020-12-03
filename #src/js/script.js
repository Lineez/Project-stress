'use strict'
// ###################### menu burger

let menuBurger = document.querySelector('.menu__burger');
let menuMobile = document.querySelector('.menu__mobile');
let body = document.querySelector('body');

menuBurger.onclick = function () {
	menuBurger.classList.toggle('active');
	menuMobile.classList.toggle('active');
	// убираем прокрутку body при открытом меню
	body.classList.toggle("lock");
}


const tabBtns = document.querySelectorAll('.tab__btn');
const tabContents = document.querySelectorAll('.tab__body');


tabBtns[0].classList.add('active');
tabContents[0].classList.add('active');

tabBtns.forEach((el, key) => {
	el.addEventListener('click', () => {
		tabBtns.forEach(tab => {
			tab.classList.remove('active');
		});
		tabContents.forEach(body => {
			body.classList.remove('active');
		});
		el.classList.add('active');
		tabContents[key].classList.add('active');
	})
});

const faqBtns = document.querySelectorAll('.faq__btn');
const faqContent = document.querySelectorAll('.faq__body');

faqBtns[1].classList.add('active');
faqContent[1].classList.add('active');

faqBtns.forEach((el, key) => {
	el.addEventListener('click', () => {
		if (el.classList.contains('active')) {
			el.classList.remove('active');
			faqContent[key].classList.remove('active');
		} else {
			faqBtns.forEach(tab => {
				tab.classList.remove('active');
			});

			faqContent.forEach(body => {
				body.classList.remove('active');
			});

			el.classList.add('active');
			faqContent[key].classList.add('active');
		}
	})
})


// ####################### form
let toOrder = document.querySelectorAll('.to-order');
let formBlur = document.querySelector('.form-blur');
let formClose = document.querySelector('.form-container__close');
let formSection = document.querySelectorAll('.form__section');
let formBtn = document.querySelectorAll('.form__btn');
let formLink = document.querySelectorAll('.form__link');

// открыть окно заказа
toOrder.forEach((item) => {
	item.addEventListener('click', function () {
		formBlur.classList.add('active');
		body.classList.add('lock');

		formSection.forEach((item, index) => {
			item.classList.remove('active');
			formSection[0].classList.add('active');
		})
	})
})

// переключение вкладок формы вперед
formBtn.forEach((el, key) => {
	el.addEventListener('click', () => {
		formSection.forEach(section => {
			section.classList.remove('active');
		})
		formSection[key + 1].classList.add('active');
	})
})


// переключение вкладок формы назад
formLink.forEach((el, key) => {
	el.addEventListener('click', () => {
		formSection.forEach(section => {
			section.classList.remove('active');
		})
		formSection[key].classList.add('active');
	})
})

// закрыть окно заказа
formClose.addEventListener('click', function () {
	formBlur.classList.remove('active');
	body.classList.remove('lock');
})



// количество товара
let formCardPrice = document.querySelector('.form__card-price');
let formCulonPrice = document.querySelector('.form__culon-price');
let formCounter = document.querySelector('.form__counter');
// значение для отправки
let inputCounter = document.querySelector('.form__counter-input');
let formPlus = document.querySelector('.form__plus');
let formMinus = document.querySelector('.form__minus');
let formValue = document.querySelector('.form__value');
// значение для отправки
let formValueInput = document.querySelector('.form__value-input');
let inputCard = document.querySelector('#card');
let inputCulon = document.querySelector('#culon');


// обработка чисел для первого окна формы
// начальная цена "card"
inputCard.addEventListener('click', function () {
	if (inputCard.checked) {
		formCounter.textContent = '1';
		inputCounter.value = 1;

		formValue.textContent = formCardPrice.textContent;
		formValueInput.value = formCardPrice.textContent;
	}
})

// начальная цена "culon"
inputCulon.addEventListener('click', function () {
	if (inputCulon.checked) {
		formCounter.textContent = '1';
		inputCounter.value = 1;

		formValue.textContent = formCulonPrice.textContent;
		formValueInput.value = formCulonPrice.textContent;
	}
})

// увеличение количества
formPlus.addEventListener('click', function () {
	let cardPrice = +formCardPrice.textContent;
	let culonPrice = +formCulonPrice.textContent;

	if (inputCard.checked) {
		formCounter.textContent++;
		inputCounter.value++;

		formValue.textContent = (formValue.textContent * 1) + cardPrice;
		formValueInput.value = formValue.textContent;
	} else if (inputCulon.checked) {
		formCounter.textContent++;
		inputCounter.value++;

		formValue.textContent = (formValue.textContent * 1) + culonPrice;
		formValueInput.value = formValue.textContent;
	}
})

// уменьшение количества
formMinus.addEventListener('click', function () {
	let cardPrice = +formCardPrice.textContent;
	let culonPrice = +formCulonPrice.textContent;

	if (inputCard.checked) {
		if (formCounter.textContent != 0) {
			formCounter.textContent--;
			inputCounter.value--;

			formValue.textContent = (formValue.textContent * 1) - cardPrice;
			formValueInput.value = formValue.textContent;
		}
	} else if (inputCulon.checked) {
		if (formCounter.textContent != 0) {
			formCounter.textContent--;
			inputCounter.value--;

			formValue.textContent = (formValue.textContent * 1) - culonPrice;
			formValueInput.value = formValue.textContent;
		}
	}
})


// Плавный переход по якорям (работает)

let anchors = document.querySelectorAll('.scroll-to');
//выбираем все ссылки к якорю на странице
let V = 0.08;
// скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)

for (let anchor of anchors) {
	
	anchor.addEventListener('click', function (e) { //по клику на ссылку
		// Проверка мобильного меню
		if (menuBurger.classList.contains('active') && menuMobile.classList.contains('active')) {
				menuBurger.classList.remove('active');
				menuMobile.classList.remove('active');
				body.classList.remove("lock");
		}

		e.preventDefault() //отменяем стандартное поведение
		const blockID = anchor.getAttribute('href');

		let w = window.pageYOffset, // производим прокрутка прокрутка
			hash = this.href.replace(/[^#]*(.*)/, blockID); // к id элемента, к которому нужно перейти
		let t = document.querySelector(hash).getBoundingClientRect().top, // отступ от окна браузера до id
			start = null;
		requestAnimationFrame(step); // подробнее про функцию анимации [developer.mozilla.org]
		function step(time) {
			if (start === null) start = time;
			let progress = time - start,
				r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
			window.scrollTo(0, r);
			if (r != w + t) {
				requestAnimationFrame(step)
			} else {
				location.hash = hash // URL с хэшем
			}
		}
	}, false);
}