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
// call make_great function to modify maficians names
var great_magicians = make_great(magician_names);
// cll show_magicians that show modified list of magicians
show_magicitans(great_magicians);
