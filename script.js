var APIkey = "c7c31d94";
var page = 1;
var movieData = []
for (var p = 0; p < 10; p++) {
var queryURL = "https://www.omdbapi.com/?s=movie&page="+page+"&apikey=trilogy"
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    movieData = response.Search;
    console.log(response);
    console.log(movieData);
    for (var i = 0; i < movieData.length; i++) {
        var movieCards = $('.movie-cards');
        var movieCard = $('<div class="card" style="width: 18rem;">');
        movieCard.html('<img class="card-img-top" id="movie-image" src="' + movieData[i].Poster + '" alt="Card image cap"><div class="card-body"><h2 class="card-text">'+movieData[i].Title+'</h2></div>');
        movieCards.append(movieCard);
    }
})
page++;
}


/* function makeCard() {

}


makeCard();
 */
