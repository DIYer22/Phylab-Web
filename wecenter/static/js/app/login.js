$(document).ready(function () {     $('#login_form input').keydown(function (e) {        if (e.keyCode == 13)        {            $('#login_submit').click();        }    });    var check_weixin_login;    $('.btn-wechat').mouseover(function()    {        if ($(this).find('img').length)        {            $(this).addClass('active');        }        check_weixin_login = setInterval(function ()        {            $.get(G_BASE_URL + '/account/ajax/weixin_login_process/', function (response) {                if (response.errno == 1)                {                    if ($('input[name="return_url"]').val())                    {                        window.location.href = $(input[name="return_url"]).val();                    }                    else                    {                        window.location.reload();                    }                }            }, 'json');        }, 1500);    });    $('.btn-wechat').mouseout(function()    {        $(this).removeClass('active');        clearInterval(check_weixin_login);    });    $('#login_submit').click();});