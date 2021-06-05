const db = firebase.firestore();
//this is how we get the actual data in our firestore database
db.collection("score")
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      console.log(doc.data());
    });
  });

const content = document.querySelector(".content");
let best = document.querySelector(".best1");
let current = document.querySelector(".current1");
const renderScore = (doc) => {
  content.setAttribute("data-id", doc.id);
  best.textContent = doc.data().best;
  current.textContent = doc.data().current;
};
// getting data
db.collection("score")
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      //passing the above function
      renderScore(doc);
    });
  });

//get button
const button = document.querySelector(".button");
button.addEventListener("click", (e) => {
  console.log(best);
  db.collection("score").doc("o1g8xxyV75n4aaWoOIZX").update({
    best: 1,
  });
});
