
$(Window).scroll(function(){
    var scrolling = $(this).scrollTop()
    //scroll window bottom to top
    if(scrolling > 350){
        $('.scroll-top').fadeIn()
    }else{
        $('.scroll-top').fadeOut()
    }

    //nav fixed
    if(scrolling > 350){
        $('nav').addClass('nav-fix')
    }else{
        $('nav').removeClass('nav-fix')
    }

})
//click scroll top
$('.scroll-top').click(function(){
    $('html,body').animate({
        scrollTop: '0px',
    },00)
})