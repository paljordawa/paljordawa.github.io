
 $(document).ready(function(){

     
//---------- Scroll to top

$('#scrolltop').hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scrolltop').fadeIn(1000);
        } else {
            $('#scrolltop').fadeOut(1000);
        }
    });

    $('#scrolltop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
     

   //---------- Responsive Burger Dropdown
         /*   $(".nav-burger").on("click",function(){
                $(this).toggleClass('nav-burger-close');
              $("nav ul").toggleClass("menu");
    
              });
              */
//---------- Smooth Scroll navbar
          $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        
        window.location.hash = hash;
      });
    } 
  });
          
        


});