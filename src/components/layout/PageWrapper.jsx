import Navbar from "./Navbar";

const PageWrapper = ({ children, customClass }) => {
  return (
    <div
      className={`${customClass} pt-20   max-w-screen-2xl mx-auto w-screen h-auto min-h-screen`}
    >
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default PageWrapper;
