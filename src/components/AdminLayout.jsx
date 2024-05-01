import { Suspense } from "react";
import Preloader from "./Preloader";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Topbar from "./Topbar";

const AdminLayout = ({ children }) => {
    return (
      <Suspense>
        <Suspense>
          <Topbar />
        </Suspense>
  
        <Suspense>
          <Navbar />
        </Suspense>
  
        <Suspense fallback={<Preloader />}>{children}</Suspense>
  
        <Suspense>
          <Footer hideLinks />
        </Suspense>
      </Suspense>
    );
  };
  
  export default AdminLayout;
  