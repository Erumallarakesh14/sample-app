var a :number= 12;
a = 234;
console.log(a);

let m:string="zelis";
console.log(m);
const strnum="24";
let conv:number=parseInt(strnum);    //convert string to number
console.log(conv);

let bool:boolean=false;     //need to assign the default value if not its will be an error.in js it shows(undefined),in ts errorso default requires.
console.log(bool=true);

           //create array in ts.
           let ar:string[];  // or 
           let ar1=Array<number>;
        console.log(ar1);             // if try to print an empty array its shoes [function :Array]

