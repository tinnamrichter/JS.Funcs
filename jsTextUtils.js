'use strict';
var s = prompt('skriv et ord');

function first(s) {
    return s.charAt(s);
}
function last(s) {
    return s.charAt(s.length-1);
}
function middle(s) {
    return s.substring(1).slice(0, -1);
}

console.log(first(s), last(s), middle(s));