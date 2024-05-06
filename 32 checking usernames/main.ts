let current_users = ["asad","asim","adnan","tawab"];

let new_users = ["faisal","Asad","fahad","jahanziab"];

new_users.forEach(new_one_user => {
    let our_canditiom = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    if(our_canditiom){
        console.log(`sorry ${new_one_user} is already taken!`)
    }else {
        console.log(`this username ${new_one_user} is availble`)

    }
})