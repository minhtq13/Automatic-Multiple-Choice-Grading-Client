import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useNotify from "./useNotify";
import { registerService } from "../services/registerService";
import { appPath } from "../config/appPath";

const useRegister = () => {
  const [registerResult, setRegisterResult] = useState(null);
  const navigate = useNavigate();
  const notify = useNotify();
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
  return { registerAction, registerResult };
};
export default useRegister;
