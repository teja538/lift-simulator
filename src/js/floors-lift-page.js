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
    const button2 = document.createElement("button");
    button1.textContent = "Up";
    button2.textContent = "Down";
    floorBtnDiv.append(button1, button2);
    // floorBtnDiv.appendChild(button1);
    // floorBtnDiv.appendChild(button2);

    const floorNum = document.createElement("h2");
    floorNum.innerText = "floor num";
    floorNum.classList.add("floor-num");
    floorDiv.appendChild(floorNum);
  }

  liftsDiv = document.createElement("div");
  liftsDiv.classList.add("lifts");
  document.body.appendChild(liftsDiv);

  for (var i = 0; i < liftsCount; i++) {
    const lift = document.createElement("div");
    lift.classList.add("lift-container");
    liftsDiv.appendChild(lift);

    const leftDoor = document.createElement("div");
    leftDoor.classList.add("left-door");
    const rightDoor = document.createElement("div");
    rightDoor.classList.add("right-door");
    lift.append(leftDoor, rightDoor);
  }
}
