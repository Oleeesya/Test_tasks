
function validate(form_id, email) {
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var address = document.forms[form_id].elements[email].value;
    if (reg.test(address) == false) {
        alert('Введите корректный e-mail');
        return false;
    }
}

document.querySelector('#sort').onclick = mySort;
document.querySelector('#sort__age').onclick = mySortAge;

function mySort() {
    let nav = document.querySelector('#nav');
    for (let i = 0; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            console.log(+nav.children[i].getAttribute('data-price'));
            console.log(+nav.children[j].getAttribute('data-price'));
            if (+nav.children[i].getAttribute('data-price') > +nav.children[j].getAttribute('data-price')) {
                replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i]);
            }
        }
    }
}

function mySortAge() {
    let nav = document.querySelector('#nav');
    for (let i = 0; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            console.log(+nav.children[i].getAttribute('data-sort'));
            console.log(+nav.children[j].getAttribute('data-sort'));
            if (+nav.children[i].getAttribute('data-sort') > +nav.children[j].getAttribute('data-sort')) {
                replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i]);
            }
        }
    }
}

function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
        } else {
            $('.go-top').fadeOut(200);
        }
    });

    $('.go-top').click(function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 1500);
    })
});