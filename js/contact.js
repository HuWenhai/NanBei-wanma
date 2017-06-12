/**
 * Created by 左江涛 on 2017/6/6.
 */

(function ($) {
    //QQ联系方式
    $('.imgCon').find('img').hover(function () {
        var src = $(this).attr('src');
        var l = $(this).position().left;
        var h = $(this).position().top + $(this).height() + 5;
        var par = $(this).parent();
        if (src == '../res/smIcon/qq-c.png'){
            createQQDom();
            $('#qq').css({
                left:l,
                top:h
            }).show();
        }
        function createQQDom() {
            //从服务器获取对应的数值
            var qq = $.ajax({
                url:'',
                method:'post',
                success:function () {
                    return 1111
                }
            });
            //动态生成联系方式图框
            $('<div id="qq">12345678900</div>',{
                id:'qq',
                name:'qq',
                value: qq
            }).appendTo(par);
        }
    },function () {
        $('#qq').remove();
    });

    //微信联系方式
    $('.imgCon').find('img').hover(function () {
        var src = $(this).attr('src');
        var l = $(this).position().left + $(this).width() + 10;
        var h = $(this).position().top - 65;
        var par = $(this).parent();
        if (src == '../res/smIcon/weixin-c.png'){
            createWeChatDom();
            $('#weChat').css({
                left:l,
                top:h
            }).show();
        }
        function createWeChatDom() {
            //从服务器获取对应的数值
            var weChat = $.ajax({
                url:'',
                method:'post',
                success:function () {
                    return 1111
                }
            });
            //动态生成联系方式图框
            $('<div id="weChat"></div>',{
                id:'weChat',
                name:'weChat',
                value: weChat
            }).appendTo(par);
        }
    },function () {
        $('#weChat').remove();
    });

    //电话联系方式
    $('.imgCon').find('img').hover(function () {
        var src = $(this).attr('src');
        var l = $(this).position().left - 30;
        var h = $(this).position().top + $(this).height() + 5;
        var par = $(this).parent();
        if (src == '../res/smIcon/tel-c.png'){
            createTelDom();
            $('#Tel').css({
                left:l,
                top:h
            }).show();
        }
        function createTelDom() {
            //从服务器获取对应的数值
            var Tel = $.ajax({
                url:'',
                method:'post',
                success:function () {
                    return 11112222     //返回具体的联系方式数字字段
                }
            });
            //动态生成联系方式图框
            $('<div id="Tel">0571-5555555</div>',{
                id:'Tel',
                name:'Tel',
                value: Tel
            }).appendTo(par);
        }
    },function () {
        $('#Tel').remove();
    });

    //QQ，微信，电话联系方式框小三角样式设置
    $('#qq,#weChat,#Tel').append('<div id="sanjiao"></div>');

    //Email联系方式
    $('.imgCon').find('img').on('click',function () {
        var src = $(this).attr('src');
        if (src == '../res/smIcon/email-c.png'){
            createEmailDom();
            $('#email').show();
        }
        function createEmailDom() {
            //从服务器获取对应的数值
            var email = $.ajax({
                url:'',
                method:'post',
                success:function () {
                    return 11112222     //返回具体的联系方式数字字段
                }
            });

            $('<div id="email-dom">' +
                '<div class="fixed"></div>' +
                '</div>',{
                id:'email',
                name:'email',
                value:'email'
            }).appendTo('body');
            $('.fixed').append('<div id="email-tit">' +
                '<span>填写邮件</span>' +
                '<span id="close">×</span>'+
                '</div>');
            $('.fixed').append('<table>' +
                '<tr>' +
                '<td style="width: 60px">发送人：</td>' +
                '<td>风清扬</td>' +
                '</tr>' +
                '<tr>' +
                '<td>发送主题：</td>' +
                '<td>' +
                '<input value="111">' +
                '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>添加附件：</td>' +
                '<td>' +
                '<button id="uploadBtn"><img src="../res/smIcon/uploadFile.png" alt="">上传文件</button>' +
                '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>内容：</td>' +
                '<td>' +
                '<textarea>111</textarea>' +
                '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>' +
                '</td>' +
                '<td>' +
                '<button>发送</button>' +
                '</td>' +
                '</tr>' +
                '</table>');

            $('#close').on('click',function () {
                $('#email-dom').remove();
            });
        }
    });

    //趋势图
    $('.imgCon').find('img').on({
        mouseenter:function () {
            var src = $(this).attr('src');
            if (src == '../res/smIcon/shopTrend.png'){
                var l = $(this).offset().left + 20;
                var l_2 = $(this).offset().left - 460;
                var h = $(this).offset().top - 150;
                var r = $(window).width() - $(this).offset().left ;
                if (r >= 480){
                    $('<div id="lineTrend"></div>').css({
                        left:l,
                        top:h
                    }).appendTo('body');
                    createTrend();
                    $('#lineTrend').show();
                }else{
                    $('<div id="lineTrend"></div>').css({
                        left:l_2,
                        top:h
                    }).appendTo('body');
                    createTrend();
                    $('#lineTrend').show();
                }
            }
            function createTrend() {
                //路径配置
                require.config({
                    paths: {
                        echarts: 'http://echarts.baidu.com/build/dist'
                    }
                });

                require(
                    [
                        'echarts',
                        'echarts/chart/line' // 使用折线图就加载pie模块，按需加载
                    ],
                    function (ec) {
                        // 基于准备好的dom，初始化echarts图表
                        var myLine_2 = ec.init(document.getElementById('lineTrend'));
                        //订单购买走势图--折线图
                        var opt = {
                            backgroundColor:'#ffffff',
                            title : {
                                text: '过去半年订单购买走势图'
                            },
                            tooltip : {
                                trigger: 'axis'
                            },
                            toolbox: {
                                show : true,
                                feature : {
                                    mark : {show: false},
                                    dataView : {show: false, readOnly: false},
                                    magicType : {show: false, type: ['line']},
                                    restore : {show: false},
                                    saveAsImage : {show: false}
                                }
                            },
                            calculable : true,
                            xAxis : [
                                {
                                    type : 'category',
                                    boundaryGap : false,
                                    data : ['1','2','3','4','5','6']  //X轴月份
                                }
                            ],
                            yAxis : [
                                {
                                    type : 'value',
                                    axisLabel : {
                                        formatter: '{value}'   //Y轴数值
                                    }
                                }
                            ],
                            series : [
                                {
                                    name:'订单购买量',
                                    type:'line',
                                    data:[110, 141, 150, 313, 120, 113, 100],  //Y轴具体数值（6个值）
                                    itemStyle : {
                                        normal : {
                                            color:'#6FA2F5',
                                            lineStyle:{
                                                color:'#6FA2F5'
                                            }
                                        }
                                    },
                                    markPoint : {
                                        data : [
                                            {type : 'max', name: '最大值',itemStyle:{ normal:{color:'#6FA2F5'}}},
                                            {type : 'min', name: '最小值',itemStyle:{ normal:{color:'#6FA2F5'}}}
                                        ]
                                    },
                                    markLine : {
                                        data : [
                                            {type : 'average', name: '平均值',itemStyle:{ normal:{color:'#6FA2F5'}}}
                                        ]
                                    }
                                }
                            ]
                        };
                        myLine_2.setOption(opt);
                    }
                );
            }
        },
        mouseleave:function () {
            $('#lineTrend').remove();
        }
    });
})(jQuery);
