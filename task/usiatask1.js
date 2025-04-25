
// Kategori
let anak = 0, remaja = 0, dewasa = 0, lansia = 0, Undefined = 0;

// Function - Menentukan Kategori Usia
function kategoriUsia(usia) {
  if (usia >= 0 && usia <= 12) {
      return "Anak-anak";
  } else if (usia >= 13 && usia <= 17) {
      return "Remaja";
  } else if (usia >= 18 && usia <= 59) {
      return "Dewasa";
  } else if (usia >= 60) {
      return "Lansia";
  } else {
      return "Undefined Usia";
  }
}

const listUsia = [-1, 0, -3, 2, 10, 17, 27, 59, 70, 34, 11, 61];



// Loop - Klasifikasi Data
for (let i = 0; i < listUsia.length; i++) {
  const kategori = kategoriUsia(listUsia[i]);
  switch (kategori) {
      case "Anak-anak":
          anak++;
          break;
      case "Remaja":
          remaja++;
          break;
      case "Dewasa":
          dewasa++;
          break;
      case "Lansia":
          lansia++;
          break;
      default:
          Undefined++;
  }
}

console.log("Kategori per Usia");
console.log(`Anak-anak: ${anak}`);
console.log(`Remaja   : ${remaja}`);
console.log(`Dewasa   : ${dewasa}`);
console.log(`Lansia   : ${lansia}`);
console.log(`Undefined Usia: ${Undefined}`);
