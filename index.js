function warnTheSheep(queue) {
// mencari index si "Wolf"
    let wolf = Number(queue.indexOf("wolf"))
    // console.log(wolf);
    let prey = queue[wolf + 1]
    // console.log(prey);
    let sheepIndex = (queue.length-1)-wolf
    // console.log(sheepIndex);
    if (prey == "sheep") {
        return `Oi! Sheep number ${sheepIndex}! You are about to be eaten by a wolf!`
    } 
    else if (sheepIndex == 0){
        return "Pls go away and stop eating my sheep"
    }
} 


// Test Function do not edit
function Test(fun, result) {
    console.log(fun === result)
}


// Test assertions
Test(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]), "Oi! Sheep number 1! You are about to be eaten by a wolf!");
Test(warnTheSheep(["sheep", "sheep", "wolf"]), "Pls go away and stop eating my sheep");
Test(warnTheSheep(["sheep", "wolf", "sheep"]), "Oi! Sheep number 1! You are about to be eaten by a wolf!");
Test(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]), "Oi! Sheep number 6! You are about to be eaten by a wolf!");