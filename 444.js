let x={value:10};
let y=x;
x.value=20;
onslotchange.log(y);

var students = ["ALI","Tayyab","Usman"];
students.splice(1,0,...["Zahid","Anwar"]);
console.log(...students);
function findALI(std)
{
    if(std == "ALI") return true;
    else return false;
}
