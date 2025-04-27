const div5 = document.getElementById ("div5");
document.addEventListener ('keydown', function (event) {
    if (event.key === 'a') {
        div5.style.backgroundColor = "pink";
    }
    else if  (event.key === 's') {
        div5.style.backgroundColor = "orange";
    }
    else if (event.key === 'd') {
        div5.style.backgroundColor = "skyblue";
    }
})

let div6;
function crearElemento() {
    div6 = document.createElement('div');
    div6.style.width = '200px';
    div6.style.height = '200px';
    div6.style.backgroundColor = 'white';
    document.body.appendChild(div6);
}
crearElemento();
document.addEventListener('keydown', function (event) {
    if (event.key === 'q') {
        div6.style.backgroundColor = "purple";
    }
    else if (event.key === 'w') {
        div6.style.backgroundColor = "grey";
    }
    else if  (event.key === 'e') {
        div6.style.backgroundColor = "brown";
    }
});