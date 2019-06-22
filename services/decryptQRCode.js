function decryptQrCode(fullyQr) {
  let prefix = fullyQr;
  prefix = prefix.substr(4);
  let length = prefix.substr(0, 2) * 1;
  prefix = prefix.substr(2);
  let resultLength = prefix.substr(0, length) * 1;
  prefix = prefix.substr(length);
  let result = prefix.substr(0, resultLength);
  return result;
}

module.exports = {
  decryptQrCode
};
