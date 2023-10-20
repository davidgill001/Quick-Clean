// console.log("Its Working??")
// let total = 1 + 3;


// let random = Math.random();
// if (random < 0.5) {
//     console.log("Your number is less than 0.5!!!")
//     console.log(random);
// }


// const dayOfWeek = prompt("Enter a day");
// if (dayOfWeek === 'Mo nday'){
//     console.log('Ughh I hate Mondays')
// } else if (dayOfWeek === 'Saturday') {
//     console.log("YAY I Love Saturdays!!")
// }else if (dayOfWeek === 'Friday') {
//     console.log("Fridays are Decent. Especially After Work!!")
// }else{
//     console.log("You are a senior")
// }


// const age = 60;

// if (age< 5) {
//     console.log("You are a baby. You get in for free")
// }else if (age < 10) {
//     console.log("You are a child you get in fot $10.")
// }else if (age < 65) {
//     console.log("You are an adult you get in fot $20.")
// }

// const password = prompt('Please Enter password');
// if (password.length >= 6){
//    if (password.indexOf (" ") === -1){
//     console.log("Valid Password")
//    }else{
//     console.log("Password Contain Spaces")
// }
// } else{
//     console.log("short password must contain 6+ characters")
// }

// if (NaN) {
//     console.log("Truthy")
// }else{
//     console.log("Falsy")
// }

// const password = prompt('Please Enter password');
//  if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log('Valid Password!')
//  }else{
//     console.log('Invalid Password!')
//  }
 
const burger = document.querySelector('#burger')
const menu = document.querySelector('#menu')

burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    } else{
        menu.classList.add('hidden')
    }
})