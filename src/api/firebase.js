// submmit을 호출하면 우리에게 이 파일을 넘겨줘야함
import { initializeApp } from "firebase/app";
import {
  getAuth, createUserWithEmailAndPassword, GithubAuthProvider,
  signInWithPopup, signOut, updateProfile, signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function register({ email, password, name, photo }) {
  console.log('firebase:register():', email, password);
  createUserWithEmailAndPassword(auth, email, password) // 로그인한 유저정보
    .then(() => {
      updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      })
    })
    .then(() => {logout()})
    .catch(console.error);
}

// type 이 맞아야 정보를 받아올 수 있어서 {email, password}를{}로 한번 더 감싸 signUp.jsx 와 타입을 맞춤
export function login({ email, password}) {
  signInWithEmailAndPassword(auth, email, password)
    .catch(console.error);
}
// promise 구조를 만들어주는 함수는 async (하지만 콜백함수면 이하)
// 콜백함수로 받으면 export 뒤에 async 가 없어짐, .then도 없어짐

export function loginWithGithub() {
  const provider = new GithubAuthProvider();
  signInWithPopup(auth, provider)
    .catch(console.error);  // 에러 처리
    // error 같은 argument 그러면 .catch(console.error); 로 써도 됨 refactoring
}

export function logout() {
  signOut(auth).catch(console.error);
}

export function onUserStateChanged(callback) {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
}
// 앱 사용준비 완료