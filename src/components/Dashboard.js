import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Link } from "react-router-dom";
import { contextProvider } from "../contextApi/ContextApi";
import "../css/dashboard.css";

const Dashboard = () => {
  const { HandleLogout } = useContext(contextProvider);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name");

  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");
        const params = {
          category: "movies",
          language: "kannada",
          genre: "all",
          sort: "voting",
        };
        const response = await axios.post(
          "https://hoblist.com/api/movieList",
          params
        );
        setApiData(response.data.result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const itemsPerPage = 2;
  // Calculate the range of items to display based on the currentPage and itemsPerPage
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleCards = apiData?.slice(startIndex, endIndex) || [];

  const handleNextClick = () => {
    if (currentPage < Math.ceil(apiData.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className="main-div">
        <div className="navbar">
          <div className="navbar_logotext">
            <img src="./images/favicon.jpg" alt="logo" />
            <p>GEEKSYNERGY</p>
          </div>

          <div className="navbar_menu">
            <a href="#">HOME</a>
            <a href="#">SERVICES</a>
            <a href="#">CAREER</a>
            <a href="#">ABOUT US</a>
            <div className="company_info">
              <a href="#">COMPANY INFO</a>

              <div className="popup">
                <div className="popup_style">
                  <p>
                    Company: <span>Geeksynergy Technologies Pvt Ltd</span>
                  </p>
                  <p>
                    Address: <span>Sanjayanagar, Bengaluru-56</span>
                  </p>
                  <p>
                    Phone: <span>9340418702</span>
                  </p>
                  <p>
                    Email: <span>sonu952383@gmail.com</span>
                  </p>
                </div>
              </div>
            </div>

            <button onClick={HandleLogout}>
              <Link to="/logout">LOGOUT</Link>
            </button>
          </div>
        </div>
        <div className="usernameshow">
          <h4>Welcome to the Dashboard, {name}!</h4>
        </div>
        <div>
          {loading && <div className="loader-container">
            <div className="spinner"></div>
          </div>}
          {error && <div>Error: {error.message}</div>}
        </div>
        <div className="container_sec">
          <div className="cardsec">
            {visibleCards?.map((movie, index) => {
              const {
                title,
                genre,
                voting,
                pageViews,
                poster,
                stars,
                director,
                language,
              } = movie;

              return (
                <div className="carditems" key={index}>
                  <div className="cartitems_flex">
                    <div className="carditems_left">
                      {/* <i class="fa-solid fa-sort-down"></i> */}
                      <span>
                        <ArrowDropUpIcon />
                      </span>
                      <p>1</p>
                      <span>
                        <ArrowDropDownIcon />
                      </span>
                      <p>Votes</p>
                    </div>
                    <div className="carditems_image">
                      <img src={poster} />
                    </div>
                    <div className="carditems_right">
                      <p>{title}</p>
                      <p className="carditems_right_midtext">
                        <span>Genre:{genre}</span>
                      </p>
                      <p className="carditems_right_midtext">
                        <span>Director:{director}</span>
                      </p>
                      <p className="carditems_right_midtext">
                        <span>Starring:{stars}</span>
                      </p>
                      <p className="carditems_right_midtext">
                        <span>Mins</span>
                        <span>|</span>
                        <span>{language}</span>
                        <span>|</span>
                        <span>1 Apr</span>
                      </p>
                      <p className="carditems_right_downtext">
                        <span>{pageViews} views</span>
                        <span>|</span>
                        <span>Voted by {voting} People</span>
                        <span>|</span>
                        <span>1 Apr</span>
                      </p>
                    </div>
                  </div>
                  <div className="buttonclass">
                    <button>Watch Trailer</button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="pagination-buttons">
            <button onClick={handlePreviousClick} disabled={currentPage === 1}>
              Previous
            </button>
            <button
              onClick={handleNextClick}
              disabled={
                apiData === null ||
                currentPage === Math.ceil((apiData.length || 0) / itemsPerPage)
              }
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
