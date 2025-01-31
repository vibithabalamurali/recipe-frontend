import React from "react";  
import { Link } from "react-router-dom";  
import { motion } from "framer-motion";  

const IntroPage = () => {  
  return (  
    <motion.div  
      className="intro-container"  
      style={{  
        backgroundImage: "url('/images/spices-background.jpg')", // Make sure to update this path to your chosen background image  
        backgroundSize: "cover",  
        backgroundRepeat: "no-repeat",  
        backgroundPosition: "center",  
        height: "100vh",  
        width: "100vw",  
        display: "flex",  
        flexDirection: "column",  
        justifyContent: "center",  
        alignItems: "center",  
        position: "relative",  
        color: "#ffffff",  
      }}  
      initial={{ opacity: 0 }}  
      animate={{ opacity: 1 }}  
      transition={{ duration: 0.8 }}  
    >  
      <motion.h1  
        className="intro-title"  
        initial={{ y: -50, opacity: 0 }}  
        animate={{ y: 0, opacity: 1 }}  
        transition={{ duration: 0.8 }}  
        style={{  
          fontSize: "3.5rem",  
          fontWeight: "bold",  
          textAlign: "center",  
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",  
          margin: "0",  
        }}  
      >  
        COOKSPHERE  
      </motion.h1>  
      <motion.p  
        className="intro-subtitle"  
        initial={{ y: 50, opacity: 0 }}  
        animate={{ y: 0, opacity: 1 }}  
        transition={{ duration: 1 }}  
        style={{  
          fontSize: "1.5rem",  
          textAlign: "center",  
          marginBottom: "2rem",  
          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)",  
        }}  
      >  
        Be the chef!!  
      </motion.p>  
      <div className="intro-buttons" style={{ textAlign: "center" }}>  
        <motion.div  
          initial={{ scale: 0.8, opacity: 0 }}  
          animate={{ scale: 1, opacity: 1 }}  
          transition={{ duration: 0.5, delay: 0.2 }}  
        >  
          <Link  
            to="/register"  
            className="btn"  
            style={{  
              padding: "1rem 2rem",  
              backgroundColor: "#6c5ce7",  
              color: "#fff",  
              textDecoration: "none",  
              borderRadius: "8px",  
              fontSize: "1rem",  
              fontWeight: "bold",  
              boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",  
              transition: "all 0.3s ease",  
            }}  
            onMouseOver={(e) => {  
              e.currentTarget.style.backgroundColor = "#5a4ea3";  
            }}  
            onMouseOut={(e) => {  
              e.currentTarget.style.backgroundColor = "#6c5ce7";  
            }}  
          >  
            Let's Get Started  
          </Link>  
        </motion.div>  
      </div>  
    </motion.div>  
  );  
};  

export default IntroPage;