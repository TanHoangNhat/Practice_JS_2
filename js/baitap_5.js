/**
 * Mô hình 3 khối
 * * Đầu vào (input)
 * * * Số có 2 chữ số => var number
 * * * Hàng chục => var ten
 * * * Hàng đơn vị => var unit
 * * * Tổng 2 ký số => var total
 * * Xử lý
 * * * ten = number / 10
 * * * unit = number % 10
 * * Đầu ra
 * * * Xuất ra màn hình kết quả tổng 2 ký số
 */

function countSum() {
    var number = parseInt(document.getElementById("txtNumber").value);

    var ten = Math.trunc(number / 10);
    var unit = number % 10;

    var total = ten + unit;

    document.getElementById("txtResult__5").innerHTML = "Tổng 2 ký số: " + total;
}

function enableButton__5() {
    if (document.getElementById("txtNumber").value != "") {
        document.getElementById("btnCountSum").disabled = false;
    } else {
        document.getElementById("btnCountSum").disabled = true;
    }
}