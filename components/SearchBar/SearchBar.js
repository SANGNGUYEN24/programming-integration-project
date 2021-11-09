import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function toSlug(str) {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str
    .normalize("NFD") // chuyển chuỗi sang unicode tổ hợp
    .replace(/[\u0300-\u036f]/g, ""); // xóa các ký tự dấu sau khi tách tổ hợp

  // Thay ký tự đĐ
  str = str.replace(/[đĐ]/g, "d");

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, "");

  // Xóa ký tự - liên tiếp
  str = str.replace(/-+/g, "-");

  // xóa phần dư - ở đầu & cuối
  str = str.replace(/^-+|-+$/g, "");

  // return
  return str;
}

const Search = ({ results }) => {
  const [Search, setSearch] = useState("");
  const BASE_URL = "https://image.tmdb.org/t/p/original";

  return (
    <div className={styles.SearchWrapper}>
      <div className={styles.Container}>
        <input
          type="text"
          className={styles.SearchBar}
          placeholder="Nhập tên phim..."
          onChange={(e) => {
            setSearch(toSlug(e.target.value));
          }}
        />
        <br />
        <br />
        <div className={styles.CardWrapper}>
          {results.map((result, index) => {
            if (Search == "") return null;
            if (toSlug(result.title).includes(Search))
              return (
                <Link href="/details">
                  <div className={styles.Card} key={index}>
                    <div className={styles.Image}>
                      <Image
                        src={`${BASE_URL}${result.poster_path}`}
                        width={216}
                        height={324}
                      />
                    </div>
                    <div className={styles.CardBody}>
                      <h3 className={styles.name}>
                        {result.title || result.original_title}
                      </h3>
                      <h3 className={styles.desc}>
                        {result.overview ||
                          result.title ||
                          result.original_title}
                      </h3>
                    </div>
                  </div>
                </Link>
              );
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;
