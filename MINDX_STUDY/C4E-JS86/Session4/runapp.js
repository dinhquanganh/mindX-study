const phonelist = [
    {
        name: 'Quang Anh',
        phone: '0898624885'
    },
    {
        name: 'Hoang',
        phone: '0987777962'
    }
]

let inputStr= prompt('Input C/R/U/D?');
if (inputStr=='c' || inputStr=='C') {
    let inpName= prompt('Input name?');
    let inpPhone= prompt('Input phone number?');
    let addObj= {};
    addObj.name= inpName;
    addObj.phone= inpPhone;
    phonelist.push(addObj);
} else if (inputStr=='r' || inputStr=='R') {
    console.log(phonelist);  
} else if (inputStr=='u' || inputStr=='U') {
    let inpName=prompt('Input name need update?');
    for (let i=0; i<phonelist.length; i++) {
        let ck=false;
        if (phonelist[i].name==inpName) {
            phonelist[i].phone = prompt('Input new Number?');
            ck=true;
            break;
        }
        if (ck=== false) {
            console.log("User doesn't exist");
        } else {
            console.log(phonelist);
        } 
    }
} else if
console.log(phonelist);
