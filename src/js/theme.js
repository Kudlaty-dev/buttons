import '../scss/main.scss';
console.log('Hello theme')

var el = document.querySelector('.theme');
var listener = el.addEventListener('click', changer);
function changer () {
    console.log ('Klikłeś')
    document.documentElement.style.setProperty('--header-color', 'hotpink');
}


/*
function getButton () {
    var btn = document.querySelector(".theme");
}

function changeTheme () {
    var chng = getButton.addEventListener("click", console.log('Hi'));
}
*/
//var listener = changeTheme.addEventListener('click', document.documentElement.style.setProperty('--header-color', 'blue'));

/*document.querySelector('.theme').addEventListener('click', console.log(Hi));*/