//クラスを定義する
class Product {
  //インスタンス化すると同時に処理を実行（初期化）する
  constructor() {
    //インスタンス（オブジェクト）にプロパティを持たせる
    this.name = 'シャンプー';
    this.price = 500;
    this.category = '生活雑貨';
  }
}

//インスタンス化する
const shampoo = new Product();

//インスタンス（オブジェクト）の値を出力する
console.log(shampoo);