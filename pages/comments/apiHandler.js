export async function request(url, options){
    // 로컬스토리지 토큰 저장 하나 만들기
    try{
        const token = localStorage.getItem("accessToken");
        const res = await fetch(url,{
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            ...options,
        });
        
        const data = await res.JSON();
        
        if(!res.ok){
            console.error("잘못된 접근입니다.");
        }
        return data;
    }
    catch(error){
        console.error("API 요청 실패", error);
        throw error;
    }
}