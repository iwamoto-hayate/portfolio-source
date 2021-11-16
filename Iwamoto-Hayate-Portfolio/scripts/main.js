'use strict';

document.addEventListener('DOMContentLoaded', function () {
  // const main = new Main();
  loading.classList.add('loaded');
  _fontChange();
  // mobile-btnをクリックした時、menu-openクラスを付与する
  mobileBtn.addEventListener('click', function () {
    container.classList.toggle('menu-open');
  });

  // mobile-menu__coverをクリックした時、menu-openクラスを取り除く
  cover.addEventListener('click', function () {
    container.classList.remove('menu-open');
  });

  // fadeInクラスが画面下から100px内側で交差したらshowクラスを付与する
  new ScrollObserver('.fadeIn', _showAnimation, { rootMargin: "-100px" });
});

const mobileBtn = document.querySelector('.mobile-menu__btn');
const container = document.querySelector('.global-container');
const cover = document.querySelector('.mobile-menu__cover');
const loading = document.querySelector('.loading');
const headerItem = document.querySelector('.header-menu__item');
const pageTop = document.querySelector('.pageTopTrigger');

// elを取得し、showクラスをつけ外しする
function _showAnimation(el, show) {
  if (show) {
    el.classList.add('show');
  } else {
    el.classList.remove('show');
  }
};

// 以下ブラウザの判定
// ユーザーの使用しているブラウザ情報を小文字として取得してくる
// 遊ゴシックはwindows表示では見にくいため、フォントを変更
// 遊ゴシック体はiphone非搭載のため、変更
function _fontChange() {
  var userAgent = window.navigator.userAgent.toLowerCase();
  const fontStyle = document.querySelector('body');
  if (userAgent.indexOf('mac os') !== -1) {
    fontStyle.style.fontFamily =
    "游ゴシック体", "YuGothic", "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック", "Yu Gothic";
  } else if (userAgent.indexOf('msie') != -1 || userAgent.indexOf('trident') != -1) {
    // 処理
    fontStyle.style.fontFamily =
      "Meiryo",
      "メイリオ",
      "Helvetica Neue",
      "sans-serif";
  } else if (userAgent.indexOf('iphone') != -1 || userAgent.indexOf('ipad') != -1) {
    fontStyle.style.fontFamily =
      "Hiragino Kaku Gothic ProN",
      "Hiragino Sans",
      "Meiryo",
      "メイリオ",
      "sans-serif";
  };
}

window.addEventListener('scroll', () => {
  var scrollVal = this.scrollY;
  var viewHeight = this.innerHeight;
  // 画面表示高さの20％を超えたらトップへ戻るボタンを表示する
  if (scrollVal > viewHeight * 0.2) {
    pageTop.classList.add('show');
  } else {
    pageTop.classList.remove('show');
  }
});

pageTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
