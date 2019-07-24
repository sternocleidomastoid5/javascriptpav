/*for( i = 0 ; i < 10 ; i++ ){
    console.log(i); 
}
// counts from 0 to 9
*/

/*for( i = 9; i > -1 ; i-- ){
    console.log(i); 
}
*/
//counts from 9 to 0

// ACTIVITY

/*let favouriteDrinks = [
    "Vodka",
    "Tequila",
    "Rum",
];
console.log(favouriteDrinks[0])
console.log(favouriteDrinks[1])
console.log(favouriteDrinks[2])
*/

//ACT 2

/*let favouriteChoco = [
    "Mars",
    "Snickers",
    "Dairy Milk",
    "Picnic"
   ];
   for (chocoIndex = 0; chocoIndex < favouriteChoco.length;
   chocoIndex++) {
    console.log(favouriteChoco[chocoIndex]);
   }
*/

   //ACT 3

   /*let favouriteFilms = [
       "Rick and Morty",
       "Back to the Future",
       "Jurassic Park",
       
   ]
   favouriteFilms.push("Leon")
   favouriteFilms.push("Blade")

   for (filmIndex = 0; filmIndex < favouriteFilms.length;
    filmIndex++) {
        console.log(favouriteFilms[filmIndex]);
    }
*/
    // WHILE LOOPS - infinite
/*
    let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "Spade";
// let currentCard = "" - it randomises the order of the cards
while(currentCard != "Spade"){
 console.log(currentCard);
 currentCard = cards[Math.floor(Math.random()*4)];
}
console.log(currentCard);
*/
//ACTIVITY

let films = [
    "Blade", 
    "Matrix", 
    "Ghostbusters", 
    "Braveheart", 
    "Leon"
]
const filmCheck = () => {
    if (films[2] == "Ghostbusters") {
        console.log("Yay it's Ghostbusters");
    } else {
        console.log("Booo, we want Ghostbusters");
    }
};
filmCheck();