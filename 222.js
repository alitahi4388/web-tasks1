var students = ["ALI","Tayyab","Usman"];
//let searchstudents = students.find(findALI);
students.sort();
console.log(students[4]);
function findALI(std)
{
    if(std == "ALI") return true;
    else 
    return false;
}