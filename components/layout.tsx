import Sidebar from "./sidebar";
import Footer from "./footer";

const layout = ({ children }: any) => {
  return (
    <>
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default layout;
