//out-putというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('output-btn');

//HTML要素がクリックされた時にイベント処理を実行する
btn.addEventListener('click', () => {
  console.log('クリックされました！');
});

//add-btnというidを持つHTML要素を取得し、定数に代入する
const addBtn = document.getElementById('add-btn');
//parent-listというidを持つHTML要素を取得し、定数に代入する
const parentList = document.getElementById('parent-list');

//HTML要素がクリックされた時にイベント処理を実行する
addBtn.addEventListener('click', () => {
  //li要素を新しく作成する
  const childList = document.createElement('li');

//作成したli要素に「これはリスト要素です」というテキストを追加する
childList.textContent = 'これはリスト要素です';


//作成したli要素をul要素の子要素として末尾に追加する
parentList.append(childList);
});

//count-btnというidを持つHTML要素を取得し、定数に代入する
const countBtn = document.getElementById('count-btn');

//HTML要素がクリックされたときにイベント処理を実行する
countBtn.addEventListener('click', () => {
  //テキストボックスに入力された文字列を取得する
  const text = document.forms.textForm.textBox.value;

  //取得した文字列の文字数を出力する
  console.log(text.length + '文字');
});