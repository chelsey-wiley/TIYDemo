var sectionContainer = document.querySelector('#sections');
var categoryNameInput = document.querySelector('#category-name-input');
var categoryIdInput = document.querySelector('#category-id-input');
var itemNameInput = document.querySelector('#item-name-input');
var createCategoryButton = document.querySelector('#create-category-form button');
var loadCategoriesButton = document.querySelector('#load-categories');
var addItemButton = document.querySelector('.add-item-to-category button');

loadCategoriesButton.addEventListener('click', function() {
  $.ajax({
    url: '/api/categories'
  })
  .done(function(data) {
    console.log('data', data);
    sectionContainer.innerHTML = '';

    data.forEach(function(x) {
      var section = document.createElement('section');

      var header = document.createElement('h2');
      header.textContent = x.name + ' (id: ' + x.id + ')';
      section.appendChild(header);

      var itemList = document.createElement('ul');

      x.items.forEach(function(item) {
        var li = document.createElement('li');
        li.textContent = item;
        itemList.appendChild(li);
      });

      section.appendChild(itemList);

      sectionContainer.appendChild(section);
    });

  });
});









createCategoryButton.addEventListener('click', function(evt) {
  evt.preventDefault();

  $.ajax({
    url: '/api/category',
    method: 'POST',
    data: {
      name: categoryNameInput.value
    }
  });

  categoryNameInput.value = '';

});

addItemButton.addEventListener('click', function(evt) {
  evt.preventDefault();

  var categoryId = categoryIdInput.value;
  var itemName = itemNameInput.value;

  $.ajax({
    url: '/api/category/' + categoryId,
    method: 'POST',
    data: {
      name: itemName
    }
  });

});
