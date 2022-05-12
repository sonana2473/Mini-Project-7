let imgMars;
let imgSaturn;
let imgEarth;
let imgVenus;
let imgMercury;
let imgJupiter;
let imgUranus;
let imgNeptune;
let imgFinal;
let earthAngle = 0;
let numberOfImages = 3;
let cA1, cA2, cA3;
let c1, c2, c3;
let myFont;
let sel;

function preload() {
  for (let i = 0; i < numberOfImages; i++) {
    imgFinal = loadImage("assets/empty.png");
    imgMars = loadImage(
      "https://uploads-ssl.webflow.com/5a621bf894d1cf000155a6d3/5d00f3bcec96461bc92c5472_opmbuilder_opm_mars_colour_celestia_20190612143601.png"
    );
    imgSaturn = loadImage(
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1912b050-3675-4394-a3d1-d0b4cb43ae0a/ddeq42t-e150d2ad-e6cb-46e6-9a4e-a908d9a170bb.png/v1/fill/w_1280,h_640,q_80,strp/saturn_texture_map__fictional_rework__by_magentameteorite_ddeq42t-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQwIiwicGF0aCI6IlwvZlwvMTkxMmIwNTAtMzY3NS00Mzk0LWEzZDEtZDBiNGNiNDNhZTBhXC9kZGVxNDJ0LWUxNTBkMmFkLWU2Y2ItNDZlNi05YTRlLWE5MDhkOWExNzBiYi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LGF7FBdknIVE7_swXfEFe__n-IF6D2IXNWk4fjPE8Oo"
    );
    imgEarth = loadImage(
      "https://as2.ftcdn.net/v2/jpg/02/24/14/81/1000_F_224148194_xrGaLP6RZbCL7B3vOMYYr2dVrcg95RFt.jpg"
    );
    // imgVenus = loadImage(
    //   "https://www.centraldatacore.com/wp-content/uploads/PT2-Venus-3DP-Map.jpg"
    // );
    // imgMercury = loadImage(
    //   "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Solarsystemscope_texture_2k_mercury.jpg/640px-Solarsystemscope_texture_2k_mercury.jpg"
    // );
    // imgJupiter = loadImage(
    //   "https://planetary.s3.amazonaws.com/web/assets/pictures/20181107_hlsp_opal_hst_wfc3-uvis_jupiter-2017a_color_globalmap2.jpg"
    // );
    // imgUranus = loadImage(
    //   "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwsIBwcHBwkQBwYHBhYPBgcHCA8ICQcWFREWFhUREx8YHCggGBolGxMTITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NFQ0NFysdHx0rKysrKysyLSsrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAJ8BPgMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAgMBBAf/xAAWEAEBAQAAAAAAAAAAAAAAAAAAERL/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQUE/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+jAOplODrgAAAAAAAAAAAAA6AAAAA4OuAAAAAAAAAAAAADoAADsIuEBEIuEBEIuEBEIuEBEIuEBEIuEBEIuEBEIuEBEIuEBEIuEBEIuEBEIuEBEIuEBEIuEBEIuEBEIuEBEIuEBEIuEBEIuEBEIuEBQmlEUJpQUJpQUJpQUJpQUJpQUJpQUJpQUJpQUJpQUJpQUJpQUJpQUJpQUJpQUJpQUJpQUJpQUJpQUJpQRSs6UVpSs6UGlKzpQaUrOlBpSs6UGlKzpQaUrOlBpSs6UGlKzpQaUrOlBpSs6UGlKzpQaUrOlBpSs6UGlKzpQaUrOlBpSs6UGlKzpQaUrOlBpSs6UE0qaUVVKmlBVKmlBVKmlBVKmlBVKmlBVKmlBVKmlBVKmlBVKmlBVKmlBVKmlBVKmlBVKmlBVKmlBVKmlBVKmlBVKmlBVKmlBVKmlBNKx2bBtSsdmwbUrHZsG1Kx2bBtSsdmwbUrHZsG1Kx2bBtSsdmwbUrHZsG1Kx2bBtSsdmwbUrHZsG1Kx2bBtSsdmwbUrHZsG1Kx2bBtSsdmwbUrHZsG1Kx2bBtSsdmwYbNvPs2ivRs28+zYPRs28+zYPRs28+zYPRs28+zYPRs28+zYPRs28+zYPRs28+zYPRs28+zYPRs28+zYPRs28+zYPRs28+zYPRs28+zYPRs28+zYPRs28+zYPRs28+zYPRs28+zYPRs28+zYPRs28+zYPRs28+zYMqVwFdpXAHaVwB2lcAdpXAHaVwB2lcAdpXAHaVwB2lcAdpXAHaVwB2lcAdpXAHaVwB2lcAdpXAHaVwB2lcAdpXAEUqKUF00ilBejSKUF6KilBenazpQaVzSKUF6NIpQXo0ilBdKilBdKilBdKilBdKilBejSKUF6KilBdKilBdKilBdKilBdKilBdKilBdKilBwAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//Z"
    // );
    // imgNeptune = loadImage(
    //   "data:image/jpeg;base64,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"
    // );
  }
  myFont = loadFont("assets/myFonts.ttf");
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();

  sel = createSelect();
  sel.position(10, 10);
  sel.option("Select a Planet");
  sel.option("Mars");
  sel.option("Saturn");
  sel.option("Earth");
  // sel.option("Venus");
  // sel.option("Mercury");
  // sel.option("Jupiter");
  // sel.option("Uranus");
  // sel.option("Neptune");
  sel.changed(mySelectEvent);
}

