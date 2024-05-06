// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner
var guests = ["Ali", "Ahmed", "Fahad"];
guests.push("Hamza");
guests.unshift("Asad");
guests.splice(2, 0, "Zahid");
console.log(guests);
console.log("good news ! we have found a bigger table for dinner");
// Add one new guest to the beginning of your array
// Add one new guest to the middle of your array
// Use append() to add one new guest to the end of your list
// Print a new set of invitation messages, one for each person in your list
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ", I would like to invite you to dinner at my house."));
}
console.log("Sorry, we can only invite two people for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry ".concat(removedGuest, ", you are not invited to dinner."));
}
