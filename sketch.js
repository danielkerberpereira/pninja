var PLAY = 1;
var END = 0;
var gameState = PLAY;

var ninja, ninja_running, ninja_jumping;
var ground, invisibleGround, invisibleGround2, invisibleGround3, groundImage;
var background2, bgIMG;

var boss, boss2, boss3, plataforma;

var score=0;

var life=3

var tiro = []
function preload(){
  ninja_running =   loadAnimation("png/Run__001.png","png/Run__002.png","png/Run__003.png",
                                  "png/Run__004.png","png/Run__005.png","png/Run__006.png",
                                  "png/Run__007.png","png/Run__008.png","png/Run__009.png");
  ninja_jumping = loadAnimation("png/Jump__001.png","png/Jump__002.png","png/Jump__003.png",
                                "png/Jump__004.png","png/Jump__005.png","png/Jump__006.png",
                                "png/Jump__007.png","png/Jump__008.png","png/Jump__009.png",);
  ninja_idle = loadAnimation("png/Idle__001.png","png/Idle__002.png","png/Idle__003.png",
                                "png/Idle__004.png","png/Idle__005.png","png/Idle__006.png",
                                "png/Idle__007.png","png/Idle__008.png","png/Idle__009.png",);
  
  groundImage = loadImage("ground2.png");
  
  bgIMG = loadImage("png/bgimg.png")
  
  bossImg = loadImage("png/boss.png");
  
  plataformaImg = loadImage("png/plataforma.png")
}

function setup() {
  createCanvas(1200, 600);
  
  background2 = createSprite(600,300,2000,600)
  background2.addImage("bg",bgIMG)

  ninja = createSprite(50,500,60,150);
  ninja.addAnimation("idle", ninja_idle);
  ninja.addAnimation("jumping", ninja_jumping);
  ninja.addAnimation("running", ninja_running);
  
  
  ninja.scale = 0.2;
  
  boss = createSprite(1100,500)
  boss.scale = 2
  boss.addImage(bossImg)
  boss2 = createSprite(1100,315)
  boss2.scale = 2
  boss2.addImage(bossImg)
  boss3 = createSprite(1100,120)
  boss3.scale = 2
  boss3.addImage(bossImg)
 

  
  invisibleGround = createSprite(200,550,2000,10);
  invisibleGround.visible = false;
  invisibleGround2 = createSprite(1199,300,10,2000);
  invisibleGround2.visible = false;
  invisibleGround3 = createSprite(1,300,10,2000);
  invisibleGround3.visible = false;
  invisibleGround4 = createSprite(1050,1,10,2000);
  invisibleGround4.visible = false;
  invisibleGround5 = createSprite(950,1,10,2000);
  invisibleGround5.visible = true;
  
  score = 0;
  plataforma = createSprite( 1100, 362)
  plataforma.addImage(plataformaImg)
  plataforma.scale = 0.5
  plataforma2 = createSprite( 1100, 172)
  plataforma2.addImage(plataformaImg)
  plataforma2.scale = 0.5
  plataforma3 = createSprite( 300, 430)
  plataforma3.addImage(plataformaImg)
  plataforma3.scale = 0.5
  plataforma4 = createSprite( 600, 100)
  plataforma4.addImage(plataformaImg)
  plataforma4.scale = 0.5
  plataforma5 = createSprite( 300, 230)
  plataforma5.addImage(plataformaImg)
  plataforma5.scale = 0.5
  plataforma6 = createSprite( 600, 350)
  plataforma6.addImage(plataformaImg)
  plataforma6.scale = 0.5
  plataforma7 = createSprite(800, 170)
  plataforma7.addImage(plataformaImg)
  plataforma7.scale = 0.2
  plataforma8 = createSprite( 600, 350)
  plataforma8.addImage(plataformaImg)
  plataforma8.scale = 0.5
  
}
ninja.velocityY = 0
function draw() {

  background(198)
  //trex.debug = true;
  text("Score: "+ score, 500,50);
  ninja.changeAnimation("idle",ninja_idle);
 ninja.collide(plataforma)
 ninja.collide(plataforma2)
 ninja.collide(plataforma3)
 ninja.collide(plataforma4)
 ninja.collide(plataforma5)
 ninja.collide(plataforma6)
 ninja.collide(plataforma7)
 ninja.collide(plataforma8)
  if(keyDown("space") && ninja.velocityY == 0) {
    ninja.velocityY = -16;
    ninja.changeAnimation("jumping",ninja_jumping);
  }
  if(keyDown("d")) {
    ninja.x= ninja.x+3;
    ninja.changeAnimation("running",ninja_running);
  }
  if(keyDown("a")) {
    ninja.x= ninja.x-3;
    ninja.changeAnimation("running",ninja_running);
  }
  
  ninja.velocityY = ninja.velocityY + 0.8
  
  
  
  ninja.collide(invisibleGround);
  ninja.collide(invisibleGround2);
  ninja.collide(invisibleGround3);
  ninja.collide(invisibleGround4);
  drawSprites();


  if (frameCount % 60 == 0) {


      bosses = Math.round(Math.random(1,3))
      if(bosses == 1){
        generateEnemy();
        
      }
      if(bosses == 2){
        generateEnemy2();
      }
      if(bosses == 3){
        generateEnemy3();
      }
      
      
      

    }}
  if (ninja.x > 950) {
    if(ninja.y < 272 || keyDown("s")) {
      boss3.visible = false
    }
    if(ninja.y > 412 || keyDown("s")) {
      boss.visible = false
    }
    if(ninja.y > 272 || ninja.y < 412 ||  keyDown("s")) {
      boss2.visible = false
    }
  }
function generateEnemy() {
  tiro.push(
    new Bullet(
      1100,500,20,10

    )
  );
  
}
function generateEnemy2() {
  tiro.push(
    new Bullet(
      1100,360,20,10

    )
  );
  }
  function generateEnemy3() {
    tiro.push(
      new Bullet(
        1100,220,20,10
  
      )
    );
    }