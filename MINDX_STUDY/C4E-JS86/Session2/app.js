// if(condition){
//     do something
// } else if (condition2) {
//     do something else
// } else {
//     do something else 2
// }
// // == so sanh du lieu, === so sanh ca du kieu ca kieu du lieu
// console.log(5>5 || 5 === "5");
// let x=5;
// let y=10;

// console.log(x=='5' && y==='10');
// console.log(x>='5' && y<10 || x>5 && y<6);
//-------------------------------------------------------------------------->

// let     n=Number(prompt('Can nang cua ban (kg): '));
// let     c=Number(prompt('Chieu cao cua ban (m): '));
// let     bmi= n/(c*c);
// if (bmi<18.5) {
//     console.log("Ban thieu can");
// } else if (bmi<=24.9){
//     console.log("Binh thuong");
// } else if (bmi<=29.9) {
//     console.log("Ban hoi beo");
// } else {console.log("Ban bi beo phi");}
//-------------------------------------------------------------------------->

// let g=Number(prompt("Input Grade (%): "));
//     g=g/100;
// if (g<0.2){
//     console.log("F");
// } else if (g<0.4) {
//     console.log("E");
// } else if (g<0.6) {
//     console.log("D");
// } else if (g<0.7) {
//     console.log("C");
// } else if (g<0.8) {
//     console.log("B");
// } else {
//     console.log("A");
// }
//-------------------------------------------------------------------------->

// let a=Number(prompt("Nhap a="));
// let b=Number(prompt("Nhap b="));
// let c=Number(prompt("Nhap c="));
// let d=b;
// if (a>d){
//     d=a;
// }
// if(c>d){
//     d=c;
// }
// console.log("Max= "+d);
//-------------------------------------------------------------------------->

// let a=Number(prompt("Nhap vao thang: "));
// switch(a) {
//     case 1: 
//     case 2:
//     case 3:
//         console.log("Mua xuan");
//         break;
//     case 4:
//     case 5:
//     case 6:
//         console.log("Mua he");
//         break;
//     case 7:
//     case 8:
//     case 9:
//         console.log("Mua thu");
//         break;    
//     case 10:
//     case 11:
//     case 12:
//         console.log("Mua dong");
//         break;
// }
// //-------------------------------------------------------------------------->

// let a=Number(prompt("Nhap vao thang: "));
// switch(a) {
//     case 1: 
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log("Thang co 31 ngay");
//         break;
//     case 2:
//         console.log("Thang co 28 ngay");
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log("Thang co 30 ngay");
//         break;
// }
// //-------------------------------------------------------------------------->

// let a= Number(prompt("Nhap a= "));
// let j=0;
//     i=0;
// if (a<0) {
//     console.log("a phai la so duong");
// } else {

// console.log("So chan la: ");
// while(i<=a) {
//     if (i%2==0) {
//         console.log(i);
//     }
//     i++;
// }
// console.log("So le la: ");
// while(j<=a) {
//     if (j%2!=0) {
//         console.log(j);
//     }
//     j++;
// }
// }
//-------------------------------------------------------------------------->

// let s=0;
// while (true){
//     let a=Number(prompt("Nhap so: "));  
//     if (a>=0) {
//         s=s+a;
//     } else{
//         console.log('Tong s= '+s);
//         break;    
//     }
// }
//-------------------------------------------------------------------------->

// let a=Number(prompt("Nhap a= "));
// let s=0;
// for (i=0;i<=a;i++) {
//     s+=i;
// }
// console.log(`Tong S= ${s}`);

//
// let n=Number(prompt("Nhap N="));
// let A=0;
// if (i>1) {
//     for (let i=2;i<=n;i++) {
//         A+=1/(i*(i-1));
//     }
//     console.log(`A= ${A}`);
// } else { 
//     console.log('Vo ly');
// }

//
let n=Number(prompt("Nhap N="));
let B=0;
for (let i=1; i<=n; i++) {
    let s=1;
    for (let j=1; j<=i; j++){
        s*=j;
    }
    B+=s;
}
console.log(`B= ${B}`);





