getRandomMeal();
//the below function should post a random recipe in the middle of the homepage


async function getRandomMeal(){
    var resp =await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    var randomMeal =await resp.json();
    console.log(randomMeal);
    
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


//look up the API categories to name the functions 