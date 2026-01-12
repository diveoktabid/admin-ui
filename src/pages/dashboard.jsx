import React, { useContext, useEffect, useState } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import CardBalance from "../components/Fragments/CardBalance";
import CardGoal from "../components/Fragments/CardGoal";
import CardUpcomingBill from "../components/Fragments/CardUpcomingBill";
import CardRecentTransaction from "../components/Fragments/CardRecentTransaction";
import CardStatistic from "../components/Fragments/CardStatistic";
import CardExpenseBreakdown from "../components/Fragments/CardExpenseBreakdown";
import { bills, expensesBreakdowns, transactions, balances, expensesStatistics } from "../data";
import { goalService } from "../services/dataService.jsx";  
import { AuthContext } from "../context/authContext.jsx";   
import AppSnackbar from "../components/Elements/AppSnackbar.jsx";   


function Dashboard() {
  const { logout } = useContext(AuthContext);
  	const [goals, setGoals] = useState({});

    	const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  }); 
  
  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const fetchGoals = async () => {
    try {
      const data = await goalService();
      setGoals(data);

    } catch (err) {
      setSnackbar({ 
        open: true, 
        message: "Gagal Mengambbil Data Goals", 
        severity: "error" 
    });

      if (err.status === 401) {
        logout();
      }
    }
  };

  useEffect(() => {
    fetchGoals();
  }, []);
  
  console.log(goals);

  return (
    <>
    <MainLayout>
        <div className="grid sm:grid-cols-12 gap-6">
            <div className="sm:col-span-4">
                <CardBalance data={balances} />
            </div>
            <div className="sm:col-span-4">
                <CardGoal data={goals}/>
            </div>
            <div className="sm:col-span-4">
                <CardUpcomingBill data={bills} />
            </div>
            <div className="sm:col-span-4 sm:row-span-2">
                <CardRecentTransaction data={transactions} />
            </div>
            <div className="sm:col-span-8">
                <CardStatistic data={expensesStatistics} />
             </div>
            <div className="sm:col-span-8">
                <CardExpenseBreakdown data={expensesBreakdowns} />
            </div>
        </div>

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

export default Dashboard;
