function play(a) {
    return Math.floor(Math.random()*a+1);
}

a = Number(prompt('hvor mange sider er der?'));
console.log(play(a));