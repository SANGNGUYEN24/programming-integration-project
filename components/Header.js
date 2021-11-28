// import HeaderItems from "./HeaderItems";
import styled from "../styles/header.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/pip-logo.png";
import { useState, useContext } from "react";
import { signOut, getAuth } from "firebase/auth";
import UserContext from "../pages/UserContext.js";

function Header() {
  const { userName } = useContext(UserContext);

  const auth = getAuth();
  return (
    <div>
      <nav className={styled.headerSmallscreen}>
        <div className={styled.burger}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
            />
          </svg>
        </div>
        <div className={styled.headerBrand}>
          <Link href="/">
            <a className={styled.brand}>
              <img src="/pip-logo.png" />
            </a>
          </Link>
        </div>
        <div className={styled.headerWrap}>
          <div className={styled.headerTitle}>
            <Link href="">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <span>Tìm Kiếm</span>
              </a>
            </Link>
          </div>
        </div>
      </nav>
      <nav className={styled.header}>
        <div className={styled.headerBrand}>
          <Link href="/">
            <a className={styled.brand}>
              <img src="/pip-logo.png" />
            </a>
          </Link>
        </div>
        <div className={styled.headerWrap}>
          <div className={styled.wrapStart}>
            <div className={styled.headerTitle}>
              <Link href="/search">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <span>Tìm Kiếm</span>
                </a>
              </Link>
            </div>

            <div className={styled.headerTitle}>
              <Link href="">
                <a>
                  <span>Phim Hot</span>
                </a>
              </Link>
            </div>

            <div className={styled.headerTitle}>
              <Link href="">
                <a>
                  <span>Phim Lẻ</span>
                </a>
              </Link>
            </div>

            <div className={styled.headerTitle}>
              <Link href="">
                <a>
                  <span>Phim Bộ</span>
                </a>
              </Link>
            </div>

            <div className={styled.headerTitle}>
              <Link href="">
                <a>
                  <span>Phim Mới</span>
                </a>
              </Link>
            </div>
          </div>

          <div className={styled.wrapEnd}>
            {<div className={styled.username}>{userName}</div>}
            <div className={styled.endButton}>
              {userName == null && (
                <Link href="/login">
                  <a className={styled.signButton}>Sign in</a>
                </Link>
              )}
              {userName != null && (
                <button
                  className={styled.signoutButton}
                  // type="button"
                  onClick={() => {
                    signOut(auth);
                    localStorage.clear();
                  }}
                >
                  <a href="/" className={styled.signButton}>
                    Sign out
                  </a>
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
