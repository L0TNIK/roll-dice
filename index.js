const wynik = document.getElementById("wynik");

function roll() {
  let rollNumber = document.getElementById("input").value;
  rollNumber = Number(rollNumber);

  let values = [];

  for (let i = 0; i < rollNumber; i++) {
    values[i] = Math.ceil(Math.random() * 6);
  }

  wynik.textContent = "dice: " + values.join(", ");
}
