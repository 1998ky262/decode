//暗号化されたメッセージのリンクを生成します。
let msg = prompt("メッセージを入力しろぉおおおおおお");
alert("コピーした。でも端末によってはできないかもね。。。");
let nanka = "1998ky262.github.io/decode?d=";
let value = nanka+decodeURI(msg);
navigator.clipboard.writeText(value);
