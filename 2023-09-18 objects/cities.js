// 1. Sukurti masyvą, kuriame būtų 10 skirtingų miestų. Kiekvienas miestas turi būti objekto tipo ir turi turėti šiuos properties:
//  1.1. name - miesto pavadinimas (string)
//  1.2. population - miesto populiacija (number)
//  1.3. location - (object)
//    1.3.1. continent - žemynas (string)
//    1.3.2. country - šalis (string)
//  1.4. touristAttractions - lankytinos vietos (array)
//  1.5. isCapital - reikšmė nurodanti ar miestas yra sostinė (boolean)

let citiesData = [
  {
    name: "Vilnius",
    population: "544386",
    location: {
      continent: "Europe",
      country: "Lithuania",
    },
    touristAttractions: [
      "Gediminas tower",
      "Cathedral",
      "Three Crosses",
      "Gates of Dawn",
    ],
    isCapital: true,
  },
  {
    name: "Kaunas",
    population: "295269",
    location: {
      continent: "Europe",
      country: "Lithuania",
    },
    touristAttractions: ["Kaunas Castle", "9th Fort of the Kaunas Fortress"],
    isCapital: false,
  },
  {
    name: "London",
    population: "8982000",
    location: {
      continent: "Europe",
      country: "England",
    },
    touristAttractions: [
      "Big Ben",
      "Tower of London",
      "Buckingham Palace",
      "The National Gallery",
      "History Museum",
    ],
    isCapital: true,
  },
  {
    name: "Dublin",
    population: "544107",
    location: {
      continent: "Europe",
      country: "Ireland",
    },
    touristAttractions: [],
    isCapital: true,
  },
  {
    name: "Barcelona",
    population: "1620000",
    location: {
      continent: "Europe",
      country: "Spain",
    },
    touristAttractions: [
      "La Sagrada Familia",
      "Park Güell",
      "Mercado de La Boqueria",
      "Camp Nou Stadium",
      "Magic Fountain of Montjuïc",
      "Picasso Museum",
      "Plaça de Catalunya",
    ],
    isCapital: false,
  },
  {
    name: "Milan",
    population: "1352000",
    location: {
      continent: "Europe",
      country: "Ireland",
    },
    touristAttractions: ["Milan Cathedral"],
    isCapital: false,
  },
  {
    name: "Krakow",
    population: "766683",
    location: {
      continent: "Europe",
      country: "Poland",
    },
    touristAttractions: ["Wawel Castle", "Wieliczka Salt Mine"],
    isCapital: false,
  },
  {
    name: "Berlin",
    population: "3645000",
    location: {
      continent: "Europe",
      country: "Germany",
    },
    touristAttractions: ["Berlin Wall"],
    isCapital: true,
  },
  {
    name: "Stockholm",
    population: "975551",
    location: {
      continent: "Europe",
      country: "Sweden",
    },
    touristAttractions: [],
    isCapital: true,
  },
  {
    name: "Oslo",
    population: "634293",
    location: {
      continent: "Europe",
      country: "Norway",
    },
    touristAttractions: ["Oslo Opera House", "Viking Ship Museum"],
    isCapital: true,
  },
];

function renderCities(cities) {
  let citiesList = document.querySelector("#cities-list");

  cities.forEach((city) => {
    let { name, population, isCapital, touristAttractions } = city;

    let { continent, country } = city.location;

    let cityItem = document.createElement("div");
    cityItem.classList.add("city-item");
    citiesList.append(cityItem);

    let capitalDescriptionText = "";
    let capitalNameText = "";

    if (isCapital) {
      capitalNameText = " (capital)";
      capitalDescriptionText = ` ${name} is the capital of ${country}.`;
      cityItem.classList.add("capital");
    }

    let cityNameElement = document.createElement("h2");
    cityNameElement.textContent = name + capitalNameText;

    let cityDescriptionElement = document.createElement("p");
    cityDescriptionElement.textContent = `${name} city is located in ${continent}, ${country} and has population of ${population} people.${capitalDescriptionText}`;

    cityItem.append(cityNameElement, cityDescriptionElement);

    if (touristAttractions.length > 0) {
      let touristAttractionsWrapper = document.createElement("div");
      touristAttractionsWrapper.classList.add("tourists-attractions-wrapper");

      let touristAttractionsTitle = document.createElement("h3");
      touristAttractionsTitle.textContent = `Main Tourist attractions of ${name} are:`;

      if (touristAttractions.length === 1) {
        touristAttractionsTitle.textContent = `Main Tourist attraction of ${name} is:`;
      }

      let touristAttractionsList = document.createElement("ul");

      touristAttractions.forEach((touristAttraction) => {
        let touristAttractionItem = document.createElement("li");
        touristAttractionItem.textContent = touristAttraction;

        touristAttractionsList.append(touristAttractionItem);
      });

      touristAttractionsWrapper.append(
        touristAttractionsTitle,
        touristAttractionsList
      );

      cityItem.append(touristAttractionsWrapper);
    }
  });
}

renderCities(citiesData);

//  2.1. Panaudojant ciklą, atvaizduoti visus miestus ekrane pagal nurodytą stilių.

function styleCities() {
  //  5.1. Pakeisti visų sostinių teksto spalvą.
  let cityTitles = document.querySelectorAll(".capital h2");
  cityTitles.forEach((title) => {
    title.style.color = "green";
  });

  //  5.2. Pakeisti kas antro miesto fono spalvą.
  let allCities = document.querySelectorAll(".city-item");

  let oddCities = document.querySelectorAll(".city-item:nth-child(odd)");
  oddCities.forEach((city) => {
    city.style.backgroundColor = "#f0f0f0";
  });

  //  5.3. Pakeisti visų lankytinų vietų sąrašo pirmo nario spalvą į žalią.
  //  5.4. Pakeisti visų lankytinų vietų sąrašo paskutinių narių spalvą į raudoną, jeigu narių (lankytinų vietų) yra daugiau nei 3.

  allCities.forEach((city) => {
    let liElements = city.querySelectorAll("li");

    for (let i = 0; i < liElements.length; i++) {
      let color = "black";

      if (i === 0) {
        color = "green";
      } else if (i > 2) {
        color = "red";
      } else {
        color = "orange";
      }

      liElements[i].style.color = color;
    }
  });

  // 6. Miestų plotis turi būti 50%.
  // 6.1. Jeigu miestų skaičius nėra porinis, tai paskutinio miesto plotis turi būti 100%.
  allCities.forEach((city, index) => {
    city.style.padding = "20px";
    city.style.boxSizing = "border-box";

    if (index === allCities.length - 1 && allCities.length % 2 !== 0) {
      city.style.width = "100%";
    } else {
      city.style.width = "calc((100% - 20px) / 2)";
    }
  });

  let citiesList = document.querySelector("#cities-list");

  citiesList.style = `display: flex;
                      flex-wrap: wrap;
                      gap: 20px;`;
}

styleCities();
