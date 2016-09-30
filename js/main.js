var counter = 0
//点击按钮添加todo事件
$("#addtodo").click(function(evt){
  var task = $("#inputTask").val()
  if (task === "") {
    $("#inputTask").addClass('error')
  } else {
    counter++
    var $li = $("<li><input class='toggle' name='items' type='checkbox'></input><p>"+ task +"</p><span class='close'>x</span></li>")
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

//按enter键添加todo事件
document.addEventListener("keydown", function(e){
  if (e.keyCode === 13) {
    var task = $("#inputTask").val()
    if (task === "") {
      $("#inputTask").addClass('error')
    } else {
//事件数量统计     
      counter++
      var $li = $("<li><input class='toggle' name='items' type='checkbox'></input><p>"+ task +"</p><span class='close'>x</span></li>")
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

//filter点击添加样式
$('#filters li').click(function(){
  $(this).addClass('selected').siblings().removeClass('selected')
})


// $('.toggle').click(function(){
//   $('[name=items]:checkbox').addClass('checked')
//     alert("123")

// })