const prompt = require('prompt-sync')();  //Function : Untuk membaca inputan user via terminal 

function penjumlahan(a, b) {
  return a + b;
}

function pengurangan(a, b) {
  return a - b;
}

function perkalian(a, b) {
  return a * b;
}

function pembagian(a, b) {
  if (b === 0) return "Tidak bisa dibagi dengan nol! Input angka lain";
  return a / b;
}

console.log("Kalkulator Task After Office");
console.log("1. Penjumlahan");
console.log("2. Pengurangan");
console.log("3. Perkalian");
console.log("4. Pembagian");

//prompt-sync
const operasi = prompt("Pilih operasi (1-4): ");
const angka1 = parseFloat(prompt("Input angka pertama: ")); //Penggunaan parseFloat : Mengubah string jadi angka desimal (bisa punya koma).
const angka2 = parseFloat(prompt("Input angka kedua: "));

let hasil;

switch (operasi) {
  case "1":
    hasil = penjumlahan(angka1, angka2);
    break;
  case "2":
    hasil = pengurangan(angka1, angka2);
    break;
  case "3":
    hasil = perkalian(angka1, angka2);
    break;
  case "4":
    hasil = pembagian(angka1, angka2);
    break;
  default:
    hasil = "Pilihan operasi tidak valid."; //Misal input "Pilih operasi (1-4) : 5 -> maka result akan menampilkan invalid"
}

console.log(`Hasil: ${hasil}`);