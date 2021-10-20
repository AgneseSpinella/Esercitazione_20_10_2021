/* Consegna 
partendo dalle seguenti linee di codice
let str = prompt(“Inserisci 5 nomi separati da una virgola”, ‘Stefania,Sandro,Maria,Giacomo,Giorgia’);
let arrAge = [32, 21, 47, 12, 78];
ottenere un nuovo array multimediale strutturato in questo modo:
[
  [“Giacomo”, “Stefania”, “Sandro”, “Maria”, “Marta”, “Giorgia”, “Franco”, Valentina],
  [12, 32, 21, 47, 6, 78, 54, 32]

]
per svolgere l’esercitazione documentasi sul metodo per stringhe .split() */

let str = prompt ('Inserisci 5 nomi separati da una virgola', 'Stefania,Sandro,Maria,Giacomo,Giorgia');
let arrAge = [32, 21, 47, 12, 78];

let arrName= str.split(",");
arrName.unshift("Giacomo");
arrName.splice(4, 1, "Marta")
arrName.push("Franco","Valentina")

arrAge.unshift(12)
arrAge.splice(4, 2, 6, 78, 54, 32)

let array = [arrName, arrAge]
console.log(array)