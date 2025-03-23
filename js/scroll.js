//back-btnというidを持つHTML要素を取得し、定数に代入する
const backBtn = document.getElementById('back-btn');

//画面がスクロールされたときにイベント処理を実行する(画面全体が対象なので、windowを指定)
window.addEventListener('scroll', () =>{

//画面のスクロール量をpx数で取得する(取得するプロパティ固定だよ)
const scrollValue = document.scrollingElement.scrollTop;

// スクロール量が300px以上であれば「TOPに戻る」ボタンを表示する処理を実行する
if (scrollValue >=300) {
  backBtn.style.display = 'inline';
}
// 画面のスクロール量がそれ以外（300px未満）であれば、「TOPに戻る」ボタンを非表示にする
else {backBtn.style.display = 'none';
  }

})
