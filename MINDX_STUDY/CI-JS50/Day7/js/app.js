// thao tac voi collection:   firebase.firestore().collection("ten collection")

// //Them add()
// // ex:   firebase.firestore().collection("story").add({content: 'he lo world',title:'chao',auhor:'noob'});
// firebase.firestore().collection("story").add({content: 'he lo world',title:'chao',auhor:'qa'});
// firebase.firestore().collection("story").add({content: 'thang ngu',title:'???',auhor:'thang'});
// firebase.firestore().collection("story").add({content: 'lanh vl',title:'thac mac gi??',auhor:'none'});
// firebase.firestore().collection("story").add({content: 'noob',title:'pro',auhor:'paeu'});

// //sua 1 document update()
// firebase
//   .firestore()
//   .collection("story")
//   .doc("ApRnOvFUkNmEpYWaP4MN")
//   .update({
//     author: "Pastetu",
//     content: "wtf??????????????????",
//     title: "khok",
//     dateModified: new Date().toISOString().split("T").join(" "),
//   });

// //xoa 1 document delete()
// firebase.firestore().collection("story").doc("ApRnOvFUkNmEpYWaP4MN").delete();
// //lay ra 1 document
// async function getData() {
//   let result = await firebase
//     .firestore()
//     .collection("story")
//     .doc("6iCSrjEE4iVAzkiJT0Lg")
//     .get();
//   console.log(result.data());
// }

// // getData();

// (async function () {
//   let result = await firebase
//     .firestore()
//     .collection("story")
//     .doc("6iCSrjEE4iVAzkiJT0Lg")
//     .get();
//   console.log(result.data());
// })();

// them nhieu => k dc
// update: maphash, updateChild

//lay ra nhieu:
(async () => {
  let result;
  result = await firebase.firestore().collection("story").get();
  //   console.log(
  //     "End: ",
  //     result.docs.map((doc) => {
  //       let data = doc.data();
  //       data.id = doc.id;
  //       return data
  //     })
  //   );
  console.log(result.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
})();

// // lay data theo dieu kien:

// (async () => {
//   let result = await firebase
//     .firestore()
//     .collection("story")
//     .where("title", "==", "haha")
//     .get();
//   console.log(result.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
// })();

// // xoa tat ca:

// (async () => {
//   let result = await firebase.firestore().collection("story").get();

//   for (let doc of result.docs) {
//     firebase.firestore().collection("story").doc(doc.id).delete();
//   }
// })();

// .ref...path()
