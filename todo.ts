import inquirer from "inquirer";


let todods=[];
let condition=true;


while(condition)
{let ramadhan =await inquirer.prompt([{
    name:"todo",
    type : "input",
    message: "What you want to add in your todos?"

},
{
name:"addMore",
type : "confirm",
message: "Are you sure you want to add more todo?",
default:"false"
}

])

todods.push(ramadhan.todo);
condition = ramadhan.addMore
console.log(todods)

}