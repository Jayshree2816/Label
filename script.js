$(function(){
    // $(".label").hide()
    $(".alert").hide()
    $("#label-list").hide()
    $(".colorAlert").hide()
    $(".nameAlert").hide()

    // Display label form
    $(".new-label").on("click", function(){
        $(".label").toggle()
    })

    $("#label-name").keyup(function(){
        $("#create-label").attr("disabled" , false)
        $("#label-preview").text($(this).val())
    })

    // Reset color 
    $("#reset").on("click", function(){
        var color = '#' + Math.floor(Math.random() * 16777215).toString(16)
        $("#color-val").val(color)
        $(this).css("background-color", color)
        $("#label-preview").css("background-color", color)
        
    })

    // Cancel the form
    $("#cancel").on("click", function(){
        $(".label").hide() 
    })

    //Create new Label
    $("#create-label").on("click", function(e){
        var colorValue = $("#color-val").val()
        var label = $("#label-name").val()
        if(label == '' || colorValue == '') {
            $(".colorAlert").show()
            $(".nameAlert").show()
            $("#label-preview").text("Tag Preview")
            } else {
                if ( $(".label-value li:contains('"+label+"')").length ) {
                alert('Label already exist');
            } else {
                $(".nameAlert").hide()
                $(".colorAlert").hide()
                $("#label-list").show()
                $("#label-list").append("<div class='label-value'><li>" + label + "</li><button class='delete'>" + "Delete" + "</button>")
                $("li:last()").css("background-color" , colorValue)
                $("input").val('')
            }
        }

        // Delete label
        $(".delete").on("click", function(){
            $(this).parent().remove()
            $('.label-list:not(:has(li))').hide()
        })

        // var emptyList = $(".label-list li")
        // if(emptyList.length === 0) {
        //     $(".label-list").hide()
        // }

       e.preventDefault()
    })  
})