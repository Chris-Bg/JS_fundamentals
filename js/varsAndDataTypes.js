// Variabile și Tipuri de date
//1.1 Declarați trei variabile utilizând var, let, și const. Atribuiți-le valori de tip number, string și boolean.
var number = 3.14;
let string = "Hello World";
const value = true;

//1.2 Scrieți o funcție care primește o variabilă ca parametru și returnează tipul său de date utilizând typeof.
function getType(a){
    return typeof(a);
}
console.log("Tipul cu typeof : "+ getType(string) + "\n");

// 1.3 Convertiți o valoare de tip string în number și invers. Exemplu: "123" → 123 și 456 → "456".
let str = "123";
let nr = 456;
let strToNr = parseInt(str);
let nrToStr = nr.toString();
console.log("Conversie str to nr " + typeof strToNr, strToNr);
console.log("Conversie nr to str " + typeof nrToStr, nrToStr+ "\n");

// 1.4 Declarați două variabile (nume, varsta) și creați o propoziție utilizând șabloane de string-uri (template literals - ``).
let nume = "Cristina";
let varsta = 20;
console.log(`Template literals: Subsemnata ${nume} am ${varsta} ani.`+ "\n");

// 1.5 Folosiți o variabilă temporară pentru a schimba valorile dintre două variabile.
let a = 10;
let b = 2000;
let c;
console.log("Variabila temporara: (initial values) \n a = " + a + " \n b = " + b);
c = a;
a = b;
b = c;
console.log("Variabila temporara: (changed values) \n a = " + a + " \n b = " + b + "\n");

// 1.6 Scrieți o funcție care verifică dacă o variabilă este de tip null sau undefined.
function nullOrUndefined(a){
    if (a === null) {
        return null;
    }
    if (a === undefined) {
        return undefined;
    }
    return "Not null or undefined.";
}
let x;
console.log("Null sau Undefined: " + nullOrUndefined(x));
let y = null;
console.log("Null sau Undefined: " + nullOrUndefined(y));
let z = 0;
console.log("Null sau Undefined: " + nullOrUndefined(z) + "\n");

// 1.7 Creați un obiect cu mai multe proprietăți (string, number, boolean). Adăugați și eliminați dinamic o proprietate la obiect.
let me = {
    nume: "Cristina",
    age: 20,
    student: true
}
console.log(me);
delete me.student;
me.address = "Chisinau";
console.log(me);
console.log("\n");

// 1.8 Declarați un array care conține minim 5 valori fiecare un tip de date diferit. Iterați prin array și afișați tipul fiecărui element.
let arr = [13, "str", true, x , me];
arr.forEach((elem) => console.log("Element " + elem + " has type " + getType(elem)));


// 8. Module ES
// 8.1 În fișierul mathUtils.js exportați două funcții simple pentru operații matematice: adunare și scădere.
// 8.2 În fișierul js7_7.js importați funcțiile și folosiți-le pentru a calcula suma și diferența a două numere.
// 8.3 În fișierul salutari.js exportați implicit o funcție care afișează un mesaj de salut.
// 8.4 În fișierul js7_7.js importați funcția cu un nume ales de utilizator și folosiți-o pentru a saluta un utilizator.
// 8.5 În fișierul dateUtilizator.js exportați mai multe valori.
// 8.6 În fișierul js7_7.js importați întregul modul și accesați valorile exportate.