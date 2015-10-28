function toggle (){
    var e = document.getElementById('inner');
    e.style.display == 'none' ? e.style.display = 'block' : e.style.display = 'none';
}


var menu = document.createElement('div');
var inner = document.createElement('div');
inner.id = 'inner';
inner.style.display = 'none';
inner.innerHTML = 'XXX';
menu.innerHTML = 'X';
menu.appendChild(inner);
menu.onclick = toggle;

document.body.appendChild(menu);