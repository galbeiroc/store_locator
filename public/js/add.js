const storeForm = document.getElementById('store-form');
const storeId = document.getElementById('store-id');
const storeAddress = document.getElementById('store-address');

//Send post to API to add store
async function addStore(e) {
  e.preventDefault();

  if (storeId.value === '' || storeAddress === '') {
    alert('Please fill in fields');
  }

  const sendBody = {
    storeId: storeId.value,
    address: storeAddress.value
  };
  console.log(sendBody);
  console.log(JSON.stringify(sendBody));

  try {
    const res = await fetch('/api/v1/stores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sendBody)
    });

    if (res.status === 400) {
      throw Error('Store already exists!');
    }

    alert('Stored added!');
    window.location.href = '/index.html';
  } catch (err) {
    alert(err);
    return;
  }
}

storeForm.addEventListener('submit', addStore);
