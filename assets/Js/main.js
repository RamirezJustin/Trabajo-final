addEventListener('load', init);

function click(){
    console.log('Diste click');
}
function init() {
    document.getElementById ('nombre').addEventListener('click', click);
}