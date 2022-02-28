fetch('../assets/json/recipes.js')
.then(response => {
    console.log(response)
    return response.blob()
})
.then(recettes => {
    const recetteURL = URL.createObjectURL(recettes)
    console.log(recettes)
})