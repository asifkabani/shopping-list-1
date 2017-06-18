// Our single state object.
var state = {
  items: []
}

// Create a function to add items. Pass two arguments, the state, and the item.
var addItem = function(state, item) {
  // Push the item into the state object's item array.
  state.items.push(item);
};

// Create a function to render the addition. Pass two arguments, the state, and
// the HTML element to pass in.
var renderAdd = function(state, element) {
  // Create a function expression variable called itemsHTML.
  // This will map for each item in the items array, the html
  // code needed to constructe the HTML.
  var itemsHTML = state.items.map(function(item) {
    return '<li>' + '<span class="shopping-item">' + item + '</span>' +
            '<div class="shopping-item-controls">' +
              '<button class="shopping-item-toggle">' +
                '<span class="button-label">check</span>' +
              '</button>' +
              '<button class="shopping-item-delete">' +
                '<span class="button-label">delete</span>' +
              '</button>' +
            '</div>' +
          '</li>';
  });
  element.html(itemsHTML);
};

// Event listener to add item.
$('#js-shopping-list-form').submit(function(event) {
  event.preventDefault();
  // Run the function which pushes the value of the item into the items array.
  addItem(state, $('#shopping-list-entry').val());
  // Render the function which maps the list of HTML rendered.
  renderAdd(state, $('.shopping-list'));
});

// Event listener for toggling check button.
// On the parent element click on the button and run the function. The parent
// is needed because it is the parent to anchor to before the elements appear.
$('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
  event.preventDefault();
  $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
});

// Event listener for deleting an item.
// On the parent element click on the button and run the function. The parent
// is needed because it is the parent to anchor to before the elements appear.
$('.shopping-list').on('click', '.shopping-item-delete', function(event) {
  event.preventDefault();
  $(this).closest('li').remove();
});
