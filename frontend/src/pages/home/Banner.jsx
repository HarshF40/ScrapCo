import React, { useEffect, useRef } from "react";
import plastic from "/src/assets/plastic.png";
import metal from "/src/assets/metal.png";
import rubber from "/src/assets/rubber.png";

const Banner = () => {
  const splineRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.9.72/build/spline-viewer.js";
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    const spline = splineRef.current;

    if (spline) {
      spline.addEventListener("mouseenter", () => {
        spline.dispatchEvent(new CustomEvent("openClaw"));
      });

      spline.addEventListener("mouseleave", () => {
        spline.dispatchEvent(new CustomEvent("closeClaw"));
      });
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        backgroundColor: "white",
        position: "relative",
      }}
    >
      {/* Left Section */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          paddingTop: "10vh",
          alignItems: "center",
          maxWidth: "50%", // Limit width to prevent pushing the right section
          paddingLeft: "5vw", // Adds spacing from the left edge
        }}
      >
        {/* Title + Description */}
        <h1 style={{ fontSize: "2rem", color: "#333", textAlign: "center" }}>Buy! Sell! Scrap!</h1>
        <p style={{ textAlign: "center", maxWidth: "80%" }}>
          Welcome to SCRAPCO – Your trusted partner for all scrap solutions.
          At SCRAPCO, we make buying and selling scrap materials effortless and reliable. Whether you're looking to dispose of waste responsibly or find quality scrap materials, our platform connects buyers and sellers seamlessly. Join us in promoting sustainable recycling while turning scrap into valuable resources!
        </p>
        <button className="btn-primary">Get Started</button>

        {/* Images Section */}
        <div style={{ position: "absolute", top: "400px", left: "50px" }} className="scrap-container">
  <img
    src={rubber}
    alt="Rubber Scrap"
    style={{ width: "200px", height: "200px", objectFit: "cover" }}
  />
  <span className="tooltip">Rubber Scrap</span>
</div>

<div style={{ position: "absolute", top: "400px", left: "300px" }} className="scrap-container">
  <img
    src={plastic}
    alt="Plastic Scrap"
    style={{ width: "200px", height: "200px", objectFit: "cover" }}
  />
  <span className="tooltip">Plastic Scrap</span>
</div>

<div style={{ position: "absolute", top: "400px", left: "550px" }} className="scrap-container">
  <img
    src={metal}
    alt="Metal Scrap"
    style={{ width: "200px", height: "200px", objectFit: "cover" }}
  />
  <span className="tooltip">Metal Scrap</span>
</div>

      </div>

      {/* Right Section (Spline Model) */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <spline-viewer
          ref={splineRef}
          url="https://prod.spline.design/BmICv75mh7yyVS9f/scene.splinecode"
          style={{
            width: "90%",
            height: "90%",
            background: "transparent",
            transform: "translateX(90px)",
          }}
          auto-rotate="true"
          rotation-per-second="20deg"
          interaction="hover"  /* Keeps hover movement but removes excess interaction */
          camera-orbit="0deg 90deg 2m"
          disable-zoom  /* Disables zooming */
          disable-pan   /* Stops dragging */
        />
      </div>

    </div>
  );
};

export default Banner;