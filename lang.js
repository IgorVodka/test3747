import {Lang} from "./Lang.js";

const lang = new Lang();

export const translate = () => {
  return lang.hello();
};
