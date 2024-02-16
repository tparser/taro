
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

ex = get.split('&');

v1 = ex[0]; // value, love, work, finances, health, tip, man, day-card 

v2 = ex[1]; // STA or MLA

v3 = ex[2]; // value

if(v1 == '?value') {

doc('info-light').innerHTML = v3 + '. Значение (Старший Аркан)';

}

if(v1 == '?love') {

doc('info-light').innerHTML = v3 + '. Любовь (Старший Аркан)';
}

if(v1 == '?work') {

doc('info-light').innerHTML = v3 + '. Работа (Старший Аркан)';
}

if(v1 == '?finances') {

doc('info-light').innerHTML = v3 + '. Финансы (Старший Аркан)';
}

if(v1 == '?health') {

doc('info-light').innerHTML = v3 + '. Здоровье (Старший Аркан)';
}

if(v1 == '?tip') {

doc('info-light').innerHTML = v3 + '. Совет (Старший Аркан)';
}

if(v1 == '?man') {

doc('info-light').innerHTML = v3 + '. Человек (Старший Аркан)';
}

if(v1 == '?day-card') {

doc('info-light').innerHTML = v3 + '. Карта дня (Старший Аркан)';
}

function ReadFile(filename, container) {

var Handler = function(Request) {

text = Request.responseText;

r = new RegExp("\r\n", "g");

t_new = text.replace(r, '<br>');

doc(container).innerHTML = t_new;

}

SendRequest("GET", filename, "", Handler);

}

filename = '../txt/sta-' + v1.slice(1) + '/' + v3 + '.txt';

container = 'view-light';

ReadFile(filename, container);













doc('main-light').addEventListener('mouseup', function(e) {

location.href = '../index.html';

});






















