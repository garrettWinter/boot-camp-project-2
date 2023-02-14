console.log("cartSubmit.js is connected");

const submitOrderBtn = document.querySelector('#submitOrderBtn'); /// UPdate to point to button ID when created 

async function cartSubmit() {
    console.log('Cart Submit triggered')

    const response = await fetch('/api/savedCart/newLineItem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
}


submitOrderBtn.addEventListener("click", cartSubmit)
