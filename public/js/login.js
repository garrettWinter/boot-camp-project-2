const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/account/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        
        if (response.ok) {
            document.location.replace('/');
        } else {
            console.log(response);
            alert('Failed to log in');
        }
    }
};

const redirect = async () => {
  if (redirect) {
    document.location.replace('/account');
  } else {
    alert('Failed to go to Login/Signup Page');
  }
};

document.querySelector('.login-form');
document.addEventListener('submit', loginFormHandler);
document.querySelector('.redirect');
document.addEventListener('click', redirect);