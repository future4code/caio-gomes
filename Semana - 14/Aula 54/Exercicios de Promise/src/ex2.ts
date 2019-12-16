import axios, { AxiosResponse } from 'axios';

const postId1 = Number(process.argv[4]);
const postId2 = Number(process.argv[5]);
const postId3 = Number(process.argv[6]);

const URL: string = 'https://jsonplaceholder.typicode.com/posts';

const promise1: Promise<AxiosResponse> = axios.get(
  `https://jsonplaceholder.typicode.com/posts/${postId1}`
);
const promise2: Promise<AxiosResponse> = axios.get(
  `https://jsonplaceholder.typicode.com/posts/${postId2}`
);
const promise3: Promise<AxiosResponse> = axios.get(
  `https://jsonplaceholder.typicode.com/posts/${postId3}`
);

Promise.all([promise1, promise2, promise3]).then((values: AxiosResponse[]) => {
  console.log(values);
});
