let mainCards = [
  { front: '03', back: '04' },
  { front: '05', back: '06' },
  { front: '07', back: '08' }
]

let methodCards = [
  { front: '03', back: '04' },
  { front: '05', back: '06' },
  { front: '07', back: '08' }
]

$(document).ready(function() {

  mainCards.map((item,i) => {
    mainCards[i].id = 'main-' + i;
    let left = 20+30*i;
    let div = `<div class="card ${item.id}"  style="position:absolute;left:${left}px">
    <img class="back" src="./main-cards/3D Toolkit-v5_Page_${item.back}.jpg">
    <img class="front" src="./main-cards/3D Toolkit-v5_Page_${item.front}.jpg">
    <p>Read More</p>
    </div>
    `
    $('.main-cards .deck').append(div);
  });

  methodCards.map((item,i) => {
    methodCards[i].id = 'method-' + i;
    let left = 20+20*i;
    let div = `<div class="card ${item.id}" style="position:absolute;left:${left}px">
    <img class="back" src="./method-cards/method-jpg_Page_${item.back}.jpg">
    <img class="front" src="./method-cards/method-jpg_Page_${item.front}.jpg">
    <p>Read More</p>
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
