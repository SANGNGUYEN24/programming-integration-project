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
        Phim chất lượng cao online của XemPhim khác gì so với các trang phim
        khác?
        <ul>
          <li className={st.li}>
            Là phim blurliy (reencoded), có độ phân giải thấp nhất là Full HD
            (1080p), trong khi hầu hết các trling phim khác chỉ có tới độ phân
            giải HD (720p) là cao nhất
          </li>
          <li className={st.li}>
            Chất lượng cao, lượng dữ liệu trên giây (bitrate) gấp từ 5 - 10 lần
            phim online thông thường - đây là yếu tố quyết định độ nét của phim
            (thậm chí còn quan trọng hơn độ phân giải)
          </li>
          <li className={st.li}>
            Âm thanh 5.1 (6 channel) thay vì stereo (2 channel) như các trang
            phim khác (kể cả Youtube)
          </li>
          <li className={st.li}>
            Phù hợp để xem trên màn hình TV, máy tính, laptop có độ phân giải
            cao
          </li>
        </ul>
      </div>
    </div>
  );
}