function mySelectEvent() {
  let item = sel.value();

  if (item === "Mars") {
    for (let i = 0; i < numberOfImages; i++) {
      imgFinal = imgMars;
    }
    cA1 = color("#8C513B");
    cA2 = color("#593325");
    cA3 = color("#D98566");
    cA4 = color("#A65644");
    cA5 = color("#D4936A");

    c1 = "#8C513B";
    c2 = "#593325";
    c3 = "#D98566";
    c4 = "#A65644";
    c5 = "#D4936A";
  }
  if (item === "Saturn") {
    for (let i = 0; i < numberOfImages; i++) {
      imgFinal = imgSaturn;
    }
    cA1 = color("#F2CD88");
    cA2 = color("#D9B779");
    cA3 = color("#736A58");
    cA4 = color("#BF9F78");
    cA5 = color("#454136");

    c1 = "#F2CD88";
    c2 = "#D9B779";
    c3 = "#736A58";
    c4 = "#BF9F78";
    c5 = "#454136";
  }
  if (item === "Earth") {
    for (let i = 0; i < numberOfImages; i++) {
      imgFinal = imgEarth;
    }
    cA1 = color("#162D73");
    cA2 = color("#162759");
    cA3 = color("#43733C");
    cA4 = color("#D9AF32");
    cA5 = color("#79653C");

    c1 = "#162D73";
    c2 = "#162759";
    c3 = "#43733C";
    c4 = "#D9AF32";
    c5 = "#79653C";
  }
  // if (item === "Venus") {
  //   for (let i = 0; i < numberOfImages; i++) {
  //     imgFinal = imgVenus;
  //   }
  //   cA1 = color("#F2BC57");
  //   cA2 = color("#D98E32");
  //   cA3 = color("#A65A17");
  //   cA4 = color("#8C3E11");
  //   cA5 = color("#4A2908");

  //   c1 = "#F2BC57";
  //   c2 = "#D98E32";
  //   c3 = "#A65A17";
  //   c4 = "#8C3E11";
  //   c5 = "#4A2908";
  // }
  // if (item === "Mercury") {
  //   for (let i = 0; i < numberOfImages; i++) {
  //     imgFinal = imgMercury;
  //   }
  //   cA1 = color("#D9D9D9");
  //   cA2 = color("#A6A6A6");
  //   cA3 = color("#737373");
  //   cA4 = color("#595959");
  //   cA5 = color("#868686");

  //   c1 = "#D9D9D9";
  //   c2 = "#A6A6A6";
  //   c3 = "#737373";
  //   c4 = "#595959";
  //   c5 = "#868686";
  // }
  // if (item === "Jupiter") {
  //   for (let i = 0; i < numberOfImages; i++) {
  //     imgFinal = imgJupiter;
  //   }
  //   cA1 = color("#735E45");
  //   cA2 = color("#D98841");
  //   cA3 = color("#D9B29C");
  //   cA4 = color("#A64C44");
  //   cA5 = color("#C7C4B1");

  //   c1 = "#735E45";
  //   c2 = "#D98841";
  //   c3 = "#D9B29C";
  //   c4 = "#A64C44";
  //   c5 = "#C7C4B1";
  // }
  // if (item === "Uranus") {
  //   for (let i = 0; i < numberOfImages; i++) {
  //     imgFinal = imgUranus;
  //   }
  //   cA1 = color("#537073");
  //   cA2 = color("#95BBBF");
  //   cA3 = color("#ADD4D9");
  //   cA4 = color("#CEF2EF");
  //   cA5 = color("#B5DBDE");

  //   c1 = "#537073";
  //   c2 = "#95BBBF";
  //   c3 = "#ADD4D9";
  //   c4 = "#CEF2EF";
  //   c5 = "#B5DBDE";
  // }
  // if (item === "Neptune") {
  //   for (let i = 0; i < numberOfImages; i++) {
  //     imgFinal = imgNeptune;
  //   }
  //   cA1 = color("#3345A6");
  //   cA2 = color("#222A59");
  //   cA3 = color("#446FF2");
  //   cA4 = color("#4981F2");
  //   cA5 = color("#3241A3");

  //   c1 = "#3345A6";
  //   c2 = "#222A59";
  //   c3 = "#446FF2";
  //   c4 = "#4981F2";
  //   c5 = "#3241A3";
  // }
}

