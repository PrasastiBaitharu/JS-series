let n=6;
let c=0;
console.log("Number is:",n);
for(let i=1 ; i<=n ; i++){
    if(n%i == 0){
        c=c+1;
    }
}
console.log("Number of factor are :",c)