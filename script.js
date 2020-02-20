$(function(){
    // $(".label").hide()
    $(".alert").hide()
    $("#label-list").hide()
    $(".colorAlert").hide()
    $(".nameAlert").hide()
    $("#label-form-1").hide()
    // Display label form
    $(".new-label").on("click", function(){
        $(".label").show()
        $(".label-preview").append($("#label-form"))
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
    $("#cancel, #cancel-1 ").on("click", function(){
        $(".label").hide()
        $("input").val('')
        $("#label-preview").text("Tag Preview")
        $("#label-form-1").hide()

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
                $("#label-list").append("<div class='label-value'><li>" + label + "</li><button class='delete'>" + "Delete" + "</button><button class='edit'>" + "Edit" + "</button>")
                $("li:last()").css("background-color" , colorValue)
                $("input").val('')
                $("#label-preview").text("Tag Preview")
            }
        }

        // Delete label
        $(".delete").on("click", function(){
            $(this).parent().remove()
            $('.label-list:not(:has(li))').hide()
        })

        $(".edit").on("click", function(){
            $(this).hide()
            $(".label-value").append($("#label-form-1").show())
            $("#label-name-1").val($("li").text())
            $("#color-val-1").val(colorValue) 
        })

        $("#reset-1").on("click", function(){
            var color = '#' + Math.floor(Math.random() * 16777215).toString(16)
            $("#color-val-1").val(color)
            $(this).css("background-color", color)
            $("li").css("background-color", color)  
        })

        $("#create-label-1").on("click", function(){
            $("li").text($("#label-name-1").val())
            $("#label-form-1").hide()
            $("input").val('')
            $(".edit").show()
        })
       e.preventDefault()
    })  
})