function draw() {
  textFont(myFont);
  background(40);

  push();
  translate(0, 0);
  texture(imgFinal);
  if (focused) {
    rotateY(earthAngle);
  }
  earthAngle += 0.01;
  sphere(100);
  pop();

  if (c1 === "#8C513B") {
    cA1 = color("#8C513B");
    cA2 = color("#593325");
    cA3 = color("#D98566");
    cA4 = color("#A65644");
    cA5 = color("#D4936A");

    text("hehhe", 1000, 500);
    fill(cA1);
    rect(width / 2 - 60, 0, 50, 50);
    fill(200);
    text(c1, width / 2 - 120, 30);

    fill(cA2);
    rect(width / 2 - 60, 60, 50, 50);
    fill(200);
    text(c2, width / 2 - 120, 90);

    fill(cA3);
    rect(width / 2 - 60, 120, 50, 50);
    fill(200);
    text(c3, width / 2 - 120, 150);

    fill(cA4);
    rect(width / 2 - 60, 180, 50, 50);
    fill(200);
    text(c4, width / 2 - 120, 210);

    fill(cA5);
    rect(width / 2 - 60, 240, 50, 50);
    fill(200);
    text(c5, width / 2 - 120, 270);
  }
  if (c1 === "#F2CD88") {
    cA1 = color("#F2CD88");
    cA2 = color("#D9B779");
    cA3 = color("#736A58");
    cA4 = color("#A65644");
    cA5 = color("#D4936A");

    text("hehhe", 1000, 500);
    fill(cA1);
    rect(width / 2 - 60, 0, 50, 50);
    fill(200);
    text(c1, width / 2 - 120, 30);

    fill(cA2);
    rect(width / 2 - 60, 60, 50, 50);
    fill(200);
    text(c2, width / 2 - 120, 90);

    fill(cA3);
    rect(width / 2 - 60, 120, 50, 50);
    fill(200);
    text(c3, width / 2 - 120, 150);

    fill(cA4);
    rect(width / 2 - 60, 180, 50, 50);
    fill(200);
    text(c4, width / 2 - 120, 210);

    fill(cA5);
    rect(width / 2 - 60, 240, 50, 50);
    fill(200);
    text(c5, width / 2 - 120, 270);
  }

  if (c1 === "#162D73") {
    cA1 = color("#162D73");
    cA2 = color("#162759");
    cA3 = color("#43733C");
    cA4 = color("#D9AF32");
    cA5 = color("#79653C");

    text("hehhe", 1000, 500);
    fill(cA1);
    rect(width / 2 - 60, 0, 50, 50);
    fill(200);
    text(c1, width / 2 - 120, 30);

    fill(cA2);
    rect(width / 2 - 60, 60, 50, 50);
    fill(200);
    text(c2, width / 2 - 120, 90);

    fill(cA3);
    rect(width / 2 - 60, 120, 50, 50);
    fill(200);
    text(c3, width / 2 - 120, 150);

    fill(cA4);
    rect(width / 2 - 60, 180, 50, 50);
    fill(200);
    text(c4, width / 2 - 120, 210);

    fill(cA5);
    rect(width / 2 - 60, 240, 50, 50);
    fill(200);
    text(c5, width / 2 - 120, 270);
  }

  // if (c1 === "#F2BC57") {
  //   cA1 = color("#F2BC57");
  //   cA2 = color("#D98E32");
  //   cA3 = color("#A65A17");
  //   cA4 = color("#8C3E11");
  //   cA5 = color("#4A2908");

  //   text("hehhe", 1000, 500);
  //   fill(cA1);
  //   rect(width / 2 - 60, 0, 50, 50);
  //   fill(200);
  //   text(c1, width / 2 - 120, 30);

  //   fill(cA2);
  //   rect(width / 2 - 60, 60, 50, 50);
  //   fill(200);
  //   text(c2, width / 2 - 120, 90);

  //   fill(cA3);
  //   rect(width / 2 - 60, 120, 50, 50);
  //   fill(200);
  //   text(c3, width / 2 - 120, 150);

  //   fill(cA4);
  //   rect(width / 2 - 60, 180, 50, 50);
  //   fill(200);
  //   text(c4, width / 2 - 120, 210);

  //   fill(cA5);
  //   rect(width / 2 - 60, 240, 50, 50);
  //   fill(200);
  //   text(c5, width / 2 - 120, 270);
  // }

  // if (c1 === "#D9D9D9") {
  //   cA1 = color("#D9D9D9");
  //   cA2 = color("#A6A6A6");
  //   cA3 = color("#737373");
  //   cA4 = color("#595959");
  //   cA5 = color("#868686");

  //   text("hehhe", 1000, 500);
  //   fill(cA1);
  //   rect(width / 2 - 60, 0, 50, 50);
  //   fill(200);
  //   text(c1, width / 2 - 120, 30);

  //   fill(cA2);
  //   rect(width / 2 - 60, 60, 50, 50);
  //   fill(200);
  //   text(c2, width / 2 - 120, 90);

  //   fill(cA3);
  //   rect(width / 2 - 60, 120, 50, 50);
  //   fill(200);
  //   text(c3, width / 2 - 120, 150);

  //   fill(cA4);
  //   rect(width / 2 - 60, 180, 50, 50);
  //   fill(200);
  //   text(c4, width / 2 - 120, 210);

  //   fill(cA5);
  //   rect(width / 2 - 60, 240, 50, 50);
  //   fill(200);
  //   text(c5, width / 2 - 120, 270);
  // }

  // if (c1 === "#735E45") {
  //   cA1 = color("#735E45");
  //   cA2 = color("#D98841");
  //   cA3 = color("#D9B29C");
  //   cA4 = color("#A64C44");
  //   cA5 = color("#C7C4B1");

  //   text("hehhe", 1000, 500);
  //   fill(cA1);
  //   rect(width / 2 - 60, 0, 50, 50);
  //   fill(200);
  //   text(c1, width / 2 - 120, 30);

  //   fill(cA2);
  //   rect(width / 2 - 60, 60, 50, 50);
  //   fill(200);
  //   text(c2, width / 2 - 120, 90);

  //   fill(cA3);
  //   rect(width / 2 - 60, 120, 50, 50);
  //   fill(200);
  //   text(c3, width / 2 - 120, 150);

  //   fill(cA4);
  //   rect(width / 2 - 60, 180, 50, 50);
  //   fill(200);
  //   text(c4, width / 2 - 120, 210);

  //   fill(cA5);
  //   rect(width / 2 - 60, 240, 50, 50);
  //   fill(200);
  //   text(c5, width / 2 - 120, 270);
  // }

  // if (c1 === "#537073") {
  //   cA1 = color("#537073");
  //   cA2 = color("#95BBBF");
  //   cA3 = color("#ADD4D9");
  //   cA4 = color("#CEF2EF");
  //   cA5 = color("#B5DBDE");

  //   text("hehhe", 1000, 500);
  //   fill(cA1);
  //   rect(width / 2 - 60, 0, 50, 50);
  //   fill(200);
  //   text(c1, width / 2 - 120, 30);

  //   fill(cA2);
  //   rect(width / 2 - 60, 60, 50, 50);
  //   fill(200);
  //   text(c2, width / 2 - 120, 90);

  //   fill(cA3);
  //   rect(width / 2 - 60, 120, 50, 50);
  //   fill(200);
  //   text(c3, width / 2 - 120, 150);

  //   fill(cA4);
  //   rect(width / 2 - 60, 180, 50, 50);
  //   fill(200);
  //   text(c4, width / 2 - 120, 210);

  //   fill(cA5);
  //   rect(width / 2 - 60, 240, 50, 50);
  //   fill(200);
  //   text(c5, width / 2 - 120, 270);
  // }

  // if (c1 === "#3345A6") {
  //   cA1 = color("#3345A6");
  //   cA2 = color("#222A59");
  //   cA3 = color("#446FF2");
  //   cA4 = color("#4981F2");
  //   cA5 = color("#3241A3");

  //   text("hehhe", 1000, 500);
  //   fill(cA1);
  //   rect(width / 2 - 60, 0, 50, 50);
  //   fill(200);
  //   text(c1, width / 2 - 120, 30);

  //   fill(cA2);
  //   rect(width / 2 - 60, 60, 50, 50);
  //   fill(200);
  //   text(c2, width / 2 - 120, 90);

  //   fill(cA3);
  //   rect(width / 2 - 60, 120, 50, 50);
  //   fill(200);
  //   text(c3, width / 2 - 120, 150);

  //   fill(cA4);
  //   rect(width / 2 - 60, 180, 50, 50);
  //   fill(200);
  //   text(c4, width / 2 - 120, 210);

  //   fill(cA5);
  //   rect(width / 2 - 60, 240, 50, 50);
  //   fill(200);
  //   text(c5, width / 2 - 120, 270);
  // }
}
