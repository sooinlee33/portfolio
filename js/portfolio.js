var $cont_01 = [
    ["fro", "front3.jpg", "HASH LOCATION", "HTML, CSS, JAVASCRIPT, RESPONSIVE", "https://sooinlee33.github.io/hashlocation/"],
    ["fro", "front2.jpg", "PRICE CALCULATOR", "HTML, CSS, JAVASCRIPT", "https://sooinlee33.github.io/calculator/"],
    ["fro", "front1.jpg", "RESPONSIVE WEB", "HTML, CSS, JQUERY, RESPONSIVE", "https://sooinlee33.github.io/responsive/"],
    ["fro", "front4.jpg", "CSS EFFECT", "HTML, CSS", "https://sooinlee33.github.io/glassmorphism/"]
];

var $container = document.querySelector("main section");
var $container_box = ``;

for(v of $cont_01){
    $container_box +=`
        <article class="${v[0]}">
            <div><a href="${v[4]}">
                <img src="./img/${v[1]}" alt="#">
                <div class="txt2_box">
                    <div class="txt2">
                    <h2>${v[2]}</h2>
                    <hr>
                    <p>${v[3]}</p>
                    </div>
                </div>
            </a></div>
        </article>
    `;
};

$container.innerHTML = $container_box;

var $cont_02 =[
    ["graphic1.jpg", "BRAND POSTER", "PHOTOSHOP"],
    ["graphic2.jpg", "STYLE TRANSFORMATION"],
    ["graphic3.jpg", "EVENT BROCHURE", "PHOTOSHOP"],
    ["graphic4.jpg", "EVENT POSTER", "PHOTOSHOP"],
    ["graphic50.jpg", "PATTERN & COLOR", "PHOTOSHOP, ILLUSTRATOR"],
    ["graphic5.jpg", "FASHION PORTFOLIO", "PHOTOSHOP, ILLUSTRATOR"],
    ["graphic6.jpg", "FASHION PORTFOLIO", "PHOTOSHOP, ILLUSTRATOR"],
]
for(v of $cont_02){
    $container_box +=`
    <div id="fullImgBox">
        <img src="../img/travel_1.jpg" id="fullImg">
        <span onclick="closeFullImg()">╳</span>
    </div>
    <article class="gra">
            <div><a>
                <img src="./img/${v[0]}" alt="#">
                <div class="txt2_box" onclick="openFullImg(this.previousElementSibling.src)">
                    <div class="txt2">
                    <h2>${v[1]}</h2>
                    <hr>
                    <p>${v[2]}</p>
                    </div>
                </div>
            </a></div>
        </article>
    `
}

$container.innerHTML = $container_box;

var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic){
            fullImgBox.style.display = 'block';
            fullImg.src = pic;
}

function closeFullImg(){
            fullImgBox.style.display = 'none';
}

