var $cont_01 = [
    ["col", "15cheer1.JPG", "Korea University", "2014"],
    ["col", "15cheer3.JPG", "Korea University", "2014"],
    ["col", "15cheer2.JPG", "Korea University", "2015"],
    ["col", "15cheer4.JPG", "Korea University", "2015"],
    ["col", "15cheer5.JPG", "Korea University", "2015"],
    ["col", "16indonesia1.JPG", "Indonesia", "2016"],
    ["col", "16indonesia2.JPG", "Indonesia", "2016"],
    ["col", "16indonesia3.JPG", "Indonesia", "2016"],
    ["col", "16mentor1.JPG", "Mentorship", "2016"],
    ["col", "16mentor2.JPG", "Mentorship", "2016"],
    ["col", "16cheer1.JPG", "Korea University", "2016"],
    ["col", "16cheer3.JPG", "Korea University", "2016"],
    ["col", "16cheer4.JPG", "Korea University", "2016"],
    ["col", "16cheer6.JPG", "Korea University", "2016"],
    ["col", "16cheer7.JPG", "Korea University", "2016"],
    ["col", "16cheer8.JPG", "Korea University", "2016"],
    ["tra", "17macau1.JPG", "Macau", "2017"],
    ["tra", "17macau2.JPG", "Macau", "2017"],
    ["tra", "17macau3.JPG", "Macau", "2017"],
    ["tra", "17singapore1.JPG", "Singapore", "2017"],
    ["tra", "17singapore2.JPG", "Singapore", "2017"],
    ["tra", "17singapore3.JPG", "Singapore", "2017"],
    ["tra", "17taiwan1.JPG", "Taiwan", "2017"],
    ["tra", "17taiwan2.JPG", "Taiwan", "2017"],
    ["tra", "17taiwan3.JPG", "Taiwan", "2017"],
    ["tra", "17taiwan4.JPG", "Taiwan", "2017"],
    ["tra", "17japan1.jpg", "Japan", "2017"],
    ["tra", "17japan2.JPG", "Japan", "2017"],
    ["tra", "17japan3.JPG", "Japan", "2017"],
    ["tra", "17mongolia1.JPG", "Mongolia", "2017"],
    ["tra", "17mongolia2.JPG", "Mongolia", "2017"],
    ["tra", "17mongolia3.JPG", "Mongolia", "2017"],
    ["tra", "17la.JPG", "LA", "2017"],
    ["tra", "17canada1.JPG", "Canada", "2017"],
    ["tra", "17canada2.JPG", "Canada", "2017"],
    ["tra", "17canada3.JPG", "Canada", "2017"],
    ["tra", "17canada4.JPG", "Canada", "2017"],
    ["new", "19newyork1.JPG", "New York", "2017"],
    ["tra", "18london.jpg", "London", "2018"],
    ["tra", "18prague1.jpg", "Prague", "2018"],
    ["tra", "18prague2.jpg", "Prague", "2018"],
    ["tra", "18prague3.jpg", "Prague", "2018"],
    ["tra", "18jeju1.jpg", "Jeju", "2018"],
    ["tra", "18jeju2.jpg", "Jeju", "2018"],
    ["col", "19grad1.JPG", "Korea University", "2019"],
    ["col", "19grad2.JPG", "Korea University", "2019"],
    ["new", "19newyork2.JPG", "New York", "2019"],
    ["new", "19newyork4.JPG", "New York", "2019"],
    ["new", "19newyork5.JPG", "New York", "2019"],
    ["new", "19newyork6.JPG", "New York", "2019"],
    ["new", "19newyork7.JPG", "New York", "2019"],
    ["new", "19newyork8.JPG", "New York", "2019"],
    ["new", "19newyork9.JPG", "New York", "2020"],
    ["new", "19newyork10.JPG", "New York", "2020"],
    ["new", "19newyork11.JPG", "New York", "2020"],
    ["new", "19newyork12.JPG", "New York", "2020"]

];

var $container = document.querySelector("main section");
var $container_box = `
    <div id="fullImgBox">
        <img src="../img/travel_1.jpg" id="fullImg">
        <span onclick="closeFullImg()">╳</span>
    </div>
`;

for(v of $cont_01){
    $container_box +=`
        <article class="${v[0]}">

                <img src="img/${v[1]}" alt="#">
                <div class="txt2_box" onclick="openFullImg(this.previousElementSibling.src)">
                    <h2>${v[2]}</h2>
                    <p>${v[3]}</p>
                </div>

        </article>
    `;
};

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


