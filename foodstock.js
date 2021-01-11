class Foodtype{
    constructor(){
   // createSprite(x,y,10,30);
   this.food = 0;
    }

    draw(){
  //  drawSprites();
    this.feedbutton = createButton("feed drago");
    this.addstockbutton = createButton("add stock");
    this.feedbutton.position(500,100);
    this.addstockbutton.position(600,100);

    }
     
    feed(){
var dog2 = loadImage("dogImg1.png");

    this.food = 20;
    this.feedbutton.mousePressed(()=>{
    if(this.food > 0){
    this.food -= 1;
    dog.addImage(dog2);
    console.log(this.food,"working");
    database.ref('/').update({
    'food': this.food
    });
}
    });

    //giving a message when there is no food remining.
    if(this.food === 0){
    text("Remaining:"+this.food,375,200);
    }

    this.addstockbutton.mousePressed(()=>{
    this.food = 20;
    console.log(this.food,this.food);
    database.ref('/').update({
    'food': this.food
    })
    });

    }
    
     readstock(data){
        Food = data.val();
        }
        
     writeStock(number){
        database.ref('/').update({
        food: number
        })
        }

}