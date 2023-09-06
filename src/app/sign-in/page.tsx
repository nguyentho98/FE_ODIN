import React from "react";

import FooterThree from "@/components/Layout/Footer/FooterThree";
import HeaderFour from "@/components/Layout/Header/HeaderFour";
import SignInMain from "../../components/SignIn/SignInMain";

const SignIn: React.FC = () => {
  return (
    <React.Fragment>
      <HeaderFour />
      <SignInMain />
      <FooterThree />
    </React.Fragment>
  );
};

export default SignIn;
