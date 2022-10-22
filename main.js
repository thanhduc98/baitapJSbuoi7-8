var number = [];

function themSo() {
    var num = Number(document.getElementById("soNguyen").value);

    number.push(num);
    document.getElementById("txtResult").innerHTML = number;
}
document.getElementById("themSo").onclick = themSo;

// Bài 1
function tinhTongDuong() {
    var tongDuong = 0;

    for (var i = 0; i < number.length; i++) {
        if (number[i] > 0) {
            tongDuong += number[i];
        }
    }
    document.getElementById("txtResult1").innerHTML = "Tổng số dương là: " + tongDuong;
}
document.getElementById("tinhTongDuong").onclick = tinhTongDuong;

// Bài 2

function demSoDuong() {
    var demSoDuong = 0;
    for (var i = 0; i < number.length; i++) {
        if (number[i] > 0) {
            demSoDuong++;
        }
    }
    document.getElementById("txtResult2").innerHTML = "Số dương là: " + demSoDuong;
}
document.getElementById("demSoDuong").onclick = demSoDuong;

// Bài 3

function timMin() {
    var min = number[0];

    for (var i = 0; i < number.length; i++) {
        if (min > number[i]) {
            min = number[i];
        }
    }
    document.getElementById("txtResult3").innerHTML = "Số nhỏ nhất là: " + min;
}
document.getElementById("timMin").onclick = timMin;

// Bài 4

function timSoDuongMin() {
    var numberDuong = [];
    for (var i = 0; i < number.length; i++) {
        if (number[i] > 0) {
            numberDuong.push(number[i]);
        }
    }

    if (numberDuong != []) {
        var duongMin = numberDuong[0];

        for (var i = 0; i < numberDuong.length; i++) {
            if (duongMin > numberDuong[i]) {
                duongMin = numberDuong[i];
            }
        }
        document.getElementById("txtResult4").innerHTML = "Số dương nhỏ nhất là: " + duongMin;

    } else {
        document.getElementById("txtResult4").innerHTML = "Không có số dương";
    }
}
document.getElementById("timSoDuongMin").onclick = timSoDuongMin;

// Bài 5

function timSoChan() {
    var numberChan = [];

    for (var i = 0; i < number.length; i++) {
        if (number[i] % 2 == 0) {
            numberChan.push(number[i]);
        }
    }

    for (var i = 0; i < numberChan.length; i++) {
        var numLast = "";

        if (numberChan[i] % 2 == 0) {
            numLast = numberChan[i];
        }
    }
    document.getElementById("txtResult5").innerHTML = "Số chẵn cuối: " + numLast;
}
document.getElementById("timSoChan").onclick = timSoChan;

// Bài 6

function doiCho() {
    var viTri1 = Number(document.getElementById("viTri1").value);
    var viTri2 = Number(document.getElementById("viTri2").value);

    var temp = number[viTri1];
    number[viTri1] = number[viTri2];
    number[viTri2] = temp

    document.getElementById("txtResult6").innerHTML = "Mảng sau khi đổi: " + number;
}
document.getElementById("doiCho").onclick = doiCho;

// Bài 7

function sapXepTangDan() {
    numberSx = [];
    for (var i = 0; i < number.length; i++) {
        numberSx.push(number[i]);
    }

    for (var i = 0; i < numberSx.length - 1; i++) {
        for (var j = 0; j < numberSx.length; j++) {
            if (numberSx[j] > numberSx[j + 1]) {
                var temp = numberSx[j];
                numberSx[j] = numberSx[j + 1];
                numberSx[j + 1] = temp;
            }
        }
    }
    document.getElementById("txtResult7").innerHTML = "Mảng sau khi sắp xếp: " + numberSx;
}
document.getElementById("sapXep").onclick = sapXepTangDan;

// Bài 8
function kiemTraSNT(n) {

    if (n <= 1) {
        return 0;
    }
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return 0;
        }
    }
    return 1;
}

function inSNTFirst() {
    var ketQua = 0;

    for (var j = 0; j < number.length; j++) {
        var SNT = kiemTraSNT(number[j]);
        if (SNT) {
            ketQua = number[j];
            break;
        } else {
            ketQua = -1;
        }
    }
    document.getElementById("txtResult8").innerHTML = ketQua;
}
document.getElementById("timSNT").onclick = inSNTFirst;


// Bài 9
var ArrNumber9 = [];

document.getElementById('ThemSo').onclick = function () {
    var n9 = Number(document.getElementById('NhapSo').value);
    var txtResult9_1= '';
    ArrNumber9.push(n9);
    txtResult9_1 += ArrNumber9;
    document.getElementById('txtResult9_1').innerHTML = '=>' + '[' + txtResult9_1 + ']';
}
document.getElementById('DemSoNguyen').onclick = function () {
    txtResult9_2 = '';
    soNguyen9 = 0;
    for (var index = 0; index < ArrNumber9.length; index++) {
        if (Number.isInteger(ArrNumber9[index]) === true) {
            soNguyen9++;
        }
    }
    txtResult9_2 = 'Số Nguyên: ' + soNguyen9;
    document.getElementById('txtResult9_2').innerHTML = '=>' + txtResult9_2;
}
// Bài 10
function soSanh() {
    var soAm = 0;
    var soDuong = 0;

    for (var i = 0; i < number.length; i++) {
        if (number[i] < 0) {
            soAm++;
        } else {
            soDuong++;
        }

        if (soAm == soDuong) {
            document.getElementById("txtResult10").innerHTML = "Số âm = số dương";
        } else if (soAm > soDuong) {
            document.getElementById("txtResult10").innerHTML = "Số âm > số dương";
        } else {
            document.getElementById("txtResult10").innerHTML = "Số âm < số dương";
        }
    }
}
document.getElementById("soSanh").onclick = soSanh;