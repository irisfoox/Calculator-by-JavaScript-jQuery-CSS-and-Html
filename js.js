function calc(val){
    form.line.value=form.line.value+val
}
$("#dark").click(
    function() {
       $(".container").toggleClass("dark")
    })
$("#new").click(
    function(){
        $(".container").append($("#form").html())
    }
)
$("#c").click(
    function(){
        form.line.value=""
    }
)
