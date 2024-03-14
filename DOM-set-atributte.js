console.log(`DOM-set-atributte`);

window.onload = function(){
    let misLI = document.getElementsByTagName('li');
    console.log(`cantidad de LI = ${misLI.length}`);
    let misLU = document.getElementById('ull');
    console.log(`el tipo de LU es = ${misLU.nodeType}`);
}