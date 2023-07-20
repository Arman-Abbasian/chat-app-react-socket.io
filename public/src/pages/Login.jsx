import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerRoute } from "../utils/APIRoutes";
import Layout from "../components/Layout";
import InputForm from "../components/InputForm";
import { useForm } from "react-hook-form"
import UsernameInput from "../components/Inputs/UsernameInput";
import googleLogo from '../assets/googleLogo.png'

export default function Register() {
  const navigate = useNavigate();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
  };
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  console.log(errors)
  // const [values, setValues] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  // });
  const onSubmit = (data) => console.log(data)

  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/");
    }
  }, []);


  return (
    <Layout>
      <FormContainer>
        <div className="Login">
          <h1 className="formTitle">ورود</h1>
        <form className="content"  onSubmit={handleSubmit(onSubmit)}>
          {/* email input section */}
          <div className='emailInputsection'>
    <div className="Input">
            <div className="placeholder">
          <span className="formSvgSpan">
          <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 22.2444H17C20.65 22.2444 22.75 20.1444 22.75 16.4944V9.49438C22.75 5.84438 20.65 3.74438 17 3.74438H7C3.35 3.74438 1.25 5.84438 1.25 9.49438V16.4944C1.25 20.1444 3.35 22.2444 7 22.2444ZM2.75 9.49438C2.75 6.63438 4.14 5.24438 7 5.24438H17C19.86 5.24438 21.25 6.63438 21.25 9.49438V16.4944C21.25 19.3544 19.86 20.7444 17 20.7444H7C4.14 20.7444 2.75 19.3544 2.75 16.4944V9.49438ZM9.65978 13.0744C10.3098 13.6044 11.1598 13.8643 11.9998 13.8643C12.8398 13.8643 13.6898 13.6044 14.3298 13.0744L17.4598 10.5744C17.7898 10.3244 17.8398 9.84435 17.5798 9.52435C17.3298 9.19435 16.8498 9.14436 16.5298 9.40436L13.3998 11.9044C12.6398 12.5144 11.3498 12.5144 10.5898 11.9044L7.45978 9.40436C7.13978 9.14436 6.66978 9.20435 6.40978 9.52435C6.14978 9.84435 6.20978 10.3144 6.52978 10.5744L9.65978 13.0744Z" fill="#382F3B"/>
</svg>
          </span>
          <input
            type="text"
            className="input"
            name="email"
            placeholder="آدرس ایمیل"
            {...register("email", {
              required: true,
              validate: {
                matchPattern: (v) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                  "Email address must be a valid address",
              },
              
            })}
          />
          </div>
          </div>
          {errors.email && errors.email.type === "required" && (
            <p className="errorMsg">لطفا آدرس ایمیل خود را وارد نمایید</p>
          )}
          {errors.email && errors.email.type === "matchPattern" && (
            <p className="errorMsg">لطفا آدرس ایمیل خود را  به صورت صحیح وارد نمایید</p>
          )}
          
          </div>
           {/* password input section */}
           <div className='passwordInputsection'>
    <div className="Input">
      
            <div className="placeholder twoSection">
            <div className="placeholder">
          <span className="formSvgSpan">
          <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 11.7444C17.59 11.7444 17.25 11.4044 17.25 10.9944V8.99438C17.25 5.84438 16.36 3.74438 12 3.74438C7.64 3.74438 6.75 5.84438 6.75 8.99438V10.9944C6.75 11.4044 6.41 11.7444 6 11.7444C5.59 11.7444 5.25 11.4044 5.25 10.9944V8.99438C5.25 6.09438 5.95 2.24438 12 2.24438C18.05 2.24438 18.75 6.09438 18.75 8.99438V10.9944C18.75 11.4044 18.41 11.7444 18 11.7444Z" fill="#382F3B"/>
<path d="M17 23.7444H7C2.59 23.7444 1.25 22.4044 1.25 17.9944V15.9944C1.25 11.5844 2.59 10.2444 7 10.2444H17C21.41 10.2444 22.75 11.5844 22.75 15.9944V17.9944C22.75 22.4044 21.41 23.7444 17 23.7444ZM7 11.7444C3.42 11.7444 2.75 12.4244 2.75 15.9944V17.9944C2.75 21.5644 3.42 22.2444 7 22.2444H17C20.58 22.2444 21.25 21.5644 21.25 17.9944V15.9944C21.25 12.4244 20.58 11.7444 17 11.7444H7Z" fill="#382F3B"/>
<path d="M8 17.9944C7.87 17.9944 7.74 17.9644 7.62 17.9144C7.49 17.8644 7.39001 17.7944 7.29001 17.7044C7.11001 17.5144 7 17.2644 7 16.9944C7 16.8644 7.02999 16.7344 7.07999 16.6144C7.12999 16.4844 7.20001 16.3844 7.29001 16.2844C7.39001 16.1944 7.49 16.1244 7.62 16.0744C7.98 15.9144 8.42999 16.0044 8.70999 16.2844C8.79999 16.3844 8.87001 16.4944 8.92001 16.6144C8.97001 16.7344 9 16.8644 9 16.9944C9 17.2544 8.88999 17.5144 8.70999 17.7044C8.51999 17.8844 8.26 17.9944 8 17.9944Z" fill="#382F3B"/>
<path d="M12 17.9944C11.74 17.9944 11.48 17.8844 11.29 17.7044C11.11 17.5144 11 17.2644 11 16.9944C11 16.8644 11.02 16.7344 11.08 16.6144C11.13 16.4944 11.2 16.3844 11.29 16.2844C11.52 16.0544 11.87 15.9444 12.19 16.0144C12.26 16.0244 12.32 16.0444 12.38 16.0744C12.44 16.0944 12.5 16.1244 12.56 16.1644C12.61 16.1944 12.66 16.2444 12.71 16.2844C12.8 16.3844 12.87 16.4944 12.92 16.6144C12.97 16.7344 13 16.8644 13 16.9944C13 17.2644 12.89 17.5144 12.71 17.7044C12.66 17.7444 12.61 17.7844 12.56 17.8244C12.5 17.8644 12.44 17.8944 12.38 17.9144C12.32 17.9444 12.26 17.9644 12.19 17.9744C12.13 17.9844 12.06 17.9944 12 17.9944Z" fill="#382F3B"/>
<path d="M16 17.9944C15.73 17.9944 15.48 17.8844 15.29 17.7044C15.2 17.6044 15.13 17.4944 15.08 17.3744C15.03 17.2544 15 17.1244 15 16.9944C15 16.7344 15.11 16.4744 15.29 16.2844C15.34 16.2444 15.39 16.2044 15.44 16.1644C15.5 16.1244 15.56 16.0944 15.62 16.0744C15.68 16.0444 15.74 16.0244 15.8 16.0144C16.13 15.9444 16.47 16.0544 16.71 16.2844C16.89 16.4744 17 16.7244 17 16.9944C17 17.1244 16.97 17.2544 16.92 17.3744C16.87 17.5044 16.8 17.6044 16.71 17.7044C16.52 17.8844 16.26 17.9944 16 17.9944Z" fill="#382F3B"/>
</svg>

          </span>
          <input
            type="text"
            className="input"
            name="password"
            placeholder="رمز عبور"
            {...register("password", {
              required: true,
              validate: {
                matchPattern: (v) =>
                /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(v) ||
                  "error",
              },
              
            })}
          />
          </div>
          <span className="formSvgSpan">
          <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9999 17.3244C9.60992 17.3244 7.66992 15.3844 7.66992 12.9944C7.66992 10.6044 9.60992 8.66437 11.9999 8.66437C14.3899 8.66437 16.3299 10.6044 16.3299 12.9944C16.3299 15.3844 14.3899 17.3244 11.9999 17.3244ZM11.9999 10.1644C10.4399 10.1644 9.16992 11.4344 9.16992 12.9944C9.16992 14.5544 10.4399 15.8244 11.9999 15.8244C13.5599 15.8244 14.8299 14.5544 14.8299 12.9944C14.8299 11.4344 13.5599 10.1644 11.9999 10.1644Z" fill="#382F3B"/>
<path d="M12.0001 22.0144C8.24008 22.0144 4.69008 19.8144 2.25008 15.9944C1.19008 14.3444 1.19008 11.6544 2.25008 9.99437C4.70008 6.17437 8.25008 3.97437 12.0001 3.97437C15.7501 3.97437 19.3001 6.17437 21.7401 9.99437C22.8001 11.6444 22.8001 14.3344 21.7401 15.9944C19.3001 19.8144 15.7501 22.0144 12.0001 22.0144ZM12.0001 5.47437C8.77008 5.47437 5.68008 7.41437 3.52008 10.8044C2.77008 11.9744 2.77008 14.0144 3.52008 15.1844C5.68008 18.5744 8.77008 20.5144 12.0001 20.5144C15.2301 20.5144 18.3201 18.5744 20.4801 15.1844C21.2301 14.0144 21.2301 11.9744 20.4801 10.8044C18.3201 7.41437 15.2301 5.47437 12.0001 5.47437Z" fill="#382F3B"/>
</svg>

          </span>
          </div>
          </div>
          <div className="errorSection">
          {errors.password && errors.password.type === "required" && (
            <p className="errorMsg">لطفا پسوورد خود را وارد نمایید</p>
          )}
          {errors.password && errors.password.type === "matchPattern" && (
            <p className="errorMsg">پسوورد باید حداقل 8 کاراکتر شامل حداقل یک حرف بزرگ, یک حرف کوچک, یک عدد و یک علامت ویژه باشد</p>
          )}
          {/* accept rules */}
          <NavLink hrefLang="#" className="forgetPasswordLink">رمز عبور خود را فراموش کرده ام</NavLink>
          </div>
          </div>       
          <button className="button primaryButton" type="submit">ورود</button>
          {/* enter with google section */}
          <NavLink className="googleRegister">
            <span>
              <img src={googleLogo} alt="googleLogo" className="googleLogo"/>
            </span>
            <p className="googleRegisterText"> ورود با حساب گوگل</p>
          </NavLink>
          <span className="enter">
            حساب کاربری ندارید ? <Link className="enterLink" to="/login">ثبت نام</Link>
          </span>
        </form>
        </div>
        <div className="pattern">
        <svg width="169" height="169" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.123047 1.99438C0.123047 1.4421 0.570762 0.994385 1.12305 0.994385H17.1209C17.6731 0.994385 18.1209 1.4421 18.1209 1.99438V17.9922C18.1209 18.5445 17.6731 18.9922 17.1209 18.9922H1.12305C0.570762 18.9922 0.123047 18.5445 0.123047 17.9922V1.99438ZM3.81177 9.42798L3.81784 5.3086C4.89688 5.23723 7.85693 5.30847 9.1842 5.29916C11.1485 5.28546 12.4981 5.08946 13.4175 6.44362C14.3213 7.7749 13.784 9.43936 12.6387 10.1429C12.0496 10.5048 11.6479 10.5291 10.9901 10.5339C10.6658 10.5364 10.6718 10.5583 10.5022 10.3782C10.234 10.0939 9.30263 9.22616 9.16804 9.00689C9.2716 8.80054 10.3283 7.92112 10.4758 7.62725L6.16235 7.62971L6.16184 11.9421C6.36146 11.8534 7.53151 10.5887 7.54561 10.5699C7.87503 10.8979 9.62766 12.6184 9.87241 12.8515C9.54841 13.1797 8.7295 13.9709 8.44248 14.2287C7.93968 13.7381 4.24579 9.8642 3.81177 9.42798ZM1.62706 17.1674L5.53194 17.1585C5.3649 16.9801 1.80457 13.376 1.62951 13.2687L1.62706 17.1674ZM9.87241 12.8515C10.1266 13.0458 10.3949 13.3537 10.6281 13.5886C10.8781 13.8405 11.0952 14.0582 11.3473 14.3077L13.5443 16.5139C13.6789 16.6482 13.7845 16.7501 13.9162 16.8835C14.0526 17.0217 14.0988 17.1484 14.3268 17.1688L17.2625 17.1647C17.1754 16.9876 15.3277 15.1659 14.9863 14.8398L13.8128 13.6956C13.5389 13.4148 12.8154 12.7586 12.6917 12.53L12.8564 12.4475C13.6158 12.1234 14.1763 11.8753 14.7846 11.1771C16.0065 9.7746 16.4556 7.83114 15.6796 6.03662C15.3043 5.16884 14.8081 4.60799 14.2081 4.1229C12.6194 2.83803 10.7726 3.11742 8.39632 3.11872C6.1471 3.11988 3.87344 3.15104 1.62719 3.11678C1.65653 5.35075 1.59965 7.62492 1.63132 9.84144C1.64322 10.668 1.46131 10.3524 2.40059 11.294C3.89917 12.7967 5.35366 14.2875 6.87034 15.7746C6.8044 15.9185 6.35176 16.3361 6.21562 16.4682C6.00436 16.673 5.70235 16.9317 5.55379 17.1669L9.87939 17.1642L9.87241 12.8515Z" fill="#FD2F70"/>
        </svg>
      </div>

      </FormContainer>
      <ToastContainer />
    </Layout>
  );
}

