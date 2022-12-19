import Header from "./header";
import Footer from "./footer";

const layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default layout;
