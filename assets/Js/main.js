addEventListener('load', init);

function click(){
    console.log('Diste click');
}
function mousemove(){
    console.log('Hiciste Mousemove');
}
function init() {
    document.getElementById ('nombre').addEventListener('click', click);
    document.getElementsByClassName ('contenido'),addEventListener('mousemove', mousemove)
}