const FormContainer = styled.div`
width:55%;
margin-left: auto;
margin-right: auto;
top: 114px;
display:grid;
grid-template-columns: repeat(2, minmax(0, 1fr));
left: 352px;
border-radius: 16px;
border: 10px;
gap: 32px;
background-image: linear-gradient(40.03deg, #FD2F70 6.56%, rgba(255, 255, 255, 0) 31.04%, rgba(255, 255, 255, 0) 73.23%, #FD2F70 100%),
linear-gradient(0deg, #FFFFFF, #FFFFFF);

border: 1px solid;
border-image-source: linear-gradient(40.03deg, #FD2F70 6.56%, rgba(255, 255, 255, 0) 31.04%, rgba(255, 255, 255, 0) 73.23%, #FD2F70 100%);

box-shadow: 0px 0px 32px 0px #7D6D721F;



  .pattern {
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:white;
  }
  .Login{
    padding: 40px 32px 40px 32px;
    border-radius: 12px;
    gap: 24px;
    display:flex;
    align-items:center;
    flex-direction:column;

  }
  .content{
    gap:16px;
    width:320px;
  }
  .formTitle{
font-size: 24px;
font-weight: 900;
line-height: 38px;
letter-spacing: 0em;
text-align: center;
color: #FD2F70;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-radius: 2rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }
.button{
  width: 100%;
height:48px;
padding: 12px 24px 12px 24px;
    border-radius: 8px;
    gap: 7px;
    cursor:pointer;
    color:white;
    background-image: linear-gradient(31.82deg, #B51F4F -4.32%, #FD2F70 101.44%);
    border:none;
font-weight: 900;
line-height: 22px;
letter-spacing: 0em;

}
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }
  .errorMsg{
    color:red;
    font-size:10px;
  }
  .Input{
    width: 100%;
    height:48px;
  padding: 12px;
  border-radius: 8px;
  gap: 8px;
  background-color: #F2F2F2;

  }
  .placeholder{
    gap: 8px;
    height:24px;
    display:flex;
    align-items:center;
      }
      .formSvgSpan{
        display:flex;
        justify-content:center,
        align-items:center
      }
  input{
    border:none;
    width:100%;
    flex: 1 1 0%;
    color: #7D7D7D;
    padding:0;
  }
  input:focus{
    border:none;
  }
  .twoSection{
    justify-content:space-between
  }
  .forgetPasswordLink,.acceptRuleText{
font-size: 12px;
font-weight: 500;
line-height: 19px;
letter-spacing: 0em;
text-align: left;
color: #7D7D7D;
text-decoration:none;
  }
  .acceptRules{
    display:flex;
    align-items:center;
    gap:4px;
  }
  .googleRegister{
    width: 100%;
    height: 64px;
    padding: 16px;
    border-radius: 8px;
    gap: 8px;
    background-color: #F2F2F2;
    display:flex;
    align-items:center;
    text-decoration:none;
    display:flex;
    align-items:center
  }
  .googleLogo{
    width:32px;
    height:32px
  }
  .googleRegisterText{
    line-height: 22px;
    letter-spacing: 0em;
    color: #7D7D7D;
  }
  .enter{
    color: #4F4F4F;
    font-size: 12px;
font-weight: 500;
line-height: 19px;
letter-spacing: 0em;
text-align: right;
  }
  .enterLink{
color: #07BC93;
text-decoration:underline;

  }
`;