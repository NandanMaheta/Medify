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
import stylesADV from "./HomePageCSS/AdvertiseSwiper.module.css";

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
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission logic here
      console.log('Form submitted');
      console.log('State:', state);
      console.log('City:', city);
    };
  
    return (
      <div className={stylesForm.SearchFormWrapper}>
        <div className={stylesForm.InputWrapper}>
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
                <span style={{ marginLeft: '10px' }}>Search</span>
              </button>
            </div>
          </form>
        </div>
        <div className={stylesForm.BottomWrapper}>
          <div className={stylesForm.BottomTextWrapper}><p className={stylesForm.BottomText}>You may be looking for</p></div>
          <div className={stylesForm.OptionsWrapper}>
            <div className={stylesForm.Options}><Doctor/><span>Doctors</span></div>
            <div className={stylesForm.Options}><DrugStore/><span>Labs</span></div>
            <div className={stylesForm.Options} style={{background: "#2AA7FF14"}}><Hospital/><span>Hospitals</span></div>
            <div className={stylesForm.Options}><Capsule/><span>Medical Store</span></div>
            <div className={stylesForm.Options}><Ambulance/><span>Ambulance</span></div>
          </div>
        </div>
      </div>
    );
  };

  const AdvertiseSwiper = () => {
    return(
      <div className={stylesADV.AdvertiseSwiperWrapper}></div>
    )

  }
  return (
    <div className={styles.LandingPage}>
      <Header />
      <NavBar />
      <HeroSection />
      <SearchForm />
      <AdvertiseSwiper/>
    </div>
  );
}
