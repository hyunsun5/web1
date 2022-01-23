const togglebtn = document.querySelector('.navbar__togglebtn');
togglebtn.addEventListener('click', function() {
    document.querySelector('.navbar__menu').style.display = "flex";
    document.querySelector('.navbar__icons').style.display = "flex";
});