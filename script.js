function toggle() {
    var e = document.getElementById('inner');
    //e.style.display == 'none' ? e.style.display = 'block' : e.style.display = 'none';
    e.className == 'open' ? e.className = 'close' : e.className = 'open';
}

var data = {
    env: 'aite',
    customerNumber: '1234567890',
    locale: 'da_DK'
};

function addApps(data) {
    var apps = [
        {
            app: 'Dashboard',
            env: {
                aite: 'http://aite.app1/' + data.customerNumber + '/' + data.locale,
                site: 'http://site.app1/' + data.customerNumber + '/something/' + data.locale
            },
            icon: 'url("icons/finance-and-business5.svg")'
        },
        {
            app: 'Profile',
            env: {
                aite: 'http://aite.app2/' + data.customerNumber + '/' + data.locale,
                site: 'http://site.app2/' + data.customerNumber + '/something/' + data.locale
            },
            icon: 'url("icons/businessman277.svg")'
        },
        {
            app: 'Investment Advice',
            env: {
                aite: 'http://aite.app3/' + data.customerNumber + '/' + data.locale,
                site: 'http://site.app3/' + data.customerNumber + '/something/' + data.locale
            },
            icon: 'url("icons/chart1.svg")'
        }
    ];

    var container = document.getElementById('inner');
    apps.forEach(function (element) {
        var href = function () {
            location.href = element.env[data.env];
        };
        var el = document.createElement('div');
        el.style.backgroundImage = element.icon;
        el.className = 'app';
        el.onclick = href;
        el.innerHTML = element.app;
        el.style.backgroundImage = element.icon;
        container.appendChild(el);
    })


}


var menu = document.createElement('div');
menu.id = 'menu';
var inner = document.createElement('div');
inner.id = 'inner';
inner.className = 'close';
//inner.style.display = 'none';
menu.appendChild(inner);
menu.onclick = toggle;
document.body.appendChild(menu);
addApps(data);