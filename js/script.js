let buttonSearch = document.querySelector('.searching__button');
let popup = document.querySelector('.searching-form');
let loginArrival = popup.querySelector('[name=date-arrival]');
let loginDeparture = popup.querySelector('[name=date-departure]');
let people = popup.querySelector('.count__input')
let form = popup.querySelector('form');
let storage = "";
let isStorageSupport = true;

try {
    storage = localStorage.getItem('loginArrival');
} catch (error) {
    isStorageSupport = false;
}


// popup.classList.add('searching-form--hide');

buttonSearch.addEventListener('click', function(evt) {
    evt.preventDefault();
    if (popup.classList.contains('searching-form--error')) {
        popup.classList.remove('searching-form--error');
    }
    popup.classList.toggle('searching-form--hide');
    if (storage) {
        loginArrival.value = storage;
        // loginDeparture.focus();
    } else {
        // loginArrival.focus();
    }

    // loginArrival.focus();
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