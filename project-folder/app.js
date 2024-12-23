// Firebase 설정 정보
const firebaseConfig = {
  apiKey: "AIzaSyDfS3uDY1uHniLdNe8S13hG24yCYWkF05k",
  authDomain: "hanam-5b183.firebaseapp.com",
  databaseURL: "https://hanam-5b183-default-rtdb.firebaseio.com",
  projectId: "hanam-5b183",
  storageBucket: "hanam-5b183.firebasestorage.app",
  messagingSenderId: "67062603373",
  appId: "1:67062603373:web:9bd50df77a32279835a964"
};

// Firebase 초기화
firebase.initializeApp(firebaseConfig);

// 의견 제출 함수
function submitOpinion(candidateKey) {
  const nameInput = document.getElementById("nameInput").value;
  const opinionInput = document.getElementById("opinionInput").value;

  if (nameInput.trim() === "" || opinionInput.trim() === "") {
    alert("이름과 의견을 입력해주세요!");
    return;
  }

  const opinionsRef = firebase.database().ref(`candidates/${candidateKey}/opinions`);
  const newOpinionRef = opinionsRef.push();
  newOpinionRef.set({
    name: nameInput,
    opinion: opinionInput,
  });

  document.getElementById("nameInput").value = "";
  document.getElementById("opinionInput").value = "";
  alert("의견이 제출되었습니다!");
}

// 의견 및 피드백 가져오기 함수
function fetchOpinions(candidateKey) {
  const opinionsRef = firebase.database().ref(`candidates/${candidateKey}/opinions`);
  opinionsRef.on("value", (snapshot) => {
    const opinions = snapshot.val();
    const opinionList = document.getElementById("opinionList");
    opinionList.innerHTML = ""; // 기존 목록 초기화

    if (opinions) {
      for (const opinionKey in opinions) {
        const opinion = opinions[opinionKey];
        const opinionItem = document.createElement("li");
        opinionItem.innerHTML = `
          <strong>${opinion.name}:</strong> ${opinion.opinion}
        `;
        opinionList.appendChild(opinionItem);
      }
    } else {
      opinionList.innerHTML = "<p>아직 제출된 의견이 없습니다.</p>";
    }
  });
}

// 페이지 로드 시 자동 실행
document.addEventListener("DOMContentLoaded", () => {
  const candidateKey = "candidate1"; // 기호 1번 후보
  fetchOpinions(candidateKey);

  const submitButton = document.getElementById("submitButton");
  submitButton.addEventListener("click", () => {
    submitOpinion(candidateKey);
  });
});
