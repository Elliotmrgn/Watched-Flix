var APIkey = "c7c31d94";
var queryURL = "https://www.omdbapi.com/?s=movie&page=1&apikey=trilogy"
var movieData = []
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    movieData = response.Search;
    console.log(movieData);
    for (var i = 0; i < movieData.length; i++) {
        var movieCards = $('.movie-cards');
        var movieCard = $('<div class="card" style="width: 18rem;">');
        movieCard.html('<img class="card-img-top" id="movie-image" src="' + movieData[i].Poster + '" alt="Card image cap"><div class="card-body"><h2 class="card-text">'+movieData[i].Title+'</h2></div>');
        movieCards.append(movieCard);
    }
})


/* function makeCard() {

}


makeCard();
 */
