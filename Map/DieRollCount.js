//d) checks for die value if 10 returns true
function checkDie(dieMap) {
    found = false;
    for (let [key, value] of dieMap) {
      if (value == 10) {
        found = true;
      }
    }
    return found;
  }
  function rollDie() {
    dieMap = new Map();
    result = false;
    //b) repeat the die roll d)checks if any one die value reached 10
    while (result == false) {
      //a)roll a die and find number between 1 to 6
      var diceValue = Math.floor(Math.random() * 6) + 1;
      value = 0;
      if(dieMap.has(diceValue)){
      value = dieMap.get(diceValue);
      }
      //c)store in dictionary
      dieMap.set(diceValue, value + 1);
      console.log(dieMap);
      result = checkDie(dieMap);
    }
    var final = Array.from(dieMap.values());
    var keys = Array.from(dieMap.keys());
    //e)find minimum and maximum times of each die value rolled
    var max = Math.max(...final);
    var min = Math.min(...final);
    console.log(
      "The maximum times die value rolled is " + (keys[final.indexOf(max)])
    );
    console.log(
      "The minimum times die value rolled is " + (keys[final.indexOf(min)])
    );
  }
  rollDie();