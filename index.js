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

function bai3() {
  var hoTen = document.getElementById("hoten").value;
  var tongThuNhapNam = document.getElementById("tongthunhapnam").value * 1;
  var soNguoiPhuThuoc = document.getElementById("songuoiphuthuoc").value * 1;
  var thuNhapChiuThue = 0;
  thuNhapChiuThue = tongThuNhapNam - 4 - soNguoiPhuThuoc * 1.6;

  if (thuNhapChiuThue < 60) {
    thuNhapChiuThue = thuNhapChiuThue + thuNhapChiuThue * (5 / 100);
  } else if (thuNhapChiuThue > 60 && thuNhapChiuThue < 120) {
    console.log("thuNhapChiuThue: ", thuNhapChiuThue);
    thuNhapChiuThue = thuNhapChiuThue + thuNhapChiuThue * (10 / 100);
  } else if (thuNhapChiuThue > 120 && thuNhapChiuThue < 210) {
    thuNhapChiuThue = thuNhapChiuThue + thuNhapChiuThue * (15 / 100);
  } else if (thuNhapChiuThue > 210 && thuNhapChiuThue < 384) {
    thuNhapChiuThue = thuNhapChiuThue + thuNhapChiuThue * (20 / 100);
  } else if (thuNhapChiuThue > 384 && thuNhapChiuThue < 624) {
    thuNhapChiuThue = thuNhapChiuThue + thuNhapChiuThue * (25 / 100);
  } else if (thuNhapChiuThue > 624 && thuNhapChiuThue < 960) {
    thuNhapChiuThue = thuNhapChiuThue + thuNhapChiuThue * (30 / 100);
  } else if (thuNhapChiuThue > 960) {
    thuNhapChiuThue = thuNhapChiuThue + thuNhapChiuThue * (35 / 100);
  }
  console.log("thuNhapChiuThue: ", thuNhapChiuThue);
  document.getElementById("ketQua3").innerHTML =
    `So thue thu nhap ca nhan cua ${hoTen} la ` + thuNhapChiuThue.toFixed(1);
}

function bai4() {
  var maKhachHang = document.getElementById("maKhachHang").value;
  var soKenhCaoCap = document.getElementById("soKenhKetNoi").value * 1;
  var nhaDan = document.getElementById("nhaDan").checked;
  var doanhNghiep = document.getElementById("doanhNghiep").value;
  var soKenhDoanhNghiep =
    document.getElementById("inputGroupSelect01").value * 1;

  console.log("maKhachHang: ", maKhachHang);
  console.log("soKenhCaoCap: ", soKenhCaoCap);
  console.log("nhaDan: ", nhaDan);
  console.log("doanhNghiep: ", doanhNghiep);
  console.log("soKenhDoanhNghiep: ", soKenhDoanhNghiep);
  var tongTinhCap = 0;
  if (nhaDan == true) {
    tongTinhCap = soKenhCaoCap * 7.5 + 4.5 + 20.5;
    console.log("tongTinhCap: ", tongTinhCap);
  } else if (
    nhaDan == false &&
    doanhNghiep == "doanhNghiep" &&
    soKenhCaoCap < 10
  ) {
    tongTinhCap = 15 + soKenhCaoCap * 5 + soKenhDoanhNghiep * 50;
    console.log("tongTinhCap: ", tongTinhCap);
  } else if (
    nhaDan == false &&
    doanhNghiep == "doanhNghiep" &&
    soKenhCaoCap >= 10
  ) {
    tongTinhCap = 15 + 75 + (soKenhCaoCap - 10) * 5 + soKenhDoanhNghiep * 50;
  }
  console.log("tongTinhCap: ", tongTinhCap);
}
