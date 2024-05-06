let userNames = ["asim", "asad", "faisal", "admin", "tawaab", "adnan"];

// using foreach loop on array

userNames.forEach(oneUser =>{
    if (oneUser === "admin"){
        console.log(`hello ${oneUser}, whuld you like to see a status report?`)
    }else{
        console.log(`hello ${oneUser},thank you for logging in again.`)
    }
})