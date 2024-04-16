import React, { useState } from "react";
import { register, loginWithGithub, logout, login } from '../api/firebase';
import { uploadImage } from "../api/Cloudinary";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  // photo에는 URL들어감
  //별도로 떼어내도 쓸 수 있음Form table에 Data가 많이 들어갈 예정이라 이렇게 써야함
  const [userInfo, setUserInfo] = useState({ email: '', password: '', name: '', photo: '' });
  const [file, setFile] = useState();
  // const [user, setUser] = useState(null); // 초기엔 빈칸
  const navigate = useNavigate(); // 오브젝트 추가 - 만약 이메일이 들어왔으면 기존에 것에 이메일의 값만 채워넣는 처리과정
  const handleChange = e => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });  // 이하를 이와같이 수정
  }
  const handleSubmit = e => {
    e.preventDefault();
    register(userInfo);
    navigate('/signIn');  // 회원가입 후
  }

  const handleGithub = e => {
    loginWithGithub();
    navigate(-1); // 이전 스테이트로 가라(뒤로가기 -1)
  }

  const handleUpload = e => {
    setFile(e.target.files && e.target.files[0]);
    // 파일즈가 있으면 타겟의 파일즈로 세팅을 하라는 것
    // 첨부파일이 있으면 첨부파일로 세팅을 하는데  '타겟.파일즈'의 첫번째 것으로 설정해라
    // 일반적인 방법으로 파일을 첨부할 수 없다는 사실을 알아야 함
    uploadImage(file)
      .then(url => setUserInfo({ ...userInfo, ['photo']: url }));
  }

  // 정보를 받아오는 구간
  return (
    <div style={{ margin: '20px' }}>
      <form onSubmit={handleSubmit}>
        <input type="email" name='email' value={userInfo.email} placeholder="이메일"
          onChange={handleChange} /><br />
        <input type="password" name='password' value={userInfo.password} placeholder="패스워드"
          onChange={handleChange} /><br />
        <input type="text" name='name' value={userInfo.name} placeholder="이름"
          onChange={handleChange} /><br />
        <input type="file" accept="image/*" name='file' onChange={handleUpload} /><br />
        <button onClick={handleSubmit}>사용자 등록</button>
      </form><br />
      <span>계정이 있으신가요?</span>
      <Link to='/signIn'>로그인</Link><br /><br />
      <button onClick={handleGithub}>깃허브 로그인</button>
    </div>
  )
}