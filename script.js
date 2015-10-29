function toggle() {
    var e = document.getElementById('inner');
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
            key: 'dashboard',
            env: {
                aite: 'http://aite.app1/' + data.customerNumber + '/' + data.locale,
                site: 'http://site.app1/' + data.customerNumber + '/something/' + data.locale
            }
        },
        {
            app: 'Profile',
            key: 'profile',
            env: {
                aite: 'http://aite.app2/' + data.customerNumber + '/' + data.locale,
                site: 'http://site.app2/' + data.customerNumber + '/something/' + data.locale
            }
        },
        {
            app: 'Investment Advice',
            key: 'iap',
            env: {
                aite: 'http://aite.app3/' + data.customerNumber + '/' + data.locale,
                site: 'http://site.app3/' + data.customerNumber + '/something/' + data.locale
            }
        }
    ];

    var container = document.getElementById('inner');
    apps.forEach(function (element) {
        var href = function () {
            location.href = element.env[data.env];
        };
        var el = document.createElement('div');
        el.className = 'app ' + element.key;
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