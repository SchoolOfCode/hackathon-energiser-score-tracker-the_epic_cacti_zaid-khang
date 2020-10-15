//using the fetch api
//in the submit function I will use a fetch api to send a request to the server (port)
async function submit(){
    let test = await fetch("http://localhost:5000/bootcampers").then( res => res.json()) //.then is a function which takes a callback
    console.log(test)
}


//get the player through query string through express + bootcampers/incrementScore/id