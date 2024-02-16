
function doc(id) {
	return document.getElementById(id);
}

function cs(cl) {
	return document.getElementsByClassName(cl);
}

function tgn(t) {
	return document.getElementsByTagName(t);
}


function doc(id) {
	return document.getElementById(id);
}

function cs(cl) {
	return document.getElementsByClassName(cl);
}

function tgn(t) {
	return document.getElementsByTagName(t);
}

var get = window.location.search;

if(get == '?value') {

doc('sta').innerHTML = 'Значение (Старший Аркан)';

}

if(get == '?love') {

doc('sta').innerHTML = 'Любовь (Старший Аркан)';

}

if(get == '?work') {

doc('sta').innerHTML = 'Работа (Старший Аркан)';

}

if(get == '?finances') {

doc('sta').innerHTML = 'Финансы (Старший Аркан)';

}

if(get == '?health') {

doc('sta').innerHTML = 'Здоровье (Старший Аркан)';

}

if(get == '?tip') {

doc('sta').innerHTML = 'Совет (Старший Аркан)';

}

if(get == '?man') {

doc('sta').innerHTML = 'Человек (Старший Аркан)';

}

if(get == '?day-card') {

doc('sta').innerHTML = 'Карта дня (Старший Аркан)';

}

td = tgn('td');

td_l = td.length;

for (i = 0; i < td_l; i++) {

td[i].addEventListener('mouseup', function(e) {

t = this.innerHTML;

location.href = '../html/STA-view.html' + get + '&2&' + t;


});

}

doc('main').addEventListener('mouseup', function(e) {

location.href = '../index.html';

});






















