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

  const onSubmit =async (formData) => {
      const { email, username, password } = formData;
      const { data } = await axios.post(registerRoute, {
        username,
        email,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem(
          "chat-app-current-user",
          JSON.stringify(data.user)
        );
        navigate("/");
      }
    }
  

  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/");
    }
  }, []);


  return (
    <Layout>
      <FormContainer>
        <div className="Login">
          <h1 className="formTitle">ثبت نام</h1>
        <form className="content"  onSubmit={handleSubmit(onSubmit)}>
          {/* username input section */}
        <div className='usernameInputsection'>
    <div className="Input">
            <div className="placeholder">
          <span className="formSvgSpan">
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1586 12.6144C12.1286 12.6144 12.1086 12.6144 12.0786 12.6144C12.0286 12.6044 11.9586 12.6044 11.8986 12.6144C8.99859 12.5244 6.80859 10.2444 6.80859 7.43438C6.80859 4.57438 9.13859 2.24438 11.9986 2.24438C14.8586 2.24438 17.1886 4.57438 17.1886 7.43438C17.1786 10.2444 14.9786 12.5244 12.1886 12.6144C12.1786 12.6144 12.1686 12.6144 12.1586 12.6144ZM11.9986 3.74438C9.96859 3.74438 8.30859 5.40438 8.30859 7.43438C8.30859 9.43438 9.86859 11.0444 11.8586 11.1144C11.9086 11.1044 12.0486 11.1044 12.1786 11.1144C14.1386 11.0244 15.6786 9.41438 15.6886 7.43438C15.6886 5.40438 14.0286 3.74438 11.9986 3.74438Z" fill="#382F3B"/>
<path d="M12.1696 23.5444C10.2096 23.5444 8.23961 23.0444 6.74961 22.0444C5.35961 21.1244 4.59961 19.8644 4.59961 18.4944C4.59961 17.1244 5.35961 15.8544 6.74961 14.9244C9.74961 12.9344 14.6096 12.9344 17.5896 14.9244C18.9696 15.8444 19.7396 17.1044 19.7396 18.4744C19.7396 19.8444 18.9796 21.1144 17.5896 22.0444C16.0896 23.0444 14.1296 23.5444 12.1696 23.5444ZM7.57961 16.1844C6.61961 16.8244 6.09961 17.6444 6.09961 18.5044C6.09961 19.3544 6.62961 20.1744 7.57961 20.8044C10.0696 22.4744 14.2696 22.4744 16.7596 20.8044C17.7196 20.1644 18.2396 19.3444 18.2396 18.4844C18.2396 17.6344 17.7096 16.8144 16.7596 16.1844C14.2696 14.5244 10.0696 14.5244 7.57961 16.1844Z" fill="#382F3B"/>
</svg>
          </span>
          <input
            type="text"
            className="input"
            name="username"
            placeholder="نام کاربری"
            {...register("username", {
              required: true,
              minLength:3,
              maxLength:20
            })}
          />
          </div>
          </div>
          {errors.username && errors.username.type === "required" && (
            <p className="errorMsg">لطفا نام کاربری را وارد نمایید</p>
          )}
          {errors.username && errors.username.type === "minLength" && (
           <p className="errorMsg">نام کاربری نمی تواند کمتر از 3 کاراکتر باشد</p>
          )}
          {errors.username && errors.username.type === "maxLength" && (
            <p className="errorMsg">نام کاربری نمی تواند بیشتر از 20 کاراکتر باشد</p>
          )}
          </div>
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
          {/* <NavLink hrefLang="#" className="forgetPasswordLink">رمز عبور خود را فراموش کرده ام</NavLink> */}
          <div className="acceptRules">
          <svg width="16" height="16" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.24642 16.2794L17.1542 8.37167C17.318 8.20917 17.537 8.1144 17.7676 8.10628C17.9982 8.09816 18.2233 8.17729 18.3981 8.32787C18.5729 8.47845 18.6845 8.68941 18.7106 8.91864C18.7367 9.14788 18.6754 9.37853 18.539 9.56456L18.4498 9.66723L9.8942 18.2228C9.73899 18.378 9.53322 18.4724 9.31431 18.4888C9.0954 18.5052 8.87788 18.4424 8.70131 18.312L8.59864 18.2228L4.93198 14.5561C4.76947 14.3923 4.6747 14.1733 4.66658 13.9427C4.65846 13.7122 4.73759 13.487 4.88817 13.3122C5.03875 13.1374 5.24971 13.0258 5.47895 12.9997C5.70818 12.9736 5.93883 13.0349 6.12486 13.1713L6.22753 13.2606L9.24642 16.2794Z" fill="#382F3B"/>
<path d="M19.6389 1.99438C20.5303 1.99438 21.3852 2.3485 22.0156 2.97883C22.6459 3.60916 23 4.46407 23 5.3555V20.6333C23 21.5247 22.6459 22.3796 22.0156 23.0099C21.3852 23.6403 20.5303 23.9944 19.6389 23.9944H4.36111C3.46969 23.9944 2.61478 23.6403 1.98445 23.0099C1.35412 22.3796 1 21.5247 1 20.6333V5.3555C1 4.46407 1.35412 3.60916 1.98445 2.97883C2.61478 2.3485 3.46969 1.99438 4.36111 1.99438H19.6389ZM19.6389 3.82772H4.36111C3.51778 3.82772 2.83333 4.51216 2.83333 5.3555V20.6333C2.83333 21.4766 3.51778 22.1611 4.36111 22.1611H19.6389C20.4822 22.1611 21.1667 21.4766 21.1667 20.6333V5.3555C21.1667 4.51216 20.4822 3.82772 19.6389 3.82772Z" fill="#382F3B"/>
</svg>
<p className="acceptRuleText">قوانین و مقررات سایت را می پذیرم</p>


          </div>

          </div>
          </div>
          {/* invite code input section */}
          <div className='iviteCodeInputsection'>
    <div className="Input">
            <div className="placeholder">
          <span className="formSvgSpan">
          <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.1692 8.50742H6.1492C4.3492 8.44742 2.9392 6.98741 2.9292 5.18741C2.9292 3.34741 4.4292 1.84741 6.2592 1.84741C8.0892 1.84741 9.5892 3.34741 9.5892 5.17741C9.5892 6.98741 8.1792 8.44742 6.3792 8.50742H6.2392H6.1692ZM6.2692 7.00742H6.2693C6.32926 7.00742 6.37924 7.00742 6.4392 7.01741C7.3292 6.97741 8.1092 6.17741 8.1092 5.18741C8.1092 4.17741 7.2892 3.35741 6.2792 3.35741C5.2692 3.35741 4.4492 4.17741 4.4492 5.18741C4.4492 6.16741 5.2092 6.95741 6.1792 7.01741C6.18919 7.00742 6.22915 7.00742 6.26913 7.00742H6.2692ZM18.119 8.50768H18.199H18.1991C18.204 8.50768 18.2065 8.50768 18.2078 8.50892C18.209 8.51017 18.209 8.51267 18.209 8.51767C20.009 8.45767 21.419 6.99767 21.429 5.18767C21.429 3.35767 19.929 1.85767 18.099 1.85767C16.269 1.85767 14.769 3.34767 14.769 5.18767C14.769 6.98767 16.179 8.44768 18.069 8.50768H18.119ZM16.269 5.17767C16.269 4.16767 17.089 3.34767 18.099 3.34767C19.119 3.34767 19.939 4.16767 19.939 5.17767C19.929 6.15767 19.179 6.95767 18.209 7.00768C18.119 6.99767 18.039 6.99767 18.029 7.00768C17.039 6.96768 16.269 6.16767 16.269 5.17767ZM17.0392 15.7776C17.4292 15.8476 17.8192 15.8776 18.2092 15.8776C19.4392 15.8776 20.6192 15.5476 21.5292 14.9476C22.4192 14.3476 22.9192 13.4976 22.9192 12.6076C22.9192 11.7076 22.4092 10.8676 21.5292 10.2776C20.3292 9.47755 18.6392 9.16756 17.0092 9.45756C16.5992 9.52756 16.3292 9.91756 16.3992 10.3276C16.4692 10.7376 16.8592 11.0176 17.2692 10.9376C18.5092 10.7176 19.8292 10.9476 20.6992 11.5276C21.1592 11.8376 21.4192 12.2176 21.4192 12.6076C21.4192 12.9976 21.1692 13.3876 20.6992 13.6976C19.8292 14.2776 18.5292 14.5076 17.2992 14.2976C16.8892 14.2276 16.4992 14.4976 16.4292 14.9076C16.3592 15.3176 16.6292 15.7076 17.0392 15.7776ZM2.83922 14.9476C3.74922 15.5476 4.92922 15.8776 6.15922 15.8776C6.54922 15.8776 6.93922 15.8476 7.32922 15.7776C7.73922 15.7076 8.00922 15.3176 7.93922 14.9076C7.86922 14.5076 7.47922 14.2276 7.06922 14.2976C5.83922 14.5076 4.53922 14.2776 3.66922 13.6976C3.20922 13.3876 2.94922 12.9976 2.94922 12.6076C2.94922 12.2176 3.19922 11.8376 3.66922 11.5276C4.54922 10.9476 5.85922 10.7176 7.09922 10.9376C7.50922 11.0176 7.89922 10.7376 7.96922 10.3276C8.03922 9.91756 7.76922 9.52756 7.35922 9.45756C5.72922 9.16756 4.03922 9.47755 2.83922 10.2776C1.95922 10.8676 1.44922 11.7176 1.44922 12.6076C1.44922 13.5076 1.95922 14.3576 2.83922 14.9476ZM12.199 15.9774H12.119H12.069C10.179 15.9174 8.76904 14.4574 8.76904 12.6574C8.76904 10.8174 10.269 9.32739 12.099 9.32739C13.929 9.32739 15.429 10.8274 15.429 12.6574C15.419 14.4674 14.009 15.9274 12.209 15.9874C12.209 15.9824 12.209 15.9799 12.2078 15.9786C12.2065 15.9774 12.204 15.9774 12.199 15.9774ZM12.099 10.8174C11.089 10.8174 10.269 11.6374 10.269 12.6474C10.269 13.6374 11.039 14.4374 12.029 14.4774C12.039 14.4674 12.119 14.4674 12.209 14.4774C13.179 14.4274 13.929 13.6274 13.939 12.6474C13.939 11.6474 13.119 10.8174 12.099 10.8174ZM8.869 22.4176C9.799 23.0476 10.999 23.3576 12.199 23.3576C13.399 23.3576 14.599 23.0376 15.529 22.4176C16.419 21.8276 16.919 20.9676 16.919 20.0776C16.919 19.1776 16.409 18.3376 15.529 17.7476C13.669 16.5076 10.739 16.5076 8.869 17.7476C7.979 18.3376 7.479 19.1976 7.479 20.0876C7.479 20.9876 7.989 21.8276 8.869 22.4176ZM8.979 20.0976C8.979 19.7076 9.229 19.3176 9.69901 19.0076C11.059 18.1076 13.349 18.0976 14.689 19.0076C15.149 19.3176 15.409 19.6976 15.409 20.0876C15.409 20.4776 15.159 20.8676 14.689 21.1776C13.339 22.0876 11.049 22.0876 9.69901 21.1776C9.23901 20.8676 8.979 20.4876 8.979 20.0976Z" fill="#382F3B"/>
</svg>

          </span>
          <input
            type="text"
            className="input"
            name="inviteCode"
            placeholder="کد دعوت (اختیاری)"
            {...register("inviteCode", {
              required: false,
            })}
          />
          </div>
          </div>      
          </div>
          
          <button className="button primaryButton" type="submit">ثبت نام</button>
          <NavLink className="googleRegister">
            <span>
              <img src={googleLogo} alt="googleLogo" className="googleLogo"/>
            </span>
            <p className="googleRegisterText">ثبت نام با حساب گوگل</p>
          </NavLink>
          <span className="enter">
            حساب کاربری دارید ? <Link className="enterLink" to="/login">ورود</Link>
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