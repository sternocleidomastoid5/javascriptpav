/*let coffeeIsGrinding = false;
const pressGrindBeans = () => {
    if(coffeeIsGrinding) {
        console.log("Stopping the grind");
        coffeeIsGrinding = false;
    }else{
        console.log("Grinding is about to begin");
        coffeeIsGrinding = true;
    }
}
pressGrindBeans();
pressGrindBeans();
*/


//CHALLANGE 1
/*
const coffeeOrder = (size, type) => {
    console.log(`I want to order a ${size} and ${type} drink`);
}
coffeeOrder("big", "black")
*/
//CHALLANGE 2

/*const addUp = (num1, num2) => {
    return num1 + num2;
}
console.log (addUp(2,5));
*/

//CHALLANGE 3

/*const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5);
};
const getFahrenheit = (celsius) => {
    return multiplyByNineFifths (celsius) + 30;
};
console.log("The temperature is " + getFahrenheit(15) + "F");
*/

//ACTIVITY 1

/*let orderCount = 1;
const takeOrder = (ing1,ing2) => {
    console.log (`Pizza with ${ing1} and ${ing2} please.`);
    orderCount++;
}
takeOrder("ham", "cheese")
takeOrder("mushrooms", "bacon")
*/
//ACTIVITY 2

/*let password = "password123";
let amount = "500";
const cashWithdrawal = (amount, password) => {
    console.log(`Use ${password} to withdraw ${amount}`)
} 
if(password) {
    console.log("Password correct");
    password = "password123";
} if(amount) {
    console.log(`Withdraw ${amount} £.`)
    amount<= "500"
} else{
    console.log("Amount or password incorrect.")
}

cashWithdrawal() - WRONGGGG!!!
*/

//RIGHT

/*let accBal = 400;
let accPin = 1234;
const cashMachine = (pinNum, cash) => {
    if (pinNum == accPin && cash <= accBal) {
        console.log(`Your PIN is correct and the ${cash} you requested is being dispensed!`)    
    } else if (pinNum != accPin) {
        console.log(`PIN number is incorrect!. Please try again.`);
    } else {
        console.log(`Insufficient funds in your account! Please check and try again.`);
    }
}
cashMachine(1234, 300);
cashMachine(1235, 300);
cashMachine(1234, 410);
cashMachine(1235, 500);
*/

//ACTIVITY 3

/*let orderCount = 1
const takeOrder = (t1, t2, t3, t4, t5) => {
    console.log(`Can I have a pizza witrh these toppings: ${t1}, ${t2}, ${t3}, ${t4}, ${t5} please.`);
    orderCount++;
}
takeOrder("ham", "cheese", "bacon", "truffles", "shrimps")
*/
