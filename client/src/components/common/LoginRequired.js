import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const LoginRequired = () => {
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    setTrigger(true);
    if (trigger) {
      toast("you need to log in to view this page", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        progress: undefined,
        type: "warning",
      });
    }
  }, [trigger]);
  return <ToastContainer type="warning"></ToastContainer>;
};

export default LoginRequired;
