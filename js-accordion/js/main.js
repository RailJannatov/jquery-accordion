$(document).ready(function(){
  $(".accordion").click(function(){
    
    $(".context").not($(this).next()).slideUp(1000);
      $(this).next().slideToggle(1000);
     
    
  });
  
})




































// let accordion = document.querySelectorAll(".accordion");





// accordion.forEach((acc)=>{
    
//     acc.addEventListener("click",toggleItem);

// });
//     function toggleItem(){
//         console.log(this.parentNode.className);
//     }
   
        // let context = this.nextElementSibling;
        // context.classList.toggle("active");
        //        let active = document.querySelector(".active")
        // if(this.nextElementSibling.contains(active)){
        //                console.log(this.previousElementSibling);
        //     this.previousElementSibling.display = "none";
        //     this.nextElementSibling.display ="none";
        //     console.log(this.previousElementSibling);
        // }

    //       if(context.style.display ==="none"){
    //          context.style.display="block";
    //         //  if()
    // }
    // else{
    //     context.style.display ="none"
    // }
//     })
// })