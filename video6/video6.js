document.writeln("Hello javascript".toUpperCase());
let a = 10;
let b = 20;
let c = 6.9;
let d = '10';
let e = Number(d); // hoặc +d
// document.writeln("<br>");
// document.writeln(a + b + c);
// document.writeln("<br>");
// document.writeln(a - b - c);
// document.writeln("<br>");
// document.writeln(a +b);
// document.writeln("<br>");
document.writeln("Trường hợp 2 ");
document.writeln("<br>");
document.writeln(a + d);
document.writeln("<br>");
document.writeln(a - d);
document.writeln("<br>");
document.writeln(a * d);
document.writeln("<br>");
document.writeln(a === d, ' a: ', typeof a, ' d: ', typeof d);
document.writeln("<br>");
document.writeln(a === e, ' a: ', typeof a, ' e: ', typeof e);
document.writeln("<br>");
document.writeln(a / d);


// a là số, d là chuỗi nên kết quả là chuỗi khi thực hiện phép toán +, -, *, /
// Khi mún biến chuỗi thành số thì dùng parseInt() hoặc parseFloat() hoặc Number()