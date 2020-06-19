/*
console.log('hello world!!!');
var firstName = 'John';
console.log(firstName);
var lastName = 'Smith';
var age = 28;
var fullAge = true;
console.log(fullAge);
var job;
console.log(job);
job = 'Teacher';
console.log(job);
// Variable naming rules
var _3years = 3;
var johnMark = 'John and MArk';
// this is comment - single line comment
multi line comment

 */

//variable mutation
/*
var firstname = 'John'
var age = 20;
console.log(firstname + ' ' + age) //automatically converts var types = type coerction
var job, isMarried;
job = 'teacher';
isMarried = false;
console.log(firstname + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
//variable mutation
age = 'twenty 8'; //don't need to call var already called just changing it
job = 'driver';
alert(firstname + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
//alert = pop up

var lname = prompt('What is his last name?');
console.log(firstname + ' ' + lname);
*/
//basic operators
/*
var year, yearjohn, yearmark;
agejohn = 28;
agemark = 33;
now = 2019;
yearjohn = now - agejohn;
console.log(yearjohn);
yearmark = now - agemark;
console.log(yearmark);
console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

//logical operators
var johnolder = agejohn > agemark;
console.log(johnolder);
//type of operator
console.log(typeof johnolder);
console.log(typeof agejohn);
console.log(typeof 'mark is older that john');
var x;
console.log(typeof x);
*/
//operator precedence
/*
var now = 2018;
var yearjohn = 1989;
var fullage = 18;

var isfullage = now - yearjohn >= fullage;
console.log(isfullage);

var agejohn = now - yearjohn;
var agemark = 35;
var average = (agejohn + agemark) / 2;
console.log(average);
//multiple assignments
var x,y;
x = y = (3 + 5) * 4 - 6; //x and y take on same values
console.log(x, y);
//more operators

x *= 2;
console.log(x);
x += 10;
console.log(x);
x ++; //adds one to x
console.log(x);
*/
/* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
 */
/*
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").
GOOD LUCK 😀 */
/*
var johnBMI;
var markBMI;
markmass = 530;
johnmass = 440;
johnheight = 64;
markheight = 76;
johnBMI = johnmass / (johnheight * johnheight);
markBMI = markmass / (markheight * markheight);
console.log(johnBMI, markBMI);
var greaterbmi = johnBMI >= markBMI;
console.log('Is john\'s BMI higher than mark\'s?', greaterbmi);

 */
// if / else
/*
var firstname = 'john';
var civilstatus = 'single';
var ismarried = true;
if (ismarried) {
    console.log(firstname + ' is married!');
} else {
    console.log(firstname + ' will hopefully marry soon');
}
var johnBMI;
var markBMI;
markmass = 530;
johnmass = 660;
johnheight = 64;
markheight = 76;
johnBMI = johnmass / (johnheight * johnheight);
markBMI = markmass / (markheight * markheight);
if (johnBMI > markBMI) {
    console.log('johns bmi is higher than marks');
} else {
    console.log('marks bmi is higher than johns');
}
*/
/*
var firstname = 'john';
var age = 20;
if (age < 13) {
    console.log(firstname + ' is a boy');
} else if (age < 20 && age >= 13) {
    console.log(firstname + ' is a teenager');
} else if (age >= 20 && age <30){
    console.log(firstname + ' is a young man');
}
else {
    console.log(firstname + ' is a man');
}
*/
//the ternary operator/conditional statement and switch statement
//ternary operator
/*
var firstname = 'John';
var age = 22;
age >= 18 ? console.log(firstname + ' drinks beer')
: console.log(firstname + ' drinks juice');

var drink = age >= 18 ? 'beer' : 'Juice';
console.log(drink);
/*
if (age >= 18 ) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}

 */
//switch statement
/*
var job = 'driver';
switch (job){
    case "teacher":
        console.log(firstname + ' teaches kids how to code');
        break;
    case 'driver':
        console.log(firstname + 'drives' );
        break;
    case 'designer':
        console.log(firstname + 'designs');
        break;
    default:
        console.log(firstname + 'does something else');
}

var firstname = 'john';
var age = 10;

switch (true) {
    case age < 13:
        console.log(firstname + ' is a boy');
        break;
    case age >= 13 && age < 20:
        console.log(firstname + ' is a teenager');
        break;
    case age >= 20 && age < 30:
        console.log(firstname + ' is a young man');
        break;
    default:
        console.log(firstname + ' is a man');

}

*/

// Truthy and Falsy
// falsy = undefined, null, 0, ' ', Nan - turns out to be false in an if statement
// truthy - not falsy
//handy of testing
/*
var height;
height = 20;
if (height || height === 0) {
    console.log('var defined')
} else {
    console.log('var has not been defined')
}
// equality operator
if (height = '23') {
    console.log('the == operator does type coercion converts str in to num');
}
// == will make it just a str
*/
/*
Coding challenge
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (the highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
GOOD LUCK 😀


var jteam;
var mteam;
var maryteam;
jteam = 89 + 120 + 103;
jteam = jteam/3;
maryteam = 97 + 134 + 105;
maryteam = maryteam/3;
mteam = 70 + 94 + 123;
mteam = mteam/3;
console.log(jteam);
console.log(mteam);

switch (true) {
    case mteam > jteam && mteam > maryteam:
        console.log(mteam + ' Mark\'s team is the highest average score');
        break;
    case jteam > mteam && jteam > maryteam:
        console.log(jteam + ' John\'s team is the highest average score');
        break;
    case jteam && maryteam === mteam:
        console.log(jteam + mteam + maryteam + ' tie');
        break;
    case maryteam > jteam && maryteam > mteam:
        console.log(maryteam + ' Mary\'s team is the highest average score');
        break;
}

 */
