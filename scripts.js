let mainCards = []
let methodCards = []

function generateCards(num, cards){
  for (var i = 3; i <= num; i++) {
    if ( i % 2 !== 0){
      cards.push({
        front: i, back: i+1
      })
    }
  }
}

generateCards(36, mainCards);
generateCards(72, methodCards);

$(document).ready(function() {

  mainCards.map((item,i) => {
    mainCards[i].id = 'main-' + i;
    let left = 20+30*i;
    let div = `<div class="card ${item.id}"  style="position:absolute;left:${left}px">
    <img class="back" src="./main-cards/maincard${item.back}.jpg">
    <img class="front" src="./main-cards/maincard${item.front}.jpg">
    <p>More</p>
    </div>
    `
    $('.main-cards .deck').append(div);
  });

  methodCards.map((item,i) => {
    methodCards[i].id = 'method-' + i;
    let left = 20+20*i;
    let div = `<div class="card ${item.id}" style="position:absolute;left:${left}px">
    <img class="back" src="./method-cards/methodcard${item.back}.jpg">
    <img class="front" src="./method-cards/methodcard${item.front}.jpg">
    <p>More</p>
    </div>
    `
    $('.method-cards .deck').append(div);
  });

  $('.card p').on('click', function(){
    $(this).parent().find('.front').animate({opacity:0},300);
    $(this).animate({opacity:0},300);
  });

  $('.card').on('mouseleave', function(){
    $(this).find('.front').animate({opacity:1},300);
    $(this).find('p').animate({opacity:1},300);
  });
});
