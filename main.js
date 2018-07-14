'use strict';

let  createNode = function (element) {
    return document.createElement(element);
}

let append = function (parent, el) {
    return parent.appendChild(el);
}