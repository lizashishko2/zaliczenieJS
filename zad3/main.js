document.getElementById('registrationForm').addEventListener('submit', function (event) {
  event.preventDefault();

  document.getElementById('firstNameError').textContent = '';
  document.getElementById('lastNameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('passwordError').textContent = '';
  document.getElementById('successMessage').textContent = '';

  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  let hasError = false;

  if (!firstName) {
      document.getElementById('firstNameError').textContent = 'Proszę wpisać imię.';
      hasError = true;
  }

  if (!lastName) {
      document.getElementById('lastNameError').textContent = 'Proszę wpisać nazwisko.';
      hasError = true;
  }

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
      document.getElementById('emailError').textContent = 'Proszę wpisać poprawny adres email.';
      hasError = true;
  }

  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; 
  if (!passwordPattern.test(password)) {
      document.getElementById('passwordError').textContent = 'Hasło musi mieć co najmniej 6 znaków i zawierać litery oraz cyfry.';
      hasError = true;
  }

  if (!hasError) {
      document.getElementById('successMessage').textContent = 'Rejestracja zakończona sukcesem!';
      document.getElementById('registrationForm').reset(); 
  }
});
