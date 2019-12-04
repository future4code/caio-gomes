"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postId1 = Number(process.argv[4]);
const postId2 = Number(process.argv[5]);
const postId3 = Number(process.argv[6]);
const URL = 'https://jsonplaceholder.typicode.com/posts';
fetch(`https://jsonplaceholder.typicode.com/posts/${postId1}`)
    .then(response => response.json())
    .then(json => console.log(json));
//# sourceMappingURL=ex2.js.map