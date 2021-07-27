const { Router } = require('express');
const { users } = require('./data');

const router = Router();

router.get('/', (request, response) => response.json({ msg: 'Olá Sousa' }));

router.post('/login', (request, response) => {
  const { login, password } = request.body;
  console.log(login, password)
  if (!login) return response.status(400).json({ msg: 'Login é obrigatório.' })
  if (!password) return response.status(400).json({ msg: 'Senha é obrigatória.' })

  const user = users.find(user => user.login === login);

  if (!user) return response.status(404).json({ msg: 'Não encontramos nenhum usuário com esse login.' });

  const passwordValid = user.password === password;

  if (!passwordValid) return response.status(400).json({ msg: 'Senha incorreta.' }) ;

  return response.status(200).json({user_id:user.id, msg: 'Login efetuado com sucesso.' })
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

module.exports = router;