/*フェードイン*/
$(function () {

  $(window).scroll(function () {
    $('.fadeIn').each(function () {
      var elemPos = $(this).offset().top;

      var scroll = $(window).scrollTop();

      var windowHeight = $(window).height();

      if (scroll > elemPos - windowHeight + 180) {
        $(this).addClass('scrollin');
      }

    })


  })


});

/*hover機能*/

/*要素をクリックしたとき実行*/
$('.works-list li').click(function () {

  /*activeクラスを外す*/
  $('.modal-list').removeClass('modal-active');

  /*クリックした要素のインデックス番号を取得*/
  var modalSlide = $('.works-list li').index($(this));

  /*モーダルをフェードイン*/
  $('.modal-wrapper').fadeIn();

  /*クリックした要素と同じ番号のモーダルスライドを挿入*/
  $('.modal-list').eq(modalSlide).addClass('modal-active');

});
  

/* 閉じる機能*/

$('.close-btn').click(function () {

  $('.modal-wrapper').fadeOut();
});
