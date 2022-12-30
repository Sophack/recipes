var meals = document.getElementById("meals");//calling the random meal function 
//the below function should post a random recipe in the middle of the homepage

getRandomMeal(); 

async function getRandomMeal(){
    var resp =await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    var respData =await resp.json();
    var randomMeal= respData.meals[0];
    

    addMeal(randomMeal, true);
    
}


//this function will look up full meals by their ID (replaced i= with +id)
async function getMealById(id){
    var meal = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' +id); 
}
//set up the functions first and then add the variables needed 
//the below function will search meals by their name (replaced the s= with +term)
async function getMealsBySearch(term){
    var meals = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' +term);
}
//below is a function to add another meal
//getting mealData and the random condition being false 
function addMeal (mealData, random = false) {
    var meal = document.createElement('div'); //creating a div under meal
    meal.classList.add('meal');

    meal.innerHTML = `
    <div class="meal-header">
    ${random ? `
    <span class="random">
      Random Recipe
    </span>` :""}  
      <img src="${mealData.strMealThumb}"
       alt="${mealData.meal}"/>
    </div>
    <div class="meal-body">
      <h4>${mealData.strMeal}</h4>
    <button class="fav-btn active">
      <i class="far fa-heart"></i>
    </button>
    </div>`;}

var btn = meal.querySelector(".meal-body .fav-btn");

btn.addEventListener("click", () => {
    //if the button is active, then we want to remove the meal from local storage
    //if we dont have the active class then we want to add it 
    if(btn.classList.contains('active')){
      removeMealsFromLS(mealData.idMeal)
      btn.classList.remove("active");
    }else{
      addMealToLS(mealData.idMeal)
      btn.classList.add("active")}
    });

    meals.appendChild(meal);


// //function below to add meal into local storage

// function addMealToLS(mealId){
//   var mealIds = getMealsFromLS();
//   localStorage.setItem('mealIds', JSON.stringify ([...mealIds, mealId]));
// };
// //need to filter by ID that is different from meal ID 
// //function below to remove meal from local storage 
// function removeMealsFromLS(mealId){
//   var mealIds = getMealsFromLS();
//   localStorage.setItem('mealIds', JSON.stringify (mealIds.filter((id) => id !== mealId)));
// };



// function getMealsFromLS() {
//   var mealIds = JSON.parse(localStorage.getItem("mealIds"));
//   return mealIds == null ? [] : mealIds;
  
// }
