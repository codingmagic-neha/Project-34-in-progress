var dog,happyDog;
var database;
var foodS,foodStock;
var dog_image;
var happyDog_image;

function preload()
{
dog_image=loadImage("images/dogImg1.png");
happyDog_image=loadImage("images/dogImg.png");
}

function setup() {
  database=firebase.database();

  createCanvas(500, 500);
  dog = createSprite(300,500,30,30);
  dog.addImage(dog_image);
  

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46.139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);

  }

  drawSprites();
  //add styles here

}



