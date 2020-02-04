let rover = {
    x: 0,
    y: 0,
    direction: "N", // default direction 
    travelLog: [] // array to push future positions
};

// main object (rover) established

console.log(rover)
console.log(rover.travelLog)

function turnRight(rover) {
    switch (rover.direction) {
        case "N":
            rover.direction = "E"; // modifies the rover direction, so now rover is facing another way, and we store that new direction, overriding the previous direction.
            console.log(`The rover has turned right, and is facing ${rover.direction}.`); // Let user know rover has turned using template literal. 
            break;
        case "S":
            rover.direction = "W";
            console.log(`The rover has turned right, and is facing ${rover.direction}.`);
            break;
        case "W":
            rover.direction = "N";
            console.log(`The rover has turned right, and is facing ${rover.direction}.`);
            break;
        case "E":
            rover.direction = "S";
            console.log(`The rover has turned right, and is facing ${rover.direction}.`);
            break;
    }
}

function turnLeft(rover) {
    switch (rover.direction) {
        case "N":
            rover.direction = "W";
            console.log(`The rover has turned left, and is facing ${rover.direction}.`);
            break;
        case "S":
            rover.direction = "E";
            console.log(`The rover has turned left, and is facing ${rover.direction}.`);
            break;
        case "W":
            rover.direction = "S";
            console.log(`The rover has turned left, and is facing ${rover.direction}.`);
            break;
        case "E":
            rover.direction = "N";
            console.log(`The rover has turned left, and is facing ${rover.direction}.`);
            break;
    }
}

function moveForward(rover) {
    switch (rover.direction) {
        case "N":
            if (rover.y > 0 && rover.y <= 10) {
                (rover.y--)
                var newPositionX = rover.x
                rover.travelLog.push("(x:" + newPositionX)
                var newPositionY = rover.y
                rover.travelLog.push("y:" + newPositionY + ")")
            } else {
                console.log("Nope, you cannot move off the board, please try again!");
            }
            break;
        case "S":
            if (rover.y >= 0 && rover.y < 10) {
                {
                    rover.y++
                }
                var newPositionX = rover.x
                rover.travelLog.push("(x:" + newPositionX)
                var newPositionY = rover.y
                rover.travelLog.push("y:" + newPositionY + ")")
            } else {
                console.log("Nope, you cannot move off the board, please try again!")
            }
            break;
        case "W":
            if (rover.x > 0 && rover.x <= 10) {
                {
                    rover.x--
                }
                var newPositionX = rover.x
                rover.travelLog.push("(x:" + newPositionX)
                var newPositionY = rover.y
                rover.travelLog.push("y:" + newPositionY + ")")
            } else {
                console.log("Nope, you cannot move off the board, please try again!")
            }
            break;
        case "E":
            if (rover.x >= 0 && rover.x < 10) {
                {
                    rover.x++
                }
                var newPositionX = rover.x
                rover.travelLog.push("(x:" + newPositionX)
                var newPositionY = rover.y
                rover.travelLog.push("y:" + newPositionY + ")")
            } else {
                console.log("Nope, you cannot move off the board, please try again!")
            }
            break;
    }
}

moveForward(rover)

function moveBackward(rover) {
    switch (rover.direction) {
        case "N":
            if (rover.y >= 0 && rover.y < 10) {
                {
                    rover.y++
                }
                var newPositionX = rover.x
                rover.travelLog.push("(x:" + newPositionX)
                var newPositionY = rover.y
                rover.travelLog.push("y:" + newPositionY + ")")
            } else {
                console.log("You cannot move off the board.")
            }
            break;
        case "S":
            if (rover.y > 0 && rover.y <= 10) {
                {
                    rover.y--
                }
                var newPositionX = rover.x
                rover.travelLog.push("(x:" + newPositionX)
                var newPositionY = rover.y
                rover.travelLog.push("y:" + newPositionY + ")")
            } else {
                console.log("You cannot move off the board.")
            }
            break;
        case "E":
            if (rover.x >= 0 && rover.x < 10) {
                {
                    rover.x++
                }
                var newPositionX = rover.x
                rover.travelLog.push("(x:" + newPositionX)
                var newPositionY = rover.y
                rover.travelLog.push("x:" + newPositionY + ")")
            } else {
                console.log("You cannot move off the board.")
            }
            break;
        case "W":
            if (rover.x > 0 && rover.x <= 10) {
                {
                    rover.x--
                }
                var newPositionX = rover.x
                rover.travelLog.push("(x:" + newPositionX)
                var newPositionY = rover.y
                rover.travelLog.push("y:" + newPositionY + ")")
            } else {
                console.log("You can't move off the board.")
            }
            break;
    }
}

moveBackward(rover)

function move(rover, commands) { // test that rover is actually moving, takes in two arguments 1) rover information and 2) the list of commands that the user has provided
    for (let i = 0; i < commands.length; i++) {
        let command = commands[i] // extracts one element at a time from commands array and then triggers the proper function
        // if (command !== "l" || "r" || "f" || "b")  {
        // console.log("Please choose one of the four acceptable commands: l, r, f, b.") 
        // } else {command.toLowerCase() === "l" || "r" || "f" || "b")}
        switch (command.toLowerCase()) {
            case "l":
                turnLeft(rover);
                break;
            case "r":
                turnRight(rover);
                break;
            case "f":
                moveForward(rover);
                break;
            case "b":
                moveBackward(rover);
                break;
        }
    }
    console.log(rover.travelLog); // show the rover's path after each command is executed
};

move(rover, "rffrfflfrff");

//final two bonuses not completed. 