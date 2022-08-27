let turn="X"
let title=document.querySelector(".title")
square=[]
function work_done(num1,num2,num3)
{
title.innerHTML=square[num1]+" "+"wins"
setTimeout("location.reload(true);", 2000);
}
function Win()
{
for (i=1;i<10;i++)
{
    square[i]=document.getElementById("item"+i).innerHTML
}
if (square[1]==square[2]&&square[2]==square[3] && square[3]!='')
{
    work_done(1,2,3)
}
else if (square[4]==square[5]&&square[5]==square[6] && square[6]!='')
{
    work_done(4,5,6)
}
else if (square[7]==square[8]&&square[8]==square[9] && square[9]!='')
{
    work_done(7,8,9)
}
else if (square[1]==square[4]&&square[4]==square[7] && square[1]!='')
{
    work_done(1,4,7)
}
else if (square[2]==square[5]&&square[5]==square[8] && square[2]!='')
{
    work_done(2,5,8)
}
else if (square[3]==square[6]&&square[6]==square[9] && square[9]!='')
{
    work_done(3,6,9)
}
else if (square[1]==square[5]&&square[5]==square[9] && square[9]!='')
{
    work_done(1,5,9)
}
else if (square[3]==square[5]&&square[5]==square[7] && square[3]!='')
{
    work_done(3,5,7)
}
}

function game (id)
{
    let item
    element=document.getElementById(id)
if (turn=="X"&& element.innerHTML=="")
{
    element.innerHTML="x"
    turn="O"
    title.innerHTML="O Turn"
}
else if (turn=="O"&& element.innerHTML=="")
{
    element.innerHTML="O"
    turn="X"
    title.innerHTML="X Turn"
}
Win()
}