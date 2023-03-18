const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 305
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle,a,.movie-list-item-desc,.movie-list-item-title"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});
function rastgelesayfa(){
  var rastgele=Math.round(Math.random()*30)
  var links=new Array()
  links[0]="page/aos.html"
  links[1]="page/arrow.html"
  links[2]="page/Avengers.html"
  links[3]="page/batman.html"
  links[4]="page/blackpanther.html"
  links[5]="page/blackwidow.html"
  links[6]="page/daredevil.html"
  links[7]="page/deadpool.html"
  links[8]="page/doctorstrange.html"
  links[9]="page/doompatrol.html"
  links[10]="page/Eternals.html"
  links[11]="page/flash.html"
  links[12]="page/gotg.html"
  links[13]="page/hawkeye.html"
  links[14]="page/invincible.html"
  links[15]="page/joker.html"
  links[16]="page/logan.html"
  links[17]="page/loki.html"
  links[18]="page/moonknight.html"
  links[19]="page/peacemaker.html"
  links[20]="page/punisher.html"
  links[21]="page/shangchi.html"
  links[22]="page/spiderman.html"
  links[23]="page/spiderverse.html"
  links[24]="page/suicidesquad.html"
  links[25]="page/superman.html"
  links[26]="page/theboys.html"
  links[27]="page/thor.html"
  links[28]="page/venom.html"
  links[29]="page/wandaVision.html"
  links[30]="page/what if.html"


  window.location=links[rastgele]
};
