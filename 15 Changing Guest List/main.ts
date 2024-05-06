// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let guests = ["Ali", "Ahmed", "Sami"];

let dontcome = guests [0];
console.log(dontcome, "dont come to dinner");
guests.splice(0, 1, "Fahad");

guests.forEach(guest => {
    console.log("Dear", guest, "I would like to invite you to dinner");
});