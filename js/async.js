//同期処理を実行する
console.log('処理１');
console.log('処理２');
console.log('処理３');

//2秒(2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
setTimeout(() => {
  console.log('処理４（非同期処理）');
}, 2000);

//同期処理を実行する
console.log('処理5');
console.log('処理6');