const openTab=()=> {
    let x = document.getElementById("menu-link");
    let menuTab = document.getElementById("menu-tab");
    console.log('first')
    if(x.style.display === "block") {
      x.style.display = "none";
      document.body.style.overflow='visible'
      
    } else {
      x.style.display = "block";
    
      document.body.style.overflow='hidden'
    }
  }
   //loading screen
  //  $(window).load(function(){
  //   $("body").css("overflow","auto");
  //   $(".loading-overlay").fadeOut(100);
  //  });
  // var loader = document.getElementsByName("loading-overlay");
  // window.addEventListener("load", function(){
  //   loader.style.overflow ="auto";
  //   loader.style.background ="var(--dark-color)";
  // });

  // window.addEventListener("load", () => {
  //     const loader = document.getElementsByClassName(".loadingio-spinner-ripple-i40lkrfpldc");
      
  //     loader.style.display = "none";
      // loader.classList.addEventListener("transitionend", () => {
      //   document.body.removeChild("loading-overlay");
      // })

  // })



