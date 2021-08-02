const navLoginButton = document.querySelector('.nav_login_button');
const createButton = document.querySelector('.create_button');
const loginForm = document.querySelector('.login_form');
const loginContainer = document.querySelector('.main_login_container');
const x = document.querySelector('.x');

x.addEventListener('click', () =>{
  loginContainer.style.display = 'none';
})

navLoginButton.addEventListener('click',async () =>{
  const user = localStorage.getItem('user');

  if(!user){
    setTimeout(() =>{
      loginContainer.style.display= 'flex';
    },100)

    return;
  }

  localStorage.removeItem('user');
  checkLogin();
})

createButton.addEventListener('click', (event) =>{
  event.preventDefault();
  window.open('./createUser.html')
})

loginForm.addEventListener('submit', async (event) =>{
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  await loginUsers(data);
  checkLogin();
  loginForm.reset();

})

async function getPosts(){
  try{
    const response = await fetch(`http://localhost:3001/posts`)
    const postData = await response.json();
    return postData;
  }catch(err){
    console.log(err.message)
  }
}

async function loginUsers(data){
  try{
    const response = await fetch('http://localhost:3001/login/',{

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
    console.log(err.message)
  }
}

async function printPosts(){
  const posts = await getPosts();
  console.log(posts);

  posts.forEach(async (post) => {

    try{
      const response = await fetch(`http://localhost:3001/user/${post.user}`)
      const userData = await response.json();
      console.log(userData);

      const body = document.querySelector('.main_post_container');

      const postContainer = document.createElement('div');
      postContainer.classList.add('post_container');

      const interactionContainer = document.createElement('div');
      interactionContainer.classList.add('interaction_container')

      const postContent = document.createElement('div');
      postContent.classList.add('post_content');

      const postTitle = document.createElement('h1');
      postTitle.classList.add('post_title');
      postTitle.textContent = post.title;

      const postDescription = document.createElement('p');
      postDescription.classList.add('post_description');
      postDescription.textContent = post.body;

      postContent.appendChild(postTitle);
      postContent.appendChild(postDescription);

      const postInfoContainer = document.createElement('div')
      postInfoContainer.classList.add('post_info_container')

      const postImg = document.createElement('img')
      postImg.classList.add('post_avatar')
      postImg.setAttribute('src', userData.avatar);

      const postName = document.createElement('p');
      postName.classList.add('post_name');
      postName.textContent = userData.name;

      postInfoContainer.appendChild(postImg);
      postInfoContainer.appendChild(postName);

      postContainer.appendChild(interactionContainer);
      postContainer.appendChild(postContent);
      postContainer.appendChild(postInfoContainer );

      body.appendChild(postContainer);

      
    } catch(err) {
      console.log(err.message);
    }
  })
}

async function checkLogin(){
  const user = localStorage.getItem('user');
  const avatar = document.querySelector('.avatar');
  const userStateId = document.querySelector('.user_state_id');

  userStateId.textContent = '';
  loginContainer.style.display = 'none';

  if(!user) {
    navLoginButton.textContent = 'Login'
    avatar.setAttribute('src','/assets/user.png');
    userStateId.style.opacity = 0;
    
    return;
  }

  navLoginButton.textContent = 'Logout';
  avatar.setAttribute('src','https://avatars.githubusercontent.com/u/83784988?v=4');
  userStateId.textContent = 'Id: ' + localStorage.getItem('user');
  userStateId.style.opacity = 1;

}
checkLogin();
printPosts();

