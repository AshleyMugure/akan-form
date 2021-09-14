function formSort() {
  let day = parseInt(document.getElementById("day").value);
  let month = parseInt(document.getElementById("month").value);
  let year = document.getElementById("year").value;
  let gender = document.getElementById("gender").value;
  let CC = parseInt(year.slice(0, 2));
  let YY = parseInt(year.slice(2, 4));

  let dayWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  let femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  if (day < 1 || day > 31 || day == "") {
    alert("Invalid day!");
  }

  if (month < 1 || month > 12 || month == "") {
    alert("Invalid month!");
  }

  if (year < 1900 || year > 2021 || year == "") {
    alert("Invalid year!");
    return document.getElementById("done").innerHTML = "Please enter valid date."
  }

  let x = Math.floor((14 - month) / 12);
  let y = YY - x;
  let z = month + 12 * x -2;
  let bday = (day + y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + Math.floor((31 * z) / 12)) %7;

  
}