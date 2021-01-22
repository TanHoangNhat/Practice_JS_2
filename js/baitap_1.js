/**
 * Mô hình 3 khối
 * * Đầu vào (input)
 * * * Lương 1 ngày 100.000 VND => var dailySalary = 100000
 * * * Số ngày làm việc => var workingDay
 * * * Tổng tiền lương => var totalSalary
 * * Xử lý
 * * * totalSalary = dailySalary * workingDay
 * * Đầu ra (output)
 * * * Xuất ra màn hình kết quả tổng tiền lương
 */

function countSalary() {
    var dailySalary = 100000;
    var workingDay = parseInt(document.getElementById("txtWorkingDay").value);

    var totalSalary = dailySalary * workingDay;

    var currentFormat = new Intl.NumberFormat("vn-VN");

    document.getElementById("txtResult__1").innerHTML = "Tổng tiền lương: " + currentFormat.format(totalSalary) + " VND";
}

function enableButton__1() {
    if (document.getElementById("txtWorkingDay").value != "") {
        document.getElementById("btnCountSalary").disabled = false;
    } else {
        document.getElementById("btnCountSalary").disabled = true;
    }
}