import React from "react";
import st from "./Footer.module.scss";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={st.SectionWrapper}>
      <Image
        layout="fill"
        className={st.bgimg}
        src="/footer_background.jpg"
        alt={`#`}
      />
      <div className={st.content}>
        How is Phim Phim's online high quality movie different from other movie
        sites?
        <ul>
          <li className={st.li}>
            As a blurliy (reencoded) movie, the lowest resolution is Full HD
            (1080p), while most other movies only have up to HD resolution
            (720p) which is the highest.
          </li>
          <li className={st.li}>
            High quality, the amount of data per second (bitrate) is 5-10 times
            higher than regular online movies - this is the deciding factor for
            the sharpness of the movie (even more important than the resolution)
          </li>
          <li className={st.li}>
            5.1 sound (6 channels) instead of stereo (2 channels) like other
            movie sites (including Youtube)
          </li>
          <li className={st.li}>
            Suitable for viewing on high-resolution TV, computer, and laptop
            screens
          </li>
        </ul>
      </div>
    </div>
  );
}
