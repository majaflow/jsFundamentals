/**************
 FOR OF LOOPS
 **************/

 var student = { name:"Peter", awesome: true, degree:
"JavaScript", week :1}
for (item of student) {
    console.log(item)
}

//Doesn't work because an object is not iterable

var pieArray = [ 'cherry', 'apple' , 'banana cream', 'chocolate peanut butter'
,'shepherd','chicken pot', 'key lime']
for (pie in pieArray) {
    console.log(pie, 'pie is  my favorite')
}