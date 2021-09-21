// VARIABLE HTML

var body = document.querySelector("body")

var main = document.querySelector("main");

var book = document.getElementById("book");

var divCover = document.getElementsByClassName("cover");

var divPage = document.getElementsByClassName("page");

var divBack = document.getElementsByClassName("back");

var divheaddress = document.getElementsByClassName("headdress");

var img = document.getElementById("img");


// VARIABLE

var i = 0;
var iArray = 0;
var txtTitle = "SOMMAIRE";
var txtCV = "CV";
var txtDetail = "Détail CV";
var txtPortfolio = "Portfolio English";
var speed = 50;
var animeStart = false;
var txtArray = [];


// CREATE HTML VARIABLE

var divSommaire = document.createElement("div");
divSommaire.className = ("sommaire");




var divBulle3 = document.createElement("div");
divBulle3.className = ("divBulle3");


// var titreSommaire = document.createElement("h1");

// var ulSommaire = document.createElement("ul");



// APPEND CHILD


// divSommaire.appendChild(titreSommaire);

// divSommaire.appendChild(ulSommaire);

/**
 * @function createElement
 *
 */
function createElementSummary() {

    divBckImg1 = [];
    divBox1 = [];
    href1 = [];
    for (index = 0; index <= 3; index++) {

        var divContainer = document.createElement("div");
        divContainer.className = ("container");
        divContainer.style.zIndex = "1";
        divSommaire.appendChild(divContainer);

        var divBckImg = document.createElement("div");
        divBckImg.className = ("background-img");
        divBckImg.style.zIndex = "1";
        divContainer.appendChild(divBckImg);



        var divBox = document.createElement("div");
        divBox.className = ("box");
        divBox.style.zIndex = "1";
        divBckImg.appendChild(divBox);
        divBox.addEventListener('click', function (event) {
            let a = this.querySelector("a");
            console.log(a.href);
            window.location = a.href;


        })

        var spanTop = document.createElement("span");
        spanTop.className = ("topB");
        spanTop.style.zIndex = "1";
        divBox.appendChild(spanTop);

        var spanRight = document.createElement("span");
        spanRight.className = ("rightB");
        spanRight.style.zIndex = "1";
        divBox.appendChild(spanRight);

        var spanBottom = document.createElement("span");
        spanBottom.className = ("bottomB");
        spanBottom.style.zIndex = "1";
        divBox.appendChild(spanBottom);

        var spanLeft = document.createElement("span");
        spanLeft.className = ("leftB");
        spanLeft.style.zIndex = "1";
        divBox.appendChild(spanLeft);

        var divContent = document.createElement("div");
        divContent.style.zIndex = "2";
        divBox.appendChild(divContent);



        // var liste = document.createElement("li");
        // divContent.appendChild(liste);

        var href = document.createElement("a");
        href.style.zIndex = "3";
        divContent.appendChild(href);

        href1.push(href);

        divBox1.push(divBox);

        divBckImg1.push(divBckImg);

    };
    // Attribut BORDER
    divBox1[0].className = ("title");
    href1[0].className = ("titre");

    // BULLE SVG
    var bulle = "<svg class='bulle' viewBox='0 0 170 200'><path   style='opacity:1;fill:#ffffff00;fill-opacity:1;stroke-width:7.80472469;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1'd='m 249.125,296.60352 c -64.59896,-0.3758 -130.5499,13.2759 -158.613281,39.44726 -54.425957,50.75656 -59.318456,144.94334 0,209.1543 3.217683,3.48307 6.82769,6.75763 10.750001,9.84961 a 46.478735,36.08218 0 0 0 -20.535158,29.90234 46.478735,36.08218 0 0 0 1.242188,8.08985 27.358424,27.358422 0 0 0 -19.427734,26.15624 27.358424,27.358422 0 0 0 0.599609,5.54883 21.404681,17.735307 0 0 0 -20.332031,17.69141 21.404681,17.735307 0 0 0 21.404297,17.73437 21.404681,17.735307 0 0 0 20.914062,-14.06054 27.358424,27.358422 0 0 0 4.773438,0.44531 27.358424,27.358422 0 0 0 27.308589,-26.39453 46.478735,36.08218 0 0 0 9.9961,0.87109 46.478735,36.08218 0 0 0 46.42969,-35.33789 c 78.43771,16.61058 180.32808,2.30457 221.43359,-40.49609 59.31844,-61.7647 53.20282,-154.72835 0,-209.1543 C 369.29824,309.68821 309.80887,296.95654 249.125,296.60352 Z'transform='scale(0.26458333)'id='bulle'/>";

    // DIV CV

    divBckImg1[1].className = "divBckImg1"
    var divBulle1 = document.createElement("div");
    divBulle1.className = "divBulle1";
    divBckImg1[1].appendChild(divBulle1);
    divBulle1.insertAdjacentHTML("beforeend", bulle);
    var textCv = document.createElement("p");
    textCv.className = "textCv";
    textCv.innerHTML = "Cv en HTML5, <br> CSS3 et <br> recursif.";
    divBckImg1[1].appendChild(textCv);

    // DIV DETAIL

    divBckImg1[2].className = "divBckImg2"
    var divBulle2 = document.createElement("div");
    divBulle2.className = "divBulle2";
    divBckImg1[2].appendChild(divBulle2);
    divBulle2.insertAdjacentHTML("beforeend", bulle);
    var textDetail = document.createElement("p");
    textDetail.className = "textDetail";
    textDetail.innerHTML = "Detail chronologique <br>du Cv en HTML5,<br> CSS3 et recursif.";
    divBckImg1[2].appendChild(textDetail);


// DIV PORTFOLIO


divBckImg1[3].className = "divBckImg3"
    var divBulle3 = document.createElement("div");
    divBulle3.className = "divBulle3";
    divBckImg1[3].appendChild(divBulle3);
    divBulle3.insertAdjacentHTML("beforeend", bulle);

    var textPt = document.createElement("p");
    textPt.className = "textPt";
    textPt.innerHTML = "Detail chronologique <br>du Cv en HTML5,<br> CSS3 et recursif.";
    divBckImg1[3].appendChild(textPt);




    //ARRAY
    txtArray = [{
        pos: href1[0],
        txt: txtTitle
    }, {
        pos: href1[1],
        txt: txtCV
    }, {
        pos: href1[2],
        txt: txtDetail
    }, {
        pos: href1[3],
        txt: txtPortfolio
    }];
};

