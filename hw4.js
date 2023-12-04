/************
 * N.B. The ghosts are SVGs, so it's 'fill', not 'color' you need to change
 *************/

// GET BY ID
const firstGhostRef = document.getElementById("first_ghost");
firstGhostRef.style.fill = "orange";

// GET BY CLASSNAME
const secondWaveRef = document.getElementsByClassName("second_wave");

for (let i=0; i <secondWaveRef.length; i++) {
    secondWaveRef[i].style.fill = "blue";
}
// GET AREA, DRILL DOWN using GET BY TAG NAME
const area51 = document.getElementById('area-51').getElementsByTagName('svg');
for (let i=0; i< area51.length; i++) {
    area51[i].style.fill = "green";
}
// querySelector nth-child
const querySelRef = document.querySelector("#area-51 svg:nth-child(3)")
querySelRef.style.strokeWidth = "15px";
querySelRef.style.stroke = "red";

// from the last child, select the div immediately above the ghost and make its border '5px dashed'
querySelRef.parentElement.style.border = "dashed 5px";
// querySelectorAll

const queryAllRef = document.querySelectorAll('#area-50 svg ');
for (let i = 0; i<queryAllRef.length; i++) {
    queryAllRef[i].style.fill = "red";
}