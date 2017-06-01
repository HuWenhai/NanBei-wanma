/**
 * Created by 左江涛 on 2017/6/1.
 */

(function ($) {
    //购物车跳转
    $('.shopCar').on('click',function () {
        location.href = 'shopCar.html';
    });
    // header--账号管理
    $('.perName').hover(function () {
        $(this).css({
            'visibility':'visible'
        });
        $(this).find('.manage>img').attr('src','../res/header/slideUp.png');
    },function () {
        $(this).css({
            'visibility':'hidden'
        });
        $(this).find('.manage>img').attr('src','../res/header/slideDown.png');
    });
})(jQuery);
