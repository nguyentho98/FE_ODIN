import Header from "@/components/Layout/Header/Header";
import SurveyListMain from "@/components/Survey/SurveyList/SurveyListMain";
import React, { Fragment } from "react";

const SurveyList: React.FC = () => {
    return (
        <Fragment>
            <Header />
            <SurveyListMain />
        </Fragment>
    );
};

export default SurveyList;
