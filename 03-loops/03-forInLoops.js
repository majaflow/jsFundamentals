var student = { name: "Harry",awesome : true,  degree: "JavaScript", week: 1}
for(item in student) {
    //console.log(item);
    console.log(student[item])
}

var pieArray = ['cherry','apple','chocolate peanut butter',
'chicken pot']
for (pie in pieArray) {
    console.log(pie)
}

/*
*/
var studentname = "myName"
var capName;
for (let n in studentname) {
    if (n == 0) {
     capName = studentname[n].toUpperCase();
} else {
     capName += studentname[n].toLowerCase();
        }
}
console.log(capName);



