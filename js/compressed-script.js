var buttonSearch=document.querySelector(".searching__button"),popup=document.querySelector(".searching-form"),loginArrival=popup.querySelector("[name=date-arrival]"),loginDeparture=popup.querySelector("[name=date-departure]"),people=popup.querySelector(".count__input"),form=popup.querySelector("form"),storage="",isStorageSupport=!0;try{storage=localStorage.getItem("loginArrival")}catch(e){isStorageSupport=!1}buttonSearch.addEventListener("click",function(e){e.preventDefault(),popup.classList.contains("searching-form--error")&&popup.classList.remove("searching-form--error"),popup.classList.toggle("searching-form--hide"),storage&&(loginArrival.value=storage)}),form.addEventListener("submit",function(e){loginArrival.value&&loginDeparture.value&&people.value?isStorageSupport&&localStorage.setItem("loginArrival",loginArrival.value):(e.preventDefault(),popup.classList.remove("searching-form--error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("searching-form--error"))});