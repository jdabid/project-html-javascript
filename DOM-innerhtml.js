console.log(`DOM-innerhtml.js`);

window.onload = function(){
    let d = document.querySelector('.rojo').innerHTML;
    let v = document.querySelector('.verde').innerHTML;
    console.log(`El valor del nodo rojo es ${d}`);
    console.log(`El valor del nodo verde es ${v}`);

    //document.querySelector('.rojo').innerHTML = `${d}`;
    document.querySelector('.rojo').innerHTML = `<b> ${d} <b\>`;
    document.querySelector('.verde').innerHTML = ``;
    document.querySelector('.verde').innerHTML = `Buenas tardes como le a ido`;
}