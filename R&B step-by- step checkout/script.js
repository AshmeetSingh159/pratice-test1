document.addEventListener("DOMContentLoaded", function() {
    const liElements = document.querySelectorAll('.my-ul-class li');
    const loginForm = document.querySelector('.checkout-login__form');
    const stepIndicators = {
        1: document.querySelector('.step-indicator1'),
        2: document.querySelector('.step-indicator2'),
        3: document.querySelector('.step-indicator3'),
        4: document.querySelector('.step-indicator4')
    };
    let currentStepIndex = 1;

    // Initially hide all li elements except the first one
    liElements.forEach(function(li, index) {
        if (index !== 0) {
            li.style.display = 'none';
        }
    });

    // Add event listener to the login form
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const emailInput = document.getElementById('checkout-email').value;
        const passwordInput = document.getElementById('checkout-password').value;
        const isLoggedIn = validateLogin(emailInput, passwordInput);

        if (isLoggedIn) {
            const activeIndex = findActiveIndex();
            if (activeIndex < liElements.length - 1) {
                const isTaskCompleted = validateTaskCompletion(activeIndex);
                if (isTaskCompleted) {
                    liElements[activeIndex].style.display = 'none';
                    liElements[activeIndex + 1].style.display = '';
                    updateStepIndicators(activeIndex + 1);
                } else {
                    alert('Please complete all required fields before proceeding to the next step.');
                }
            }
        }
    });

    function validateLogin(email, password) {
        return email.trim() !== '' && password.trim() !== '';
    }

    function findActiveIndex() {
        for (let i = 0; i < liElements.length; i++) {
            if (liElements[i].style.display !== 'none') {
                return i;
            }
        }
        return -1;
    }

    function validateTaskCompletion(stepIndex) {
        switch (stepIndex) {
            case 1:
                return validateStep1();
            case 2:
                return validateStep2();
            case 3:
                return validateStep3();
            case 4:
                return validateStep4();
            default:
                return false;
        }
    }

    function validateStep1() {
        const emailInput = document.getElementById('checkout-email').value;
        const passwordInput = document.getElementById('checkout-password').value;
    
        if (emailInput.trim() === '' || passwordInput.trim() === '') {
            return false;
        }   
        return true;
    } 

    function validateStep2() {
        document.addEventListener('DOMContentLoaded', function() {
            const skipButton = document.querySelector('.skip-button');
            if (skipButton) {
                skipButton.addEventListener('click', function() {
                    const step2 = document.querySelector('.RbLoyaltyPromoGiftCard');
                    const step3 = document.querySelector('.book-tabs');
                    if (step2 && step3) {
                        step2.style.display = 'none';
                        step3.style.display = 'block';
                    }
                });
            }
        });

        const loyaltyInput = document.getElementById('loyalty-no').value;
        const promoCodeInput = document.getElementById('promo-code').value;
        const giftCardNumberInput = document.getElementById('giftCardNumber').value;
    
        if (loyaltyInput.trim() === '' && promoCodeInput.trim() === '' && giftCardNumberInput.trim() === '') {
            return false;
        }
    
        return true;
    }
    
    function validateStep3() {
        const firstNameDel = document.getElementById('firstNameDel').value.trim();
        const lastNameDel = document.getElementById('lastNameDel').value.trim();
        const phoneNumDel = document.getElementById('phoneNumDel').value.trim();
        const customFindAddressDel = document.getElementById('customFindAddressDel').value.trim();

        if (firstNameDel === '' || lastNameDel === '' || phoneNumDel === '' || customFindAddressDel === '') {
            alert('Please fill in all required fields for the delivery address.');
            return false;
        }
        return true;
    }


    // Step 4 Validation for Payment Details
    function validateStep4() {
        const cardName = document.getElementById('cardName').value.trim();
        const cardNumber = document.getElementById('cardNumber').value.trim();
        const cardCVV = document.getElementById('cardCVV').value.trim();
        const cardExpiresMonth = document.getElementById('card-expires-moths').value.trim();
        const cardExpiresYear = document.getElementById('card-expires-years').value.trim();

        if (cardName === '' || cardNumber === '' || cardCVV === '' || cardExpiresMonth === '' || cardExpiresYear === '') {
            alert('Please fill in all required fields for the payment details.');
            return false;
        }
        return true;
    }

    function updateStepIndicators(nextStepIndex) {
        stepIndicators[currentStepIndex].style.opacity = '1.0';
        stepIndicators[currentStepIndex].style.color = 'green';
        currentStepIndex = nextStepIndex;
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.checkout-login__form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const isValidStep1 = validateStep1();

        if (isValidStep1) {
            console.log("Step 1 validated successfully!");
        } else {
            console.log("Step 1 validation failed. Please fill in all fields.");
        }
    });
});
