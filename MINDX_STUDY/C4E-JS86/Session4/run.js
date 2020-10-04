function giaithua(n) {
    let a=1;
    if (n==0) {
        a=1;
    } else {
        for (let i=1; i<=n; i++) {
            a=a*i;
        }
    }
    return a;
}
let gt=Number(prompt('Nhap n=?'));
console.log(giaithua(gt));

