
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

doc('mla').innerHTML = 'Значение (Младший Аркан)';

}

if(get == '?love') {

doc('mla').innerHTML = 'Любовь (Младший Аркан)';

}

if(get == '?work') {

doc('mla').innerHTML = 'Работа (Младший Аркан)';

}

if(get == '?finances') {

doc('mla').innerHTML = 'Финансы (Младший Аркан)';

}

if(get == '?health') {

doc('mla').innerHTML = 'Здоровье (Младший Аркан)';

}

if(get == '?tip') {

doc('mla').innerHTML = 'Совет (Младший Аркан)';

}

if(get == '?man') {

doc('mla').innerHTML = 'Человек (Младший Аркан)';

}

if(get == '?day-card') {

doc('mla').innerHTML = 'Карта дня (Младший Аркан)';

}

td = tgn('td');

td_l = td.length;

for (i = 0; i < td_l; i++) {

td[i].addEventListener('mouseup', function(e) {

t = this.innerHTML;

t = t.toLowerCase();

a = this.getAttribute('data');

location.href = '../html/MLA-view.html' + get + '&1&' + a + '/' + t;


});

}

doc('main').addEventListener('mouseup', function(e) {

location.href = '../index.html';

});




















