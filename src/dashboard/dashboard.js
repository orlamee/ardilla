import Header from "../components/dashboardParts/header";
import Sidebar from "../components/dashboardParts/main";
import "../css/dashboard.css";

function DashboardMain() {
  return (
    <div className="dark-mode">
      <Header/>
      <Sidebar/>
    </div>
  );
}

export default DashboardMain;
