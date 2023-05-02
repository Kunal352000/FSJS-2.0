for(let i = 0; i<=5; i++){
    if(i==3){
       break; //Terminate everythink and come out of the block 
    }
    console.log(i);
}
console.log("*************");

for(let i=6; i<=10; i++){
    if(i==8){
        continue; //skip this value
    }
    console.log(i)
}