import CtaWrapper from "../styledcomponents/cta.styled";
import ArrowButton from "./arrow-button";
import ctaVideo from "../resources/ctavideo.mp4";
import ctaImg from "../resources/ctaimg.png";
import { useEffect, useState, useRef } from "react";

const Cta = () => {
  // hooks
  const videoRef = useRef(null);
  const [videoAvailable, setvideoAvailable] = useState(true);

  useEffect(() => {
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          await videoRef.current?.canPlayType("video/mp4"); // Check if video can be played
          videoRef.current.play(); // Play video if it is available
          console.log("video played");
        }
      } catch (error) {
        console.error("Video playback failed:", error.message);
        setvideoAvailable(false);
        console.log(videoAvailable);
      }
    };

    playVideo(); // Autoplay the video on component mount
  }, []);

  function handleEnded() {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  }
  return (
    <CtaWrapper>
      <div className="cta-hero">
        <div className="container">
          <h1>EXPLORE BEAUTIFUL PLACES IN AFRICA.</h1>
          <p>We curate sights and experiences from around Africa</p>
        </div>
        <div className="container">
          <div className="container-desc">
            <ArrowButton text={"Travel Guide"} isRight={true} />
            <p>
              Unlock the world's wonders and embark on unforgettable adventures
              with our comprehensive travel guide.
            </p>
          </div>
          <div className="container-desc">
            <ArrowButton text={"Local gist"} isRight={true} />
            <p>
              Uncovering the Essence of Community: Exploring local gossip from
              anywhere you travel to.
            </p>
          </div>
        </div>
      </div>
      <div className="cta-video">
        {videoAvailable ? (
          <video ref={videoRef}autoPlay muted onEnded={handleEnded}>
            <source src={ctaVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={ctaImg} alt="video cannot play" />
        )}
      </div>
    </CtaWrapper>
  );
};

export default Cta;
