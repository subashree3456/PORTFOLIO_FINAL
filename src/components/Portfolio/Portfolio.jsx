import React, { useContext } from "react";
//import "./Portfolio.css";
import "./style.css";

import img1 from "./Images/Blog.JPG";
import img2 from "./Images/Book.JPG";
import img3 from "./Images/MernAuth.JPG";
import img4 from "./Images/Design.JPG";
import { themeContext } from "../../Context";

const Portfolio = (data) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  console.log(data);

  const portfolioData = [
    {
        "name": "Bookstore-App",
        "poster": img1,
        "summary": "Created and implemented a basic application with MERN Stack, that is Book Store Application with CRUD Functionality. Frontend Technologies - HTML , CSS, React , DB - MongoDB , Backend - Node.js",
        "Github FE": "https://github.com/subashree3456/book-store",
        "Github BE": "https://github.com/subashree3456/BOOK_APP_BACKEND-",
        "Deployed Link": "https://book-app-backend-om4l.onrender.com/",


    },
    {
        "name": "MernAuth-App",
        "poster": img2,
        "summary": "Created an Advanced application with MERN Stack, that is USER AUTHENTICATION AND AUTHORIZATION Project With Login And Signup Application In MERN Stack . Frontend - React , Backend - Node.js",
        "Github FE": "https://github.com/subashree3456/New_Auth_Frontend",
        "Github BE": "https://github.com/subashree3456/New_Auth_Backend",
        "Deployed Link": "https://new-auth-frontend.onrender.com/",
    },
    {
        "name": "Blog-App",
        "poster": img3,
        "summary": "The MERN stack blog app allows users to create, read, update, and delete blog posts, as well as register and log in to the application. It's fast, responsive for developers building modern full-stack web applications.",
        "Github FE": "https://github.com/subashree3456/BLOG_FRONTEND",
        "Github BE": "https://github.com/subashree3456/BLOG_BACKEND",
        "Deployed Link": "https://65d9bb761d9815e175d89c97--rad-marshmallow-da9421.netlify.app/",
    },
    {
        "name": "Design-App",
        "poster": img4,
        "summary": "Created and implemented Login & Register website for users with full CRUD Functionalities with responive web design . Here users can login with their username and password  and if it is new user they can also register ",
        "Github FE": "https://github.com/subashree3456/DESIGN_FRONTEND",
        "Github BE": "https://github.com/subashree3456/DESIGN_BACKEND",
        "Deployed Link": "https://astounding-raindrop-b7658a.netlify.app/",
    },

]

const Frontend = (e) =>{
window.open(e, "_blank")
}

const Backend = (e) =>{
  window.open(e, "_blank")
  }

  const DeployedLink = (e) =>{
    window.open(e, "_blank")
    }


  return (
    <div className="portfolio" id="portfolio">
    <div className="movie-list">
    {
      (portfolioData).map((movie)=>{

       

          return(
              <>
              <div className="movie-container">                    
                   <img src={movie.poster} alt="" className="movie-poster"/> 

               <div className="movie-specs">
                <h3 className="movie-name"> {movie.name}</h3>                  
             
                </div>     

             <p className="movie-summary">{movie.summary}</p>
              <div style={{display:"flex" , marginTop:"20px" , gap: "10px" }}>
              <button onClick={()=>Frontend(movie["Github FE"])} style={{padding: "10px 20px" , borderRadius : "5px"}}>Frontend</button>
            <button onClick={()=>Backend(movie["Github BE"])} style={{padding: "10px 20px" , borderRadius : "5px"}}>Backend</button>
              <button onClick={()=>DeployedLink(movie["Deployed Link"])} style={{padding: "10px 20px" , borderRadius : "5px"}}>Deployed Link</button>
              </div>
             </div>

              </>
          )
      })
    }
  </div>

</div>


  );
};

export default Portfolio;
