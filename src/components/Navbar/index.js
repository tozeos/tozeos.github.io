import {Bars, Logo, MenuLink} from "./Navbar.styles";
import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/Link";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {colors} from "../variables";
import styled from "styled-components";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Nav>
            <Logo id="inicio">
                <span>tozeos</span>.dev.br
            </Logo>
            <Bars onClick={() => setIsOpen(!isOpen)}>
                <FontAwesomeIcon icon={faBars}/>
            </Bars>
            <Menu isOpen={isOpen}>
                <Link href="#" passHref>
                    <MenuLink>Início</MenuLink>
                </Link>
                <Link href="#quem-sou-eu" passHref>
                    <MenuLink>Sobre</MenuLink>
                </Link>
                <Link href="#projetos" passHref>
                    <MenuLink>Projetos</MenuLink>
                </Link>
                <Link href="#contato" passHref>
                    <MenuLink>Contato</MenuLink>
                </Link>
            </Menu>
        </Nav>
    );
};

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: ${colors.black2};
  top: 0;
  left: 0;
  right: 0;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({isOpen}) => (isOpen ? "600px" : "0")};
    transition: max-height 0.3s ease-in;
  }
`;