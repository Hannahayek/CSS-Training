$(document).ready(function(){
    //  here we add the . to class name    
    $('.js--section-features').waypoint(function(direction){
    if(direction == "down"){
        $('nav').addClass('sticky');
    }else{
        $('nav').removeClass('sticky');
    }

 }, {
    offset: '60px'
  });





});
