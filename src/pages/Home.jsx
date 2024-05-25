import React from "react";
import styles from "./HomePageCSS/Hero.module.css";
import NavBar from "../components/common/NavBar";
import Header from "../components/common/Header";
import { ReactComponent as HeroImg } from "../assests/HEROIMAGE.svg";
import { ReactComponent as SearchWhite } from "../assests/SearchWhite.svg";
import { ReactComponent as Ambulance } from "../assests/Ambulance.svg";
import { ReactComponent as Doctor } from "../assests/Doctor.svg";
import { ReactComponent as Capsule } from "../assests/Capsule.svg";
import { ReactComponent as Hospital } from "../assests/Hospital.svg";
import { ReactComponent as DrugStore } from "../assests/Drugstore.svg";
import { useWidth } from "../customhook";
import SearchBar from "../components/common/SearchBar";
import stylesForm from "./HomePageCSS/SearchForm.module.css";
import { useState } from "react";
import stylesADV from "./HomePageCSS/Advertise.module.css";
import item1 from "../assests/AdvCarouselItem1.svg";
import item2 from "../assests/AdvCarouselitem2.svg";
import item3 from "../assests/AdvCarouselItem3.svg";
import { ReactComponent as NSDot } from "../assests/NotSelectedDot.svg";
import { ReactComponent as SDot } from "../assests/SelectedDot.svg";
import stylesSpc from "./HomePageCSS/Specialization.module.css";
import blood from "../assests/blood.png"
import cardiology from "../assests/cardiology.png"
import xray from "../assests/X-Ray.png"
import laboratory from "../assests/laboratory.png"
import piscology from "../assests/piscologist.png"
import stetoscope from "../assests/Stethoscope.png"
import mri from "../assests/MRI.png"
import dentistery from "../assests/Dentistery.png"
import Carousel from "../components/common/Carousel/Carouse";

export default function Home() {
  const { width } = useWidth();

  const HeroSection = () => {
    return (
      <div className={styles.HeroSecWrapper}>
        <div className={styles.TextWrapper}>
          <div className={styles.FirstPara}>
            {width >= 768 ? (
              <p className={styles.HeroText}>Skip the travel! Find Online</p>
            ) : null}
            <span className={styles.HeroSpan}>Medical </span>{" "}
            <span className={styles.HeroSpan2}>Centers</span>
          </div>

          <div className={styles.HeroPara}>
            <p>
              Connect instantly with a 24x7 specialist or choose to video visit
              a particular doctor.
            </p>
          </div>

          <div style={{ marginTop: "25px" }}>
            <button className={styles.HeroButton}>Find Centers</button>
          </div>
        </div>
        {width > 768 ? (
          <HeroImg />
        ) : (
          <HeroImg
            width="40%"
            height="30%"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "auto",
              marginTop: "30px",
            }}
          />
        )}
      </div>
    );
  };

  const SearchForm = () => {
    const [state, setState] = useState("");
    const [city, setCity] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission logic here
      console.log("Form submitted");
      console.log("State:", state);
      console.log("City:", city);
    };

    return (
      <div className={stylesForm.SearchFormWrapper}>
        <form onSubmit={handleSubmit}>
          <div>
            <SearchBar
              placeholder="State"
              name="StateForm"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div>
            <SearchBar
              placeholder="City"
              name="CityForm"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" className={stylesForm.SubmitButton}>
              <SearchWhite />
              <span style={{ marginLeft: "10px" }}>Search</span>
            </button>
          </div>
        </form>

        <div className={stylesForm.BottomWrapper}>
          <div className={stylesForm.BottomTextWrapper}>
            <p className={stylesForm.BottomText}>You may be looking for</p>
          </div>
          <div className={stylesForm.OptionsWrapper}>
            {width > 768 && (
              <div className={stylesForm.Options}>
                <Doctor />
                <span>Doctors</span>
              </div>
            )}
            {width > 768 && (
              <div className={stylesForm.Options}>
                <DrugStore />
                <span>Labs</span>
              </div>
            )}
            <div
              className={stylesForm.Options}
              style={{ background: "#2AA7FF14" }}
            >
              <Hospital />
              <span>Hospitals</span>
            </div>
            {width > 768 && (
              <div className={stylesForm.Options}>
                <Capsule />
                <span>Medical Store</span>
              </div>
            )}
            {width > 768 && (
              <div className={stylesForm.Options}>
                <Ambulance />
                <span>Ambulance</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const Advertise = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
      <div className={stylesADV.AdvertiseWrapper}>
        <div className={stylesADV.ImageWrapper}>
          <img
            src={item1}
            alt=""
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={width < 768 ? { width: "280px", height: "auto" } : {}}
          />
          <img
            src={item2}
            alt=""
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={width < 768 ? { width: "280px", height: "auto" } : {}}
          />
          <img
            src={item3}
            alt=""
            onMouseEnter={() => setHoveredIndex(2)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={width < 768 ? { width: "280px", height: "auto" } : {}}
          />
        </div>
        <div className={stylesADV.BottomWrapper}>
          {hoveredIndex === 0 ? (
            <SDot
              className={stylesADV.imgAdv}
              style={{ marginRight: "10px" }}
            />
          ) : (
            <NSDot
              className={stylesADV.imgAdv}
              style={{ marginRight: "10px" }}
            />
          )}
          {hoveredIndex === 1 ? (
            <SDot
              className={stylesADV.imgAdv}
              style={{ marginRight: "10px" }}
            />
          ) : (
            <NSDot
              className={stylesADV.imgAdv}
              style={{ marginRight: "10px" }}
            />
          )}
          {hoveredIndex === 2 ? (
            <SDot
              className={stylesADV.imgAdv}
              style={{ marginRight: "10px" }}
            />
          ) : (
            <NSDot
              className={stylesADV.imgAdv}
              style={{ marginRight: "10px" }}
            />
          )}
        </div>
      </div>
    );
  };

  const Specialization = () => {
    return (
      <div className={stylesSpc.Wrapper}>
        <p className={stylesSpc.text}>Find by specialisation</p>
        <div className={stylesSpc.iconwrapper}>
          <div className={stylesSpc.item}><img src={dentistery} alt="Dentistry" /><span>Dentistry</span></div>
          <div className={stylesSpc.item}><img src={stetoscope} alt="Primary Care" /><span>Primary Care</span></div>
          <div className={stylesSpc.item}><img src={cardiology} alt="Cardiology" /><span>Cardiology</span></div>
          <div className={stylesSpc.item}><img src={mri} alt="MRI Resanance" /><span>MRI Resanance</span></div>
          <div className={stylesSpc.item}><img src={blood} alt="Blood Test" /><span>Blood Test</span></div>
          <div className={stylesSpc.item}><img src={piscology} alt="Piscologist" /><span>Piscologist</span></div>
          <div className={stylesSpc.item}><img src={laboratory} alt="Laboratory" /><span>Laboratory</span></div>
          <div className={stylesSpc.item}><img src={xray} alt="X-Ray" /><span>X-Ray</span></div>
        </div>
      </div>
    );
  };

  

  return (
    <div className={styles.LandingPage}>
      <Header />
      <NavBar />
      <HeroSection />
      <SearchForm />
      <Advertise />
      <Specialization />
      {/* <Carousel/> */}
     
    </div>
  );
}
