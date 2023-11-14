import React from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import Iframe from "react-iframe";

import { images } from "../../constants";

import "./Header.scss";

const Header = (prop) => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  const styles = prop.darkMode
    ? { backgroundImage: "" }
    : {
        backgroundImage: `url(${images.bgIMG})`,
        backgroundSize: "cover",
        backgroundepRepeat: "repeat",
        backgroundPosition: "center",
        overflow: "hidden",
      };

  console.log(prop.darkMode);

  return (
    <div id="home" style={styles} className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Tophiyan</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        {/* <img src={images.grimmjow} alt="profile_bg" /> */}

        <div>
          <Iframe
            title="New swiftXR Project"
            frameBorder="1px"
            zoom-level="150%"
            allow="fullscreen; autoplay; vr camera; midi; encrypted-media"
            scrolling="no"
            xr-spatial-tracking
            execution-while-out-of-viewport
            execution-while-not-rendered
            web-share
            width="100%"
            height="350px"
            src="https://tophiyan.swiftxr.app/"
          />
        </div>

        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.node, images.react01, images.javascript].map(
          (circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="circle" />
            </div>
          )
        )}
      </motion.div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Header, "app__home"),
  "home",
  "app__primarybg"
);