//Variable Summary


/**
 * @event eventBook 
 * @param click
 */

book.addEventListener("click", eventBook);
/**
 * @function eventBook
 */
function eventBook() {

    divCover[0].id = "cover_rot";
    animeStart = true;


    setTimeout(function () {
        divheaddress[0].id = "headdress_zoom";
    }, 1900);
    setTimeout(function () {
        divPage[0].id = "page_zoom";
    }, 1900);
    setTimeout(function () {
        divBack[0].id = "back_zoom";
    }, 1900);
    setTimeout(function () {
        book.remove();
    }, 2500);
    setTimeout(function () {
        img.remove();
    }, 2500);

    setTimeout(function () {
        main.appendChild(divSommaire);
        // createElementSummary();
    }, 2500);
    setTimeout(function () {
        body.style.backgroundImage = "url('../imgBook/paperBright.jpg')";
    }, 2500);
    setTimeout(function () {
        body.style.backgroundSize = "100% ";
    }, 2500);
    setTimeout(function () {
        body.style.backgroundRepeat = "no-repeat";
    }, 2500);

    setTimeout(function () {
        typeWriter();
    }, 2500);


    return null;
};
createElementSummary()



//ADD ATTRIBUTE

href1[1].href = "../html/CvDamienDevoti.html";

href1[2].href = "../html/detailFrancais.html";

href1[3].href = "../html/portfolioEnglish.html";


/**
 * @function eventBook setTimeout
 * 
 */
setTimeout(function () {
    if (animeStart === false) {
        document.onload = eventBook();
    };
}, 5000);

/**
 * @fonction typeWriter
 * display summary
 */
function typeWriter() {
    // console.log(txtArray[iArray]);

    if (i < txtArray[iArray].txt.length) {
        txtArray[iArray].pos.innerHTML += txtArray[iArray].txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else if (iArray < txtArray.length) {
        iArray++;
        i = 0;
        typeWriter();
    }
};

// Background parallax  

/**
 * @event
 */
document.addEventListener("mousemove", parallax);
/**
 * @function parallax
 * @param {*} e 
 */
function parallax(e) {

    this.querySelectorAll(".layer").forEach(layer => {
        var speed = layer.getAttribute("data-speed");
        var x = (window.innerWidth - e.pageX * speed) / 100;
        var y = (window.innerWidth - e.pageY * speed) / 100;

        layer.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });


}