var openingButtonForm = document.querySelector('.btn-write-us');
var closingButtonForm = document.querySelector('.close-btn-write-us');
var popupForm = document.querySelector('.write-us-popup');

if (popupForm) {
  openingButtonForm.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupForm.classList.add('modal-show');
  });

  closingButtonForm.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupForm.classList.remove('modal-show');
  });
}


var openingMap = document.querySelector('.map-popup-show');
var closingButtonMap = document.querySelector('.close-btn-map');
var popupMap = document.querySelector('.map-popup');

if (popupMap) {
  openingMap.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupMap.classList.add('modal-show');
  });

  closingButtonMap.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupMap.classList.remove('modal-show');
  });
}