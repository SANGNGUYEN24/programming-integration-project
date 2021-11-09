import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import HeaderItems from "./HeaderItems";
import styled from "../styles/header.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/pip-logo.png";

function Header() {
  return (
    <header className={styled.header}>
      <div className={styled.headerwrap}>
        <Link href="/">
          <a>
            <HeaderItems title="HOME" Icon={HomeIcon} />
          </a>
        </Link>
        <HeaderItems title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItems title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItems title="TRENDING" Icon={LightningBoltIcon} />
        <Link href="/search">
          <a>
            <HeaderItems title="SEARCH" Icon={SearchIcon} />
          </a>
        </Link>
        <HeaderItems title="USER" Icon={UserIcon} />
      </div>

      <Image
        src={logo}
        width="200"
        height="100"
        className={styled.headerlogo}
        alt={`#`}
      />
    </header>
  );
}

export default Header;
