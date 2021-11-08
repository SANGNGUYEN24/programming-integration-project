import classes from "./MovieDescription.module.scss";
import Image from "next/image";
import FavoriteIcon from "../../public/favorite_icon.svg";
import ShareIcon from "../../public/share_icon.svg";
import ThumbnailImage from "../../public/film_image.jpg";

export default function MovieDescription() {
  return (
    <div className={classes.SectionContainer}>
      <div className={classes.LeftIntro}>
        <div className={classes.Col1}>
          <Image src={ThumbnailImage} />
        </div>
        <div className={classes.Col2}>
          <div className={classes.FilmTitle}>
            <h4>Kẻ Vô Danh</h4>
            <h5>Nobody</h5>
          </div>
          <div className={classes.UserAction}>
            <ul className={classes.ListInline}>
              <li className={classes.FollowBtn}>
                <a>
                  <span>
                    <Image src={FavoriteIcon} width={20} />
                  </span>
                  <p>Theo dõi</p>
                </a>
              </li>
              <li className={classes.ShareBtn}>
                <a>
                  <span>
                    <Image src={ShareIcon} />
                  </span>
                  <p>Chia sẽ</p>
                </a>
              </li>
            </ul>
          </div>
          <div className={classes.FilmDesc}>
            <span>Nội dung</span>
            <p>
              Đôi khi người đàn ông mà bạn không để ý lại là người nguy hiểm
              nhất. Hutch Mansell, một người cha và người chồng bị đánh giá thấp
              và bị coi thường, luôn coi thường sự phẫn nộ của cuộc đời và không
              bao giờ lùi bước. Một kẻ vô danh.
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className={classes.RightIntro}>
        <div className={classes.TableDescription}>
          <table>
            <tbody>
              <tr>
                <td>Thời lượng</td>
                <td>91 phút</td>
              </tr>
              <tr>
                <td>Đạo diễn</td>
                <td>Ilya Naishuller</td>
              </tr>
              <tr>
                <td>Diễn viên</td>
                <td>
                  Bob Odenkirk, Connie Nielsen, Christopher Lloyd, Humberly
                  González, Aleksei Serebryakov
                </td>
              </tr>
              <tr>
                <td>Quốc gia</td>
                <td>Mỹ</td>
              </tr>
              <tr>
                <td>Thể loại</td>
                <td>Hành động, Tội phạm, Tâm lý</td>
              </tr>
              <tr>
                <td>Phát hành</td>
                <td>2021</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
