$( document ).ready(function() {
    $(".column .column-header").each(function(index){
        $(this).click("click",()=>{
                if(window.outerWidth<768){
                     $(this).siblings(".item-container").slideToggle("slow", () => {});
                }
            })
    })
});