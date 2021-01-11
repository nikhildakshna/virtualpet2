//Create variables here
var dog;
var food;
var Food;
var stock;
function preload()
{
  //load images here
  dogIMG = loadImage("dogImg.png");
  happydogIMG = loadImage("dogImg1.png");
  milkIMG = loadImage("Milk.png");
}

function setup() {
  createCanvas(800, 800);
  database = firebase.database();
  dog = createSprite(650,500,10,10);
  dog.addImage(dogIMG);
  dog.scale = 0.2;

  food = database.ref('food');
  food.on("value",readstock);

  milk = new Foodtype();

  stock = 20;

  for(var N = 20;N < 520;N += 50){
  milkspr = createSprite(N,400,10,30);
  milkspr.addImage(milkIMG);
  milkspr.scale = 0.1;
  milkspr2 = createSprite(N,500,10,30);
  milkspr2.addImage(milkIMG);
  milkspr2.scale = 0.1;
  }

}


function draw() {  
background("teal");
  drawSprites();
  //add styles here

textSize(20);
fill("black");


milk.draw();
milk.feed();
text("food remaining:" + stock,400,dog.y - 50);

milk.feedbutton.mousePressed(()=>{
if(stock > 0)
stock -= 1,
writeStock(stock);
var time = frameCount/100;
milkspr.x = dog.x-50;
milkspr.y = dog.y;
if(time < 10){
return time;
milkspr.destroy();
}
});

milk.addstockbutton.mousePressed(()=>{
stock = 20;
writeStock(20);
});



if(stock == 0){
  textSize(30);
  fill(255,0,0);
  text("you have no food",375,200);
}



}

function readstock(data){
stock = data.val();
}

function writeStock(number){
database.ref('/').update({
food: number
})
}
