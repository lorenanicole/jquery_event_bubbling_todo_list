$(document).ready(function() {
  todoTemplate = $.trim($('#todo_template').html());


  function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }

  function bindEvents() {
  }

  bindEvents.prototype.append = function() {
    $('.add').on('click', function(e){
      e.preventDefault();
      var task = $('.todo').val();
      var template = buildTodo(task);
      $('.todo_list').append(template);
    });
  };

  bindEvents.prototype.complete = function() {
    $(document).on('click', '.complete', function(e) {
      e.preventDefault();
      alert('hello');
      $(this).closest('.todo').removeClass('todo');
      $(this).closest('div').addClass('todo-complete');
    });
  };

  bindEvents.prototype.delete = function() {
    $(document).on('click', '.delete', function(e) {
      e.preventDefault();
      $(this).closest('div').remove();
    });
  };

  var addTodo = new bindEvents();
  addTodo.append();
  addTodo.complete();
  addTodo.delete();
  console.log(addTodo);
  console.log(todoTemplate);

});