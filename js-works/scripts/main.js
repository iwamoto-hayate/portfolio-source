/*=========== ここからjQuery記述 ===========*/

$(function(){
  var nav = $('.header-nav')
  $('.drawer-list').hide();
  $('li.drawer-menu', nav)
  .mouseover(function() {
    $('.drawer-list', this).stop().slideDown();
  })
  .mouseout(function() {
    $('.drawer-list', this).stop().slideUp();
  });
});

/* ============= topへ戻るbtn ============= */
$(function(){
  var pageTopBtn = $('#pagetop-btn');
  /*========== スクロール量が100pの時にfadeInをしようして.btn-topをフェードインさせる ========== */
  $(window).scroll(function(){
    // thisはこの処理内で使っているwindowをさす。
    var scroll = $(this).scrollTop();
    // window(画面全体)の上からスクロール量を100px超えると、top-btnが300msでfadeInし、
    if(scroll > 99){
      pageTopBtn.fadeIn(300);
      // それ以外はfadeOutする
    } else {
      pageTopBtn.fadeOut(300);
    }
  });
        /*========== 以下二つの処理を組み合わせる ========== */
      // 以下はスクロール量の監視
      // $(function() {
      //   $(window).scroll(function() {
      //     var scroll = $(this).scrollTop();
      //     console.log(scroll);
      //     console.log(this);
      //   });
      // });

      // 以下はfadeInの実行
      // $(function(){
      //   $('.top-btn').fadeIn(300);
      // })


  /*========== btn-topにホバーした時、不透明度を変更========== */
  pageTopBtn.hover(
    function(){
      pageTopBtn.css('opacity', '.7')
    },
    function(){
      pageTopBtn.css('opacity', '1')
    }
  );
  /*========== btn-topをクリックした時、スクロールしてトップに戻る ========== */
  $(function(){
    pageTopBtn.click(function(){
      $('body, html').animate({scrollTop: 0},500);
      return false;
    })
  })
});

// https://qiita.com/nagomi-753/items/fb098a689b2699aa1258
// each文を使用してクリックする間繰り返し処理を行う
$('.modal-trigger').each(function(){
  // clickした時に、clickされたmodal-triggerのdata-target（idとリンク）を取得し、それに対してfadeInを実行する処理を行う
  $(this).on('click', function(){
    var target = $(this).data('target');
    console.log(target);

    // targetではid名しか取得できないので、jsを合わせる
    var modal = document.getElementById(target);
    console.log(modal);
    $(modal).fadeIn(300);
    $('body').css({'overflow':'hidden'});
    return false;
  });
});
// modal-closeをclickした時にmodalを閉じる処理
$('.modal-close').on('click', function(){
  $('.modal-container').fadeOut(300);
  $('body').css({'overflow':'scroll'});
  return false;
});


 /*========== genre filter ========== */

const genreListItem = '.genre-list-item';
const contentItem = '.content-item';
const hideClass = 'hide';
const activeClass = 'active';

$(function () {
  // 対象の要素をクリックしたらイベント発火
  $(genreListItem).on('click', function () {
    // はじめにすべての.genre-list-itemからactiveを取り除いておく
    $(genreListItem).removeClass(activeClass);
    // クリックした.genre-list-itemのdata属性を取得し変数groupとする
    var group = $(this).addClass(activeClass).data('group');
    // search_filterを実行、引数にgroupをとる
    search_filter(group);
  });
});

// search_filterの記述、引数にgroupをとる
function search_filter(group) {
  // '.content-item'からhideを取り除く
  $(contentItem).removeClass(hideClass);
  // 条件分岐で引数に取ったgroup(data属性)がall出会った場合、元に戻す？returnの意味がいまいち。。。
  if(group == 'all'){
    return;
  }
  
  //繰り返し処理で'.content-item'からdata属性が一致するかどうかを調べる
  for(var i = 0; i < contentItem.length; i++){
    // 調べた'.content-item'のdata属性を変数に入れる
    var itemData = $(contentItem).eq(i).data('group');
    
    // 調べた'.content-item'とクリックした.genre-list-itemが一致しない場合に、その要素にhideクラスをつけて非表示にする
    if(itemData !== group) {
      $(contentItem).eq(i).addClass(hideClass);
    }
  }
}
/* ============= アコーディオン ============= */

const accordionTrigger = '.accordion-li';
const appearItem = '.accordion-box';
const accordionTitle = '.accordion-title';

$(function () {
  $('.accordion-li').on('click', function () {
    $(this).find($(appearItem)).slideToggle();
    $(this).find($(accordionTitle)).toggleClass('open');
  });
});


/* ------------------------------------------------ */


/*=========== ここからJavaScript記述 ===========*/

/* ============= クリックイベントとファードイン ============= */

const fadeBtn = document.querySelector('.fade-trigger_btn');
const fadeTrigger = document.querySelector('.fade-container');

fadeBtn.addEventListener('click', function(){
  fadeTrigger.classList.toggle('show');
});

/* ============= クリックイベントとテキストアニメーション ============= */
const textAnimationTrigger = document.querySelector('.textanimation-trigger_btn');
const animateTitle = document.querySelector('.animate-title');

textAnimationTrigger.addEventListener('click', function(){
  animateTitle.classList.toggle('show');
});


/* ============= クリックイベントとカバースライド ============= */
const coverSlideBtn = document.querySelector('.coverslide-trigger_btn');
const coverSlideItem = document.querySelectorAll('.coverslide-item');
// console.log(coverSlideItem);

function coverSlide() {
  // coverSlideItemは配列になっているので一つずつ取り出し、番号によって分けたクラス名を取得。のちにアニメーションを追加するためのshowクラスを付与する処理
  for(i=0; i < coverSlideItem.length; i++) {
    // 配列番号をクラスの番号にしたいので+1
    let num = i+1;
    // slideNumを定義して、変数numを使ってクラス名を代入
    let slideNum = `.coverslide-item_0${num}`;
    // slideNumはクラス名(文字列そのもの)なので、取得し変数targetとして代入
    let target = document.querySelector(slideNum);
    // console.log(slideNum);
    // targetにshowクラスを付与する
    target.classList.add('show');
    // animationを監視し、終了したらshowクラスを外す処理
    target.addEventListener('animationend',() => {
      target.classList.remove('show');
    });
  }
};
// ボタンを押した時にcoverSlideの実行する処理
coverSlideBtn.addEventListener('click', function(){
  coverSlide();
});



