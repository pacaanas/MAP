$( document ).ready(function() {

    $('.parallax').parallax();
    $("#header_title,#about_me,#cupe,#musika,#appetite, #graphics, #cuba, #frontend, #backend, #designs, #icons, #contact").css({"opacity": "0"});
    $("#header_title").delay(500).addClass("animated bounceInLeft").css({"opacity": "1"});;
    $("#logo").delay(500).animate({
      opacity: 1
    }, 1200);

    $("#loadingscreen_logo:hidden:first").fadeIn( "slow" );
    Materialize.fadeInImage('#header_img');

    $('#modal1').modal();
    $('#modal2').modal();
    $('.slider').slider({full_width: true});
    $('.materialboxed').materialbox();

});
$(function() {
  var options = [
    {selector: '#about_me', offset: 150, callback: function(el) {
        $(el).addClass("animated bounceInLeft");
        $(el).css({"opacity": "1"});
    } },
    {selector: '#cupe', offset: 140, callback: function(el) {
        $(el).addClass("animated zoomIn");
        $(el).css({"opacity": "1"});
    } },
    {selector: '#musika', offset: 140, callback: function(el) {
        $(el).addClass("animated fideIn");
        $(el).css({"opacity": "1"});
    } },
    {selector: '#appetite', offset: 140, callback: function(el) {
        $(el).addClass("animated fadeInRight");
        $(el).css({"opacity": "1"});
    } },
    {selector: '#graphics', offset: 150, callback: function(el) {
        $(el).addClass("animated fadeInLeft");
        $(el).css({"opacity": "1"});
    } },
    {selector: '#cuba', offset: 150, callback: function(el) {
        $(el).addClass("animated fadeIn");
        $(el).css({"opacity": "1"});
    } },
    {selector: '#backend', offset: 150, callback: function(el) {
        $(el).addClass("animated fadeInRight");
        $(el).css({"opacity": "1"});
    } },
    {selector: '#designs', offset: 150, callback: function(el) {
        $(el).addClass("animated fadeInUp");
        $(el).css({"opacity": "1"});
    } },
    {selector: '#frontend', offset: 150, callback: function(el) {
        $(el).addClass("animated fadeInDownBig");
        $(el).css({"opacity": "1"});
    } },
    {selector: '#icons', offset: 170, callback: function(el) {
        $(el).addClass("animated fadeInUp");
        $(el).css({"opacity": "1"});
    } },
    {selector: '#contact', offset: 180, callback: function(el) {
        $(el).addClass("animated bounceInUp");
        $(el).css({"opacity": "1"});
    } }

  ];
  Materialize.scrollFire(options);

});
