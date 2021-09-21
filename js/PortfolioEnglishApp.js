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
var txtTitle = "SUMMARY";
var txtCV = "Resume";
var txtDetail = "Detail resume";
var txtPortfolio = "Portfolio Français";
var speed = 50;

// CREATE HTML VARIABLE

var divSommaire = document.createElement("div");

var titreSommaire = document.createElement("h1");

var ulSommaire = document.createElement("ul");

var liCv = document.createElement("li");

var hrefCv = document.createElement("a");

var liDetail = document.createElement("li");

var hrefDetail = document.createElement("a");

var liPortfolioEnglish = document.createElement("li");

var hrefPortfolioEnglish = document.createElement("a");

// ADD ATTRIBUTE

hrefCv.href ="../html/CvDamienDevotiEnglish.html";

hrefDetail.href = "../html/detailEnglish.html";

hrefPortfolioEnglish.href = "../html/portfolio.html";

// APPEND CHILD


divSommaire.appendChild(titreSommaire);

divSommaire.appendChild(ulSommaire);

ulSommaire.appendChild(liCv);

liCv.appendChild(hrefCv);

ulSommaire.appendChild(liDetail);

liDetail.appendChild(hrefDetail);

ulSommaire.appendChild(liPortfolioEnglish);

liPortfolioEnglish.appendChild(hrefPortfolioEnglish);

// ARRAY 

var txtArray = [{
        pos: titreSommaire,
        txt: txtTitle
    },{
        pos: hrefCv,
        txt: txtCV  
    },{
        pos: hrefDetail,
        txt: txtDetail
    },{
        pos: hrefPortfolioEnglish,
        txt: txtPortfolio
    } 
];
 


/**
 * @event eventBook 
 * @param click
 */

book.addEventListener("click", eventBook);
  /**
 * @function eventBook
 */
function eventBook(){

    divCover[0].id = "cover_rot";

    setTimeout(function(){divheaddress[0].id = "headdress_zoom";}, 1900);
    setTimeout(function(){divPage[0].id = "page_zoom";}, 1900);
    setTimeout(function(){divBack[0].id = "back_zoom";}, 1900);
    setTimeout(function(){book.remove();}, 2500);
    setTimeout(function(){img.remove();}, 2500);
    
    setTimeout(function(){main.appendChild(divSommaire);}, 2500);
    setTimeout(function(){body.style.backgroundImage = "url('../imgBook/paperBright.jpg')" ;}, 2500);
    setTimeout(function(){body.style.backgroundSize = "100% ";}, 2500);
    setTimeout(function(){body.style.backgroundRepeat = "no-repeat" ;}, 2500);
  
      setTimeout(function(){ typeWriter();}, 2500);
     

return null ;
};


/**
 * @function eventBook setTimeout
 * 
 */
setTimeout(function(){ document.onload = eventBook();}, 5000);

/**
 * @fonction typeWriter
 * display summary
 */
function typeWriter() {
        if (i < txtArray[iArray].txt.length){
              txtArray[iArray].pos.innerHTML += txtArray[iArray].txt.charAt(i);
              i++;
              setTimeout(typeWriter, speed);
        }else if (iArray< txtArray.length){
          iArray++;
          i = 0;
          typeWriter();
        }
  };

// Background parallax  

/**
 * @event
 */
document.addEventListener("mousemove" , parallax);
/**
 * @function parallax
 * @param {*} e 
 */
function parallax(e){
  
    this.querySelectorAll(".layer").forEach(layer => {
        var speed = layer.getAttribute("data-speed");
        var x = (window.innerWidth - e.pageX * speed)/100;
        var y = (window.innerWidth - e.pageY * speed)/100;
    
        layer.style.transform = "translateX("+ x +"px) translateY("+ y +"px)";
    });
     
    
}