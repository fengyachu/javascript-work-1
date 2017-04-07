var boxes = document.querySelectorAll(".box");

boxes[0].style.backgroundColor = "green";
boxes[1].style.backgroundColor = "purple";
boxes[2].style.backgroundColor = "#191919";
boxes[3].style.backgroundColor = "blanchedalmond";
boxes[4].style.backgroundColor = "default";


var leftMargin = [0,0,0,0,0];
var topMargin = [0,0,0,0,0];
var moveAmount = 5;
var i=1;

function boxClicked0() {
    console.log("Hey, box cliicked");
    
    leftMargin[0] += moveAmount;

    boxes[0].style.marginLeft = leftMargin[0] + "px";
    // boxes[0].style.marginTop = topMargin + "px"
}

boxes[0].addEventListener("click", boxClicked0);
console.log(boxes[0]);


function boxClicked1() {
    console.log("Hey, box cliicked");
    
    leftMargin[1] += moveAmount;

    boxes[1].style.marginLeft = 2*leftMargin[1] + "px";
    // boxes[0].style.marginTop = topMargin + "px"
}

boxes[1].addEventListener("click", boxClicked1);
console.log(boxes[1]);


function boxClicked2() {
    console.log("Hey, box cliicked");
    
    leftMargin[2] += moveAmount;

    boxes[2].style.marginLeft = 3*leftMargin[2] + "px";
    // boxes[0].style.marginTop = topMargin + "px"
}

boxes[2].addEventListener("click", boxClicked2);
console.log(boxes[2]);


function boxClicked3() {
    console.log("Hey, box cliicked");
    
    leftMargin[3] += moveAmount;

    boxes[3].style.marginLeft = 4*leftMargin[3] + "px";
    // boxes[0].style.marginTop = topMargin + "px"
}

boxes[3].addEventListener("dblclick", boxClicked3);
console.log(boxes[3]);

function boxClicked4() {
    console.log("Hey, box cliicked");
    
    topMargin[4] += moveAmount;

    boxes[4].style.marginTop = 5*topMargin[4] + "px";
    // boxes[0].style.marginTop = topMargin + "px"
}

boxes[4].addEventListener("click", boxClicked4);
console.log(boxes[4]);
