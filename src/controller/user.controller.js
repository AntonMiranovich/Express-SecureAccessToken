const express = require("express");
const buildResponse = require("../helper/buildResponse");
const { createUser, authUser } = require("../service/user.service");
const createToken = require("../helper/jwt");

const route = express.Router();

route.post("/reg", async (req, res) => {
  try {
    const { name, surname, email, pwd } = req.body;
    const data = await createUser(name, surname, email, pwd);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.post("/auth", async (req, res) => {
  try {
    const { email, pwd } = req.body;
    const data = await authUser(email, pwd);
    const token = createToken(data);
    res.setHeader("authorization", [token]);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

module.exports = route;
