// as const is block scoped I can use same varible name outside the function
const floorsCount = sessionStorage.getItem("floorsCount");
const liftsCount = sessionStorage.getItem("liftsCount");

const floorDiv = document.querySelector(".floor");

console.log(floorsCount, liftsCount);
createFloors(floorsCount, liftsCount);
function createFloors(floorsCount, liftsCount) {
  for (var i = 0; i < floorsCount; i++) {
    const floorDiv = document.createElement("div");
    floorDiv.classList.add("floor");
    document.body.appendChild(floorDiv);

    const floorBtnDiv = document.createElement("div");
    floorBtnDiv.classList.add("floor-btn");
    floorDiv.appendChild(floorBtnDiv);

    const button1 = document.createElement("button");
    const button2 = document.createElement("button2");
    button1.textContent = "Up";
    button2.textContent = "Down";
    //   floorBtnDiv.append(button1, button2);
    floorBtnDiv.appendChild(button1);
    floorBtnDiv.appendChild(button2);

    const liftDiv = document.createElement("div");
    liftDiv.classList.add("lift");
    floorDiv.appendChild(liftDiv);

    const floorNum = document.createElement("h2");
    floorNum.innerText = "floor num";
    floorNum.classList.add("floor-num");
    floorDiv.appendChild(floorNum);

    document.body.appendChild(floorDiv);
  }
}
