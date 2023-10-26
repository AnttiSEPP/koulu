console.log("test", "drew", "6986986");
console.log("albolski");
console.info("doggy")

let x = 9;
y = 110;
const k = 32;
let p;
console.log(x , y , k , p);

let str = "haukka"
let f = 23.3
let g = 12;
let = 875358358585.0;
let bool = true;
let bool2 = false;
let e;
console.log("12323", e);
let s = null;
let u = undefined;

hop = {y: 8,
    x: 43
};
let rs = hop;
/*
1. Muuta stringin "kauhava" ensimmäinen kirjain isoksi.
2. Poista stringistä "kala, hevonen, kana" sana kana.
3. Tulosta sanan "rovaniemi" viides kirjain.
4. Muuta string "yhden yön tarinoita" stringiksi "yhden päivän tarinoita".
5. Tee funktio, joka saa parametreiksi merkkijonon str ja kokonaisluvun x.
    Funktio palauttaa merkkijonon viimeiset x merkkiä
*/

let a = "kauhava";
let a1 = a.charAt(0).toUpperCase() + a.slice(1);
console.log("1: \n" + a1);

let b = "kala, hevonen, kana";
let b1 = b.replace("kana", "");
console.log("2: \n" + b1);

let c = "rovaniemi";
let c1 = c.charAt(4);
console.log("3: \n" + c1);

let d = "yhden yön tarinoita";
let d1 = d.replace("yön", "päivän");
console.log("4: \n" + d1)

function fnctn(str, int) {
    return str.slice(int)
}
console.log("5: \n" + fnctn("foobar", 3))

/* 
let a = 33;
6. Tarkista onko jokin luku jaollinen kolmella. Jos on tulosta "jaollinen kolmella"
7. Tarkista onko jokin luku välillä 17 - 25. Jos on tulosta "on välillä 17 - 25"
*/

let num = 25;
if (num % 3 == 0) {
    console.log("6:\njaollinen kolmella")
}
else {
    console.log("6:\nei ole jaollinen kolmella")
}
if (num >= 17 && num <= 25) {
    console.log("7:\non välillä 17 - 25")
}
else {
    console.log("7:\nei ole välillä 17 - 25")
}

/*
1. Tehkää silmukka, joka käy läpi luvut 1-100 ja tulostaa luvun jos se on jaollinen seitsemällä
*/
for (let i = 1; i < 101; i++) {
    if (i % 7 == 0) {
        console.log(i)
    }
}
list = [ 1,2,3,4,5,6,7]

function antti(el) {
    console.log(el+100);
}

list.forEach((element) => console.log(element+100))

//let newList = list.map(func11);
//console.log("map", newList);

//function func12(el) {
//}

// tehtävät 24.10
// 1.
var list = [8, 447, 16, 91, 75, 2, 22, 36, 17, 63];

list = list.filter(function(item) {
    return item >= 10 && item <= 30;
});
console.log(list);
// 2.

var uusilista = list.map(function(item) {
    return item + 5;
});
console.log(uusilista);
//3.

var eka = list.find(function(item) {
    return item > 20;
});
console.log(eka);
//4.
let suuruus = list.sort(function(a, b) {
    return b - a;
});
//5.
function pali(str) {
    return str == str.split('').reverse().join('');  
}
console.log(pali("otto"));
// 6.
for (let i = 0; i < 11 ; i++) {
    console.log(`numero: ${i}`);
}
//8.
let liste = [1, 2, 3, 4];
console.log(liste);
liste.length = 0;
console.log(liste);
//9.
let listA = [1,2,3];
let list2 = [4,5,6];
let yhd = [...listA, "text1" ,...list2, "text2"]
console.log(yhd);
//10.
const listi = [1,2,3,4,5,6,7,8,22,44,345,636];
const arvo = 0;
const summa = listi.reduce((accumulator, currentValue)=> accumulator + currentValue, arvo);
console.log(summa);
//11.
class cat {
    constructor(name, owner, age)  {
        this.name = name;
        this.owner = owner;
        this.age = age
    }
    getInfo(){
        let str = `name: ${this.name} owner: ${this.owner} age: ${this.age}`;
        return str;
    }
}
const cat1 = new cat("jari", "janne", 9);
console.log(cat1.getInfo());