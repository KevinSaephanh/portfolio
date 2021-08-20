import React from "react";
import { useTransition, animated } from "react-spring";
import "./Home.scss";

const items = [
  { text: "Hello, I'm Kevin Saephanh", y: 100, delay: 400 },
  { text: "A Full Stack Developer", y: 120, delay: 800 },
  { text: "I build web applications for a living", y: 140, delay: 1200 },
];

const Home = () => {
  const transition = useTransition(items, {
    from: { y: 500, opacity: 0 },
    enter: (item) => async (next) => {
      await next({ y: item.y, opacity: 1, delay: item.delay });
    },
    leave: {},
  });

  return (
    <div className="home content">
      {transition((style, item) =>
        item ? (
          <animated.div style={style} className="title-wrapper">
            <h1>{item.text}</h1>
          </animated.div>
        ) : null
      )}
    </div>
  );
};

export default Home;
