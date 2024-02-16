
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

xe = v3.split('/');

if(xe[0] == 'bowls') {

t1 = 'Чаши';

}

if(xe[0] == 'wands') {

t1 = 'Жезлы';

}

if(xe[0] == 'pentacles') {

t1 = 'Пентакли';

}

if(xe[0] == 'swords') {

t1 = 'Мечи';

}

t2 = decodeURI(xe[1]);

if(t2 == 'п') {

t2 = 'Паж';

}

if(t2 == 'р') {

t2 = 'Рыцарь';

}

if(t2 == 'кв') {

t2 = 'Королева';

}

if(t2 == 'к') {

t2 = 'Король';

}


if(v1 == '?value') {

doc('info-light').innerHTML = t2 + '. Значение (Младший Аркан) (' +  t1 + ')';

}

if(v1 == '?love') {

doc('info-light').innerHTML = t2 + '. Любовь (Младший Аркан)';
}

if(v1 == '?work') {

doc('info-light').innerHTML = t2 + '. Работа (Младший Аркан)';
}

if(v1 == '?finances') {

doc('info-light').innerHTML = t2 + '. Финансы (Младший Аркан)';
}

if(v1 == '?health') {

doc('info-light').innerHTML = t2 + '. Здоровье (Младший Аркан)';
}

if(v1 == '?tip') {

doc('info-light').innerHTML = t2 + '. Совет (Младший Аркан)';
}

if(v1 == '?man') {

doc('info-light').innerHTML = t2 + '. Человек (Младший Аркан)';
}

if(v1 == '?day-card') {

doc('info-light').innerHTML = t2 + '. Карта дня (Младший Аркан)';
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

filename = '../txt/mla-' + v1.slice(1) + '/' + v3 + '.txt';

container = 'view-light';

ReadFile(filename, container);













doc('main-light').addEventListener('mouseup', function(e) {

location.href = '../index.html';

});






















