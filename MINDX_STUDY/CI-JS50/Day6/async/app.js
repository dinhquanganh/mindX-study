// let myfunc = (a) => {
//   console.log(typeof a);
//   a();
// };

// let cb = () => {
//   console.log("I'm CB");
// };

// myfunc(cb);

// //Callback is function : Duoc truyen vao 1 func khac duoi dang tham so

// setTimeout(() => {
//   console.log("v1");
//   let x = 5;
//   x *= 2;
//   let kq = (x) => {
//     x += 5;
//     console.log(x);
//   };
//   kq(x);
// }, 2000);

const p = new Promise(
  // Excutor
  // pendng: khai bao nhung chua chay
  // resolve: da dc giai quyet, tra ve 1 ket qua cua promise
  // reject: chua dc giai quyet
  (resolve, reject) => {
    if (true) {
      resolve(5);
    } else {
      reject("Dit me may loi roi");
    }
  }
);
// use .then() khi resolve duoc chay
// p.then() cua resolve
// .catch() lay du lieu cua reject
p.then((data) => {
  // console.log(data * 10);
  return new Promise((resolve, reject) => {
    if (true) {
      resolve(5);
    } else {
      reject("Dit me may loi roi");
    }
  });
})
  .then((kq) => {
    // console.log(kq);
    return kq * 5;
  })
  .then((tiep) => {
    console.log(tiep);
  })
  .catch((error) => {
    console.log(error);
  });

// //fetch, read local file , xmlhttprequest
// buffer: dinh dang theo promise

// fetch("https://jsonplaceholder.typicode.com/todos/12")
//   .then((response) => response.json())
//   .then((json) => console.log(json));



// // cach goi truyen thong:
// // sort: orderBy("field")
// const post = db.collection("story").orderBy("id").get();
// post.then((snap) =>
//   snap.docs.forEach((e) => {
//     console.log(e.id, e.data());
//   })
// );

// // cach 2
// db.collection("story").onSnapshot((snap) => {
//   let data = snap.docChanges();
//   data.forEach((e) => {
//     console.log(e.id, e);
//   });
// });
