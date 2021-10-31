import read from "reader.js";
import json from "parser.js";

class GameSavingLoader {

  static load() {
    (async () => {
      try {
        const response = await read();
        const data = await json(response);
      } catch {
        return new Error("ошибка");
      } finally {
        return data;
      }
    })
  }
}

GameSavingLoader.load().then((saving) => {
  console.log(saving);
}, (error) => {
  // ...
});
