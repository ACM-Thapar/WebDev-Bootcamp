import React from "react"
import Navbar from "../components/Navbar";
import { SidebarData } from "../components/SlidebarData";

function MyRedux() {
  return <>
    <Navbar data={SidebarData} title="Video Lectures" />
    <div className="main-container">
      <div className="video-gallery-container">


        <div className="video-gallery" style={{ marginTop: "40px" }}>
          <div className="featured-video">
            <div className="header video-title onlyonevideo">

              Redux Toolkit

            </div>
            <div className="video-container">
              <div className="responsive-iframe ">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/bbkBuqC1rU4?rel=0"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
              </div>
            </div>


          </div>


        </div>
      </div>
    </div>
  </>
};

export default MyRedux;
