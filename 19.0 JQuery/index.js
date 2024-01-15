
// $("h1").click(function() {
//     $("h1").css("color", "purple")
// })

// in old javascript
// for(let i = 0; i < 5; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function () {
//         document.querySelector("h1").style.color="purple"
//     })
// }

// in jQuery

$("button").click(function() {
    $("h1").animate({fontSize: '5rem', opacity: '0.5'}, "fast")
    setTimeout(function() {
        $("h1").removeAttr('style')}, 1000
    )
})
    




// $(document).keydown(function(event) {
//     $("h1").text(event.key)
  
// })

// $("h1").on("mouseover", function() {
//     $("h1").css("color", "purple")
// })

