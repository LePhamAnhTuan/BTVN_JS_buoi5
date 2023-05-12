console.log("first");
// bai1

function bai1() {
  var diemChuan = document.getElementById("diemChuan").value * 1;
  var diemToan = document.getElementById("diemToan").value * 1;
  var diemLy = document.getElementById("diemLy").value * 1;
  var diemHoa = document.getElementById("diemHoa").value * 1;
  var khuVuc = document.getElementById("khuVuc").value + "";
  var uuTien = document.getElementById("uuTien").value * 1;
  var diemTong3Mon = diemToan + diemLy + diemHoa;
  console.log("diemTong3Mon: ", diemTong3Mon);
  if (khuVuc == "a") {
    diemTong3Mon += 2;
  }
  if (khuVuc == "b") {
    diemTong3Mon += 1;
  }
  if (khuVuc == "c") {
    diemTong3Mon += 0.5;
  }
  if (khuVuc == "x") {
    diemTong3Mon += 0;
  }
  console.log("diemTong3Mon: ", diemTong3Mon);
  if (uuTien == 1) {
    diemTong3Mon += 2.5;
  }
  if (uuTien == 2) {
    diemTong3Mon += 1.5;
  }
  if (uuTien == 3) {
    diemTong3Mon += 1;
  }
  console.log("diemTong3Mon: ", diemTong3Mon);
  if (
    diemTong3Mon >= diemChuan &&
    diemToan != 0 &&
    diemLy != 0 &&
    diemHoa != 0
  ) {
    document.getElementById(
      "ketQuaThi"
    ).innerHTML = `Chúc Mừng Đậu Tốt Nghiệp, tổng điểm của bạn là: ${diemTong3Mon}`;
  } else {
    document.getElementById(
      "ketQuaThi"
    ).innerHTML = `Xin Chia Buồn Bạn Đã Rớt Tốt Nghiệp, tổng điểm của bạn là: ${diemTong3Mon}`;
  }
}

function bai2() {
  var tenNguoiDung = document.getElementById("tenNguoiDung").value;
  var soDien = document.getElementById("soDien").value * 1;
  if (soDien <= 50) {
    soDien = soDien * 500;
  } else if (soDien > 50 && soDien <= 100) {
    soDien = 25000 + (soDien - 50) * 650;
  } else if (soDien > 100 && soDien <= 200) {
    soDien = 57500 + (soDien - 100) * 850;
  } else if (soDien > 200 && soDien <= 350) {
    soDien = 142500 + (soDien - 200) * 1100;
  } else {
    soDien = 307500 + (soDien - 350) * 1300;
  }
  console.log("soDien: ", soDien);
  document.getElementById(
    "ketQua2"
  ).innerHTML = `Khách hàng ${tenNguoiDung} tháng này dùng ${soDien}VND `;
}
