// Rover Object Goes Here
// ======================
let ourRover = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: []
}

function turnLeft(rover){
  switch(rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "N";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "W":
      rover.direction = "S";
      break;
  }
  console.log("turnLeft was called -- direction now: " + rover.direction);
}

function turnRight(rover){
 switch(rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
  console.log("turnRight was called -- direction now: " + rover.direction);
}

function moveForward(rover){
 switch(rover.direction) {
    case "N":
      if(rover.y - 1 >= 0) {
          rover.y -= 1;
      }
      break;
    case "E":
     if(rover.x + 1 <= 9) {
         rover.x += 1;
     }
      break;
    case "S":
     if(rover.y + 1 <= 9) {
        rover.y += 1;
     }
      break;
    case "W":
     if(rover.x - 1 >= 0) {
         rover.x -= 1;
     }
      break;
  }
  rover.travelLog.push([rover.x, rover.y]);
  console.log(`moveForward was called -- position now: ${rover.x}, ${rover.y}`);
}


function moveBackward(rover){
 switch(rover.direction) {
    case "N":
     if(rover.y + 1 <= 9) {
        rover.y += 1;
     }
      break;
    case "E":
     if(rover.x - 1 >= 0) {
       rover.x -= 1;
     }
      break;
    case "S":
      if(rover.y - 1 >= 0) {
        rover.y -= 1;
      }
      break;
    case "W":
      if(rover.x + 1 <= 9) {
        rover.x += 1;
      }
      break;
  }
  rover.travelLog.push([rover.x, rover.y]);
  console.log(`moveBackward was called -- position now: ${rover.x}, ${rover.y}`);
}

function runCommands(rover, str) {
  let characters = str.split('');
  for(let i = 0; i < characters.length; i++) {
    switch(characters[i]) {
      case "f":
        moveForward(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      case "b":
        moveBackward(rover);
        break;
    }
  }
}

// TESTING
// turnLeft(ourRover);
// turnRight(ourRover);
// turnLeft(ourRover);
// turnRight(ourRover);
// turnRight(ourRover);

// turnRight(ourRover);
// moveForward(ourRover);
// moveForward(ourRover);
// moveForward(ourRover);
// turnRight(ourRover);
// moveForward(ourRover);

runCommands(ourRover, 'fflflffffffffffflffffffffffflffffffffflb')

// print rover travel log
for(let i = 0; i < ourRover.travelLog.length; i++) {
  console.log(ourRover.travelLog[i]);
}
