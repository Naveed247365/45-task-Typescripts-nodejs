// making a funtion

function make_shirt (size: string = "large", printmessage: string = "i love typescript"){
    console.log(`creating ${size} shirt with the ${printmessage} print on shirt`)
}

//calling function
make_shirt()

// calling a function now with medium size default message

make_shirt("medium")

// calling a funtion now with small size and also diffrent print message

make_shirt("small", "i love javascript")