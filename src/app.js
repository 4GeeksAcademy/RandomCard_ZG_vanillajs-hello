import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


/**
 * 
 * @param {Array} values 
 * @returns 
 */
function getRandomFromArray(values){
  let randomIndex = Math.floor(Math.random()*values.length);
  return values[randomIndex];
}

function generateCard(){
  let cardFigures = getRandomFromArray(["♦","♥","♠","♣"]);
  let cardValues = getRandomFromArray(["A", 1,2,3,4,5,6,7,8,9,10, "J","Q", "K"]);
  let cardContainer = document.getElementById("card");
  console.log(cardFigures,cardValues);

  //Top figure generation
  let topFigure = document.createElement("div");
  topFigure.className = "figure";
  if(cardFigures === "♦" || cardFigures === "♥" ){ 
    topFigure.style.color = "red";
  }
  let topFigureContent = document.createTextNode(cardFigures);
  topFigure.appendChild(topFigureContent);

  //Middle value generation
  let middleValue = document.createElement("div");
  middleValue.className = "cardValue";
  let middleValueContent = document.createTextNode(cardValues);
  middleValue.appendChild(middleValueContent);


  //Bottom figure generation
  let bottomFigure = document.createElement("div");
  bottomFigure.className = "invertedFigure";
  if(cardFigures === "♦" || cardFigures === "♥" ){ 
    bottomFigure.style.color = "red";
  }
  let bottomFigureContent = document.createTextNode(cardFigures);
  bottomFigure.appendChild(bottomFigureContent);


  //Populate card Div
  cardContainer.appendChild(topFigure);
  cardContainer.appendChild(middleValue);
  cardContainer.appendChild(bottomFigure);
  
}

window.onload = function() {
  //write your code here
  console.log("Card Generation System Ready");
  generateCard();
};




