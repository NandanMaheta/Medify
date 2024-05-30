import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./DetailsPage1CSS/MedicalCentersPage.module.css"; // Create this CSS module
import stylesMain from "./DetailsPage1CSS/DetailPageStyle.module.css";
import Header from "../components/common/Header";
import NavBar from "../components/common/NavBar";
import styleBelow from "./DetailsPage1CSS/StyleBelow.module.css";
import SearchDropdown from "../components/common/SearchBar";
import axios from "axios";
import stylesForm from "./DetailsPage1CSS/SearchFORM.module.css";
import { useEffect } from "react";
import { ReactComponent as SearchWhite } from "../assests/SearchWhite.svg";
import { useSearch } from "./SearchContext";
import AccordionComponent from "../components/common/Accordin";
import Download from "../components/common/Download";
import Footer from "../components/common/Footer";
import VerifiedSign from "../assests/verified.1f87346e730e 1.png";
import CardImage from "../assests/CardImage.png";
import Rupee from "../assests/₹.png";
import Rs500 from "../assests/500.png";
import thumb from "../assests/thumbsup.png";

const DetailsPage1 = () => {
  const { medicalCenters, setMedicalCenters } = useSearch();
  const location = useLocation();
  const [states, setStates] = useState([]);
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (location.state && location.state.medicalCenters) {
      setMedicalCenters(location.state.medicalCenters);
    }

    axios
      .get("https://meddata-backend.onrender.com/states")
      .then((response) => {
        if (response && response.data) {
          setStates(response.data);
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the states!", error);
      });
  }, [location.state, setMedicalCenters]);

  const handleStateChange = (selectedState) => {
    setState(selectedState);
    axios
      .get(`https://meddata-backend.onrender.com/cities/${selectedState}`)
      .then((response) => {
        if (response && response.data) {
          setCities(response.data);
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the cities!", error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!state || !city) {
      alert("Please select both state and city");
      return;
    }

    axios
      .get(
        `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
      )
      .then((response) => {
        if (response && response.data) {
          setMedicalCenters(response.data);
        }
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the medical centers!",
          error
        );
      });
  };

  const BelowNavPotion = () => {
    return (
      <div className={styleBelow.Wrapper}>
        {medicalCenters.map((item) => {
          return <div></div>;
        })}
      </div>
    );
  };

  const MedicalCen = () => {
    // medicalCenters data to fetch: Hospital Name, Hospital Address, City, State, ZIP Code, Hospital overall rating
    


    return (
      <div className={styles.Wrapper}>
        {medicalCenters.length && (
          <div className={styles.Heading}>
            <p className={styles.FirstLine}>
              {medicalCenters.length}{" "}
              {medicalCenters.length > 1 ? "centers" : "center"} available in{" "}
              {medicalCenters[0]["City"]}
            </p>
            <p className={styles.SecondLine}>
              <span style={{ marginRight: "10px" }}>
                <img src={VerifiedSign} />
              </span>
              Book appointments with minimum wait-time & verified doctor details
            </p>
          </div>
        )}
        {medicalCenters.length &&
          medicalCenters.map((item) => (
            <div className={styles.CardWrapper}>
              <div className={styles.CardLeft}>
                <div
                  style={{
                    width: "140px",
                    height: "140px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={CardImage} style={{marginRight:"15px"}} />
                </div>
                <div className={styles.CardLeftContent}>
                  <span className={styles.HosptialName}>{item["Hospital Name"]}</span>
                  <div className={styles.HosptialInfo}>
                    <span>{item["City"]}, </span>
                    <span>{item["State"]}</span>
                    <br />
                    <span>{item["Hospital Type"]}</span>
                  </div>
                  <div className={styles.FreeConsult}>
                    {" "}
                    <span className={styles.Free}>FREE</span>
                    <span>
                      <img src={Rupee} alt="" />
                    </span>
                    <span>
                      <img src={Rs500} alt="" />
                    </span>
                    <span className={styles.ConsultText}>Consultation fee at clinic</span>
                  </div>
                  <div className={styles.Rating}
                    style={{
                      background: "#00A500",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "44.08px",
                      height: "22.5px",
                      color: "#FFFFFF",
                      fontFamily: "Lato",
                      fontSize: "14px",
                      fontWeight: "700",
                      lineHeight: "14px",
                      border: "0",
                      borderRadius: "3.5px",
                    }}
                  >
                    <img src={thumb} alt="" />
                    <span style={{ marginLeft: "5px" }}>
                      {item["Hospital overall rating"]}
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.CardRight}>
                <div className={styles.CardRightContent}>
                  <p className={styles.CardRightText}>Available Today</p>
                  <button className={styles.CardRightButton}>
                    Book FREE Center Visit
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  };

  return (
    <div className={stylesMain.Wrapper}>
      <Header />
      <NavBar bg="#FFFFFF" />
      <BelowNavPotion />
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
      </div>
      <MedicalCen />
      <AccordionComponent />
      <Download />
      <Footer />
    </div>
  );
};

export default DetailsPage1;
