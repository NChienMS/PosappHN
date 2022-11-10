$(document).ready(function () {
    $("a").on("click", function () {
        if (this.hash !== "") {
            let hash = this.hash
            $("html,body").animate({
                scrollTop: $(hash).offset().top
            }, 500)
        }
    })
})



//  mở menu responsive
$(".open-menu").on("click", function () {
    $(".responsive-menu").show("slow")
})

// đóng menu responsive 

$(".close-responsive-menu").on("click", function () {
    $(".responsive-menu").hide("slow")
})


//  đóng menu khi scroll 
$(".responsive-menu .item").on("click", function () {
    $(".responsive-menu").hide("slow")
})

var acc = document.getElementsByClassName("accordion");
var i;


for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

let modal = document.querySelector(".popup2");
let closeBtn = document.querySelector(".close-button");

// Đóng popup khi ấn vào nút đóng
closeBtn.onclick = function(){
modal.style.display = "none"
}
// Đóng khi nhấp chuột vào bất cứ khu vực nào trên màn hình
window.onclick = function(e){
if(e.target == modal){
modal.style.display = "none"
}
}
