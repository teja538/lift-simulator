const submitBtn = document.querySelector("#submit-btn");
submitBtn?.addEventListener("click", clickHandler);

function clickHandler() {
  const floorsCount = document.querySelector("#floorsCount").value;
  const liftsCount = document.querySelector("#liftsCount").value;
  sessionStorage.setItem("floorsCount", floorsCount);
  sessionStorage.setItem("liftsCount", liftsCount);
}
