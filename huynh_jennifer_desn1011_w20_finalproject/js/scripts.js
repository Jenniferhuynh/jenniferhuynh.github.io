
//soundtrack for lalaland
 var tracks = [];
 for(i=0; i<1; i++) {
 tracks[i]=document.createElement('audio');
 }

 tracks[0].setAttribute('src', 'music/themesong.mp3');
 
 $('.buttons .play').click(function(){
    tracks[0].play();
 });

 $('.buttons .pause').click(function(){
    tracks[0].pause();
 });


$('main').scroll(function() {

    var scrollPos = $('main').scrollLeft();

    //buttons
    $('.buttons .act1star').click(function() {
        $('.buttons .act1star').removeClass('active');
        $(this).addClass('active');
    });

    if (scrollPos > $('.title').offset().left ){
        $('.section0 .nametext').fadeIn(700);
    }

    else{ 
        $('.section0 .nametext').fadeOut();
    }
    
    //ACT1
    //text1
    if (scrollPos> $('.section1').offset().left){
        $('.section2 .text1').fadeIn(7000);
    }
    else{
        $('.section2 .text1').fadeOut();
    }

    //text2
    if (scrollPos> $('.section2 .scene1').offset().left){
        $('.section2 .text2').fadeIn(7000);
    }
    else{
        $('.section2 .text2').fadeOut();
    }

    //text3
    if (scrollPos> $('.section2 .scene2').offset().left){
        $('.section2 .text3').fadeIn(7000);
    }
    else{
        $('.section2 .text3').fadeOut();
    }

    //text4
    if (scrollPos> $('.section2 .scene3').offset().left){
        $('.section2 .text4').fadeIn(7000);
    }
    else{
        $('.section2 .text4').fadeOut();
    }

    //text5
    if (scrollPos> $('.section2 .scene4').offset().left){
        $('.section2 .text5').fadeIn(7000);
       // $('.section2 .text5 .fadedbg1').fadeIn(3000);
    }
    else{
        $('.section2 .text5').fadeOut();
        //$('.section2 .text5 .fadedbg1').fadeOut();
    }

    //ACT2
    //text6
    if (scrollPos> $('.section3').offset().left){
        $('.section4 .text6').fadeIn(7000);
    }
    else{
        $('.section4 .text6').fadeOut();
    }

    //text7
    if (scrollPos> $('.section4 .text6').offset().left){
        $('.section4 .text7').fadeIn(7000);
    }
    else{
        $('.section4 .text7').fadeOut();
    }

    //text8
    if (scrollPos> $('.section4 .text7').offset().left){
        $('.section4 .text8').fadeIn(7000);
    }
    else{
        $('.section4 .text8').fadeOut();
    }

    //text9
    if (scrollPos> $('.section4 .text8').offset().left){
        $('.section4 .text9').fadeIn(7000);
    }
    else{
        $('.section4 .text9').fadeOut();
    }

    //text10
    if (scrollPos> $('.section4 .text9').offset().left){
        $('.section4 .text10').fadeIn(7000);
    }
    else{
        $('.section4 .text10').fadeOut();
    }

    //ACT3
    //text11
    if (scrollPos> $('.section5').offset().left){
        $('.section6 .text11').fadeIn(7000);
    }
    else{
        $('.section4 .text11').fadeOut();
    }

    //text12
    if (scrollPos> $('.section6 .text11').offset().left){
        $('.section6 .text12').fadeIn(7000);
    }
    else{
        $('.section4 .text12').fadeOut();
    }

    //text13
    if (scrollPos> $('.section6 .text12').offset().left){
        $('.section6 .text13').fadeIn(7000);
    }
    else{
        $('.section4 .text13').fadeOut();
    }

    //text14
    if (scrollPos> $('.section6 .text13').offset().left){
        $('.section6 .text14').fadeIn(7000);
    }
    else{
        $('.section4 .text14').fadeOut();
    }

});