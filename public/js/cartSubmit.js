console.log("cartSubmit.js is connected");

const cartSubmit = async () => {
    console.log('Cart Submit triggered')
    const response = await fetch('/api/submitorder/createorder', { // This path needs to be updated!
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    if (response.ok) {
        console.log('in response')
        document.location.replace('/account/orderhistory');
    } else {
        alert('Failed to submit cart.');
    }

};


const submitOrderBtn = document.querySelector('#submitOrderBtn'); /// UPdate to point to button ID when created 
submitOrderBtn.addEventListener("click", cartSubmit)
