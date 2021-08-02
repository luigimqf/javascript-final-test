const form = document.querySelector('form');
const cancelButton = document.querySelector('.cancelar');

cancelButton.addEventListener('click', () => {
  form.reset();
  window.location.replace('./');
})


form.addEventListener('submit', async (event) =>{
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  await sendFormData(data);
  form.reset();

})

async function sendFormData(data){
  try{
    const response = await fetch('http://localhost:3001/user',{

      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(data)

    })
    const userData = await response.json();
    console.log(userData);
    localStorage.setItem('user',userData.user_id);
    window.location.replace('./')
  }catch(err){
    console.err(err.message)
  }
}