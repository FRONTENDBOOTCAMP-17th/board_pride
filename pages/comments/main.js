import * as Api from "./commentsApi.js";
import { renderComments } from "./contentsRenderer.js";

const btn = document.getElementById("comment-success");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const content = document.getElementById("comment-create");
const 댓글내용 = content.value;

btn.addEventListener("click", () => {

    Api.createComments({ postId: id, content: 댓글내용 });
});

renderComments(content);
Api.searchComments(id);