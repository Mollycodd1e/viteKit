const phoneReg = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10}/g
const emailReg = /^(?!.*\.\.)[A-Z0-9._%+-]+(?<!\.)@[A-Z0-9-]+\.[A-Z]{2,}$/i;
const nameReg = /^((([а-яА-ЯЁё-]){1,30})(\s{1,3}|)){1,5}$|^((([a-zA-Z-'`]){1,30})(\s{1,3}|)){1,5}$/u

export { phoneReg, emailReg, nameReg }
