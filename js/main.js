$(function(){

  let test = 0;
  $("#openIcon").click(function (e) { 
    var offset = $("#nav").offset();
    var left = offset.left;

     test = $("#nav").outerWidth(true);

    if (left < 0){
      $("#nav").animate({left: '0px'},1000);
      $("#openIcon").animate({left: '220px' },1000);
      $("#openIcon").html(`<i class=" text-white fa-solid fa-bars">  Close</i>`);
  
    }else {
      $("#nav").animate({left: `-${test}px`},1000);
      $("#openIcon").animate({left: '20px'},1000);
      $("#openIcon").html(`<i class=" text-white fa-solid fa-bars">  Open</i>`);

    }
    
  });

  $("#closeLayer").click(function (e) { 
    closeLayerFunc();
    
  });
  
  function closeLayerFunc (){
    $("#nav").animate({left: `-${test}px`},1000);
    $("#openIcon").animate({left: '20px'},1000);
    $("#openIcon").html(`<i class=" text-white fa-solid fa-bars">  Open</i>`);

  }

  $(".hSinger").click(function(e){
    let test = $(e.target).next().slideToggle(1000);
    $(".bodySinger,.bodySingerActive").not(test).slideUp(500);
    // $(e.target).not().slideUp(1000);
    // $(".bodySinger").slideToggle(1000)
    // $(e.target).not().fadeOut();
    // $(".hSinger.next()").fadeToggle();
  })

  let nextTime = new Date("2023-12-20");


  setInterval(() => {
    let sec = new Date();

    const milliseconds =  sec - nextTime;
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
  
    seconds = seconds % 60;
    minutes = minutes % 60;
    hours = hours % 24;
  

    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const daysDifference = milliseconds / millisecondsPerDay;
    // console.log(daysDifference);
  
    $(".sec").text(`${ seconds} S`);
    $(".min").text(`${minutes} M`);
    $(".hou").text(`${hours} H`);
    $(".day").text(`${Math.floor(daysDifference) } D`);
  }, 1000);

  $(".area").keyup(function (e) { 
    let inner = $(".area").val();
    let max = $(".area").attr("maxlength");;
    let lastValue = max - inner.length;
    $(".updateValue").text(lastValue);

  });


    $(".nav .links a").click(function (e) { 
      let href = $(this).attr("href")
      let section = $(href).offset().top;
      // let windowScroll = $(window).scrollTop();
  
      $(body).animate({scrollTop : section},2000)

      
    });
    
    


})



