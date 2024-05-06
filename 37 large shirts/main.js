// making a funtion
function make_shirt(size, printmessage) {
    if (size === void 0) { size = "large"; }
    if (printmessage === void 0) { printmessage = "i love typescript"; }
    console.log("creating ".concat(size, " shirt with the ").concat(printmessage, " print on shirt"));
}
//calling function
make_shirt();
// calling a function now with medium size default message
make_shirt("medium");
// calling a funtion now with small size and also diffrent print message
make_shirt("small", "i love javascript");
