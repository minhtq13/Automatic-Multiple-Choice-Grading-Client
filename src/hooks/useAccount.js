import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { appPath } from "../config/appPath";
import { loginAuthenticService } from "../services/loginService";
import useNotify from "./useNotify";
import { registerService } from "../services/registerService";

const useLogin = () => {
  const [authenticResult, setAuthenticResult] = useState("");
  const [registerResult, setRegisterResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const notify = useNotify();
  const authenticAction = (payload = {}) => {
    loginAuthenticService(
      payload,
      (res) => {
        setAuthenticResult(res.data.message);
        notify.success("Đăng nhập thành công!");
        navigate(appPath.default);
        setLoading(false);
      },
      (error) => {
        setAuthenticResult("error");
        setLoading(false);
        console.log(error);
      }
    );
  };
  const registerAction = (payload = {}) => {
    registerService(
      payload,
      (res) => {
        setRegisterResult(res.data.message);
        notify.success("Đăng ký tài khoản thành công!");
        navigate(appPath.login);
      },
      (error) => {
        setRegisterResult("error");
      }
    );
  };
  return { authenticResult, authenticAction, loading, setLoading, registerResult, registerAction };
};

export default useLogin;
