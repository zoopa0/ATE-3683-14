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
