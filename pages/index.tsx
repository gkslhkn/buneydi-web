import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <h1>Hello</h1>
      <div className="modeswitch ms-4" id="darkModeSwitch">
        <div className="switch"></div>
      </div>
    </>
  );
};

export default Home;
