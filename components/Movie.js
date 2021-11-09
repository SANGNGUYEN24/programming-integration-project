import styles from "../styles/movie.module.css";
import Image from "next/image";
import Link from "next/link";

function Moive() {
  return (
    <div className={styles.container}>
      <img className={styles.bgimg} src="/bgimg.jpg" />
      <div className={styles.detail}>
        {/* phan poster */}
        <div className={styles.poster}>
          <img className={styles.img} src="/poster.jpg" />
          <Link href="/details/movie">
            <a style={{ textDecoration: "none" }}>
              <button className={styles.btn}>Xem phim ngay</button>
            </a>
          </Link>
        </div>
        {/* phan information */}
        <div className={styles.info}>
          <h1>Harry Potter 3: Harry Potter and the Prisoner of Azkaban </h1>
          <h2>Harry Potter và Tên Tù Nhân Ngục Azkaban</h2>
          <h3>2 tiếng 30 phút</h3>
          <div className={styles.cate}>
            <div className={styles.tag}>
              <p className="content">Phiêu Lưu</p>
            </div>
            <div className={styles.tag}>
              <p className="content">Kỳ thú</p>
            </div>
          </div>
          <div className={styles.origin}>
            <p className={styles.originName}>
              Đạo Diễn: <span></span>
            </p>
            <p className={styles.originName}>
              Quốc Gia: <span></span>
            </p>
            <p className={styles.originName}>
              Khởi Chiếu <span></span>
            </p>
          </div>
          <div className={styles.descript}>
            <span>Harry Potter</span> may mắn sống sót đến tuổi 13, sau nhiều
            cuộc tấn công của Chúa tể hắc ám. Nhưng hy vọng có một học kỳ yên ổn
            với Quidditch của cậu đã tiêu tan thành mây khói khi một kẻ điên
            cuồng giết người hàng loạt vừa thoát khỏi nhà tù Azkaban, với sự
            lùng sục của những cai tù là giám ngục. Dường như trường Hogwarts là
            nơi an toàn nhất cho Harry lúc này. Nhưng có phải là sự trùng hợp
            khi cậu luôn cảm giác có ai đang quan sát mình từ bóng đêm, và những
            điềm báo của giáo sư Trelawney liệu có chính xác?
          </div>
          {/* List actor */}
          <div className={styles.section}>
            <p className={styles.sectionTitle}>Diễn Viên</p>
            <div className={styles.list}>
              <div className={styles.content}>
                <img
                  className={styles.actorImg}
                  src="https://dummyimage.com/400x400"
                />
                <p className={styles.actorName}> Daniel Radcliffe</p>
                <p className={styles.subName}> Harry Potter </p>
              </div>
              <div className={styles.content}>
                <img
                  className={styles.actorImg}
                  src="https://dummyimage.com/400x400"
                />
                <p className={styles.actorName}> Emma Waston </p>
                <p className={styles.subName}> Hemonie Granger</p>
              </div>
              <div className={styles.content}>
                <img
                  className={styles.actorImg}
                  src="https://dummyimage.com/400x400"
                />
                <p className={styles.actorName}> Emma Waston </p>
                <p className={styles.subName}> Hemonie Granger</p>
              </div>
            </div>
          </div>

          {/* List Movie */}

          <div className={styles.section}>
            <p className={styles.sectionTitle}>Phim tương tự</p>
            <div className={styles.list}>
              <div className={styles.content}>
                <img
                  className={styles.movieImg}
                  src="https://dummyimage.com/400x400"
                />
                <p className={styles.MoiveName}> HP Chap1</p>
                <p className={styles.subName}> 2018 </p>
              </div>
              <div className={styles.content}>
                <img
                  className={styles.movieImg}
                  src="https://dummyimage.com/400x400"
                />
                <p className={styles.MoiveName}> HP Chap1</p>
                <p className={styles.subName}> 2018 </p>
              </div>
              <div className={styles.content}>
                <img
                  className={styles.movieImg}
                  src="https://dummyimage.com/400x400"
                />
                <p className={styles.MoiveName}> HP Chap1</p>
                <p className={styles.subName}> 2018 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Moive;
