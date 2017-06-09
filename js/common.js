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
    $('.perName').find('ul>li:eq(0)').on('click',function () {
        location.href = 'userCenter-index.html';
    });
    $('.perName').find('ul>li:eq(1)').on('click',function () {
        location.href = 'Login.html';
    });

    //页面跳转
    $('.leftNav').find('.nav-sec:eq(0)').on('click',function () {
        location.href = 'userCenter-index.html';
    });
    $('#hdImg').find('.img').on('click',function () {
        location.href = 'userCenter-index.html';
    });
    $('.nav-sec').find('li').on('click',function () {
        var self = $(this);
        var i = self.find('span').text();
        switch (i){
            case  '购物车':
                location.href = 'shopCar.html';
                break;
            case  '我的订单':
                location.href = 'userCenter-myOrder.html';
                break;
            case  '我的提单':
                location.href = 'userCenter-myBill.html';
                break;
            case "付款凭证":
                location.href = 'userCenter-payment-p.html';
                break;
            case '付款确认':
                location.href = 'userCenter-payment-y.html';
                break;
            case '我的发票':
                location.href = 'userCenter-myInvoice.html';
                break;
            case '财务对账':
                location.href = 'userCenter-mthRec.html';
                break;
            case '消息列表':
                location.href = 'userCenter-newsList.html';
                break;
            case '修改密码':
                location.href = 'userCenter-passwordChange.html';
                break;
        }
    });

    //商品链接跳转
    $('#shopSev').find('.shopSec>img:nth-child(1)').on('click',function () {
        location.href = 'goodsDel.html';
    });
})(jQuery);
