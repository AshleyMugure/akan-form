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

  
}