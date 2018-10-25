
// CSS
// Switching home version

// Cluedo mode
$('#cluedo').click(function() {

  $('body').css('background-image', 'url(/newArea/images/cluedo.jpeg)');
  $('#title1, .vertical-menu .active').css('background-color', '#1F595C');
  $('.vertical-menu').css('border-color', '#1F595C');
  $('#content1').css('border-color', '#1F595C');

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
})

// EG mode
$('#eg').click(function() {

  $('body').css('background-image', 'url(/newArea/images/eg.jpeg)');
  $('#title1, .vertical-menu .active').css('background-color', '#756357');
  $('.vertical-menu').css('border-color', '#756357');
  $('#content1').css('border-color', '#756357');

  $('.vertical-menu a').hover(function() {
    $(this).css('color', '#756357');
  }, function(){
    $(this).css('color', '#ffffff');
  })
})

// VR mode
$('#vr').click(function() {
  $('body').css('background-image', 'url(/newArea/images/vr.jpeg)');
  $('#title1, .vertical-menu .active').css('background-color', '#193441');
  $('.vertical-menu').css('border-color', '#193441');
  $('#content1').css('border-color', '#193441');

  $('.vertical-menu a').hover(function() {
    $(this).css('color', '#193441');
  }, function(){
    $(this).css('color', '#ffffff');
  })
})

// Horror mode
$('#horror').click(function() {

  $('body').css('background-image', 'url(/newArea/images/home1.jpeg)');
  $('#title1, .vertical-menu .active').css('background-color', '#AA0132');
  $('.vertical-menu').css('border-color', '#AA0132');
  $('#content1').css('border-color', '#AA0132');

// text
  $('#title1').text("Une expérience unique pour Halloween !");
  $('#title1').css('font-size', '2em');
  $('#title1').css('text-align', 'center');
  $('#title1').css("font-family", "'Cinzel', serif");

  $('#content1 h2').text("Pour Halloween, découvrez notre nouveau jeu grandeur nature: l'Horror'escape !");

// hover
  $('.vertical-menu a').hover(function() {
    $(this).css('color', '#AA0132');
  }, function(){
    $(this).css('color', '#ffffff');
  })

})
