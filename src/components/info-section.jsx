import { Link } from "react-router-dom";
import {
  DribbbleIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
} from "../resources/icons";
import InfoSectionWrapper from "../styledcomponents/info-section.styled";
import ArrowButton from "./arrow-button";
import img1 from "../resources/img1.png";
import locationData from "../resources/locationData";
import LocationCard from "./location-card";
import { v4 as uuidv4 } from 'uuid';

const InfoSection = () => {
  const data = locationData();


  return (
    <InfoSectionWrapper>
      <div className="container desc-container">
        <div className="desc">
          <h1>
            Find indigenous locations around Africa and stories about them from
            real people.
          </h1>
          <p>
            Discover the Hidden Gems of Africa: Uncover Indigenous Locations and
            Captivating Tales from Adventurous Travelers. Embark on a remarkable
            journey through Africa's rich cultural tapestry, as real tourists
            share their awe-inspiring experiences at indigenous destinations.
            Delve into the untold stories of ancient tribes, vibrant
            communities, and breathtaking landscapes that have stood the test of
            time.
          </p>
        </div>
        <div className="desc-row">
          <div className="desc">
            <h3>Suggest new location</h3>
            <p>
              Have you explored a new location lately? Tell us about it; we
              would love to see where you went and add it to Tour Catalougue so
              that new tourists can explore it too.
            </p>
            <ArrowButton text={"Get started"} isRight={true} />
          </div>
          <div className="desc">
            <h3>Share your story</h3>
            <p>
              Tell us about your experience visiting a destination. Did you have
              fun? any special moments? Share it with the world.
            </p>
            <ArrowButton text={"Get started"} isRight={true} />
          </div>
        </div>
        <div className="desc-icons">
          <Link to={"/"}>
            <InstagramIcon />
          </Link>
          <Link to={"/"}>
            <TwitterIcon />
          </Link>
          <Link to={"/"}>
            <DribbbleIcon />
          </Link>
          <Link to={"/"}>
            <GithubIcon />
          </Link>
        </div>
      </div>
      <div className="container card-wrapper">
        {data.map((location) => {
          return <LocationCard key={uuidv4()} data={location} />;
        })}
      </div>
    </InfoSectionWrapper>
  );
};

export default InfoSection;
