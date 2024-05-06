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

// call make_great function to modify maficians names
let great_magicians = make_great(magician_names);

// cll show_magicians that show modified list of magicians
show_magicitans(great_magicians)