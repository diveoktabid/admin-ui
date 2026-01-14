import React, { useState } from "react";
import AuthLayout from "../components/Layouts/AuthLayout.jsx";
import FormSignUp from "../components/Fragments/FormSignUp";
import { registerService } from "../services/authService";
import AppSnackbar from "../components/Elements/AppSnackbar";
import { useNavigate } from "react-router-dom";

function signUp() {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const navigate = useNavigate();

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleRegister = async (name, email, password) => {
    try {
      const response = await registerService(name, email, password);
      
      setSnackbar({
        open: true,
        message: response.msg || "Registrasi berhasil! Silakan login.",
        severity: "success",
      });

      // Redirect ke halaman login setelah 2 detik
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      setSnackbar({
        open: true,
        message: error.msg || "Registrasi gagal. Silakan coba lagi.",
        severity: "error",
      });
    }
  };

  return (
    <AuthLayout>
      <FormSignUp onSubmit={handleRegister} />
      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </AuthLayout>
  );
}

export default signUp;