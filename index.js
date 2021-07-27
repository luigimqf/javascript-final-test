const button = document.querySelector('.nav_login_button');
const createButton = document.querySelector('.create_button');
const loginForm = document.querySelector('.login_form');

button.addEventListener('click', () =>{
  setTimeout(() => {
    loginContainer.style.display = 'none';
  },100)
  console.log("clicked");
})

createButton.addEventListener('click', (event) =>{
  event.preventDefault();
  window.open('./createForm.html')
})

loginForm.addEventListener('submit', async (event) =>{
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  await getUsers(data);
  loginForm.reset();

})

async function getUsers(data){
  try{
    const response = await fetch('http://localhost:3001/login',{

      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(data)

    })
    const userData = await response.json();
    localStorage.setItem('user',userData.user_id);
  }catch(err){
    console.err(err.message)
  }
}

async function checkLogin(){





}
checkLogin();

