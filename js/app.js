
// Home effects

$('.vertical-menu a').hover(function() {

  $(this).css("transform", "scale(1.5");

  }, function() {

  $(this).css("transform", "scale(1)");
})


// Tarifs effects

$('.price-table').hover(function() {

  $(this).css("transform", "scale(1.2");

  }, function() {

  $(this).css("transform", "scale(1)");

})


// Switching home version

// Cluedo mode
$('#cluedo').click(function() {

  var left = $('#content1').offset().left;  // Get the calculated left position

  $("#content1").css({left:left})  // Set the left to its calculated position
  .animate({"left":"850px"}, "slow");

  //add .active class for bckgrnd modifications
      if ($('#cluedo').siblings().hasClass('active')) {
        $('.active').css('background-color', 'rgba(0, 0, 0, 0)');
      $('.active').removeClass('active');
    };

      if(!$('#cluedo').hasClass("active")) {
      $('#cluedo').addClass("active");
      $('.active').css('background-color', '#AA0132');
      };

  $('body').css('background-image', 'url(/newArea/images/cluedo.jpeg)');
  $('#title1, .vertical-menu .active').css('background-color', '#1F595C');
  $('.vertical-menu').css('border-color', '#1F595C');
  $('#content1').css('border-color', '#1F595C');
  $('.active').css('background-color', '#1F595C');

  // Text
  $('#title1').text("Trouverez-vous le coupable ?");
  $('#title1').css('font-size', '3em');
  $('#title1').css('text-align', 'center');
  $('#title1').css("font-family", "'Kirang Haerang', cursive");

  $('#content1 h2').text("Découvrez le détective qui est en vous avec ce Cluedo grandeur nature !");


// hover
  $('.vertical-menu a').hover(function() {
    $(this).css('color', '#1F595C');
  }, function(){
    $(this).css('color', '#ffffff');
  })

  if ($('#cluedo').hasClass('active')) {
      $('#cluedo').hover(function() {
      $('#cluedo').css('color', '#ffffff');
  }, function(){
    $('#cluedo').css('color', '#ffffff');
  });

}});

// EG mode
$('#eg').click(function() {

  var left = $('#content1').offset().left;  // Get the calculated left position

  $("#content1").css({left:left})  // Set the left to its calculated position
  .animate({"left":"850px"}, "slow");

  //add .active class for bckgrnd modifications
      if ($('#eg').siblings().hasClass('active')) {
        $('.active').css('background-color', 'rgba(0, 0, 0, 0)');
      $('.active').removeClass('active');
    };

      if(!$('#eg').hasClass('active')) {
      $('#eg').addClass('active');
      $('.active').css('background-color', '#756357');
      };

  $('body').css('background-image', 'url(/newArea/images/eg.jpeg)');
  $('#title1, .vertical-menu .active').css('background-color', '#756357');
  $('.vertical-menu').css('border-color', '#756357');
  $('#content1').css('border-color', '#A68C7B');
  $('.active').css('background-color', '#756357');
// text
  $('#title1').text("Le grand classique !");
  $('#title1').css('font-size', '2em');
  $('#title1').css('text-align', 'center');
  $('#title1').css("font-family", "'Homemade Apple', cursive");
  $('#content1 h2').text("Adeptes ou initiés: choisissez parmi nos différentes escape rooms");

//hover
$('.vertical-menu a').hover(function() {
  $(this).css('color', '#756357');
}, function(){
  $(this).css('color', '#ffffff');
})

if ($('#eg').hasClass('active')) {
    $('#eg').hover(function() {
    $('#eg').css('color', '#ffffff');
}, function(){
  $('#eg').css('color', '#ffffff');
});

}});


// VR mode
$('#vr').click(function() {

  //add .active class for bckgrnd modifications
  if ($('#vr').siblings().hasClass('active')) {
    $('.active').css('background-color', 'rgba(0, 0, 0, 0)');
    $('.active').removeClass('active');
  };

      if(!$('#vr').hasClass('active')) {
      $('#vr').addClass('active');
      $('.active').css('background-color', '#193441');
      };

  $('#vr').addClass('active');
  $('body').css('background-image', 'url(/newArea/images/vr.jpeg)');
  $('#title1, .vertical-menu .active').css('background-color', '#193441');
  $('.vertical-menu').css('border-color', '#193441');
  $('#content1').css('border-color', '#78C6D4');
  $('#vr').css('background-color', '#193441');
  $('.active').css('background-color', '#193441');

  // text
    $('#title1').text("Explorez le nouveau monde de la réalité virtuelle");
    $('#title1').css('font-size', '2.2em');
    $('#title1').css('text-align', 'center');
    $('#title1').css("font-family", "'VT323', monospace");
    $('#content1 h2').text("Une nouvelle réalité à portée de bras, au sens strict du terme !");


  //hover
  $('.vertical-menu a').hover(function() {
    $(this).css('color', '#193441');
  }, function(){
    $(this).css('color', '#ffffff');
  })

  if ($('#vr').hasClass('active')) {
      $('#vr').hover(function() {
      $('#vr').css('color', '#ffffff');
  }, function(){
    $('#vr').css('color', '#ffffff');
  });

  };
});

// Horror mode
$('#horror').click(function() {

  var left = $('#content1').offset().left;  // Get the calculated left position

  $("#content1").css({left:left})  // Set the left to its calculated position
  .animate({"left":"850px"}, "slow");

  //add .active class for bckgrnd modifications
      if ($('a#horror').siblings().hasClass('active')) {
      $('.active').css('background-color', 'rgba(0, 0, 0, 0.0)');
      $('a#horror').siblings().removeClass('active');
    };

      if(!$('#horror').hasClass("active")) {
      $('#horror').addClass("active");
      $('.active').css('background-color', '#AA0132');
      };

  $('body').css('background-image', 'url(/newArea/images/home1.jpeg)');
  $('#title1, .vertical-menu .active').css('background-color', '#AA0132');
  $('.vertical-menu').css('border-color', '#AA0132');
  $('#content1').css('border-color', '#AA0132');
  $('.active').css('background-color', '#AA0132');
// text
  $('#title1').text("Une expérience unique pour Halloween !");
  $('#title1').css('font-size', '2em');
  $('#title1').css('text-align', 'center');
  $('#title1').css("font-family", "'Cinzel', serif");
  $('.vertical-menu .active').css("background-color", "#AA0132");
  $('#content1 h2').text("Pour Halloween, découvrez notre nouveau jeu grandeur nature: l'Horror'escape !");
});
// hover
  $('.vertical-menu a').hover(function() {
    $(this).css('color', '#AA0132');
  }, function(){
    $(this).css('color', '#ffffff');
  })


    if ($('#horror').hasClass('active')) {
        $('#horror').hover(function() {
        $('#horror').css('color', '#ffffff');
    }, function(){
      $('#horror').css('color', '#ffffff');
    });

    };
