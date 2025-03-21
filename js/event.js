//out-putというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('output-btn');

//HTML要素がクリックされた時にイベント処理を実行する
btn.addEventListener('click', () => {
  console.log('クリックされました！');
});