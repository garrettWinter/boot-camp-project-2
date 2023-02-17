// When User if finished shopping and buys product, they are redirected to account history page.
const cartSubmit = async () => {
    const response = await fetch('/api/submitorder/createorder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/account/orderhistory');
    } else {
        alert('Failed to submit cart.');
    }

};

const submitOrderBtn = document.querySelector('#submitOrderBtn');
submitOrderBtn.addEventListener("click", cartSubmit)
