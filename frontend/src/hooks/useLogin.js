import { useState } from "react";

export const useLogin = () => {
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const login = async (email, password) => {
    setLoading(true);

    const response = await fetch("api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
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

  return { login, loading, error };
};
