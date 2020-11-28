'use strict'
// ###################### menu burger

let headerBurger = document.querySelector('.header__burger');
let headerMobile = document.querySelector('.header__mobile');
let body = document.querySelector('body');

headerBurger.onclick = function () {
	headerBurger.classList.toggle('active');
	headerMobile.classList.toggle('active');
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