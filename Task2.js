const MATEMATIKA = 80;
const BAHASA_INDONESIA = 80;
const BAHASA_INGGRIS = 80;
const IPA = 80;

if (
  typeof MATEMATIKA == "number" &&
  MATEMATIKA >= 0 &&
  MATEMATIKA <= 100 &&
  typeof BAHASA_INDONESIA == "number" &&
  BAHASA_INDONESIA >= 0 &&
  BAHASA_INDONESIA <= 100 &&
  typeof BAHASA_INGGRIS == "number" &&
  BAHASA_INGGRIS >= 0 &&
  BAHASA_INGGRIS <= 100 &&
  typeof IPA == "number" &&
  IPA >= 0 &&
  IPA <= 100
) {
  let nilaiAkhir = (MATEMATIKA + BAHASA_INDONESIA + BAHASA_INGGRIS + IPA) / 4;
  let Output = "";
  Output = "Rata-rata = " + nilaiAkhir;
  if (90 <= nilaiAkhir && nilaiAkhir <= 100) {
    console.log(`${Output} 
Grade = A`);
  } else if (80 <= nilaiAkhir && nilaiAkhir <= 89) {
    console.log(`${Output} 
Grade = B`);
  } else if (70 <= nilaiAkhir && nilaiAkhir <= 79) {
    console.log(`${Output} 
Grade = C`);
  } else if (60 <= nilaiAkhir && nilaiAkhir <= 69) {
    console.log(`${Output} 
Grade = D`);
  } else if (0 <= nilaiAkhir && nilaiAKhir <= 59) {
    console.log(`${Output} 
Grade = E`);
  }
} else {
  console.log("Isi data dengan benar berupa angka dari skala 0-100");
}
