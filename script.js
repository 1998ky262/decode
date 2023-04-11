//暗号化されたメッセージのリンクを生成します。
let msg = prompt("メッセージを入力しろぉおおおおおお");
alert("コピーした。でも端末によってはできないかもね。。。");
let nanka = "1998ky262.github.io/decode?d=";
navigator.clipboard.writeText(nanka+encodeURI(msg));