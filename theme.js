//JAVASCRIPT CODE THAT OPENS AND CLOSE THE QUICKVIEW

  var b = document.querySelectorAll(".quickViewOverlay")[0],
      g = document.querySelectorAll(".quickViewOverlay-close"),
      k = document.querySelectorAll(".quickViewOverlay-open");
    g && b && g.forEach(function (e) {
      e.addEventListener("click", function (e) {
        b.classList.remove("is-active")
      })
    })
    , k && b && k.forEach(function (e) {
      e.addEventListener("click", function (e) {
        console.log("eee"), b.classList.contains("is-active") ? (b.classList.remove("is-active"), k[0].classList.remove("is-active")) : (b.classList.add("is-active"), k[0].classList.add("is-active"))
      })
    });
    
