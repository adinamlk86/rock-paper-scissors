function computerPlay(){
    const options = ["rock", "paper", "scissors"]
    return options[Math.floor(Math.random() * options.length)]
}

console.log(computerPlay())