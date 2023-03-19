let input = document.getElementById("recherche_principale_input");

input.addEventListener("keyup" , event => {
    let substring = input.value;
    if (substring.length >= 3){
        researchByKeyWord = true;
        //newRecipesByKeyword = findSubstringInRecipes(newRecipes, substring);
        console.time("TimeMN :")
        newRecipesByKeyword = findSubstringInRecipesNAtive(recipes, substring); 
        console.timeEnd("TimeMN :")
        if(researchByfiltre == false){
            displayData(newRecipesByKeyword);
        }else{
            displayData(intersectionNative(newRecipes, newRecipesByKeyword));
        }  
    }
    if(substring.length == 0){
        researchByKeyWord = false;
        newRecipesByKeyword = [];
        displayData(newRecipes);
    }
});

function findSubstringInRecipesNAtive(recipes, substring){
    let newRecipesByKeyword = [];
    for(let i = 0 ; i < recipes.length ; i++){
        if(recipes[i].name.toLowerCase().includes(substring.toLowerCase())  || recipes[i].description.toLowerCase().includes(substring.toLowerCase())){
            newRecipesByKeyword.push(recipes[i]);
        }else{
            let trouve = false;
            let j = 0;
            while(trouve == false && j < recipes[i].ingredients.length){
                if(recipes[i].ingredients[j].ingredient.toLowerCase().includes(substring.toLowerCase())){
                    newRecipesByKeyword.push(recipes[i]);
                    trouve = true;
                }
                j++;
            }
        }
    }
    //console.log(newRecipesByKeyword);
    return newRecipesByKeyword;
}

function intersectionNative(filtredRecipes,keywordRecipes){
    let intersection = [];
    for( let i = 0 ; i < filtredRecipes.length ; i++) {
       let trouve = false;
            let j = 0;
            while(trouve == false && j < keywordRecipes.length){
                if(filtredRecipes[i].name == keywordRecipes[j].name ){
                    intersection.push(filtredRecipes[i]);
                    trouve = true;
                }
                j++;
            }
    }
    return intersection;
}