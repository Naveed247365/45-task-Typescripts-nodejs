// define tha function to show names

function show_magicitans(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// function to make magicitans great through .map() is will modify array
function make_great(magicians:string[]){
   return magicians.map(name => `The Great ${name}`);
}

// define an array of magicians names
let magician_names = ["Herry Poter", "Asad", "Asim"];

// making a copy of orignal array though .slice() function
let copy_magicitan_names = magician_names.slice();

//modifiy the copied array to include "The Great" with thier names
let copy_great_magicians = make_great(copy_magicitan_names);

// show both arrays original and copied

//original 
console.log("original arrays")
show_magicitans(magician_names);

//copied
console.log("copied arrays")
show_magicitans(copy_great_magicians);