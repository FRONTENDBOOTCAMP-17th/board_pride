const commentsList = document.getElementById("comment-components");

export async function renderComments(comments) {
    if (!comments || comments.length === 0) {
        messageEl.textContent = "댓글이 없습니다.";
        return;
    }

    for (let i = 0; i < comments.length; i++) {
        const comment = comments[i];

        drawComment();
    }
}

/** 대충 li 그리는 함수 */
function drawComment(){
    const info = document.createElement("ul");
    info.className = "comments-list";

    const liEl = document.createElement("li");
    liEl.className = "comments-info";

    const pNameEl = document.createElement("p");
    pNameEl.className = "author-name";
    pNameEl.textContent = "작성자 명";

    const createTimeEl = document.createElement("time");
    createTimeEl.className = "create-at";
    createTimeEl.textContent = "2026-03-19";

    const updateTimeEl = document.createElement("time");
    updateTimeEl.className = "update-at";
    updateTimeEl.textContent = "2026-03-19";

    const pContent = document.createElement("p");
    pContent.className = "comment-content";
    pContent.textContent = "댓글";

    const btnCorrection = document.createElement("button");
    btnCorrection.className = "comment-correction";
    btnCorrection.textContent = "수정"

    liEl.appendChild(pNameEl);
    liEl.appendChild(createTimeEl);
    liEl.appendChild(updateTimeEl);
    liEl.appendChild(pContent);
    liEl.appendChild(btnCorrection);

    info.appendChild(liEl);
    commentsList.appendChild(info);
}