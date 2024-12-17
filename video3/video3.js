// let hay var (phiên bản cũ) để khai báo biến trong js
let c = 5;
let d = 10 + "Hello";
let e = "11" + "Hello";
console.log(c);
document.writeln(c);
document.writeln("<br>");
document.writeln(d);
document.writeln("<br>");
document.writeln(e);
document.writeln("<br>");

let jsString = "Hello world 1207";
let jsString2 = 'Hello world 1207';
let jsString3 = `Hello world 1207 ${c}`;
document.writeln(jsString);
document.writeln("<br>");
document.writeln(jsString2, " x= ", c, d, e);
document.writeln("<br>");
document.writeln(jsString3, c == 5);

// Biến typeof kiểm tra kiểu dữ liệu của biến
// const hay hằng số, không thể thay đổi giá trị. Chúng ta sẽ ko thể assign lại giá trị cho const
