var counter = 0
//点击按钮添加todo事件
$("#addtodo").click(function(evt){
  var task = $("#inputTask").val()
  if (task === "") {
    $("#inputTask").addClass('error')
  } else {
    var $li = $("<li><input class='toggle' type='checkbox'></input><p>"+ task +"</p><span class='close'>x</span></li>")
    $("#listTask").append($li)
    $('#inputTask').removeClass('error')
    counter++
    $('#todo-count').text(counter + "item left")

    $li.find(".close").click(function(){
     $(this).closest('li').remove()
     counter--
      $('#todo-count').text(counter + "item left")
    })

    $("#inputTask").val("")

    $li.find('.toggle').click(function(){
      $(this).closest('li').addClass('completed')
    //   counter--
    // $('#todo-count').text(counter + "item left")
    })
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

//filter点击添加样式
$('#filters li').click(function(){
  $(this).addClass('selected').siblings().removeClass('selected')
})

// 查看所有任务
$('#all').click(function(){
  $('.completed').siblings().show()
  $('.completed').show()
})

//查看已完成任务
$('#completed').click(function(){
  $('.completed').siblings().hide()
  $('.completed').show()
})

//查看未完成任务
$('#active').click(function(){
  $('.completed').hide()
  $('.completed').siblings().show()
})

// 删除所有标记为完成的任务
$('#clear-completed').click(function(){
  $('.completed').remove()
})

