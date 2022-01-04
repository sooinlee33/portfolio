var $cont_01 = [
    ["fro", "front1.jpg", "Responsive Web", "html, css, jquery, responsive", "https://sooinlee33.github.io/responsive/"],
    ["fro", "front2.jpg", "Shopping, Price", "html, css, javascript", "https://sooinlee33.github.io/calculator/"],
    ["fro", "front3.jpg", "BOM Loacation Hash", "html, css, javascript, responsive", "https://sooinlee33.github.io/hashlocation/"]
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
