import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    if (countdown === 0) {
      clearInterval(timer);
      navigate("/");
    }

    return () => {
      clearInterval(timer);
    };
  }, [countdown]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-4 text-2xl md:text-4xl">404 - Page Not Found</h1>
      <p className="text-base text-center md:text-lg">
        You will be redirected to the main page in{" "}
        <span className="text-blue-700"> {countdown} seconds </span>.
      </p>
    </div>
  );
};

export default NotFoundPage;
