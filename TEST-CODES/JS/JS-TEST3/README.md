IN PARENT.HTML -->

document.addEventListener('click',function(e) {
var elem = e.target;
if(elem && elem.id == "testclick"){
alert("teszt");
}
});
