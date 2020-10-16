const dropdown = document.querySelector("#dropdown");
const btnRetrieve = document.querySelector("#btnRetrieve");

//using the fetch api
//in the submit function I will use a fetch api to send a request to the server (port)
async function submit(){
    const id = dropdown.value;
    let test = await fetch(`http://localhost:5000/bootcampers/${id}`, {method: "PATCH"}).then( res => res.json()) //.then is a function which takes a callback
    console.log(test)
}


//get the player through query string through express + bootcampers/incrementScore/id


//Alert when name is chosen
function bootcamperName(val){
    alert(val)
}

//link getAllBootcampers() to btnRetrieve
const dataValues = async function (){
        let display = await fetch(`http://localhost:5000/bootcampers`).then( res => res.json())
        let data = display.payload.rows
        for (let i = 0; i < data.length; i++){
            const {
            id,
            player,
            score,
            imageUrl
        } =  data = display.payload.rows[i]
        console.log(id)
        console.log(player)
        console.log(score)
        }        
;}

// function displayBootcampers(){

// }
