//暗号化されたメッセージのリンクを生成します。
function copyToClipboard (tagValue) {
  if (navigator.clipboard) { // navigator.clipboardが使えるか判定する
    return navigator.clipboard.writeText(tagValue).then(function () { // クリップボードへ書きむ
      messageActive() //メッセージを表示する
    })
  } else {
    tagText.select() // inputタグを選択する
    document.execCommand('copy') // クリップボードにコピーする
    messageActive() //メッセージを表示する
  }
}
let msg = prompt("メッセージを入力しろぉおおおおおお");
alert("コピーした。でも端末によってはできないかもね。。。");
let nanka = "1998ky262.github.io/decode?d=";
let value = nanka+decodeURI(msg);
copyToClipboard(value);
alert(value);
