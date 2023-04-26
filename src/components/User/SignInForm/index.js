import {
  SubmitBtn,
  SignUpContainer,
  Container,
  WelcomeContainer,
  LogInBtn,
} from "./style";
import { useNavigate } from "react-router-dom";
import { useInput } from "hooks/useInput";
import axios, { AxiosInstance } from "axios";
const SignUpForm = () => {
  const navigate = useNavigate();
  const id = useInput("");
  const nickname = useInput("");
  const password1 = useInput("");
  const password2 = useInput("");

  const onClickBtn = () => {
    navigate("/login");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const postData = {
      loginId: id.value,
      nickName: nickname.value,
      password: password1.value,
    };
    const res = await axios.post("/members/signUp", postData);
    console.log(res);
  };
  return (
    <Container>
      <WelcomeContainer>
        <div> 제목 학원에 오신 걸 환영합니다! </div> <br />
        <div> made by Team 21 </div>
        <LogInBtn onClick={onClickBtn}> 이미 회원이신가요? </LogInBtn>
      </WelcomeContainer>
      <SignUpContainer onSubmit={onSubmit}>
        <div> Sign Up </div>
        <input
          type="text"
          name="id"
          value={id.value}
          onChange={id.onChangeValue}
          placeholder="Id"
        />
        <input
          type="text"
          name="nickname"
          value={nickname.value}
          onChange={nickname.onChangeValue}
          placeholder="Nickname"
        />
        <input
          type="password"
          name="password1"
          value={password1.value}
          onChange={password1.onChangeValue}
          placeholder="password"
        />
        <input
          type="password"
          name="password2"
          value={password2.value}
          onChange={password2.onChangeValue}
          placeholder="Password"
        />
        <SubmitBtn type="submit">Join</SubmitBtn>
      </SignUpContainer>
    </Container>
  );
};

export default SignUpForm;
