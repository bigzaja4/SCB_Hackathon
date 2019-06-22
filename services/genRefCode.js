function genRef1() {
  let path1 = 12345;
  let path2 = Math.floor(Math.random() * 1000000000);
  let path3 = 54321;
  return path1.toString() + path2.toString() + path3.toString();
}

module.exports = {
  genRef1
};
