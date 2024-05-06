var userNames = ["asim", "asad", "admin", "tawab", "adnan"];
userNames = [];
if (userNames.length === 0) {
    console.log("your array in empty we need for find same users!");
}
else {
    userNames.forEach(function (oneUser) {
        if (oneUser === "admin") {
            console.log("hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("hello ".concat(oneUser, ", thank you for loging in again."));
        }
    });
}
