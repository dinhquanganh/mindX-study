////Array
const rdArr= [1,2,3,4,5];
// const rdBrr= [1,4,"akali",true,[],03];
// length, index
// console.log(rdArr.length);
// console.log(rdArr[2]);
// for (i=0;i<rdArr.length;i++) {
//     console.log(rdArr[i]);
// }
// console.log(rdArr==rdBrr);
// create
// let lNumber=Number(prompt('Nhap vi tri can them?'));
// let st=prompt('Nhap du lieu muon them');
// for (i=rdArr.length; i>lNumber-1;i--) {
//     rdArr[i]=rdArr[i-1];
// }
// rdArr[lNumber-1]=st;

// rdArr.splice(lNumber-1,0,st);

// for (i=0;i<rdArr.length;i++) {
//     console.log(rdArr[i]);
// }

const todoList=['Do homework','Feed the cat','Sleep','Play Valorant'];
console.log(todoList);
let kt=true;
while (kt) {
    let inputST=prompt('Input letters (C/R/U/D/E)?');
    if (inputST=='c' || inputST=='C') {
        let inp=prompt('New create?');
        todoList.push(inp);
        console.log(todoList);
    } else if (inputST=='r' || inputST=='R') {
        console.log(todoList);
    } else if (inputST=='u' || inputST=='U') {
        let inp=Number(prompt('Update localtion?'));
        let st= prompt('Content?');
        todoList[inp-1]=st;
        console.log(todoList);
    } else if (inputST=='d' || inputST=='D') {
        let inp=Number(prompt('Delete localtion?'));
        todoList.splice(inp-1,1);
        console.log(todoList);
    } else if (inputST=='e' || inputST=='E') {
        kt=false;
    } else {
        console.log("Invalid");
    }
}

