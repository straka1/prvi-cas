// let a = {};
// console.log(typeof a);

let osoba = {
  ime: 'Marko',
  prezime: 'Petrovic',
  godiste: 2000,
  pozdrav: function () {
    console.log(`Zdravo, ja sam ${this.ime} ${this.prezime}.
    Imam ${2022 - this.godiste} godine.`);
  },
};
// osoba.godiste = 1990;

// console.log(osoba.godiste);
// osoba.pozdrav();

osoba.visina = 175;
console.log(Object.entries(osoba));
