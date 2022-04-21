// Click mouse to start the rotation of the planet
// Click again to change the planet
// Scroll down to zoom in
// Scroll down to zoom out
// Reference https://p5js.org/reference/   https://p5js.org/reference/#/p5/preload https://p5js.org/reference/#/p5/loadImage https://p5js.org/reference/#/p5/rotateX  https://p5js.org/reference/#/p5/rotateY https://p5js.org/reference/#/p5/orbitControl

let earthAngle = 0
let earthTexture
let change = 0
let planet_index = 1
function preload() {
  
  earthTexture = loadImage("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/570c9426-37ef-4869-b888-7da245b8a19f/del9sm5-8028b7e2-25ff-436f-889c-cb073876557a.jpg/v1/fill/w_1280,h_640,q_75,strp/earth_texture_map_by_wdawdawdwdaw_del9sm5-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQwIiwicGF0aCI6IlwvZlwvNTcwYzk0MjYtMzdlZi00ODY5LWI4ODgtN2RhMjQ1YjhhMTlmXC9kZWw5c201LTgwMjhiN2UyLTI1ZmYtNDM2Zi04ODljLWNiMDczODc2NTU3YS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.mopKGVfWzfNfkf3m1GqexwCAAHsJX4-Rp9cdpmcAahk")
marsTexture = loadImage("https://uploads-ssl.webflow.com/5a621bf894d1cf000155a6d3/5d00f3bcec96461bc92c5472_opmbuilder_opm_mars_colour_celestia_20190612143601.png")

jupiterTexture = loadImage("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/58d3c051-62a0-4471-818b-b9b92759d6b6/db6is8m-065c1dbf-d125-4729-a015-f79553c16bf9.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU4ZDNjMDUxLTYyYTAtNDQ3MS04MThiLWI5YjkyNzU5ZDZiNlwvZGI2aXM4bS0wNjVjMWRiZi1kMTI1LTQ3MjktYTAxNS1mNzk1NTNjMTZiZjkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.SNbFKk_oSqXR_g0K2OquQKU33PDgktgkNc40-6Pjhqo")
  
venusTexture = loadImage('data:image/jpeg;base64,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')

}


function setup() {
  const canvas = createCanvas(800, 800, WEBGL);
  noStroke();
}

function draw() {
  
  background("black");
  orbitControl();
  
  
  
  
  //check index of the planet
  if(planet_index == 1) {
    push()
  translate(0,-200)
  texture(earthTexture);
  if(focused) {
    rotateY(earthAngle)
  }
  earthAngle += 0.01
  sphere(100)
  pop()
  
  push()
  translate(200,0)
  texture(earthTexture);
  if(focused) {
    rotateX(  earthAngle)
  }
  sphere(100)
  pop()
  push()
  translate(0, 200)
  texture(earthTexture);
  if(focused) {
    rotateY(-1* earthAngle)
  }
  sphere(100)
  pop()
  push()
  translate(-200, 0)
  texture(earthTexture);
  if(focused) {
    rotateX(-1 * earthAngle)
  }
  sphere(100)
  pop()
  }
  
  if(planet_index == 2) {
     push()
  translate(0,-200)
  texture(marsTexture);
  if(focused) {
    rotateY(earthAngle)
  }
  earthAngle += 0.01
  sphere(100)
  pop()
  
  push()
  translate(200,0)
  texture(marsTexture);
  if(focused) {
    rotateX(  earthAngle)
  }
  sphere(100)
  pop()
  push()
  translate(0, 200)
  texture(marsTexture);
  if(focused) {
    rotateY(-1* earthAngle)
  }
  sphere(100)
  pop()
  push()
  translate(-200, 0)
  texture(marsTexture);
  if(focused) {
    rotateX(-1 * earthAngle)
  }
  sphere(100)
  pop()
  }
  
  if(planet_index == 3) {
     push()
  translate(0,-200)
  texture(jupiterTexture);
  if(focused) {
    rotateY(earthAngle)
  }
  earthAngle += 0.01
  sphere(100)
  pop()
  
  push()
  translate(200,0)
  texture(jupiterTexture);
  if(focused) {
    rotateX(  earthAngle)
  }
  sphere(100)
  pop()
  push()
  translate(0, 200)
  texture(jupiterTexture);
  if(focused) {
    rotateY(-1* earthAngle)
  }
  sphere(100)
  pop()
  push()
  translate(-200, 0)
  texture(jupiterTexture);
  if(focused) {
    rotateX(-1 * earthAngle)
  }
  sphere(100)
  pop()
  }
  if(planet_index == 4) {
     push()
  translate(0,-200)
  texture(venusTexture);
  if(focused) {
    rotateY(earthAngle)
  }
  earthAngle += 0.01
  sphere(100)
  pop()
  
  push()
  translate(200,0)
  texture(venusTexture);
  if(focused) {
    rotateX(  earthAngle)
  }
  sphere(100)
  pop()
  push()
  translate(0, 200)
  texture(venusTexture);
  if(focused) {
    rotateY(-1* earthAngle)
  }
  sphere(100)
  pop()
  push()
  translate(-200, 0)
  texture(venusTexture);
  if(focused) {
    rotateX(-1 * earthAngle)
  }
  sphere(100)
  pop()
  }
  
  
}

function mouseClicked() {
    console.log("hhe")
  if(planet_index < 4) {
    planet_index +=1
  }else{
    planet_index=1
  }
  }
