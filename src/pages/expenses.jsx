import React, { useState } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import CardExpense from "../components/Fragments/CardExpense";
import AppSnackbar from "../components/Elements/AppSnackbar";

function Expenses() {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <>
      <MainLayout>
        <CardExpense />

        <AppSnackbar
          open={snackbar.open}
          message={snackbar.message}
          severity={snackbar.severity}
          onClose={handleCloseSnackbar}
        />
      </MainLayout>
    </>
  );
}

export default Expenses;


