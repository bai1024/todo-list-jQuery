$("#addtodo").click(function(evt){
  evt.preventDefault()
  var task = $("#inputTask").val()

  if (task === ""){
    $("#inputTask").addClass('error')
  }else{
    $("#listTask").append("<li>"+"<input class='toggle' type='checkbox'></input>"+"<p>"+task+"</p>"
                +"<span class='close'>x</span>"+"</li>");

    $('#inputTask').removeClass('error')
  }
 
 $("#inputTask").val("")

 $('.close').click(function(){
  $(this).closest('li').remove()
 })
})

