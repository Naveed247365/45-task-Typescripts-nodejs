function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("make a sandwich with the following items");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("nhow enjoy sandwich");
}
// call to function 3 items with 3 different number of arguments
makeSandwich("chicken", " cheese", "mayo", "egg");
makeSandwich("bread", "butter");
makeSandwich("bread", "butter", "mayo", "egg", "lettuce");