//functions
/*
function calAge(birthYear) {
    return 2018 - birthYear;
}
var agejohn = calAge(1990);
var agemike = calAge(1940);
var agejane = calAge(1969);
console.log(agejohn);
console.log(agemike);
console.log(agejane);

function yearsuntilretirement(Year, firstname) {
    var age = calAge(Year);
    var retirement = 65 - age;
    if (retirement > 0) {
    console.log(firstname + ' retires in ' + retirement + ' Years');
        } else {
        console.log(firstname + ' is already retired')
    }
}

yearsuntilretirement(1990, 'John');
yearsuntilretirement(1940, 'Mike');
yearsuntilretirement(1969, 'Jane');
 */

// function statements and expressions
//function declaration
//function whatdoyoudo(job, firstname){}
//function expression
/*
var whatdoyoudo = function (job, firstname) {
    switch (job) {
        case  'teacher':
            return firstname + ' teaches kids how to code';
        case 'driver':
            return firstname + ' drives a cab';
        case 'designer':
            return firstname + ' web designer';
        default:
            return firstname + ' does something else';
    }
}

console.log(whatdoyoudo('diver', 'Jane'));
//expressions always produce a value
//statements do not produce any immediate value

*/
//arrays
/*
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1980, 1970);
console.log(names[0]);
console.log(names);
console.log(names, length);

names[1] = 'Ben';
//names[4] = 'Mary';
names[names.length] = 'Mary';
console.log(names);

var john = ['John', 'Smith', 1990, 'designer', false];
john.push('blue end of array');
john.unshift('beginning MR');
console.log(john);
john.pop();
john.pop();
john.shift();
console.log(john);
console.log(john.indexOf(23));
var ifdes = john.indexOf('designer') === -1 ? 'John is not a designer': 'john is a designer';
console.log(ifdes);
*/

/*
coding challenge 3
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
GOOD LUCK 😀
*/

/*
function tipcal(bill) {
    var percent;
if (bill <= 50) {
    percent = 0.2;
    console.log(0.2 ** bill);
} else if (bill >= 50 && bill <= 200) {
    percent = 0.15;
    console.log(0.15 ** bill);
} else if (bill >= 200){
    percent = 0.1;
    console.log(0.1 ** bill);
}
return percent;
}
var bills = [124, 48, 268];
var tips = [tipcal(bills[0]),
            tipcal(bills[1]),
            tipcal(bills[2])];
var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];
console.log(tips, finalValues);
*/

//objects and properties
//object
/*
var john = {
    //key      value
    firstname: 'John',
    lastname: 'Smith',
    birthyear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    ismarried: false,
};
console.log(john.firstname);
var x = 'birthyear';
console.log(john[x]);
john.job = 'designer';
john['ismarried'] = true;
console.log(john);

var jane = new Object();
jane.name = 'jane';
jane.birthyear = 1969;
jane['lastname'] = 'Smith';
console.log(jane);
*/
//objects and methods
/*
var john = {
    //key      value
    firstname: 'John',
    lastname: 'Smith',
    birthyear: 1991,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    ismarried: false,
    calage : function(){
        this.age = 2018 - this.birthyear;
    }
};
john.calage();
console.log(john);
*/
/*
coding challenge four
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
GOOD LUCK 😀
*/
/*
Mark = new Object();
John = new Object();

Mark.fullname = 'Mark Newman';
John.fullname = 'John Smith';
Mark.Mass = 200;
John.Mass = 230;
Mark.height = 9;
John.height = 10;


var john =  {
    fullname : 'John Smith',
    Mass : 230,
    height : 10,
    calbmi : function(){
    this.bmi = john.Mass / john.height * 2;
}
};
var mark =  {
    fullname : 'Mark Newman',
    Mass : 200,
    height : 9,
    calbmi : function(){
    this.bmi = mark.Mass / mark.height * 2;
}
};
john.calbmi();
mark.calbmi();
console.log(john);
console.log(mark);

switch (true) {
    case  mark.bmi > john.bmi:
     console.log('At ' + mark.bmi + ' , ' + mark.fullname + ' has the highest BMI');
        break;
    case  john.bmi > mark.bmi:
     console.log('At ' + john.bmi + ' , ' + john.fullname + ' has the highest BMI');
        break;
    case  john.bmi === mark.bmi:
     console.log(' tie!');
        break;
}wqsfgd

 */


// for loops
/*
for(var i = 0; i < 5; i++) {
    console.log(i);
}

var john = ['john', 'smith', 1996, 'designer', false, 'blue'];

for(var i = 0; i < john.length; i++){
console.log(john[i]);
}

// while loop
var i = 0;
while( i < john.length) {
    console.log(john[i]);
    i ++;
}
*/
// continue and break

var john = ['john', 'smith', 1996, 'designer', false, 'blue'];

for(var i = 0; i < john.length; i++){
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

/*
var john = ['john', 'smith', 1996, 'designer', false, 'blue'];

for(var i = 0; i < john.length; i++){
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}
*/
//looping backwards
var john = ['john', 'smith', 1996, 'designer', false, 'blue'];

for(var i = john.length - 1; i >= 0; i--){
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}