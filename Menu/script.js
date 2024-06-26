document.addEventListener('DOMContentLoaded', function() {
    const foodItems = document.querySelectorAll('.food-item');
    const foodSections = document.querySelectorAll('.food-section');

    foodItems.forEach(item => {
        item.addEventListener('click', function() {
            const selectedFood = this.dataset.food;
            showFoodSection(selectedFood);
        });
    });

    function showFoodSection(food) {
        foodSections.forEach(section => {
            if (section.id === food) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }

    // Show the first food section by default
    showFoodSection('pizza');
});


function toggleMenu() {
    const burgerIcon = document.querySelector('.navList');
    burgerIcon.classList.toggle('open');
}







////////////////////
///
document.querySelectorAll('.order-btn').forEach(button => {
    button.addEventListener('click', function() {
        const foodItem = this.getAttribute('data-food');
        const foodPrice = parseFloat(this.getAttribute('data-price'));
        const foodImage = this.getAttribute('data-image');
        
        // Retrieve current quantity
        let quantity = parseInt(this.parentElement.querySelector('.quantity-badge').textContent, 10);
        
        // Increment quantity
        quantity++;
        
        // Update quantity badge
        this.parentElement.querySelector('.quantity-badge').textContent = quantity;
        
        // Store selected item and quantity in local storage
        let selectedItems = JSON.parse(localStorage.getItem('selectedItems')) || [];
        
        // Check if item already exists
        let existingItem = selectedItems.find(item => item.foodItem === foodItem);
        
        if (existingItem) {
            // Update quantity of existing item
            existingItem.quantity = quantity;
        } else {
            // Add new item
            selectedItems.push({ foodItem, foodImage, foodPrice, quantity });
        }
        
        localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
    });
});


// Checkout button event listener
document.getElementById('checkoutButton').addEventListener('click', function() {
    // Redirect to order summary page
    window.location.href = 'order-summary.html';
});

//smthn