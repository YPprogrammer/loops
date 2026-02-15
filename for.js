for(var i=0 ; i<5 ; i++){
    console.log(i)
}

for(var i=0; i<5; i++){
    console.log("Hello");
}

// even number
// n%2===0
// n%2!==1
for(let i=0; i<=20; i++){
    console.log(i);
     i%2===0;
     console.log("even number",i%2===0)
}

// odd number
// n%2===1
// n%2!==0


// for(let i=0; i<20;i++){
//     if(i%2===1){
//         console.log(i);
//     }
// }


for(let i=0; i<=30;i++){
    console.log(i);
    i%2!==0;
    console.log("odd number",i%2!==0)
}

// sum

let sum =0;
for(let i=5;i<=20;i++){
    console.log(i)
    sum=sum+i;
    console.log("Total sum",sum)
}
console.log("sum =",sum)

// incremental
for(let i= 0;i<=10;i++){
    console.log(i)
}

// Decremental
for(let i=10; i>=0;i--){
    console.log(i)
}

// give me some number of numbers from 1 to 20 that are divisible by 3
let total = 0;
for (let i=1;i<=20;i++){
    if(i%3===0){
        console.log(i);
        total=total+i;
        console.log('total',total)
    }
}
console.log('total of the numbers',total)

// when to use a break and continue

// break-->i am done with this loop.loop end.
for(let i=0; i<150; i++){
    console.log(i);
    if(i>=5){
        break;
    }
}
console.log('life after break up')


let n=54;
while(n>25){
    console.log(n);
    if (n<50){
        break
    }
    n--;
}


// continue-->skip rest of the code for this iteration
for (let i=1; i<10;i++){
    if (i%2===1){
        continue;
    }
    console.log(i);
}

let m=0;
while (m<50){
    m++;
    if(m%5!==0){
        continue;
    }
    console.log(m);
}
