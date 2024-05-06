function makeSandwich(...items: string[]){
    console.log("make a sandwich with the following items");
    
    items.forEach(singleItem => console.log(singleItem));

    console.log("nhow enjoy sandwich");
}

// call to function 3 items with 3 different number of arguments
makeSandwich("chicken", "cheese", "mayo", "egg");

makeSandwich("bread", "butter");

makeSandwich("bread", "butter", "mayo", "egg", "lettuce");