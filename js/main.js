var elButton = document.querySelector('.header__btn')
var elButtonenter = document.querySelector('.enter')
var elButtonexit = document.querySelector('.exit')
var elButtonbox = document.querySelector('.header__block')

elButton.addEventListener ('click', () => {
    elButtonenter.classList.toggle ("btn__enter__class")
    elButtonexit.classList.toggle ("btn__exit__class")
    elButtonbox.classList.toggle ("header__blockk")
})