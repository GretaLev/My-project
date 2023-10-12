const posts = [
  {
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
  {
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  },
  {
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
  },
  {
    id: 6,
    title: "dolorem eum magni eos aperiam quia",
    body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
  },
  {
    id: 7,
    title: "magnam facilis autem",
    body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
  },
  {
    id: 8,
    title: "dolorem dolore est ipsam",
    body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
  },
  {
    id: 9,
    title: "nesciunt iure omnis dolorem tempora et accusantium",
    body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
  },
  {
    id: 10,
    title: "optio molestias id quia eum",
    body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
  },
  {
    id: 11,
    title: "et ea vero quia laudantium autem",
    body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
  },
  {
    id: 12,
    title: "in quibusdam tempore odit est dolorem",
    body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio",
  },
  {
    id: 13,
    title: "dolorum ut in voluptas mollitia et saepe quo animi",
    body: "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam",
  },
  {
    id: 14,
    title: "voluptatem eligendi optio",
    body: "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum",
  },
  {
    id: 15,
    title: "eveniet quod temporibus",
    body: "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae",
  },
  {
    id: 16,
    title:
      "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
    body: "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta",
  },
  {
    id: 17,
    title: "fugit voluptas sed molestias voluptatem provident",
    body: "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo",
  },
  {
    id: 18,
    title: "voluptate et itaque vero tempora molestiae",
    body: "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam",
  },
  {
    id: 19,
    title: "adipisci placeat illum aut reiciendis qui",
    body: "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas",
  },
  {
    id: 20,
    title: "doloribus ad provident suscipit at",
    body: "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo",
  },
  {
    id: 21,
    title: "asperiores ea ipsam voluptatibus modi minima quia sint",
    body: "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt",
  },
  {
    id: 22,
    title: "dolor sint quo a velit explicabo quia nam",
    body: "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse",
  },
  {
    id: 23,
    title: "maxime id vitae nihil numquam",
    body: "veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis",
  },
  {
    id: 24,
    title: "autem hic labore sunt dolores incidunt",
    body: "enim et ex nulla\nomnis voluptas quia qui\nvoluptatem consequatur numquam aliquam sunt\ntotam recusandae id dignissimos aut sed asperiores deserunt",
  },
  {
    id: 25,
    title: "rem alias distinctio quo quis",
    body: "ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio",
  },
];
console.log(posts);
// 7. Naudojant posts masyvą, atlikti žemiau nurodytas užduotis ir atsakymus išvesti į konsolę. Visoms užduotis kurti funkciją ir jai, kaip parametrą, paduoti nurodytą masyvą.
function getPosts(array) {
  console.log(array);
}

// 7.1. Gauti pirmo masyvo nario reikšmę.
getPosts(posts[0]);

// 7.2. Gauti paskutinio masyvo nario reikšmę.
getPosts(posts[24]);

// 7.3. Gauti 15 masyvo nario reikšmę.
getPosts(posts[14]);

// // 7.4. Gauti 13 masyvo nario reikšmę skaičiuojant nuo galo.
getPosts(posts.slice(-13, 13));

// // 7.5. Gauti vidurinio masyvo nario reikšmę.
function task75(array) {
  let middle = array.length / 2;
  let task75 = array.slice(middle, middle + 1);
  console.log(task75);
}
task75(posts);
// // 7.6. Gauti pirmų keturių masyvo narių reikšmes.

getPosts(posts.slice(0, 4));
// // 7.7. Gauti paskutinių penkių masyvo narių reikšmes.
getPosts(posts.slice(-5, 25));

// // 7.8. Gauti nuo penkto iki penkiolikto masyvo narių reikšmes.
getPosts(posts.slice(4, 15));

// // 7.9. Gauti kas antro masyvo nario reikšmes.
function task79(array) {
  for (let i = 0; i < posts.length; i++) {
    console.log(array[i++]);
  }
}
task79(posts);

// // 7.10. Gauti pirmo ir paskutinio masyvo narių reikšmes.
function firstLast(array) {
  let first = array.slice(0, 1);
  let last = array.slice(-1);
  let firstAndLast = first.concat(last);
  console.log(firstAndLast);
}
firstLast(posts);

// // 7.11. Gauti pirmą masyvo narį ir į konsolę išvesti jo property "title" reikšmę.
getPosts(posts[0].title);

// 7.12. Gauti antrą masyvo narį ir į konsolę išvesti jo property "body" reikšmę.

getPosts(posts[1].body);
// 7.13. Gauti trečią masyvo narį ir į konsolę išvesti jo property "title" ir "body" reikšmes tokiu formatu: Post title is: 'post title' and the content is: 'post content'.

function task713(array) {
  console.log(array[2]);
  console.log(
    `Post title is: ${array[2].title} and the content is: ${array[2].body}`
  );
}
task713(posts);

// 7.14. Išvesti visus masyvo narius į konsolę.
function task714(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array);
  }
}
task714(posts);
// 7.15. Išvesti visų masyvo narių property "title" į konsolę.
function task715(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i].title);
  }
}
task715(posts);

