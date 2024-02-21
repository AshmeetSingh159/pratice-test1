document.addEventListener('DOMContentLoaded', function() {
  var signupRadio = document.getElementById("signup");
  var checkoutRadio = document.getElementById("checkout");
  var loginForm = document.getElementById("login-form");
  var checkoutForm = document.getElementById("checkout-form");

  signupRadio.addEventListener('click', function() {
      if (signupRadio.checked) {
          loginForm.style.display = "block";
          checkoutForm.style.display = "none";
      } else {
          loginForm.style.display = "none";
      }
  });

  checkoutRadio.addEventListener('click', function() {
      if (checkoutRadio.checked) {
          checkoutForm.style.display = "block";
          loginForm.style.display = "none";
      } else {
          checkoutForm.style.display = "none";
      }
  });
  
  signupRadio.addEventListener('dblclick', function() {
      signupRadio.checked = false;
      loginForm.style.display = "none";
  });

  checkoutRadio.addEventListener('dblclick', function() {
      checkoutRadio.checked = false;
      checkoutForm.style.display = "none";
  });
});
