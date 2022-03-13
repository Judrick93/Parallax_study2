//레이어 팝업
$(".layer").click(function(e){
    e.preventDefault();
    //$("#layer").css("display","block");
    //$("#layer").show();
    //$("#layer").fadeIn();
    $("#layer").slideDown();
});
$("#layer .close").click(function(e){
    e.preventDefault();
    //$("#layer").css("display","none");
    //$("#layer").hide();
    //$("#layer").fadeOut();
    $("#layer").slideUp();
});

//윈도우 팝업
$(".window").click(function(e){
    e.preventDefault();
    //window.open("파일명", "팝업이름", "옵션설정");
    //옵션 : left, top, width, height, status, toolbar, location, menubar, scrollbars, fullscreen
    window.open("popup.html","popup01","width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0");
});
