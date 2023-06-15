// SHOW CARDS 
function buildHTMLBeerCardList(beersData){
    let hmtlBeersList = "";
    for (let beer of beersData.beers){
        hmtlBeersList += buildHTMLBeerCard(beer);
    }
    return hmtlBeersList;
}
    let contenedorCard = document.getElementById("card-id");
    contenedorCard.innerHTML = buildHTMLBeerCardList(data);
    console.log(data)