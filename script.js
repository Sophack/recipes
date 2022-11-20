var meals = document.getElementById("meals");
getRandomMeal();
//the below function should post a random recipe in the middle of the homepage


async function getRandomMeal(){
    var resp =await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    var respData =await resp.json();
    var randomMeal= respData.meals[0];
    console.log(randomMeal);

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
    var meal = document.createElement('div');
    meal.classList.add('meal');

    meal.innerHTML = `
    <div class="meal">
    ${random ? `
    <span class="random">
      Random Recipe
    </span>` :""}
    <div class="meal-header">
      <img src="${mealData.strMealThumb}"
       alt="${mealData.meal}"/>
    </div>
    <div class="meal-body">
      <h4>${mealData.strMeal}</h4>
    <button class="fav-btn active">
      <i class="far fa-heart"></i>
    </button>

    
  </div>
</div>`;
var btn = meal.querySelector(".fav-btn");

btn.addEventListener("click", () => {
    btn.classList.toggle("active");
});

    meals.appendChild(meal);
}



//calling the variable meals & appending from the ID so it will show up
