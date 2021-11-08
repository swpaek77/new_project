const axios = require("axios");

(async function () {
  try {
    const { data } = await axios.get("https://www.sunssc.com/ip/");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
})();
