const weight = document.getElementById("weight");
const height = document.getElementById("height");
let heighMeters = 1;

const valueRange = document.querySelector(".container_input");

valueRange.addEventListener("input", (select_value) => {
  const selectRange = select_value;
  if (selectRange.target.id == "weight") {
    writeHtml("weight", weight.value);
  }

  if (selectRange.target.id == "height") {
    heighMeters = height.value / 100;
    writeHtml("height", height.value);
  }
  writeHtml("display_imc", calcImc(weight.value, heighMeters));
});

function writeHtml(place, value) {
  switch (place) {
    case "weight":
      document.getElementById("value_weight").innerHTML = `${value} kg`;
      break;
    case "height":
      document.getElementById("value_height").innerHTML = `${value} cm`;
      break;
    case "display_imc":
      document.getElementById("value_imc").innerHTML = `${value}`;
      break;
    case "health":
      document.getElementById("value_health").innerHTML = `${value}`;
      break;
  }
}

function calcImc(weight, heighMeters) {
  let imc;
  imc = weight / (heighMeters * heighMeters);
  if (imc < 18.5) {
    writeHtml("health", "Peso inferior al normal");
  } else if (imc > 18.5 && imc < 24.9) {
    writeHtml("health", "Normal");
  } else if (imc > 25.0 && imc < 29.9) {
    writeHtml("health", "Peso superior al normal");
  } else {
    writeHtml("health", "Obesidad");
  }
  return imc.toFixed(2);
}
