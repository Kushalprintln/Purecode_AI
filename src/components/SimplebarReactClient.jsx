import SimpleBar from "simplebar-react";

/* 
  Using in
  1) Navbar
  2) NotificationDropDown
*/

const SimplebarReactClient = ({ children, ...options }) => {
  return <SimpleBar {...options}>{children}</SimpleBar>;
};

export default SimplebarReactClient;