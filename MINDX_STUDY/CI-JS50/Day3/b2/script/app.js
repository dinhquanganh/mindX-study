import Student from "./student.js";
import Gv from "./gv.js";
import ClassN from "./classN.js";

let listStudent = new Student('Pastetu','CNTT',24);
let listGv = new Gv('None','ThacSi');
let arrStudent=['Quang','Tuan','Hoang','Linh'];
let listClassN = new ClassN('Pascal',arrStudent,'None');
console.log(listClassN);
console.log(listGv);
console.log(listStudent);