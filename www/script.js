var icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    icon.src = "images/sun.png";
  } else {
    icon.src = "images/moon.png";
  }
};

firebase.database().ref("dark-theme").set({
  name: "Dark Theme",
  class: "simple website",
});
// console.log(firebase.database());

//  console.log(firebase.database().ref("dark-theme").get()); to see properties

// firebase
//   .database()
//   .ref("dark-theme")
//   .get()
//   .then(function (x) {
//     // if console.log x it gives an object with properties.
//     // we use if condition to handle errors
//     if (x.exists()) {
//       console.log(x.val());
//     } else {
//       console.log("no data");
//     }
//   });
