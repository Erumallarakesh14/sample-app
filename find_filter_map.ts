var s12:number[]=[1,2,5,7,9,5,3];

let re:number[]=s12.filter((num)=>num>4); 
for(let n:number=1;n<4;n++){
    if(re[n]!=5){
console.log(re[n]);
    }
}
let fin_d=s12.find((num)=>num === 2);
 console.log(fin_d); 