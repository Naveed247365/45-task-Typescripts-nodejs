// creating a guest list arey
let guestList = ["Ali", "Hamza", "Ahmed", "Naveed"];

//making veriable of those guest who cent come
let dontcome = guestList[0];

//print the name of guest who cent come
console.log(dontcome, "can't come to dinner");

//add or remove value form guest arrey
guestList.splice(0, 1, "Zain");

//message print for bigger table 
console.log("I have found a bigger table");

//add new guest to guest list
guestList.unshift("Zubair");

//add new guest to guest list
guestList.push("Hassan");

//making a variable for storing a middle index of our guest list arrey
let middleIndex = Math.floor(guestList.length / 2);

//adding a new new guest to middle index of arrey
guestList.splice(middleIndex, 0, "Shahid");

//printing a message of updated list
console.log("Updated Guest List:");

//printing a list of updated guest list
guestList.forEach((guest) => {
  console.log("Dear", guest, ", you are cordially invited to dinner.");
});
// inform that only two guest can be invited for dinner
console.log("Only two guests can be invited for dinner.");

//removing guests from the list until only two guests remain
//
while (guestList.length > 2) {
  let removedGuest = guestList.pop();
  console.log("Sorry,", removedGuest, "you are not invited to dinner.");
}

// 
console.log("Final Guest List:");
guestList.forEach((guest) => 
  console.log("Dear", guest, ", you are cordially invited to dinner."))
  