// // // Your code here

var movieList=document.getElementById("film_item")
var title=document.getElementById("title")
var runtime=document.getElementById("runtime")
var description=document.getElementById("film_info")
var showtime=document.getElementById("showtime")
var remTickets=documents.getElementById("ticket-num")

 //fetching data
function fetchMovieData(id=1){
    fetch(`http://localhost:3000/films/${id}`)
    .then((response)=>response.json()
    .then(data=>{firstMovie(data)}
    ))

    // displays the first movie on the webpage
}
function firstMovie(data){
    poster.src = data.poster;
    title.innerText = data.title;
    runtime.innerText = data.runtime + ' minutes';
    showtime.innerText = data.showtime;
    remTickets.innerText=(data.capacity-data.tickets_sold)
}
// displays the other available movies on the side
function otherMovies(data){
    fetch('http://localhost:3000/films')
    .then(respond=>respond.json())
    .then(data =>{
        data.forEach(film => {
            var filmItem=document.createElement("li")
            filmItem.textContent=film.title
            movieList.append(filmItem)
            filmItem.addEventListener("click",e=>{
                e.preventDefault()
                firstMovie(film)
            })
            
        });
    })
}
// the function below will keep track of remaining movie tickets
function movieTickets(remTickets){
    buyTicketBtn.addEventListener("click",e=>{
        e.preventDefault()
        if(remTickets>0){
            remTickets -=1
            return remTickets.innerText=remTickets
        }
        else if(remTickets<=0){
            remTickets.innerText="Movie Sold Out!"
        }
    })
}
fetchMovieData()
otherMovies()
