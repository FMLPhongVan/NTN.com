const azReg = /[a-z]/g;
const AZReg = /[A-Z]/g;
const numReg = /[0-9]/g;
const specReg = /[!@#$^&.]/g;
const otherReg = /[^a-zA-Z0-9._#@!&^]/g;

const rules = {
  required: (value) => !!value || "Bạn chưa điền mục này",
  min: (v) => v.length >= 8 || "Tối thiểu 8 ký tự",
  azCheck: (value) => azReg.test(value) || "Phải có tối thiểu 1 chữ cái thường",
  AZCheck: (value) => AZReg.test(value) || "Phải có tối thiểu 1 chữ cái hoa",
  numCheck: (value) => numReg.test(value) || "Phải có tối thiểu 1 chữ số",
  specCheck: (value) =>
    specReg.test(value) ||
    "Phải có tối thiểu 1 kí tự đặc biệt (!, @, #, $, ^, &, .)",
};

const loginRules = {
  username: [rules.min, rules.required],
  password: [
    rules.required,
    rules.min,
    rules.azCheck,
    rules.AZCheck,
    rules.numCheck,
    rules.specCheck,
  ],
  showPassword: false,
};

function isValidName(name) {
  var re = /^[a-zA-Z]{2,}$/g; // regex here
  return re.test(removeAscent(name));
}

function removeAscent(str) {
  if (str === null || str === undefined) {
    return str;
  }

  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  return str;
}

function isValidUserName(username) {
  return (
    username.length > 7 &&
    azReg.test(username) &&
    (numReg.test(username) || specReg.test(username)) &&
    !otherReg.test(username)
  );
}

function isValidPassword(pwd) {
  return (
    pwd.length >= 8 &&
    azReg.test(pwd) &&
    AZReg.test(pwd) &&
    numReg.test(pwd) &&
    specReg.test(pwd) &&
    !otherReg.test(pwd)
  );
}

export { isValidName, isValidUserName, isValidPassword, rules, loginRules };
