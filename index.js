const axios = require("axios");

(async function () {
  try {
    const { data } = await axios.get("https://www.sunssc.com/ip/");
    console.log(data);
    console.log(data[0].IP);
  } catch (err) {
    console.log(err);
  }
})();
