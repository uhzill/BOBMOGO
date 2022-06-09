window.onload = function(){
    var toggleMenu = false;
    var trigerMenu = document.getElementById("menu");
    var gnbMenu = document.getElementById("gnb");

    // document.getElementById("btn_share1").onclick = function() {window.alert("공유완료!");}
    // document.getElementById("btn_save1").onclick = function() {window.alert("저장완료!");}
    // document.getElementById("btn_share2").onclick = function() {window.alert("공유완료!");}
    // document.getElementById("btn_save2").onclick = function() {window.alert("저장완료!");}
    // document.getElementById("comment_btn").onclick = function() {window.alert("댓글을 달았습니다");}


    // MENU title 동적 생성
    var gnbTitle = document.createElement("li"); // 태그 생성
    gnbTitle.setAttribute("id", "gnb_title"); // 아이디 붙이기
    gnbTitle.innerText = "MENU";
    document.getElementById("gnb").prepend(gnbTitle); // 위치설정

    // 브라우저 넓이가 1024px보다 작으면 MENU title 보이게
    if(window.innerWidth < 1024){
        gnbTitle.classList.remove("blind");
    } else {
        gnbTitle.classList.add("blind");
    }

    trigerMenu.onclick = function(){
        if(window.innerWidth < 1024){
            if(toggleMenu){
                toggleMenu = false;
                gnbMenu.style.right = "-100%";
                gnbMenu.style.width ="200px";
            } else {
                toggleMenu = true;
                gnbMenu.style.right = "30px";
                gnbMenu.style.width ="300px";
            }
            gnbMenu.style.transition = "all .5s"; // 메뉴가 옆에서 스르륵 나오는 것처럼 보이도록

            trigerMenu.classList.toggle("active"); // 햄버거메뉴 토글 활성화
        }
    };
    window.onresize = function(){
        gnbMenu.style.transition = "none";

        // 브라우저 넓이가 1024px보다 커지면 헤더에 다시 메뉴가 보여지도록.
        if(window.innerWidth > 1024){
            gnbMenu.style.width ="calc(100% - 220px)";
            gnbTitle.classList.add("blind");
        } 
        // 브라우저 넓이가 1024px보다 작아지면
        else {
            toggleMenu = false; //햄버거메뉴 모습
            gnbMenu.style.right = "-100%";
            trigerMenu.classList.remove("active"); // 햄버거 모양으로 초기화
            gnbTitle.classList.remove("blind");
        }
    }


}
