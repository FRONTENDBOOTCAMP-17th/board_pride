const commentsList = document.getElementById("comment-components");
const messageEl = document.getElementById("comment-message");

export async function renderComments(comments) {
    if (!comments || comments.length === 0) {
        if(messageEl){
            messageEl.textContent = "댓글이 없습니다.";
        }
        return;
    }

    if(messageEl){
        messageEl.textContent = "";
    }

    for (let i = 0; i < comments.length; i++) {
        const comment = comments[i];
        drawComment(comment);
    }
}

/** 대충 li 그리는 함수 */
function drawComment(comment){
    const info = document.createElement("ul");
    info.className = "comments-list";

    const liEl = document.createElement("li");
    liEl.className = "comments-info";

    const pNameEl = document.createElement("p");
    pNameEl.className = "author-name";
    pNameEl.textContent = comment.authorNickname || "작성자";
    

    const createTimeEl = document.createElement("time");
    createTimeEl.className = "create-at";
    createTimeEl.textContent = comment.createdAt.split("T") || "";

    const updateTimeEl = document.createElement("time");
    updateTimeEl.className = "update-at";
    updateTimeEl.textContent = comment.updatedAt.split("T") || "";

    const pContent = document.createElement("p");
    pContent.className = "comment-content";
    pContent.textContent = comment.content || "";

    const btnCorrection = document.createElement("button");
    btnCorrection.className = "comment-correction";
    btnCorrection.textContent = "수정";

    const btnDelete = document.createElement("button");
    btnDelete.className = "comment-delete";
    btnDelete.textContent = "삭제";

    liEl.appendChild(pNameEl);
    liEl.appendChild(createTimeEl);
    liEl.appendChild(updateTimeEl);
    liEl.appendChild(pContent);
    liEl.appendChild(btnCorrection);
    liEl.appendChild(btnDelete);

    info.appendChild(liEl);
    commentsList.appendChild(info);
}