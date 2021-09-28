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

function Header() {
  return (
    <header className={styled.header}>
      <div className={styled.headerwrap}>
        <HeaderItems title="HOME" Icon={HomeIcon} />
        <HeaderItems title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItems title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItems title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItems title="SEARCH" Icon={SearchIcon} />
        <HeaderItems title="USER" Icon={UserIcon} />
      </div>

      <Image
        src="https://links.papareact.com/ua6"
        width="200"
        height="100"
        className={styled.headerlogo}
        alt={`#`}
      />
    </header>
  );
}

export default Header;
