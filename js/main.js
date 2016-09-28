$("#addtodo").click(function(evt){
  evt.preventDefault()
  var task = $("#inputTask").val()

  if (task === ""){
    $("#inputTask").addClass('error')
  }else{
    $("#listTask").append("<li>"+"<p>"+task+"</p>"
                +"</li>"+"<hr>"+"</hr>");

    $('#inputTask').removeClass('error')
  }
 
 $("#inputTask").val("")

})

