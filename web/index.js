$("h1").css("color","red")

// document.querySelector("button").addEventListener("click",function(){
//         document.querySelector("h1").style.Color = "blue"

// })
//  document.querySelector("button").addEventListener("click",function () {
//     document.querySelector("h1").style.backgroundColor="cyan"    
    
//     setTimeout(() => {
        
//         document.querySelector("h1").style.backgroundColor="white"    
//     }, 1000);
// })
$("a").attr("href", "http://yahoo.com")
// let a = $("img").attr("src", "this.png")
// console.log(a);

$("body").keypress(function(event){
    $("h1").html(event.key)
})