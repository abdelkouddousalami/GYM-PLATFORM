
function calculateCalories(weight, height, age, activityLevel, goal) {
    let bmr;
    if (document.getElementById('gender').value === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    let activityMultiplier;
    switch (activityLevel) {
        case 'sedentary':
            activityMultiplier = 1.2;
            break;
        case 'light':
            activityMultiplier = 1.375;
            break;
        case 'moderate':
            activityMultiplier = 1.55;
            break;
        case 'active':
            activityMultiplier = 1.725;
            break;
        case 'very-active':
            activityMultiplier = 1.9;
            break;
        default:
            activityMultiplier = 1.2;
    }

    const tdee = bmr * activityMultiplier;
    let calories;
    if (goal === 'lose') {
        calories = tdee - 500;
    } else if (goal === 'gain') {
        calories = tdee + 500;
    } else {
        calories = tdee;
    }

    return calories;
}

document.getElementById('calorie-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const activityLevel = document.getElementById('activity-level').value;
    const goal = document.getElementById('goal').value;

    if (isNaN(weight) || isNaN(height) || isNaN(age)) {
        alert("Please fill in all fields correctly.");
        return;
    }

    const dailyCalories = calculateCalories(weight, height, age, activityLevel, goal);

    document.getElementById('calorie-result').classList.remove('hidden');
    document.getElementById('result-text').textContent = `Your estimated daily calorie requirement is ${dailyCalories.toFixed(0)} calories.`;
});

const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.getElementById('body');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('bg-gray-900');
    body.classList.toggle('text-white');
    body.classList.toggle('bg-gray-100');
    body.classList.toggle('text-gray-800');
    sunIcon.classList.toggle('hidden');
    moonIcon.classList.toggle('hidden');
});

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
});
