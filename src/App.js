
import "./App.css";
import NBACard from "./NBACard";
import ReactPaginate from 'react-paginate';
import React, { useState, useEffect } from 'react';
//importing styling and other js files


const PerPage = 4; //number of elements per page

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const offset = currentPage * PerPage;
  



  const pageCount = Math.ceil(25 / 4);//how many pages we need for this api data
  

  //fetching the api data and switching it to a json
  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://www.balldontlie.io/api/v1/players"); 
        userData = await response.json();
      } catch (error) {
        console.log(error);
        userData = [];
      }
      setAllUsers(userData.data);
      setUsers(userData.data);
    })();
  }, []);



  //the data to be displayed on the certain page
  //calling the NBACard.js to get each card information
  const currentPageData = users
  .slice(offset, offset + PerPage)
  .map((user, index) => (
    <NBACard key={index} userData={user} />
    ))


    //setting the inital layout of the cards to be in grid view
    const [style, setStyle] = useState("card-grid");
  
    //changing the div class to card-grid to switch to grid view
    const changeStyle = () => {
      setStyle("card-grid");
    };

    //changing the div class to card-list to switch to list view
    const changeStyle2 = () => {
      setStyle("card-list");
    };

  
    //the fuctionality of the pagination. When a page is cicked, it will go to that page
    function handlePageClick({selected: selectedPage}){
      console.log("Selected Page", selectedPage);
      setCurrentPage(selectedPage);
    }
      
    //rendering of all information to the page. Including all text, cards, pagination and buttons.
  return (
    <div className="App">
      <h1>NBA Players</h1>
      <button className="button" onClick={changeStyle2}>List View</button> <button className="button" onClick={changeStyle}>Grid View</button> 
    

      <ReactPaginate
      previousLabel={"Previous"}
      nextLabel={"Next"}
      pageCount={pageCount}
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      containerClassName={"pagination"}
      previousLinkClassName={"pagination_link"}
      nextLinkClassName={"pagination_link_disabled"}
      activeClassName={"pagination_link_active"}
    />

  <div className="card-grid">
  <div className={style}>
       {currentPageData}
      </div>
</div>
    </div>
  );
}




export default App;