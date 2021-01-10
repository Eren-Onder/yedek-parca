const parcaList = ["Egzos7t", "fAr", "RadYa32tö2r", "ayna ", " janT "];
parcaList.forEach(function (element) {
  let yeniParca = element.trim().toUpperCase().split("");
  let parcaIsmi = "KEREMAG_";
  for (let i = yeniParca.length - 1; i >= 0; i--) {
    if (isNaN(yeniParca[i])) {
      parcaIsmi += yeniParca[i];
    }
  }
  let gün = new Date().toDateString("en");
  gün = gün.split(" ").join("");
  console.log(parcaIsmi + gün);
});
