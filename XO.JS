let turn="X"

function game (id)
{
    let item
    element=document.getElementById(id)
if (turn=="X"&& element.innerHTML=="")
{
    element.innerHTML="x"
    turn="O"
}
else if (turn=="O"&& element.innerHTML=="")
{
    element.innerHTML="O"
    turn="X"
}
}