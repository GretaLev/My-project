let moviesList = document.querySelector(".movies-list");

fetch("movies.json")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      let moviesItem = document.createElement("div");
      moviesItem.classList.add("movie-item");
      moviesList.append(moviesItem);
      let movieTitle = document.createElement("h2");
      movieTitle.textContent = data[i].movie;
      moviesItem.append(movieTitle);
      let description = document.createElement("p");
      description.textContent = `Movie description: ${data[i].description}`;
      moviesItem.append(description);
      let mainActors = document.createElement("p");
      mainActors.textContent = `Main actors: ${data[i].actors}`;
      moviesItem.append(mainActors);
      let moviesInfo = document.createElement("p");
      moviesInfo.textContent = `Movie was released in ${data[i].released} by Director ${data[i].director}. Movie genre is ${data[i].genre} and is rated ${data[i].rate}.`;
      moviesItem.append(moviesInfo);
    }
  });
