var userNames = ["asim", "asad", "faisal", "admin", "tawaab", "adnan"], 
// using foreach loop on array
any = userNames.forEach(function (oneUser) {
    if (oneUser === "admin") {
        console.log("hello ".concat(oneUser, ", whuld you like to see a status report?"));
    }
    else {
        console.log("hello ".concat(oneUser, ",thank you for logging in again."));
    }
});
