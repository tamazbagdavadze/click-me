(function () {
    'use strict';

    var cnt = document.createElement('div');
    cnt.className = 'container';

    var circle = document.createElement('div');
    circle.className = 'circle';
    cnt.appendChild(circle.cloneNode(true));

    function randomHexColor() {
        return "#" + Math.random().toString(16).slice(2, 8);
    }

    function onClick(e) {
        e.stopPropagation();
        var el = e.currentTarget;
        if (el.className != 'container') {
            console.log('not container!');
            return;
        }
        addChildren(el);

        document.title = document.getElementsByClassName('circle').length + ' circles';
    }

    function addChildren(div) {

        div.children.length && div.removeChild(div.children[0]);

        for (let i = 0; i < 4; i++) {
            let newDiv = cnt.cloneNode(true);
            newDiv.children[0].style.backgroundColor = randomHexColor();
            newDiv.addEventListener('click', onClick);
            div.appendChild(newDiv);
        }

        div.removeEventListener('click', onClick);
    }

    addChildren(document.getElementById('main'));

})();
