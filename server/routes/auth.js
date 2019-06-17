const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const _ = require("lodash");

const db = require("../db");
const validationRules = require("../services/validationRules");
const { userToJson } = require('../services/utils');

const router = express.Router();
const config = "secret"; //env

router.post("/register", async (req, res) => {
  const reqBody = { ...req.body };
  _.forOwn(reqBody, value => {
    if (typeof value !== "string") {
      throw new Error("Unexpected data type.");
    }
  });
   const validationResult = validationRules(reqBody);
  if (!validationResult.isValid) {
    res.status(400).json({ error: validationResult.error });
    return;
  }
 reqBody.username = reqBody.username ? reqBody.username.trim() : reqBody.username;
  const newUser = await createNewUser(reqBody.username, reqBody.password);


  const token = jwt.sign({
    id: newUser.id,
  }, config, { expiresIn: '30d' });

  res.json({
    user: userToJson(newUser),
    token
  });
});

async function createNewUser(username, password) {
  const maxUserId = db
    .get('users')
    .value()
    .map(user => user.id)
    .reduce((acc, cur) => (cur > acc ? cur : acc));

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const newUser = db
    .get('users')
    .insert({
      id: maxUserId + 1,
      username,
      passwordHash,
      avatarUrl: 'https://cdn-images-1.medium.com/fit/c/120/120/0*cmAOkoH29zoIVIBT',
      bio: '',
    })
    .write();

  return newUser;
}


module.exports = router;
