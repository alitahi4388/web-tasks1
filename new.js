var students = ["ALI","Tayyab","Usman"];
students.splice(1,0,...["Zahid","Anwar"]);
console.log(...students);
function findALI(std)
{
    if(std == "ALI") return true;
    else return false;
}

let x=13;
let y=x;
x=50;
console.log(y);