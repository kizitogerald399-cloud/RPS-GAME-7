 const choiceButtons = document.querySelectorAll('.button');// for all the buttons
 const result= document.querySelector('.result');// for the main div that encloses the hidden part
 const playerChoices = document.querySelector('.player-choice');// where the image for the user will sit
 const gameBoard = document.querySelector('.grid');//the first container with a triangle
 const houseChoice = document.querySelector('.house-choice');// where the image for computer move sits 

 const choices = ['rock', 'paper', 'scissors'];

    choiceButtons.forEach(button => {
   button.addEventListener("click", () => {
     const playerChoice = button.id;
     console.log(playerChoice);

     gameBoard.classList.add('hidden');
     result.classList.remove('hidden');
  

   playerChoices.innerHTML = `<div> <img src="images/icon-${playerChoice}.svg" alt="${playerChoice}"></div>`; 

   houseChoice.innerHTML = `<div class="empty-space" style="background-color:black;"></div>`;

   setTimeout(()=>{
  const houseChoices = choices[Math.floor(Math.random()*3)];

  houseChoice.innerHTML = `
  <div class="buton ${houseChoices}"> <img src="images/icon-${houseChoices}.svg" alt="${houseChoices}">
  </div>`;
    }, 1500);
   });
});

  

  /*
  houseChoice.innerHTML = `
  <div class="button ${houseChoices}"> <img src="images/icon-${houseChoices}.svg" alt="${houseChoices}">
  </div>`;

 playerChoices.innerHTML = `<div class="button ${playerChoice}"> <img src="images/icon-${playerChoice}.svg" alt="${playerChoice}"></div>`; 
   houseChoice.innerHTML = `<div class="empty-space"></div>`;
*/
 
 
 
 
 
 
 
 
 
 
 
 
 