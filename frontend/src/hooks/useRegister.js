import { useState } from "react";

export const useRegister = () => {
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const register = async (username, email, password) => {
    setLoading(true);

    const response = await fetch("api/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, email: email, password: password }),
    });

    const data = await response.json();

    if (!response.ok) {
      setLoading(false);
      setError(data.error);
      return false;
    }

    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(data));
      setLoading(false);
      return true;
    }
  };

  return { register, loading, error };
};

export default useRegister;
