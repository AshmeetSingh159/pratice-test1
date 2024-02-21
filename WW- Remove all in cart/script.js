document.addEventListener('DOMContentLoaded', function() {
	var parentElement = document.querySelector('.shopping-cart');
    	var newHTML = '<div class="Edit-menu"><button id="cancel-button">CANCEL</button><div class="item-options"><button id="remove-button">REMOVE ITEMS</button><button id="add-button">ADD TO LIST</button></div></div>';
		parentElement.insertAdjacentHTML('afterend', newHTML);
	});

var editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'New-variation-edit-button';
    editBtn.addEventListener('click', toggleEditMode);
document.addEventListener('DOMContentLoaded', function() {
	var gridContainer = document.querySelector('.grid.grid__three-fourths--small');
	if (gridContainer) {
    	    gridContainer.appendChild(editBtn);
    	}
    });

function toggleEditMode() {
        var isInEditingMode = editBtn.textContent === 'Edit';
        if (isInEditingMode) {
            editBtn.textContent = 'Done';
            var cartItems = document.querySelectorAll('.product-card');
            cartItems.forEach(function(item) {
                var checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.className = 'item-checkbox';
                item.insertBefore(checkbox, item.firstChild);
            });
        } 
        else {
            editBtn.textContent = 'Edit';
            var checkboxes = document.querySelectorAll('.item-checkbox');
            checkboxes.forEach(function(checkbox) {
                checkbox.parentNode.removeChild(checkbox);
            });
    	}
	}
