let moviesList = document.querySelector(".movies-list");

fetch("movies.json")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      let moviesItem = document.createElement("div");
      moviesItem.classList.add("movies-item");
      moviesList.append(moviesItem);
      let movieTitle = document.createElement("h2");
      movieTitle.style.color = "blue";
      movieTitle.textContent = data[i].movie;

      moviesItem.append(movieTitle);
      let description = document.createElement("p");
      description.style.fontSize = "20px";
      description.innerHTML = `<strong>Movie description:</strong> ${data[i].description}`;
      moviesItem.append(description);
      //Actors ul element
      let mainActors = document.createElement("h3");
      mainActors.textContent = `Main actors:`;
      moviesItem.append(mainActors);
      let mainActorsUlElement = document.createElement("ul");
      moviesItem.append(mainActorsUlElement);

      //Actors array
      data[i].actors.forEach((item) => {
        let mainActorsLiElement = document.createElement("li");
        mainActorsLiElement.textContent = item;
        mainActorsUlElement.append(mainActorsLiElement);
      });
      //Genres ul element
      let mainGenres = document.createElement("h3");
      mainGenres.textContent = `Main genres:`;
      moviesItem.append(mainGenres);
      let mainGenresUlElement = document.createElement("ul");
      moviesItem.append(mainGenresUlElement);

      //   //   Genres array
      data[i].genre.forEach((item) => {
        let mainGenresLiElement = document.createElement("li");
        mainGenresLiElement.textContent = item;
        mainGenresUlElement.append(mainGenresLiElement);
      });

      //Director
      let director = document.createElement("h3");
      director.textContent = `Movie Director: ${data[i].director}`;
      moviesItem.append(director);
    }
  });
