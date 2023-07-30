import { useState, useEffect } from "react";
import { styled } from "styled-components";

const Container = styled.div`

  height: 30px;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
 
`;

const Announcement = () => {
  const [backgroundColor, setBackgroundColor] = useState("#75bcfb");

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate a random hex color
      const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      setBackgroundColor(randomColor);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <Container backgroundColor={backgroundColor}>Super Deal! Free Shipping On Orders Over $50</Container>;
};

export default Announcement;
