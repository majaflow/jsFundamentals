function hi(){
    console.log("HI");
    return"Hey";
}
//hi;
// hi();
console.log(hi);
console.log(hi());


/*************
 *Creat a function that when invoked, lists numbers from 1 through 10
 */
function count(){
    for(let i = 1; i <=10; i +=1){
    console.log(i);
    }
return"Done";
}
count();
console.log(count())
// Challenge:
// Given the array, create a function that lists out the values individually

let arr = ["This", "is", "really","cool?"]
function ind() {for(item of arr){
    console.log(item);
    }
}
console.log(arr);
ind();