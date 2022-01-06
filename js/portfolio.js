var $cont_01 = [
    ["fro", "front3.jpg", "HASH LOCATION", "HTML, CSS, JAVASCRIPT, RESPONSIVE", "https://sooinlee33.github.io/hashlocation/"],
    ["fro", "front2.jpg", "PRICE CALCULATOR", "HTML, CSS, JAVASCRIPT", "https://sooinlee33.github.io/calculator/"],
    ["fro", "front1.jpg", "RESPONSIVE WEB", "HTML, CSS, JQUERY, RESPONSIVE", "https://sooinlee33.github.io/responsive/"],
    ["fro", "front4.jpg", "CSS EFFECT", "HTML, CSS", "https://sooinlee33.github.io/glassmorphism/"],
    ["gra", "graphic1.jpg", "BRAND POSTER", "PHOTOSHOP", ""],
    ["gra", "graphic2.jpg", "STYLE TRANSFORMATION", "PHOTOSHOP", ""]
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
