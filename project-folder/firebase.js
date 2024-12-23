// Firebase SDK를 불러옴
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

// Firebase 구성 정보
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
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// 데이터베이스 내보내기
export { database };
