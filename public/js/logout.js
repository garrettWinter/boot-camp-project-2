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
  document.querySelector('#logoutBtn');
  document.addEventListener('click', logout);