let friend= 'Zach'
switch (friend) {
 case 'Zach':
    console.log('Let\'s play ultimate!')
    break;
 case 'Ing':
    console.log('So... are you taking me to Belgium')
    break;
 case 'Adam':
    console.log('I have baby stuff for you')
    break;
default:
    console.log(`You,${friend}, are not my friend.`)
}
let dessert = "pie"
let pie = 'Pie pie, me oh my'
let ice = 'I scream for ice cream!'
let cake = 'Cake is Great'
switch (dessert) {
    case "cake":
    console.log(cake)
    break;
    case "ice cream":
    console.log(ice)
    break;
    case "pie":
    console.log(pie)
    break;
default:
    console.log('We dont serve that here loser')
}
let range= -8

switch (true) {
    case range < 0 && range > -10:
        console.log('worked')
        break;
    case range < 0 || range <= -10:
        console.log('also worked')
        break;
}

