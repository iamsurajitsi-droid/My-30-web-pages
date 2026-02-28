// let gridObj = {
//   one: {
//     day: 1,
//     name: "Drum Set",
//     devlopment: "Done",
//   },
//   two: {
//     day: 2,
//     name: "Clock",
//     devlopment: "Done",
//   },
// };


let gridObj = [
  { Day: 1, name: "Drum Set", path: "pages/dayOne/index.html" },
  { Day: 2, name: "Analog Clock", path: "pages/dayTwo/index.html" },
  { Day: 3, name: "CSS Variables", path: "pages/dayThree/index.html" },
  { Day: 4, name: "Array Cardio P1", path: "pages/dayFour/index.html" },
  { Day: 5, name: "Panel Gallery", path: "pages/dayFive/index.html" },
];

let container = document.querySelector(".container");

function addPlay() {
  gridObj.forEach((obj) => {
    container.insertAdjacentHTML(
      "beforeend",
      `
        <div class="key" id="" onclick="window.location.href='${obj.path}'">
        <p class="Day">Day ${obj.Day}</p>
        <p class="name">${obj.name}</p>
      </div>
      `,
    );
  });
}

addPlay();
