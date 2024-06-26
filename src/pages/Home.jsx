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
import SearchDropdown from "../components/common/SearchBar"
import stylesForm from "./HomePageCSS/SearchForm.module.css";
import { useState, useEffect } from "react";
import stylesADV from "./HomePageCSS/Advertise.module.css";
import item1 from "../assests/AdvCarouselItem1.svg";
import item2 from "../assests/AdvCarouselitem2.svg";
import item3 from "../assests/AdvCarouselItem3.svg";
import { ReactComponent as NSDot } from "../assests/NotSelectedDot.svg";
import { ReactComponent as SDot } from "../assests/SelectedDot.svg";
import stylesSpc from "./HomePageCSS/Specialization.module.css";
import blood from "../assests/blood.png";
import cardiology from "../assests/cardiology.png";
import xray from "../assests/X-Ray.png";
import laboratory from "../assests/laboratory.png";
import piscology from "../assests/piscologist.png";
import stetoscope from "../assests/Stethoscope.png";
import mri from "../assests/MRI.png";
import dentistery from "../assests/Dentistery.png";
import Carousel1 from "../components/common/Carousel/Carouse";
import styleCar from "./HomePageCSS/Car.module.css";
import Download from "../components/common/Download";
import Footer from "../components/common/Footer";
import stylesPatient from "./HomePageCSS/PatientCaring.module.css";
import RightAwr from "../assests/RightARW.png";
import PatientCare from "../assests/PatientCareImage.png";
import styleNews from "./HomePageCSS/News.module.css";
import newsimage from "../assests/newsimage.png";
import cardDoc from "../assests/carddoctor.png";
import stylesFamily from "./HomePageCSS/Family.module.css";
import FamilyPic from "../assests/FamilyPic.png";
import AccordionComponent from "../components/common/Accordin";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const { width } = useWidth();
  const navigate = useNavigate();
  
 

  const HeroSection = () => {
    return (
      <div className={styles.HeroSecWrapper}>
        <div className={styles.TextWrapper}>
          <div className={styles.FirstPara}>
            {width >= 768 ? (
              <p className={styles.HeroText}>Skip the travel! Find Online</p>
            ) : null}
            <span className={styles.HeroSpan}>Medical </span>{" "}
            <span className={styles.HeroSpan2} >Centers</span>
          </div>

          <div className={styles.HeroPara}>
            <p>
              Connect instantly with a 24x7 specialist or choose to video visit
              a particular doctor.
            </p>
          </div>

          <div style={{ marginTop: "25px" }}>
            <button className={styles.HeroButton}  onClick={() => navigate("/medical-centers")}>Find Centers</button>
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
    const [states, setStates] = useState([]);
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [cities, setCities] = useState([]);
    const [medicalCenters, setMedicalCenters] = useState([]);
    
  
    useEffect(() => {
      // Fetch all states
      axios.get('https://meddata-backend.onrender.com/states')
        .then(response => {
          if (response && response.data) {
            setStates(response.data);
          }
        })
        .catch(error => {
          console.error('There was an error fetching the states!', error);
        });
    }, []);
  
    const handleStateChange = (selectedState) => {
      setState(selectedState);
      // Fetch cities for the selected state
      axios.get(`https://meddata-backend.onrender.com/cities/${selectedState}`)
        .then(response => {
          if (response && response.data) {
            setCities(response.data);
          }
        })
        .catch(error => {
          console.error('There was an error fetching the cities!', error);
        });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (!state || !city) {
        alert("Please select both state and city");
        return;
      }
      // Fetch medical centers based on selected state and city
      axios.get(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`)
        .then(response => {
          if (response && response.data) {
            // Pass data to the new page
            navigate('/medical-centers', {
              state: { medicalCenters: response.data }
            });
          }
        })
        .catch(error => {
          console.error('There was an error fetching the medical centers!', error);
        });
    };
  
    return (
      <div className={stylesForm.SearchFormWrapper}>
        <form onSubmit={handleSubmit}>
          <div>
            <SearchDropdown
              placeholder="State"
              name="StateForm"
              value={state}
              onChange={(e) => handleStateChange(e.target.value)}
              options={states}
              required
            />
          </div>
          <div>
            <SearchDropdown
              placeholder="City"
              name="CityForm"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              options={cities}
              required
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
            {width > 1023 && (
              <div className={stylesForm.Options}>
                <Doctor />
                <span>Doctors</span>
              </div>
            )}
            {width > 1023 && (
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
            {width > 1023 && (
              <div className={stylesForm.Options}>
                <Capsule />
                <span>Medical Store</span>
              </div>
            )}
            {width > 1023 && (
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
          <div className={stylesSpc.item}>
            <img src={dentistery} alt="Dentistry" />
            <span>Dentistry</span>
          </div>
          <div className={stylesSpc.item}>
            <img src={stetoscope} alt="Primary Care" />
            <span>Primary Care</span>
          </div>
          <div className={stylesSpc.item}>
            <img src={cardiology} alt="Cardiology" />
            <span>Cardiology</span>
          </div>
          <div className={stylesSpc.item}>
            <img src={mri} alt="MRI Resanance" />
            <span>MRI Resanance</span>
          </div>
          <div className={stylesSpc.item}>
            <img src={blood} alt="Blood Test" />
            <span>Blood Test</span>
          </div>
          <div className={stylesSpc.item}>
            <img src={piscology} alt="Piscologist" />
            <span>Piscologist</span>
          </div>
          <div className={stylesSpc.item}>
            <img src={laboratory} alt="Laboratory" />
            <span>Laboratory</span>
          </div>
          <div className={stylesSpc.item}>
            <img src={xray} alt="X-Ray" />
            <span>X-Ray</span>
          </div>
        </div>
      </div>
    );
  };

  const Carousel = () => {
    return (
      <div className={styleCar.Wrapper}>
        <p className={styleCar.Text}>Our Medical Specialist</p>
        <Carousel1 />
      </div>
    );
  };

  const PatientCaring = () => {
    return (
      <div className={stylesPatient.Wrapper}>
        <div className={stylesPatient.Subwrapper}>
          <div className={stylesPatient.left}>
            {width < 1023 ? (
              <img src={PatientCare} alt="" width="80%" height="80%" />
            ) : (
              <img src={PatientCare} alt="" />
            )}
          </div>
          <div className={stylesPatient.Right}>
            <p className={stylesPatient.Firstline}>
              HELPING PATIENTS FROM AROUND THE GLOBE!!
            </p>
            <p className={stylesPatient.SecondLine}>Patient Caring</p>
            <p className={stylesPatient.Para}>
              Our goal is to deliver quality of care in a courteous, respectful,
              and compassionate manner. We hope you will allow us to care for
              you and strive to be the first and best choice for healthcare.
            </p>
            <div>
              <img src={RightAwr} alt="" />
              <span className={stylesPatient.Bullets}>
                Stay Updated About Your Health
              </span>
            </div>
            <div>
              <img src={RightAwr} alt="" />
              <span className={stylesPatient.Bullets}>
                Check Your Results Online
              </span>
            </div>
            <div>
              <img src={RightAwr} alt="" />
              <span className={stylesPatient.Bullets}>
                Manage Your Appointments
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const News = () => {
    return (
      <div className={styleNews.Wrapper}>
        <div className={styleNews.Top}>
          <p className={styleNews.firstline}>Blog & News</p>
          <p className={styleNews.secondline}>Read Our Latest News</p>
        </div>
        <div className={styleNews.Bottom}>
          <div className={styleNews.CardWrapper}>
            <div className={styleNews.Card}>
              <div>
                {width > 1023 ? (
                  <img src={newsimage} alt="" />
                ) : (
                  <img src={newsimage} width="90%" />
                )}
              </div>
              <div className={styleNews.textCont}>
                <div className={styleNews.firstspan}>
                  <span style={{ marginRight: "6px" }}>Medical</span>
                  <span style={{ marginRight: "6px" }}>|</span>
                  <span>March 31, 2022</span>
                </div>
                <p className={styleNews.secondLine}>
                  6 Tips To Protect Your Mental Health When You’re Sick
                </p>
                <div className={styleNews.lil}>
                  <img src={cardDoc} alt="" />
                  <span
                    className={styleNews.LittleDoc}
                    style={{ marginLeft: "25px" }}
                  >
                    Rebecca Lee
                  </span>
                </div>
              </div>
            </div>
            <div className={styleNews.Card}>
              <div>
                {width > 1023 ? (
                  <img src={newsimage} alt="" />
                ) : (
                  <img src={newsimage} width="90%" />
                )}
              </div>
              <div className={styleNews.textCont}>
                <div className={styleNews.firstspan}>
                  <span style={{ marginRight: "6px" }}>Medical</span>
                  <span style={{ marginRight: "6px" }}>|</span>
                  <span>March 31, 2022</span>
                </div>
                <p className={styleNews.secondLine}>
                  6 Tips To Protect Your Mental Health When You’re Sick
                </p>
                <div className={styleNews.lil}>
                  <img src={cardDoc} alt="" />
                  <span
                    className={styleNews.LittleDoc}
                    style={{ marginLeft: "25px" }}
                  >
                    Rebecca Lee
                  </span>
                </div>
              </div>
            </div>
            <div className={styleNews.Card}>
              <div>
                {width > 1023 ? (
                  <img src={newsimage} alt="" />
                ) : (
                  <img src={newsimage} width="90%" />
                )}
              </div>
              <div className={styleNews.textCont}>
                <div className={styleNews.firstspan}>
                  <span style={{ marginRight: "6px" }}>Medical</span>
                  <span style={{ marginRight: "6px" }}>|</span>
                  <span>March 31, 2022</span>
                </div>
                <p className={styleNews.secondLine}>
                  6 Tips To Protect Your Mental Health When You’re Sick
                </p>
                <div className={styleNews.lil}>
                  <img src={cardDoc} alt="" />
                  <span
                    className={styleNews.LittleDoc}
                    style={{ marginLeft: "25px" }}
                  >
                    Rebecca Lee
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const OurFamilies = () => {
    return (
      <div className={stylesFamily.Wrapper}>
        <div className={stylesFamily.Subwrapper}>
          <div className={stylesFamily.Right}>
            <p className={stylesFamily.Firstline}>
            CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
            </p>
            <p className={stylesFamily.SecondLine}>Our Families</p>
            <p className={stylesFamily.Para}>
            We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.
            </p>
            
          </div>
          <div className={stylesFamily.left}>
            {width < 1023 ? (
              <div style={{textAlign:"center"}}><img src={FamilyPic} alt="" width="95%" height="95%" /></div>
            ) : (
              <div><img src={FamilyPic} alt="" /></div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.LandingPage}>
      <Header />
      <NavBar bg="linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)"/>
      <HeroSection />
      <SearchForm />
      <Advertise />
      <Specialization />
      <Carousel />
      <PatientCaring />
      <News />
      <OurFamilies />
      <AccordionComponent/>
      <Download />
      <Footer />
    </div>
  );
}
