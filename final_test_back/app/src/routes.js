const { Router } = require('express');
const { users, posts } = require('./data');

const router = Router();

router.get('/', (request, response) => response.json({ msg: 'Olá Sousa' }));

router.post('/login', (request, response) => {
  const { login, password } = request.body;
  console.log(login)

  if (!login) return response.status(400).json({ msg: 'Login é obrigatório.' })
  if (!password) return response.status(400).json({ msg: 'Senha é obrigatória.' })

  const user = users.find(user => {
    console.log(user.login, login)
    return user.login === login
  });

  console.log(user);

  if (!user) return response.status(404).json({ msg: 'Não encontramos nenhum usuário com esse login.' });

  const passwordValid = user.password === password;

  if (!passwordValid) return response.status(400).json({ msg: 'Senha incorreta.' }) ;

  return response.status(200).json({ user_id: user.id, msg: 'Login efetuado com sucesso.' })
})

router.get('/user/:userId', (request, response) => {
  const { userId } = request.params;

  const user = users.find(u => u.id === Number(userId));

  if (!user) return response.status(404).json({ msg: 'Usuário não encontrado.' })

  delete user.login;
  delete user.password;

  return response.json(user);
})

router.post('/user', (request, response) => {
  const { name, login, password, password_confirmation, avatar } = request.body;

  if (!name) return response.status(400).json({ msg: 'Nome é obrigatório.' })
  if (!login) return response.status(400).json({ msg: 'Login é obrigatório.' })
  if (!password) return response.status(400).json({ msg: 'Senha é obrigatória.' })
  if (!password_confirmation) return response.status(400).json({ msg: 'Confirmação de senha é obrigatória.' })
  if (password !== password_confirmation) return response.status(400).json({ msg: 'Senhas não correspondem.' })
  if (!avatar) return response.status(400).json({ msg: 'Avatar é obrigatório.' })

  const id = users.length + 1;

  const user = {
    id,
    name,
    login,
    password,
    avatar
  };

  users.push(user);

  return response.status(200).json({ user_id: id })
})

router.get('/posts', (request, response) => response.json(posts))

router.post('/posts', (request, response) => {
  posts = request.body;

  return response.status(201).json({ msg: 'Ok' })
})

module.exports = router;