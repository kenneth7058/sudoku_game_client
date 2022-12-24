require("dotenv").config({ path: "../config.env" });

module.exports = {
    env: {
        BACKEND_URL = process.env.BACKEND_URL,
    },
}