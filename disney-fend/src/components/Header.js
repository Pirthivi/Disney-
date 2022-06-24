import styled from "styled-components";
import { auth, provider } from "../firebase.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../app/features/users/userSlice";
import { useEffect } from "react";

const Header = (props) => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        // history.push("/home");
      }
    });
    // eslint-disable-next-line
  }, [userName]);

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push("/", { fromDasdboard: false });
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="" />
      </Logo>

      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a href="/home">
              <img src="/images/home-icon.svg" alt="" />
              <span>HOME</span>
            </a>
            <a href="/search">
              <img src="/images/search-icon.svg" alt="" />
              <span>SEARCH</span>
            </a>
            <a href="/watchlist">
              <img src="/images/watchlist-icon.svg" alt="" />
              <span>WATCHLIST</span>
            </a>
            <a href="/originals">
              <img src="/images/original-icon.svg" alt="" />
              <span>ORIGINALS</span>
            </a>
            <a href="/movies">
              <img src="/images/movie-icon.svg" alt="" />
              <span>MOVIES</span>
            </a>
            <a href="/series">
              <img src="/images/series-icon.svg" alt="" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <SignOut>
            <UserImg src={userPhoto} alt={userName} />
            <DropDown>
              <span onClick={handleAuth}>Sign Out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  /* position: fixed; */
  background-color: #090b13;
  height: 80px;
  display: flex;
  top: 0px;

  flex-direction: row;
  width: 100%;
  margin: 0px auto;
  justify-content: space-between;
  align-items: center;
  /* justify-content: center; */
  align-items: center;
  padding: 0 20px;

  z-index: 5;
`;
const Logo = styled.a`
  width: 90px;
  object-fit: contain;
  /* padding: 4px; */
  margin-bottom: 10px;
`;
const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;

  position: relative;
  margin-right: auto;
  margin-left: 25px;

  @media (max-width: 768px) {
    display: none;
  }

  a {
    display: flex;
    padding: 12px;
    align-items: center;
    img {
      width: 22px;
      margin-bottom: 4px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:after {
        border-radius: 0px 0px 4px 4px;
        top: 20px;
        background-color: rgb(0, 249, 249);
        content: "";

        height: 2px;
        left: 0px;

        right: 0px;
        position: absolute;

        transform-origin: left center;
        transform: scaleX(0);
        transition: all 1250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

        width: auto;
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
      }
    }
  }
`;
const Login = styled.a`
  background-color: rgb(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border-radius: 4px;
  border: 1px solid #f9f9f9;
  transition: all 0.2s ease 0s;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  width: 100%;
  border-radius: 50%;
  height: 100%;
`;
const DropDown = styled.div`
  position: absolute;
  top: 48px;

  right: 0;

  background-color: rgb(19, 19, 19);
  border: 1px solid rgb(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  letter-spacing: 3px;
  font-size: 14px;
  width: 101px;
  opacity: 0;
`;
const SignOut = styled.div`
  position: relative;
  width: 48px;
  height: 48px;

  cursor: pointer;
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1.2s;
    }
  }
`;
export default Header;
