"use client";

import { useEffect } from "react";
import ScrollBar from "smooth-scrollbar";
import OverScrollPlugin from "smooth-scrollbar/plugins/overscroll";

const overscrollOptions = {
  enable: true,
  effect: "bounce",
  damping: 0.15,
  maxOverscroll: 150,
};

const options = {
  damping: 0.07,
  plugins: {
    overscroll: { ...overscrollOptions },
  },
};

const Scroll = ({ children }) => {
  useEffect(() => {
    ScrollBar.use(OverScrollPlugin);
    const bodyScroll = ScrollBar.init(document.body, options);
    console.log("SmoothScroll initialized on body:", bodyScroll);

    return () => {
      if (bodyScroll) bodyScroll.destroy();
      console.log("SmoothScroll destroyed");
    };
  }, []);

  return <>{children}</>;
};

export default Scroll;
