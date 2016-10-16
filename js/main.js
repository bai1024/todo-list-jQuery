var counter = 0

//点击按钮添加todo事件
$("#addtodo").click(function(evt){
  var task = $("#inputTask").val()
  if (task === "") {
    $("#inputTask").addClass('error')
  } else {
    addTodo()
  } 
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

function Counter (n){
  var count = Number($('#todo-count').find("strong").text())
  count += n
  $('#todo-count').find("strong").text(count)
  return count
}

function addTodo(){
  var task = $("#inputTask").val()
  var $li = $("<li class='active'><input class='toggle' type='checkbox' /><div><p>"+ task +"<span class='getTimestamp'></span></p></div><span class='close'>x</span></li>")
  var currentFilter = $("#filters li").attr("id")
  if (currentFilter !== "completed"){
    $li.css('display','inline-flex')
  }
  $("#listTask").append($li)
  $('#inputTask').removeClass('error')

  var count = Counter(1)

  $li.find(".close").click(function(){
    if($(this).closest('li').hasClass('completed')){
      $(this).closest('li').remove()
    } else {
      $(this).closest('li').remove()
      var count = Counter(-1)
    }
  })

  $("#inputTask").val("")

//点击checkbox事件
  $li.find('.toggle').click(function(){
    if ($(this).closest('li').hasClass('completed')){
      $(this).closest('li').removeClass('completed')
      $(this).closest('li').addClass('active')
      $li.find(".getTimestamp").text("")
      var count = Counter(1)
    } else {
        $(this).closest('li').removeClass('active')
        $(this).closest('li').addClass('completed')
        $li.find(".getTimestamp").text(moment().format('lll'))
        var count = Counter(-1)
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
  $('.active').css('display','inline-flex')
  $('completed').hide()
})

//查看已完成任务
$('#completed').click(function(){
  $('.active').hide()
  $('.completed').css('display','inline-flex')
})


// 删除所有标记为完成的任务
$('#clear-completed').click(function(){
  $('.completed').remove()
})

