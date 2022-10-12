//generate birth month for 50 individuals
function addBirthMonth(){
    indMapBirth = new Map();
    for(let i =1;i<=50;i++){
        //random number generate for month 1-12
        var random = Math.floor(Math.random()*12)+1;
        value = " ";
        //checks if already a month is present
        if(indMapBirth.has(random)){
        value = indMapBirth.get(random);
        }
        //sets and adds to map
        value+=(i.toString()+",");
        indMapBirth.set(random,value);
    }
    console.log("Individuals with same month as Birthday")
    for(let [key,value] of indMapBirth){
        console.log(`Month ${key} with individuals ${value}`);
    }
    
}
addBirthMonth();