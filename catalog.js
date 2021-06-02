let buyButtons = document.querySelectorAll('.goods-button-buy');
let modalCart = document.querySelector('.modal-cart');
let closeModalCartButton = document.querySelector('.modal-cart-close');
let continueBuyButton = document.querySelector('.btn-link-continue');
let orderButton = document.querySelector('.btn-link-order');
let goodsAmountInCart = document.querySelector('.goods-count');

console.log(continueBuyButton);

function openModalCartHandler(buyButton) {
  buyButton.addEventListener('click', function () {
    modalCart.classList.remove('hidden');
    if (typeof +goodsAmountInCart.textContent === 'number') {
      goodsAmountInCart.textContent++;
    }
  });
}

for (let index = 0; index < buyButtons.length; index++) {
  let buyButton = buyButtons[index];
  openModalCartHandler(buyButton);
}

function closeModalCartHandler(element) {
  element.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalCart.classList.add('hidden');
  });
}

closeModalCartHandler(closeModalCartButton);
closeModalCartHandler(continueBuyButton);
closeModalCartHandler(orderButton);

// input-range
let priceInputMin = document.querySelector('.price-input-min');
let priceInputMax = document.querySelector('.price-input-max');
let priceRangeMin = document.querySelector('.price-range-min');
let priceRangeMax = document.querySelector('.price-range-max');

priceRangeMin.addEventListener('input', function () {
  let rangeValue = priceRangeMin.value;
  priceInputMin.value = rangeValue;
});
priceRangeMax.addEventListener('input', function () {
  let rangeValue = priceRangeMax.value;
  priceInputMax.value = rangeValue;
});
priceInputMin.addEventListener('input', function (evt) {
  evt.preventDefault();
  let inputValue = priceInputMin.value;
  priceRangeMin.value = inputValue;
});
priceInputMax.addEventListener('input', function (evt) {
  evt.preventDefault();
  let inputValue = priceInputMax.value;
  priceRangeMax.value = inputValue;
});

// prevent submit on enter
let catalogFilter = document.querySelector('.catalog-filter');
catalogFilter.addEventListener('keydown', function (evt) {
  if (evt.keyCode == 13) {
    evt.preventDefault();
    return false;
  }
});
