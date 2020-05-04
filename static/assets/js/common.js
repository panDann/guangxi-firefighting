/**
 * Created by Wjl on 2020.04.25.
 */



//    获取时间
getCurrentDate(new Date());
function getCurrentDate(date){
    var y = date.getFullYear();
    var m = date.getMonth()+1;
    var d = date.getDate();
    var h = date.getHours();
    var min = date.getMinutes();
    var s = date.getSeconds();
    var time=y+'-'+(m<10?('0'+m):m)+'-'+(d<10?('0'+d):d)+'  '+(h<10?('0'+h):h)+':'+(min<10?('0'+min):min)+':'+(s<10?('0'+s):s);
    $("#nowTime").html(time);
    setTimeout("getCurrentDate(new Date());", 1000);
    return time;
}


//tab切换
$(function(){
    $("#tabNav .gx-title-tab").on("click",function(){
        var index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $("#tabContent .tab-list").eq(index).addClass("on").siblings().removeClass("on");
    });
});

$(function(){
    $(".gx-home-card-tab span").on("click",function(){
        var index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        //$("#tabContent .tab-list").eq(index).addClass("on").siblings().removeClass("on");
    });
});


//tab切换
$(function(){
    $(".li-header-user").on("click",function(){
        $(".li-header-list").toggle();

    });
});

//下拉框选项

$(function(){
    $(".gx-select-box .gx-select-title").on("click",function(){
        $('.gx-select-list').toggle();
    });
    $(".gx-select-box .gx-select-list").on("click","li",function(){
        //alert($(this).text())
        $(this).parent().prev().find('span').text($(this).text());
        $(this).parent().hide()
    });
});

$(function(){
    $(".form-list-select-box .form-list-select").on("click",function(){
        $(this).next('.form-list-select-ul').toggle();
    });
    $(".form-list-select-ul").on("click","li",function(){
        //alert($(this).text())
        $(this).parent().prev().find('span').text($(this).text());
        $(this).parent().hide()
    });
});


//表单伸缩
$(function(){
    $(".gx-form-card-header .icon-arrow-bottom").on("click",function(){
        $(this).parent().next('.gx-form-card-body').toggle();
    });
});

//单选框
;(function($){
    $.extend({
        inputStyle:function(){
            function check(el,cl){
                $(el).each(function(){
                    $(this).parent('i').removeClass(cl);

                    var checked = $(this).prop('checked');
                    if(checked){
                        $(this).parent('i').addClass(cl);
                    }
                })
            }
            $('.input-radio[type="radio"]').on('click',function(){
                check('input[type="radio"]','radio_bg_check');
            })
            $('.input-radio[type="checkbox"]').on('click',function(){
                check('input[type="checkbox"]','checkbox_bg_check');
            })
        }

    })
})(jQuery)

//调用
$(function(){
    $.inputStyle();
})



$(function () {
    var text = $('.gx-form-textarea').val();
    var len = text.length;
    $('.gx-form-textarea').next().find('span').html(len);
    $('.gx-form-textarea').keyup(function () {
        var text = $(this).val();
        len = text.length;
        if (len > 200) {
            return false;
        }
        $(this).next().find('span').html(len);
    })
});























