var counter = 0

$("#addtodo").click(function(evt){
  var task = $("#inputTask").val()
  if (task === "") {
    $("#inputTask").addClass('error')
  } else {
    counter++
    var $li = $("<li><input class='toggle' type='checkbox'></input><p>"+ task +"</p><span class='close'>x</span></li>")
    $("#listTask").append($li)
    $('#inputTask').removeClass('error')
    $('#todo-count').text(counter + "item left")

    $li.find(".close").click(function(){
     $(this).closest('li').remove()
     counter--
      $('#todo-count').text(counter + "item left")
    })
    $("#inputTask").val("")
  }

})



document.addEventListener("keydown", function(e){
  if (e.keyCode === 13) {
    var task = $("#inputTask").val()
    if (task === "") {
      $("#inputTask").addClass('error')
    } else {
      counter++
      var $li = $("<li><input class='toggle' type='checkbox'></input><p>"+ task +"</p><span class='close'>x</span></li>")
      $("#listTask").append($li)
      $('#inputTask').removeClass('error')
      $('#todo-count').text(counter + "item left")

      $li.find(".close").click(function(){
       $(this).closest('li').remove()
       counter--
        $('#todo-count').text(counter + "item left")
      })
      $("#inputTask").val("")
    }
  }
})






$('#filters li').click(function(){
  $(this).css({
    "border": "1px solid transparent",
    "border-color":"rgba(175, 47, 47, 0.2)",
    "cursor": "pointer"
  })
})
