console.log('logout.js loaded');
const logout = async () => {
    const response = await fetch('/api/account/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to log out.');
    }
  };
  const logoutBtn = document.querySelector('#logoutBtn');
  logoutBtn.addEventListener('click', logout);