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

module.exports = { createUser };
