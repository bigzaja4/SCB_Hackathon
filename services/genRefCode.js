function genRef1(psid) {
  let path1 = psid.length + "";
  let path2 = psid;
  let path3 = Math.floor(1 + Math.random() * 100);
  return path1 + path2 + path3;
}

module.exports = {
  genRef1
};
