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
    
     let menuLength = menu.length;
     for(let i = 0; i < menuLength; i++){
        let drinkOption = document.createElement("option");
        drinkOption.value = menu[i].drinks;
        drinkOption.textContent = menu[i].drinks;

        drinksList.appendChild(drinkOption);
     }
}



//      let selectedDrinkCode = drinksList.value;
//      let selectedDrinks = getDrinks(menu,drinks)
  
// }
// function getDrinks(menu, drinks){
//     let menucount = menu.length;
//     for(let i = 0; i < menucount; i++){
//         if(menu[i].drinks == drinks){
//             return menu[i];
//         }
//     }
//   }
//   return null;