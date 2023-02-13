const signupFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const user_name = document.querySelector('#username-signup').value.trim();

    if (email && password) {
        const response = await fetch('/api/account/signup', {
            method: 'POST',
            body: JSON.stringify({ email, password, user_name }),
            headers: { 'Content-Type': 'application/json' },
        });
        
        if (response.ok) {
            document.location.reload();
        } else {
            console.log(response);
            alert('Failed to Sign Up');
        }
    }
};

document.querySelector('.signup-form')
document.addEventListener('submit', signupFormHandler);