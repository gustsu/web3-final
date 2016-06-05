// My Scripts

var h = $("#homer");
h.hide();
$('html').click(function(){
       
      console.log('key pressed!');
      var audio = $("#mysoundclip")[0];
      console.log(audio);
      audio.play();
      h.fadeIn(500);

});
  
