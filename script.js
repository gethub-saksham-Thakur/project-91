canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

white_height = 100;
white_width = 150;
white_x = 10;
white_y = 10;
silver_height = 90;
silver_width = 150;
silver_x = 10;
silver_y = 110;
canvas_image = "https://i.postimg.cc/bv5d35nK/racing.jpg";
white_car = "https://i.postimg.cc/YqdnnNX1/car1.png";
silver_car = "https://i.postimg.cc/wM0VrHk6/car2.png";

function add() {
    canvas_img = new Image();
    canvas_img.onload = uploadcanvas;
    canvas_img.src = canvas_image;

    white_img = new Image();
    white_img.onload = uploadwhite;
    white_img.src = white_car;
  
    silver_img = new Image(); 
    silver_img.onload = uploadsilver;
    silver_img.src = silver_car;
}

function uploadcanvas() {
    ctx.drawImage(canvas_img, 0, 0, canvas.width, canvas.height);
}

function uploadwhite() {
    ctx.drawImage(white_img, white_x, white_y, white_width, white_height);
}

function uploadsilver() {
    ctx.drawImage(silver_img, silver_x, silver_y, silver_width, silver_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    Key_Pressed = e.keyCode;
    console.log(Key_Pressed);
  
    if (Key_Pressed == '37') {
        left();
    }
    if (Key_Pressed == '38') {
        up();
    }
    if (Key_Pressed == '39') {
        right();
    }
    if (Key_Pressed == '40') {
        down();
    }
  
  
      if (Key_Pressed == '65') {
        left1();
    }
    if (Key_Pressed == '87') {
        up1();
    }
    if (Key_Pressed == '68') {
        right1();
    }
    if (Key_Pressed == '83') {
        down1();
    }
  
  
  if (silver_x > 650) {
       document.getElementById('game_status').innerHTML = "Car 2 Won!"
    }
  if (white_x > 650) {
       document.getElementById('game_status').innerHTML = "Car 1 Won!"
    }
}
function up() {
    if (white_y >= 0) {
        white_y = white_y - 10;
        uploadcanvas();
        uploadwhite();
        uploadsilver();
    }
}

function down() {
    if (white_y <= 500) {
        white_y = white_y + 10;
        uploadcanvas();
        uploadwhite();
        uploadsilver();
    }
}

function left() {
    if (white_x >= 0) {
        white_x = white_x - 10;
        uploadcanvas();
        uploadwhite();
        uploadsilver();
    }
}

function right() {
    if (white_x <= 650) {
        white_x = white_x + 10;
        uploadcanvas();
        uploadwhite();
        uploadsilver();
    }
}


function up1() {
    if (silver_y >= 0) {
        silver_y = silver_y - 10;
        uploadcanvas();
        uploadwhite();
        uploadsilver();
    }
}

function down1() {
    if (silver_y <= 500) {
        silver_y = silver_y + 10;
        uploadcanvas();
        uploadwhite();
        uploadsilver();
    }
}

function left1() {
    if (silver_x >= 0) {
        silver_x = silver_x - 10;
        uploadcanvas();
        uploadwhite();
        uploadsilver();
    }
}

function right1() {
    if (silver_x <= 650) {
        silver_x = silver_x + 10;
        uploadcanvas();
        uploadwhite();
        uploadsilver();
    }
}