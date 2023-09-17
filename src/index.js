const bootstrap = require("../node_modules/bootstrap/dist/js/bootstrap.bundle")
require("./styles/styles.scss")
const logo = require("./assets/wallet-filled-money-tool.png")
const $ = require("jquery")

$(function () {
    // Add image to logo
    $('#logo').attr('src', logo);
    
})