const bcrypt = require("bcrypt");
const { getUserEmail, createUserDb } = require("../repository/user.repository");
const salt = 10;

async function createUser(name, surname, email, pwd) {
  const checEmail = await getUserEmail(email);
  if (checEmail.length) throw new Error("this Email already exists");

  const hashPwd = await bcrypt.hash(pwd, salt);
  const data = await createUserDb(name, surname, email, hashPwd);
  if (!data.length) throw new Error("not created");
  return data;
}

async function authUser(email, pwd) {
  const user = await getUserEmail(email);
  if (!user.length) throw new Error('This Email is not defound');

  const pwdUserHash=user[0].pwd
  if(!(await bcrypt.compare(pwd,pwdUserHash)))throw new Error('Password does not match')
return user 
}

module.exports = { createUser,authUser };
