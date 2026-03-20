import * as Api from "./commentsApi.js";
import { renderComments } from "./contentsRenderer.js";

const btnSuccess = document.getElementById("comment-success");
const btnCorrection = document.getElementById("comment-correction");
const btnDelete = document.getElementById("comment-correction");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const content = document.getElementById("comment-create");

loadComments();

btnSuccess.addEventListener("click", async() => {
    Api.createComments(id, content.value);
});

btnCorrection.addEventListener("click", async() => {
    Api.updateComments(id, content.value);
});

btnDelete.addEventListener("click", async() => {
    Api.deleteComments(id);
});

async function loadComments() {
    const comments = await Api.searchComments(id);
    console.log(comments.data);
    renderComments(comments.data);
}

