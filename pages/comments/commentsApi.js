import {request} from "./apiHandler.js";

const BASE_URL = "https://api.fullstackfamily.com/api/edu/pride-d1c90b";

// 생성
export function createComments(postId, content) {
    return request(`${BASE_URL}/posts/${postId}/comments`,
        {
            method: "POST",
            body: JSON.stringify({content}),
        }
    );
}

// 조회
export function searchComments(postId) {
    return request(`${BASE_URL}/posts/${postId}/comments`,
        {
            method: "GET",
        }
    );
}

// 수정이
export function updateComments(id, content) {
    return request(`${BASE_URL}/comments/${id}`,
        {
            method: "PUT",
            body: JSON.stringify({content}),
        }
    );
}

// 삭제
export function deleteComments(id) {
    return request(`${BASE_URL}/comments/${id}`,
        {
            method: "DELETE",
        }
    );
}

