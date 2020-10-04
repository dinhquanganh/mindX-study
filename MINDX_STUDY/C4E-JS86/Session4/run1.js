function unHide(arrNum) {
    let arrNew= [];
    for (let i=0; i<arrNum.length;i++) {
        if (arrNew.includes(arrNum[i]) == false) {
            arrNew.push(arrNum[i]);
        }
    }
    let objPer={};
    for (let i=0; i<arrNew.length; i++) {
        let a =arrNew[i];
        objPer[a]= arrNum.filter(x => x == a).length;
    }
    return objPer;
}

let inpNum= prompt('Enter number (,)').split(",").map(Number);
console.log(unHide(inpNum));


