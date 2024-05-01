import AdminLayout from "./components/AdminLayout";
import Dashboard from "./pages/dashboard/dashboard"

// styles
import "./assets/css/styles.css";

function App() {

  return (
    <>
    <AdminLayout>
     <Dashboard/>
    </AdminLayout>
    </>
  )
}
 
export default App
