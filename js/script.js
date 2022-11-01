var loginLink = document.querySelector(".login-link");
var modalLogin = document.querySelector(".modal-login");
var modalClose = modalLogin.querySelector(".modal-close");
var loginLogin = modalLogin.querySelector("[name=login]");
var modalMap = document.querySelector(".modal-map");
var mapClose = modalMap.querySelector(".modal-close");
var mapButton = document.querySelector(".map-button");

loginLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalLogin.classList.add("modal-show");
    loginLogin.focus();
});

modalClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalLogin.classList.remove("modal-show");
});

mapButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.remove("modal-show");
});
