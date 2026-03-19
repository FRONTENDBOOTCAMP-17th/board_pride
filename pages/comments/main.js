import * as Api from "./commentsApi.js";
import { renderComments } from "./contentsRenderer.js";

const btn = document.getElementById("comment-success");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const content = document.getElementById("comment-create");

loadComments();

btn.addEventListener("click", () => {
    Api.createComments(id,content.value);
});

async function loadComments() {
    const comments = await Api.searchComments(id);
    console.log(comments.data);
    renderComments(comments.data);
}