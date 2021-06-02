// modal-control
let modalWrite = document.querySelector('.modal-write');
let openModalWriteButton = document.querySelector('.btn-link-write');
let closeModalWriteButton = document.querySelector('.modal-write-close');
let submitModalWriteButton = document.querySelector('.btn-link-submit');

console.log(closeModalWriteButton);

openModalWriteButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalWrite.classList.remove('hidden');
});

function closeModalWriteHandler(element) {
  element.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalWrite.classList.add('hidden');
  });
}

closeModalWriteHandler(closeModalWriteButton);
closeModalWriteHandler(submitModalWriteButton);

// slider-control
let sliderPrevious = document.querySelector('.slider-left');
let sliderNext = document.querySelector('.slider-right');
let sliders = document.querySelectorAll('.catalog-slider');
let sliderDots = document.querySelectorAll('.slider-dot');

sliderNext.addEventListener('click', function () {
  let i = 0;
  while (i < sliders.length) {
    let slider = sliders[i];
    let sliderDot = sliderDots[i];
    if (slider.classList.contains('catalog-slider-active')) {
      slider.classList.remove('catalog-slider-active');
      sliderDot.classList.remove('slider-dot-active');
      i++;
      if (i === sliders.length) {
        i = 0;
      }
      sliders[i].classList.add('catalog-slider-active');
      sliderDots[i].classList.add('slider-dot-active');
    }
    i++;
  }
});

sliderPrevious.addEventListener('click', function () {
  let i = sliders.length - 1;
  while (i >= 0) {
    let slider = sliders[i];
    if (slider.classList.contains('catalog-slider-active')) {
      slider.classList.remove('catalog-slider-active');
      i--;
      if (i < 0) {
        i = sliders.length - 1;
      }
      sliders[i].classList.add('catalog-slider-active');
    }
    i--;
  }
});

// tab-control
let serviceTabButtons = document.querySelectorAll('.services-link');
let serviceTabs = document.querySelectorAll('.services-tab');
let servicesOverlay = document.querySelector('.services-overlay');
let bcgArray = [
  'url(img/delivery-bcg.png) no-repeat right bottom -100px',
  'url(img/garanty-bcg.png) no-repeat right bottom -100px',
  'url(img/credit-bcg.png) no-repeat right bottom -100px',
];

function controlTabsHandler(tabControlButton, tabItem, bcgItem) {
  tabControlButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    for (let index = 0; index < serviceTabs.length; index++) {
      serviceTabs[index].classList.remove('services-tab-active');
      serviceTabButtons[index].classList.remove('active-services-link');
    }
    tabControlButton.classList.add('active-services-link');
    tabItem.classList.add('services-tab-active');
    servicesOverlay.style.background = bcgItem;
  });
}

for (let index = 0; index < serviceTabs.length; index++) {
  controlTabsHandler(
    serviceTabButtons[index],
    serviceTabs[index],
    bcgArray[index]
  );
}
