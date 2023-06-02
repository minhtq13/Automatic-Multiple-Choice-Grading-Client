import { useState } from "react";
import {
  loginAuthentic,
  loginAuthenticService,
} from "../services/loginService";
import { useNavigate } from "react-router-dom";
import useNotify from "./useNotify";
import { appPath } from "../config/appPath";

const useLogin = () => {
  const [authenticResult, setAuthenticResult] = useState("");
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
      }
    );
  };
  return { authenticAction, authenticResult, loading, setLoading };
};

export default useLogin;
