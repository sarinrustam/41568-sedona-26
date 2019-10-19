var buttonSearch = document.querySelector('.searching__button');
var popup = document.querySelector('.searching-form');
var loginArrival = popup.querySelector('[name=date-arrival]');
var loginDeparture = popup.querySelector('[name=date-departure]');
var people = popup.querySelector('.count__input')
var form = popup.querySelector('form');
var storage = '';
var isStorageSupport = true;

try {
    storage = localStorage.getItem('loginArrival');
} catch (error) {
    isStorageSupport = false;
}

popup.classList.add('searching-form--hide');

buttonSearch.addEventListener('click', function(evt) {
    evt.preventDefault();
    if (popup.classList.contains('searching-form--error')) {
        popup.classList.remove('searching-form--error');
    }
    popup.classList.toggle('searching-form--hide');
    if (storage) {
        loginArrival.value = storage;
    }
});

form.addEventListener('submit', function(evt) {
    if (!loginArrival.value || !loginDeparture.value || !people.value) {
        evt.preventDefault();
        popup.classList.remove('searching-form--error');
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add('searching-form--error');
    } else {
        if (isStorageSupport) {
            localStorage.setItem('loginArrival', loginArrival.value);
        }
    }
})