// 7.16. Išvesti visų masyvo narių property "body" į konsolę.
function task716(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i].body);
  }
}
task716(posts);

// 7.17. Išvesti visų masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".
function task717(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`Title: ${array[i].title}. Content is: ${array[i].body}.`);
  }
}
task717(posts);

// 7.18. Išvesti pirmų keturių masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".
// function task718(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(array.slice(0, 4));
//   }
// }
// task718(posts);

// 7.19. Išvesti paskutinių septynių masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".
// function task719(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(array.slice(-7, -6));
//   }
// }
// task719(posts);
// 7.20. HTML faile sukurti ul elementą ir kiekvieną masyvo nario property "title" reikšmę, kaip li elementą, išvesti į ul elementą.

function task720(array) {
  for (let i = 0; i < array.length; i++) {
    let ul720 = document.querySelector("#task720");
    let li720 = document.createElement("li");
    li720.textContent = array[i].title;
    ul720.append(li720);
  }
}
task720(posts);

// 7.21. HTML faile sukurti ul elementą ir kiekvieną masyvo nario property "title" ir "body" išvesti tokiu formatu: Title: "post title". Content: "post content".
function task721(array) {
  for (let i = 0; i < array.length; i++) {
    let ul721 = document.querySelector("#task721");
    let li721 = document.createElement("li");
    li721.textContent = `Title: ${array[i].title}. Content: ${array[i].body}`;
    ul721.append(li721);
  }
}
task721(posts);

// 7.22. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas prasideda raide "s".

posts.forEach(function (array) {
  if (array.title[0] === "s") {
    let ul722 = document.querySelector("#task722");
    let li722 = document.createElement("li");
    li722.textContent = `Title: ${array.title}. Content is: ${array.body}`;
    ul722.append(li722);
  }
});

// 7.23. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas baigiasi "t" arba "m".
posts.forEach(function (array) {
  if (
    array.title.charAt(array.title.length - 1) === "t" ||
    array.title.charAt(array.title.length - 1) === "m"
  ) {
    let ul723 = document.querySelector("#task723");
    let li723 = document.createElement("li");
    li723.textContent = `Title: ${array.title}. Content is: ${array.body}`;
    ul723.append(li723);
  }
});

// 7.24. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas turi daugiau simbolių nei 15

posts.forEach(function (array) {
  if (array.title.length > 15) {
    let ul724 = document.querySelector("#task724");
    let li724 = document.createElement("li");
    li724.textContent = `Title: ${array.title}. Content is: ${array.body}`;
    ul724.append(li724);
  }
});
// 7.25. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas turi mažiau simbolių nei 20 ir kurių "body" turi daugiau simbolių nei 50.

posts.forEach(function (array) {
  if (array.title.length < 20 && array.body.length > 50) {
    let ul725 = document.querySelector("#task725");
    let li725 = document.createElement("li");
    li725.textContent = `Title: ${array.title}. Content is: ${array.body}`;
    ul725.append(li725);
  }
});

// 7.26. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas turi tarp 20 ir 30 simbolių ir kurių "body" turi tarp 70 ir 130 simbolių.

posts.forEach(function (array) {
  if (
    (array.title.length =
      array.title.length > 20 &&
      array.title.length < 30 &&
      array.body.length(array.body.length > 70 && array.body.length < 130))
  ) {
    let ul726 = document.querySelector("#task726");
    let li726 = document.createElement("li");
    li726.textContent = `Title: ${array.title}. Content is: ${array.body}`;
    ul726.append(li726);
  }
});

// 7.27. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas turi simbolių junginį "it", o "body" turi simbolių junginį "quo".
// 7.28. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių "body" turi žodį "sit". Jeigu žodis turi šį simbolių junginį, tačiau tai nėra pilna jo reikšmė (pvz. žodžiai "sitto" ar "quasit"), jie neturėtų būti atvaizduojami.
// 7.29. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas turi daugiau nei 3 "a" raides, o "body" turi mažiau nei 7 "o" raides.

// 7.30. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti visų masyvo narių pavadinimus surūšiuotus nuo mažiausiai iki daugiausiai raidžių "body" property turinčių narių. Papildomai, prie išvesto teksto pridėti ir "body" raidžių skaičių.
