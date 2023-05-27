import CtaWrapper from "../styledcomponents/cta.styled";
import ArrowButton from "./arrow-button";

const Cta = () => {
  return (
    <CtaWrapper>
      <div className="cta-hero">
        <div className="container">
          <h1>EXPLORE BEAUTIFUL PLACES IN AFRICA.</h1>
          <p>We curate sights and experiences from around Africa</p>
        </div>
        <div className="container">
            <ArrowButton text ={"Travel Guide"} isRight={true}/>
        </div>
      </div>
    </CtaWrapper>
  );
};

export default Cta;
