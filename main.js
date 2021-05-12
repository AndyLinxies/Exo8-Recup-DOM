//Ex1
let ex1 = document.getElementsByClassName('redPurple')
console.log(ex1); //affiche html collection des deux éléments

//Ex2
let ex2 = document.querySelectorAll('.redPurple')
console.log(ex2); //affiche une NodeList des deux élements

//Ex3
let ex3 = document.querySelectorAll('h1.redPurple')[0]
console.log(ex3);

//Ex4
let ex4 = document.querySelectorAll('li,p,span')
console.log(ex4);

//Ex5
let ex5 = document.querySelectorAll('li.important,p')
console.log(ex5);

//Ex6
let ex6 = document.querySelectorAll('h1.redPurple,span.redPurple') //ou juste redpurple
console.log(ex6);
