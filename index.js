import axios from "axios";

(async function () {
  try {
    const { data: step1 } = await axios.get("https://reqbin.com/echo/get/json");
    console.log(step1);

    const { data: step2 } = await axios.post("https://reqbin.com/echo/post/json");
    console.log(step2);
  } catch (err) {
    console.log(err);
  }
})();
