$('span').each(function (index, element) { 
  if(index % 2 == 0) { //Search for a given element from among the matched elements.
    $(element).css('color', 'red'); //Selects all elements with the given tag name.
  };
});

$('p').each(function(index, element) {
  var button = '<button class="btn" data-tmp="' + index + '">Click me</button>'
  $(element).append(button);
});

$('button').click(function() {
  alert($(this).attr('data-tmp'));
});