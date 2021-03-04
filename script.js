const weight = document.getElementById("weight");
const height = document.getElementById("height");

const valueRange = document.querySelector(".container_input");

valueRange.addEventListener("input", (select_value) => {
  const selectRange = select_value;
  if (selectRange.target.id == "weight") {
    writeHtml("weight", weight.value);
  }

  if (selectRange.target.id == "height") {
    writeHtml("height", height.value);
  }
});

function writeHtml(place, value) {
  switch (place) {
    case "weight":
      document.getElementById("value_weight").innerHTML = `${value} kg`;
      break;
    case "height":
      document.getElementById("value_height").innerHTML = `${value} cm`;
      break;
  }
}
