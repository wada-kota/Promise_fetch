// // Promise
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// Promise fetchでエラー検知（catch）
// エラーメッセージは出力されるが、処理は成功
// fetch("https://jsonplaceholder.tpicode.com/todos/1")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
// .catch((err) => {
//   console.log(err);
// });

// Promise fetchでエラー検知（thenの第二引数）
// エラーメッセージは出力されるが、処理は成功
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then(
//     (response) => {
//       return response.json();
//     },
//     (err) => {
//       console.log(err);
//     }
//   )
//   .then((data) => {
//     console.log(data);
//   });

// // async await
// const myFunc = async (url) => {
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
// };

// myFunc("https://jsonplaceholder.typicode.com/todos/1");
