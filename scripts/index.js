"use strict";

window.onload = init;

const menu = {
    drinks : [
     "Water", "Tea", "Sweet Tea", 
     "Coke", "Dr. Pepper", "Sprite"
     ],
    entrees : [
    "Hamburger w/ Fries", 
     "Grilled Cheese w/ Tater Tots",
    "Grilled Chicken w/ Veggies", 
     "Chicken Fried Steak w/ Mashed Potatoes",
    "Fried Shrimp w/ Coleslaw", 
     "Veggie Plate"
    ],
    desserts: [
     "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
     ]
    };


function init() {
 fillDropdownDrinks();
//  const selectbtn = document.getElementById("selectbtn");
//  selectbtn.onclick = selectbtnOnClick;
//  // other events handlers connected here
}
  
function fillDropdownDrinks(){

    const drinksList = document.getElementById("drinksList");
    let selectDrinkOption = document.createElement("option");
    selectDrinkOption.value = "";
    selectDrinkOption.textContent = "Select a Drink ..";
    drinksList.appendChild(selectDrinkOption);
    
    
    let drinksLength = getDrinksFromCode(drinks)
    for(let i = 0 ; i < drinksLength; i++){
        let newOption = document.createElement("option");
        newOption.value = drinksLength[i].code;
        newOption.textContent = drinksLength[i].drinks;

        drinksList.appendChild(newOption);
    }
}
function getDrinksFromCode(menu, drinks){
        let menucount = menu.length;
        for(let i = 0; i < menucount;  i++){
         if(menu[i].drinks== drinks){
             return menu[i];
            }
     }
     return null;
        }

//    function selectbtnOnClick(){
//     const footballTeamsList = document.getElementById("footballTeamsList");
//      let selectedTeamCode = footballTeamsList.value;
//     let selectedTeam = getTeamFromCode(teams, selectedTeamCode);

//     let message = `You selected the ${selectedTeam.name} (${selectedTeam.code}) who play in ${selectedTeam.plays}`;
//     const teamInformation = document.getElementById("teamInformation");
//     teamInformation.innerHTML = message;

//    }
//    function getTeamFromCode(teams, code){
//     let teamscount = teams.length;
//     for(let i = 0; i < teamscount;  i++){
//         if(teams[i].code == code){
//           return teams[i];
//         }
//     }
//     return null;
//    }