import * as index from "../src/index.js";

test(" отправка корректного имени", () => {
    const validateUsername = new index.Validator("hu90-i0io").validateUsername();
    expect(validateUsername).toBe(true);
})

test(" отправка не корректного имени", () => {
    const validateUsername = new index.Validator("hu90?").validateUsername();
    expect(validateUsername).toBe(false);
})

test(" отправка не корректного имени", () => {
    const validateUsername = new index.Validator("d88990000i").validateUsername();
    expect(validateUsername).toBe(false);
})
