const express = require('express');
const route = express.Router()

const get_user = require("./getUsers");
const post_user = require("./postUser");
const put_user = require("./putUser");
const delete_user = require("./deleteUser");

route.use(get_user);
route.use(post_user);
route.use(put_user);
route.use(delete_user);

module.exports = route