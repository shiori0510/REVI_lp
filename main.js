
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
//    // 動きのきっかけの起点となるアニメーションの名前を定義
// function fadeAnime(){

//   // ふわっ
//   $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
//     var elemPos = $(this).offset().top-50;//要素より、50px上の
//     var scroll = $(window).scrollTop();
//     var windowHeight = $(window).height();
//     if (scroll >= elemPos - windowHeight-200){
//     $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
//     }
//     });

//   $('.fadeLeftTrigger').each(function(){ //fadeLeftTriggerというクラス名が
//     var elemPos = $(this).offset().top-30;//要素より、50px上の
//     var scroll = $(window).scrollTop();
//     var windowHeight = $(window).height();
//     if (scroll >= elemPos - windowHeight){
//     $(this).addClass('fadeLeft');// 画面内に入ったらfadeLeftというクラス名を追記
//     }else{
//     $(this).removeClass('fadeLeft');// 画面外に出たらfadeLeftというクラス名を外す
//     }
//     });

//   $('.fadeRightTrigger').each(function(){ //fadeRightTriggerというクラス名が
//     var elemPos = $(this).offset().top-30;//要素より、50px上の
//     var scroll = $(window).scrollTop();
//     var windowHeight = $(window).height();
//     if (scroll >= elemPos - windowHeight){
//     $(this).addClass('fadeRight');// 画面内に入ったらfadeRightというクラス名を追記
//     }else{
//     $(this).removeClass('fadeRight');// 画面外に出たらfadeRightというクラス名を外す
//     }
//     });
// }
  
//   // 画面をスクロールをしたら動かしたい場合の記述
//   $(window).scroll(function (){
//     fadeAnime();/* アニメーション用の関数を呼ぶ*/
//   });// ここまで画面をスクロールをしたら動かしたい場合の記述
  
  // $(function(){
	// 	//クリックで動く
	// 	$('.question-open').click(function(){
	// 		$(this).toggleClass('active');
	// 		$(this).next('.question-list').slideToggle();
	// 	});
  // });

  //アコーディオン
  jQuery(function($) {
    $('.toggle_title').click(function() {
      $(this).toggleClass('selected');
      $(this).next().slideToggle();
      
    });
  });
});


  // rootからbottom:-200pxの位置で発火
const options = {
  root: null,
  rootMargin: "0px 0px -50px",
  threshold: 0
};

let items = ['.scroll-fadein', '.scroll-fadein-right', '.scroll-fadein-left','.rotate'];

for( let i=0; i <= 10; i++) {
  items.push('.scroll-fadein-delay' + i);
  items.push('.scroll-fadein-left-delay' + i);
  items.push('.scroll-fadein-right-delay' + i);
  items.push('.rotate-delay' + i);

};
const item = items.join();   //定数itemをそのまま連結する

const scrollFadeins = document.querySelectorAll(item);  //itemはすべてscrollFadeins ??

scrollFadeins.forEach((target) => this.onIntersect(target, options));  //ターゲットとオプションが重なったら反復

function onIntersect(target, options) {
  const observer = new IntersectionObserver(this.addShowClass, options);   //第一引数・・・要素が交差したときの処理、第二引数・・・オプション

  // 監視したい要素をobserveする。
  observer.observe(target);
}
function addShowClass(entries) {
  for(const e of entries) {
    if (e.isIntersecting) {
      e.target.classList.add("show");

    }
  }
}





  



