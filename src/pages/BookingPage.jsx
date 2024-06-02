import style from "./BookingPageCSS/BookingPage.module.css";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import Download from "../components/common/Download";
import styleBelow from "./DetailsPage1CSS/StyleBelow.module.css";
import Srch from "../assests/Search.png";
import Hosptial from "../assests/CardImage.png";
import Thumb from "../assests/thumbsup.png";

export default function BookingPage() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
 


  const getBookingData = () => {
    setTimeout(() => {
      const response = JSON.parse(localStorage.getItem("bookings"));
      if (response) {
        setData(response);
      }
    }, 500);
  };

  useEffect(() => {
    getBookingData();
  }, []);


  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearch(search);
  };

  const filteredData = data.filter((item) =>
    item.hostialfulldata["Hospital Name"]
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const BelowNavPotion = () => {
    return (
      <div className={styleBelow.Wrapper}>
        <p className={styleBelow.text}>My Bookings</p>
      </div>
    );
  };

  const SearchFORMM = () => {
    return (
      <div className={style.SearchFORMWrapper}>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            name="search"
            placeholder="Search By Hospital"
            className={style.Input}
            value={search}
            onChange={(e) => {  e.persist();
              setSearch(e.target.value);}}
          />
          <button className={style.Button}>
            <span>
              <img src={Srch} />
            </span>
            <span className={style.ButtonText}>Search</span>
          </button>
        </form>
      </div>
    );
  };

  const HospitalCard = () => {
    return (
      <>
        {data.length > 0 ? (
          <>
            
            {filteredData.map((item,index) => (
              <div className={style.CardWrapper} key={index}>
                <div className={style.CardLeft}>
                  <div className={style.CardLeftImage}>
                    <img src={Hosptial} />
                  </div>
                  <div className={style.CardLeftContent}>
                    <span className={style.HosptialName}>
                      {item.hostialfulldata["Hospital Name"]}
                    </span>
                    <div className={style.HosptialInfo}>
                      <span>{item.hostialfulldata["City"]}, </span>
                      <span>{item.hostialfulldata["State"]}</span>
                      <br />
                      <span
                        style={{
                          fontFamily: "Poppins",
                          fontSize: "14px",
                          fontweight: "400",
                          lineHeight: "19.6px",
                          textAlign: "left",
                          color:"#414146"
                        }}
                      >
                        {item.hostialfulldata["Hospital Type"]}
                      </span>
                    </div>
                    <div
                      className={style.Rating}
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
                      <img src={Thumb} alt="" />
                      <span style={{ marginLeft: "5px" }}>
                        {item.hostialfulldata["Hospital overall rating"]}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={style.CardRight}>
                  <span className={style.Slot}>{item["slot"]}</span>
                  <span className={style.Time}>{item["date"]}</span>
                </div>
              </div>
            ))}
            )
          </>
        ) : (
          <div className={style.NoBooking}>
            {" "}
            <p className={style.NoBookingText}>
              There are no bookings done yet. Kindly Search for your nearest
              Medical Centers and make the booking.
            </p>{" "}
          </div>
        )}
      </>
    );
  };

  return (
    <div className={style.Wrapper}>
      <Header />
      <NavBar bg="#FFFFFF" />
      <BelowNavPotion />
      <SearchFORMM />
      <HospitalCard />
      <Footer />
    </div>
  );
}
