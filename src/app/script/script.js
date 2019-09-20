// const getPosts = () => {
//   return fetch('http://jsonplaceholder.typicode.com/posts')
//     .then( res => res.json())
//     .then(posts => console.log(posts))
// }
const delay = ms => {
  return new Promise(r => setTimeout(() => r(), ms));
};
delay(2000).then(() => console.log('2 sec'));

const url = 'https://jsonplaceholder.typicode.com/todos/1';

function fetchTodos() {
  console.log('Fetch todo startes...');
  return delay(2000)
    .then(() => {
      return fetch(url);
    })
    .then(response => response.json());
}

fetchTodos()
  .then(data => {
    console.log('Data', data);
  })
  .catch(e => console.error(e));
