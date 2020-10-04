import Crush from "./crush.js";
import { sayhiVn, sayhiThai, sayhiChina } from "./utils.js";
let money = new Crush("VND", 2020 - 1975, "VN", null, "polyme");
console.log(money);

sayhiChina("pastetu");
sayhiThai("pastetu");
sayhiVn("pastetu");
