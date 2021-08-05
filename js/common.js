window.onunload = function() {};

function sizecheck() {
  w = window.innerWidth ? window.innerWidth : $(window).width();
  h = window.innerHeight ? window.innerHeight : $(window).height();
}

sizecheck();
$(function () {
if (w > 769) {
} else { 
  $("header .drawer").click(function(){
  $('body').toggleClass('nav-open');
  $('header .navbar').fadeToggle(200);
    });
  }
});

//ロード画面

$(window).on('load',function(){
  $("#loading").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  $("#loading_box").delay(1200).fadeOut('slow');//ローディングテキストを1.2秒（1200ms）待機してからフェードアウト
});


// フェードイン
function fadeIn(){
  // フェードアップ
  $('.fadeUpTrigger').each(function(){// fadeUpTriggerクラスの各要素に対して
    let scroll = $(window).scrollTop();// スクロール位置を取得する
    let triTop = $(this).offset().top + 200;// 要素の上部より100px下の位置を取得
    let winHeight = $(window).height();// ウィンドウの高さを取得
    if (scroll >= triTop - winHeight){ // 画面内に要素が入ったかを判断
      $(this).addClass('fadeUp');// fadeUpクラスを付与
    }else{
      $(this).removeClass('fadeUp');// fadeUpクラスを削除
    }
  });

  // フェードレフト
  $('.fadeLeftTrigger').each(function(){
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight){
      $(this).addClass('fadeLeft');
    }else{
      $(this).removeClass('fadeLeft');
    }
  });

  // フェードライト
  $('.fadeRightTrigger').each(function(){
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight){
      $(this).addClass('fadeRight');
    }else{
      $(this).removeClass('fadeRight');
    }
  });
}

$(window).scroll(function () {// スクロールしたら
  fadeIn();// 関数を実行
});
//スライドショー
  $('.slider-3').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    arrows: true,
    slidesToShow: 3,
  });
  