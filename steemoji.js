$(function() {
    
    var page_url = $(location).attr('href');

    var emojiBox = "<div class='emojiList' style='font-size: 24px;padding: 3px 8px;margin: 0;margin-bottom: 0px;color: #767676;background-color: #fafafa;border-left: 1px solid #ccc;border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;width: 100px;float: right;margin-bottom: 20px;text-align: center;cursor: pointer;'>\
                   😀😂😍\
                   </div><input id='emojiClip' style='opacity:0'>";

    var emojiBox_busy = "<div class='emojiList' style='font-size: 24px;padding: 3px 8px;margin: 0;margin-bottom: 0px;margin-bottom: 0px;color: #767676;background-color: #fafafa;border: 1px solid #ccc;width: 100px;float: left;text-align: center;cursor: pointer;'>\
                   😀😂😍\
                   </div><input id='emojiClip' style='opacity:0'>";

    var emojiDisplay = "<div class='emojidisplay' style='display:none;position: fixed;top: 0;left: 0;z-index: 9999;width: 100%;height: 100%;background: rgba(255,255,255,.5);text-align: center;letter-spacing: 5px;font-size: 55px;padding: 5%;'>\
                       <div class='close' style='cursor:pointer'>Close</div>\
                       <span style='cursor:pointer'>😀</span>\
                       <span style='cursor:pointer'>😬</span>\
                       <span style='cursor:pointer'>😁</span>\
                       <span style='cursor:pointer'>😂</span>\
                       <span style='cursor:pointer'>😃</span>\
                       <span style='cursor:pointer'>😄</span>\
                       <span style='cursor:pointer'>🤣</span>\
                       <span style='cursor:pointer'>😅</span>\
                       <span style='cursor:pointer'>😆</span>\
                       <span style='cursor:pointer'>😇</span>\
                       <span style='cursor:pointer'>😉</span>\
                       <span style='cursor:pointer'>😊</span>\
                       <span style='cursor:pointer'>🙂</span>\
                       <span style='cursor:pointer'>🙃</span>\
                       <span style='cursor:pointer'>😋</span>\
                       <span style='cursor:pointer'>😌</span>\
                       <span style='cursor:pointer'>😍</span>\
                       <span style='cursor:pointer'>😘</span>\
                       <span style='cursor:pointer'>😗</span>\
                       <span style='cursor:pointer'>🤪</span>\
                       <span style='cursor:pointer'>🤑</span>\
                       <span style='cursor:pointer'>🧐</span>\
                       <span style='cursor:pointer'>😎</span>\
                       <span style='cursor:pointer'>🤡</span>\
                       <span style='cursor:pointer'>😏</span>\
                       <span style='cursor:pointer'>😐</span>\
                       <span style='cursor:pointer'>🙄</span>\
                       <span style='cursor:pointer'>😳</span>\
                       <span style='cursor:pointer'>😡</span>\
                       <span style='cursor:pointer'>😔</span>\
                       <span style='cursor:pointer'>😣</span>\
                       <span style='cursor:pointer'>😤</span>\
                       <span style='cursor:pointer'>😱</span>\
                       <span style='cursor:pointer'>😨</span>\
                       <span style='cursor:pointer'>😰</span>\
                       <span style='cursor:pointer'>😢</span>\
                       <span style='cursor:pointer'>😥</span>\
                       <span style='cursor:pointer'>😓</span>\
                       <span style='cursor:pointer'>😭</span>\
                       <span style='cursor:pointer'>✊</span>\
                       <span style='cursor:pointer'>👍</span>\
                       <span style='cursor:pointer'>👎</span>\
                       <span style='cursor:pointer'>👋</span>\
                       <span style='cursor:pointer'>💖</span>\
                       <span style='cursor:pointer'>💕</span>\
                       <span style='cursor:pointer'>💘</span>\
                       <span style='cursor:pointer'>❌</span>\
                       <span style='cursor:pointer'>🚫</span>\
                       <span style='cursor:pointer'>🎵</span>\
                       <span style='cursor:pointer'>📢</span>\
                       <span style='cursor:pointer'>🍏</span>\
                       <span style='cursor:pointer'>🍐</span>\
                       <span style='cursor:pointer'>🥐</span>\
                       <span style='cursor:pointer'>🥝</span>\
                       <span style='cursor:pointer'>🍓</span>\
                       <span style='cursor:pointer'>🥗</span>\
                       <span style='cursor:pointer'>🍇</span>\
                       <span style='cursor:pointer'>🎖</span>\
                       <span style='cursor:pointer'>🥇</span>\
                       <span style='cursor:pointer'>🥈</span>\
                       <span style='cursor:pointer'>🥉</span>\
                       <span style='cursor:pointer'>🏆</span>\
                       <span style='cursor:pointer'>🎁</span>\
                       <span style='cursor:pointer'>📝</span>\
                       <span style='cursor:pointer'>📌</span>\
                       <span style='cursor:pointer'>📱</span>\
                       </div>";

    injectEmojiBox();
    
    setInterval(function(){
        if(page_url != $(location).attr('href')) {
            page_url = $(location).attr('href');
            if (page_url.indexOf("?draft") >= 0) {
                //DoNotRefrech Busy
            } else {
                injectEmojiBox();
            }
        }
    }, 1000);

    function injectEmojiBox(){

        setTimeout(function(){
            //Steemit Injection
            $( emojiBox ).insertAfter( ".ReplyEditor__body" );
            $( emojiDisplay ).insertAfter( "#content" );

            //Busy Injection
            $( emojiBox_busy ).insertAfter( ".EditorInput__imagebox" );
            $( emojiDisplay ).insertAfter( "body" );
        },3000);
    }

    $(document).on("click",".emojiList",function(e){
        $('.emojidisplay').show();
    });

    $(document).on("click",".close",function(e){
        $('.emojidisplay').hide();
    });

    $(document).on("click",".emojidisplay span",function(e){
        var emoji = $(this).text();
        $('#emojiClip').val(emoji);

        var copyText = document.getElementById("emojiClip");
        copyText.select();
        document.execCommand("copy");
        swal(copyText.value, "Copied in clipboard");

        $('.emojidisplay').hide();
    });

});