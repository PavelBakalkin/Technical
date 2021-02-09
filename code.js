let buttonaActions = () => {
    let mainButton = document.querySelector('.big-button');
    let buttonShadow = document.querySelector('.button-shadow');

    mainButton.onmousedown = () =>{
        buttonShadow.classList.add('no-button-shadow');
    }
    mainButton.onmouseup  = () =>{
        buttonShadow.classList.remove('no-button-shadow');
    }
}

function startBall(img, size, speed, canvas){
    let image = new Image();
    let canva = document.querySelector(`#${canvas}`);
    let ctx = canva.getContext('2d');
    let x = 0;
    let y = canva.height - size;

    image.onload = animateUp;
    image.src = img;


    function animateUp() {
        ctx.clearRect(0, 0, canva.width, canva.height);
        ctx.drawImage(image, x, y);
    
        y -= speed;

        if(y > 0){
            requestAnimationFrame(animateUp);
        }else{
            requestAnimationFrame(animateDown);
        }
    }
    
    function animateDown() {
        ctx.clearRect(0, 0, canva.width, canva.height);
        ctx.drawImage(image, x, y);

        y += speed;

        if(y <= canva.height - size){
            requestAnimationFrame(animateDown);
        }else{
            requestAnimationFrame(animateUp);
        }
    }
}

window.onload = () => {
    startBall("ImagesAndFonts/BigBall.png", 190, .2,'big');
    startBall("ImagesAndFonts/averageBall.png", 130, .5,'average');
    startBall("ImagesAndFonts/smallBall.png", 75, .4,'small');
}


function animateKnight() {
    let knight = document.querySelector('.knight');
    
    document.addEventListener('mousemove', (e) => {moveBackground(e, knight);});
}

function moveBackground(e, knight) {
    let offsetX = (e.clientX / window.innerWidth * 20) + (window.innerWidth / 2) - 150;
    knight.setAttribute('style', 'left: ' + offsetX + 'px' );
}

function changeBack(){
    if(window.innerWidth <= 390){
        document.querySelector('#top-shadow').src = 'ImagesAndFonts/Rectangle2.png';
        document.querySelector('#bottom-shadow').src = 'ImagesAndFonts/Rectangle2bot.png';
        document.querySelector('#circles').src = 'ImagesAndFonts/circles2.png';
        document.querySelector('#castle').src = 'ImagesAndFonts/castle2.png';
        document.querySelector('#knight').src = 'ImagesAndFonts/knight2.png';
        document.querySelector('#bg').src = 'ImagesAndFonts/bg2.png';
        document.querySelector('#a-img').src = 'ImagesAndFonts/yandexmobile.png';
        document.querySelector('#b-img').src = 'ImagesAndFonts/qiwimobile.png';
        document.querySelector('#c-img').src = 'ImagesAndFonts/webmoneymobile.png';
        document.querySelector('#d-img').src = 'ImagesAndFonts/visamobile.png';
        document.querySelector('#e-img').src = 'ImagesAndFonts/mastercardmobile.png';
        document.querySelector('#f-img').src = 'ImagesAndFonts/18+mobile.png';
        document.querySelector('#g-img').src = 'ImagesAndFonts/instamobile.png';
    }
}

function addShadow() {
    let container = document.querySelector('.container');
    let line1 = document.createElement('img');
    let line2 = document.createElement('img');

    line1.classList.add('lines', 'line1');
    line2.classList.add('lines', 'line2');
    if(window.innerWidth <= 390){
        container.prepend(line1, line2)
    }
}