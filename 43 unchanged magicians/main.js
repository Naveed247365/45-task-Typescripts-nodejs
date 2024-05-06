// define tha function to show names
function show_magicitans(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// function to make magicitans great through .map() is will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// define an array of magicians names
var magician_names = ["Herry Poter", "Asad", "Asim"];
// making a copy of orignal array though .slice() function
var copy_magicitan_names = magician_names.slice();
//modifiy the copied array to include "The Great" with thier names
var copy_great_magicians = make_great(copy_magicitan_names);
// show both arrays original and copied
//original 
console.log("original arrays");
show_magicitans(magician_names);
//copied
console.log("copied arrays");
show_magicitans(copy_great_magicians);
