
function doc(id) {
	return document.getElementById(id);
}

function cs(cl) {
	return document.getElementsByClassName(cl);
}

function tgn(t) {
	return document.getElementsByTagName(t);
}

td = cs('d-td');

td_l = td.length;

for (i = 0; i < td_l; i++) {

td[i].addEventListener('mouseup', function(e) {

t = this.innerHTML;

switch (t) {

case 'Значение МЛА':
location.href = './html/MLA.html?value';
break;

case 'Любовь МЛА':
location.href = './html/MLA.html?love';
break;

case 'Работа МЛА':
location.href = './html/MLA.html?work';
break;

case 'Финансы МЛА':
location.href = './html/MLA.html?finances';
break;

case 'Здоровье МЛА':
location.href = './html/MLA.html?health';
break;

case 'Совет МЛА':
location.href = './html/MLA.html?tip';
break;

case 'Человек МЛА':
location.href = './html/MLA.html?man';
break;

case 'Карта дня МЛА':
location.href = './html/MLA.html?day-card';
break;




case 'Значение СТА':
location.href = './html/STA.html?value';
break;

case 'Любовь СТА':
location.href = './html/STA.html?love';
break;

case 'Работа СТА':
location.href = './html/STA.html?work';
break;

case 'Финансы СТА':
location.href = './html/STA.html?finances';
break;

case 'Здоровье СТА':
location.href = './html/STA.html?health';
break;

case 'Совет СТА':
location.href = './html/STA.html?tip';
break;

case 'Человек СТА':
location.href = './html/STA.html?man';
break;

case 'Карта дня СТА':
location.href = './html/STA.html?day-card';
break;

default:
alert(t+ "Нет таких значений!");

}

});

}




























