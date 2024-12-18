let a = `I'm a string `;
document.writeln("Hello \"world\" 1207");
document.writeln("<br>");
document.writeln(a.length);
document.writeln("<br>");
document.writeln(a.trim().length);
document.writeln("<br>");
document.writeln(a.trim());
document.writeln("<br>");


// Slice method là một method của string object, nó sẽ trả về một chuỗi mới từ chuỗi gốc
// Nó sẽ cắt chuỗi từ vị trí bắt đầu đến vị trí kết thúc
// Ví dụ: "Hello world".slice(0, 5) => "Hello"

//substring method cũng giống như slice method, nó cũng trả về một chuỗi mới từ chuỗi gốc
// Nó sẽ cắt chuỗi từ vị trí bắt đầu đến vị trí kết thúc
// Ví dụ: "Hello world".substring(0, 5) => "Hello"

// substr method cũng giống như slice method, nó cũng trả về một chuỗi mới từ chuỗi gốc
// Nó sẽ cắt chuỗi từ vị trí bắt đầu và cắt đi n ký tự
// Ví dụ: "Hello world".substr(0, 5) => "Hello"

//Slice method khác với substring method ở chỗ là slice method có thể nhận giá trị âm
// Ví dụ: "Hello world".slice(-5) => "world"
// Còn substring method thì không thể nhận giá trị âm
// Ví dụ: "Hello world".substring(-5) => "Hello world"

//Replace method là một method của string object, nó sẽ thay thế chuỗi cũ bằng chuỗi mới
// Ví dụ: "Hello world".replace("Hello", "Hi") => "Hi world"

let b = "1-2-3-4-5-6-7-8-9";
document.writeln(b.slice(0, 5));
document.writeln("<br>");
document.writeln(b.substring(0, 5));
document.writeln("<br>");
document.writeln(b.substr(0, 5));
document.writeln("<br>");
document.writeln(b.slice(-5));
document.writeln("<br>");
document.writeln(b.replace("1", "0"));
document.writeln("<br>");
document.writeln(b.split("-"));
document.writeln("<br>");
// Split method là một method của string object, nó sẽ chuyển chuỗi thành một mảng
// Ví dụ: "Hello world".split(" ") => ["Hello", "world"]
