var current_users = ["asad", "asim", "adnan", "tawab"];
var new_users = ["faisal", "Asad", "fahad", "jahanziab"];
new_users.forEach(function (new_one_user) {
    var our_canditiom = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_canditiom) {
        console.log("sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("this username ".concat(new_one_user, " is availble"));
    }
});
