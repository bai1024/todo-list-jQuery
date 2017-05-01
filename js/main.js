//点击按钮添加todo事件
$("#addtodo").click(function(evt){
  var task = $("#inputTask").val()
  if (task === "") {
    $("#inputTask").addClass('error')
  } else {
    addTodo()
  } 
})

$('#inputTask').on('focus input',function(){
  $(this).siblings('button').css("opacity",'1');
}),$('#inputTask').on('blur',function(){
  $(this).siblings('button').css("opacity",'0');
})

//按enter键添加todo事件
document.addEventListener("keydown", function(e){
  if (e.keyCode === 13) {
    var task = $("#inputTask").val()
    if (task === "") {
      $("#inputTask").addClass('error')
    } else {
      addTodo()
    }
  }
})

function changeCount (n){
  var count = Number($('#todo-count').find("strong").text())
  count += n
  $('#todo-count').find("strong").text(count)
  return count
}

function addTodo(){
  var task = $("#inputTask").val()
  var $li = $("<li class='active'><input class='toggle' type='checkbox' /><div><p>"+ task +"</p><span class='getTimestamp'></span></div><span class='close'>x</span></li>")
  var currentFilter = $("#filters li.selected").attr("id")
  if (currentFilter === "completed"){
    $li.hide()
  }
  $("#listTask").append($li)
  $('#inputTask').removeClass('error')

  var count = changeCount(1)
  $li.find(".close").click(function(){
    var $selected = $(this).closest('li')
    if($selected.hasClass('completed')){
      $selected.remove()
    } else {
      $selected.remove()
      var count = changeCount(-1)
    }
  })

  $("#inputTask").val("")

//点击checkbox事件
  $li.find('.toggle').click(function(){
    var checked = $(this).prop("checked")
    var $selected = $(this).closest('li')
    if ($selected.hasClass('completed')){
      $selected.removeClass('completed')
      $selected.addClass('active')
      $li.find(".getTimestamp").text("")
      var count = changeCount(1)
    } else {
        $selected.removeClass('active')
        $selected.addClass('completed')
        $li.find(".getTimestamp").text(moment().format('lll'))
        var count = changeCount(-1)
    }
    var currentFilter = $("#filters li.selected").attr("id")

    if(currentFilter === "active" && checked){
      $li.hide()
    }
    if(currentFilter === "completed" && !checked){
      $li.hide()
    }


  })




  $li.find("p").on("dblclick", function(evt){
    var $p = $(evt.target)
    var text = $p.text()
    $input = $("<input/>").addClass("editing")
    $input.val(text)
    $p.text("")
    $p.append($input)
    $input.focus()

    $input.on("blur keydown", function(evt){
      if(evt.keyCode && evt.keyCode !== 13) return
        var text = $input.val()
        $p.text(text)
        $input.remove()
      }
    )
  })
} 

//filter点击添加样式
$('#filters li').on("click", (function(evt){
  $(this).addClass('selected').siblings().removeClass('selected')
  })
)
// 查看所有任务
$('#all').click(function(){
  $('.active').show()
  $('.completed').show()
})

//查看未完成任务
$('#active').click(function(){
  $('.active').show()
  $('.completed').hide()
})

//查看已完成任务
$('#completed').click(function(){
  $('.active').hide()
  $('.completed').show()
})


// 删除所有标记为完成的任务
$('#clear-completed').click(function(){
  $('.completed').remove()
})

