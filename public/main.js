const dropdown = document.querySelector("#dropdown");
const btnRetrieve = document.querySelector("#btnRetrieve");
const span = document.querySelector("#span");
const table = document.querySelector("#bootcampers");
const congratsSpan = document.querySelector(".congrats")
//using the fetch api
//in the submit function I will use a fetch api to send a request to the server (port)
async function submit() {
  const id = dropdown.value;
  let test = await fetch(`http://localhost:5000/bootcampers/${id}`, {
    method: "PATCH",
  }).then((res) => res.json()); //.then is a function which takes a callback
  console.log(test);
  let text = document.createElement("h3")
  text.innerText = "Cograrts"
  congratsSpan.appendChild(text)
}

//get the player through query string through express + bootcampers/incrementScore/id

//Alert when name is chosen
function bootcamperName(val) {
  alert(val);
}

//add a congrats text upon submit
// function addText(){
    
//     return newText
// }

//link getAllBootcampers() to btnRetrieve
const dataValues = async function () {
  let display = await fetch(`http://localhost:5000/bootcampers`).then((res) =>
    res.json()
  );

  let trName = document.createElement("tr");
  let thId = document.createElement("th")
  let thPlayer = document.createElement("th")
  let thScore = document.createElement("th")
  
  thId.innerText = "ID";
  thPlayer.innerText = "PLAYER";
  thScore.innerText = "SCORE";

    trName.appendChild(thId);
    trName.appendChild(thPlayer);
    trName.appendChild(thScore);

    table.appendChild(trName);

  let data = display.payload;
  for (let i = 0; i < data.length; i++) {
    const { id, player, score } = data[i];
    console.log(id);
    console.log(player);
    console.log(score);

    let tr = document.createElement("tr");
    let tdId = document.createElement("td");
    let tdPlayer = document.createElement("td");
    let tdScore = document.createElement("td");

    tdId.innerText = id;
    tdPlayer.innerText = player;
    tdScore.innerText = score;

    tr.appendChild(tdId);
    tr.appendChild(tdPlayer);
    tr.appendChild(tdScore);

    table.appendChild(tr);
  }
};

// create html table
// create columns
// create rows that contains the data (this needs to happen within the for loop)

// function displayBootcampers(){

// }
