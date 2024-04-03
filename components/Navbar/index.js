import Image from "next/image";
import {useState, useEffect, useRef} from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import {
  Hamburger,
  Logo,
  MainNav,
  NavItem,
  SubNav,
  SubNavItem,
  TableHeader,
} from "../StyledComponents";
import {useFeedNavItems} from "../FeedavContext";
import {Box, BoxNav, BoxSwim, WrapperN, WrapperR} from "../boxes";
import {set} from "mongoose";

export const Navbar = () => {
  const [activeCats, setActiveCats] = useState([]);
  const [displayNav, setDisplayNav] = useState(false);
  const [showCreateProfileSubmenu, setShowCreateProfileSubmenu] =
    useState(false);
  const [showListsSubmenu, setShowListsSubmenu] = useState(false);
  const navRef = useRef();
  const router = useRouter();
  useEffect(() => {
    const fetchActiveCats = async () => {
      const res = await fetch("/api/cats?active=true");
      const data = await res.json();
      setActiveCats(data.data);
    };

    fetchActiveCats();
  }, []);

  const navigateToCat = (catId) => {
    router.push(`/cats/${catId}`);
  };

  const toggleNavBar = () => setDisplayNav(!displayNav);

  function toggleCreateProfileSubmenu() {
    setShowCreateProfileSubmenu(!showCreateProfileSubmenu);
    setShowListsSubmenu(false);
  }

  function toggleListsSubmenu() {
    setShowListsSubmenu(!showListsSubmenu);
    setShowCreateProfileSubmenu(false);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setDisplayNav(false);
        setShowCreateProfileSubmenu(false);
        setShowListsSubmenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = (path) => {
    setDisplayNav(false);
    router.push(path);
  };

  return (
    <>
      <WrapperN ref={navRef}>
        <Logo>
          <Image src="/1.svg" alt="logo" width={130} height={130} priority />
        </Logo>
        <Image
          src="/2.png"
          alt="Hero Image"
          fill={true}
          objectFit="cover"
          priority={true}
        />
        <BoxSwim>
          <Hamburger onClick={toggleNavBar}>
            <Image
              src="/hamburger.svg"
              alt="hamburger"
              width={30}
              height={30}
            />
          </Hamburger>
        </BoxSwim>

        {displayNav && (
          <MainNav>
            <NavItem onClick={handleLinkClick}>
              <Link href="/">
                <h5>Home</h5>
              </Link>
            </NavItem>
            <NavItem onClick={() => setShowListsSubmenu(!showListsSubmenu)}>
              <h5>Active Cats</h5>
              {showListsSubmenu && (
                <SubNav>
                  {activeCats.map((cat) => (
                    <SubNavItem
                      key={cat._id}
                      onClick={() => navigateToCat(cat._id)}>
                      {cat.name}
                    </SubNavItem>
                  ))}
                </SubNav>
              )}
            </NavItem>
            <NavItem onClick={toggleCreateProfileSubmenu}>
              <h5>Create Profile</h5>

              {showCreateProfileSubmenu && (
                <SubNav>
                  <SubNavItem>
                    <Link href="/create-profile/cat" onClick={handleLinkClick}>
                      <h5>Cat</h5>
                    </Link>
                  </SubNavItem>
                  <SubNavItem>
                    <Link
                      href="/create-profile/owner"
                      onClick={handleLinkClick}>
                      <h5>Owner</h5>
                    </Link>
                  </SubNavItem>
                </SubNav>
              )}
            </NavItem>
            <NavItem onClick={toggleListsSubmenu}>
              <h5>Lists</h5>
              {showListsSubmenu && (
                <SubNav>
                  <SubNavItem>
                    <Link href="/lists/cats" onClick={handleLinkClick}>
                      <h5>Cats</h5>
                    </Link>
                  </SubNavItem>
                </SubNav>
              )}
            </NavItem>
          </MainNav>
        )}
      </WrapperN>
    </>
  );
};
