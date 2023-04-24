- Create four promises that resolve after 1, 2, 3 and 4 seconds with a random value. Using `Promise.all` log the value of each promise that it resolved with.
```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(Math.random()), 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(Math.random()), 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(Math.random()), 3000);
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(Math.random()), 4000);
});

Promise.all([promise1, promise2, promise3, promise4]).then(values => {
  console.log(values);
});

```
- Create a list of 5 Github usernames in an array and using `Promise.all` get access to the data of each user from GitHub API. Log the number of followers of each user.

```js

const usernames = ['user1', 'user2', 'user3', 'user4', 'user5'];

const promises = usernames.map(username => {
  return fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
});

Promise.all(promises).then(users => {
  users.forEach(user => {
    console.log(`${user.login} has ${user.followers} followers.`);
  });
});

```
- Use `Promise.race` to see which API resolves faster from the given list of URLs. Log the object you get from the promise that is resolved faster.

  - https://random.dog/woof.json
  - https://aws.random.cat/meow

```js

const urls = [
  'https://random.dog/woof.json',
  'https://aws.random.cat/meow'
];

Promise.race(urls.map(url => fetch(url).then(response => response.json())))
  .then(data => {
    console.log(data);
  });

```

- Use `Promise.allSettled` to log the value of each promise from the given list of promises. And also check if `Promise.all` works with `one`, `two` and `three` or not

```js
const one = new Promise((resolve, reject) =>
  setTimeout(() => resolve('Arya'), 1000)
);
const two = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error('Whoops!')), 2000)
);
const three = new Promise((resolve, reject) =>
  setTimeout(() => resolve('John'), 3000)
);


Promise.allSettled([one, two, three]).then(results => {
  results.forEach(result => {
    if (result.status === 'fulfilled') {
      console.log(result.value);
    } else {
      console.log(result.reason.message);
    }
  });
});

Promise.all([one, two, three]).then(console.log);

```

- What will be the output of the following code snippet? How much time will it take for the promise to resolve?

```js
Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('Arya'), 1000);
  }),
  'Sam',
  { name: 'John' },
]).then(console.log);
```
1 second to complete