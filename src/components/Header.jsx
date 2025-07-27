import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import MobileNavbar from "./MobileNavbar";
import PortalPopup from "./PortalPopup";

// Array for the product links for easier management
const productLinks = [
  { name: "Smart Business Card", path: "/smart-business-card" },
  { name: "Smart Review Stand", path: "/smart-review-stand" },
  { name: "Digital Loyalty Solution", path: "/samparka-loyalty-solution" },
];

const Header = () => {
  const navigate = useNavigate();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLinkClick = useCallback((path) => {
    navigate(path);
  }, [navigate]);

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          {/* Left Side: Logo */}
          <img
            className={styles.logo}
            alt="Samparka Logo"
            src="/letter-logo-1@2x.png"
            onClick={onLogoClick}
          />

          {/* Right Side: Desktop Menu Links */}
          <div className={styles.menuLinks}>
            <button onClick={() => onLinkClick('/')} className={styles.navLink}>
              HOME
            </button>

            {/* Products Dropdown Container */}
            <div 
              className={styles.dropdownContainer}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className={styles.productButton}>
                <span>PRODUCTS</span>
                <svg className={styles.dropdownArrow} width="8" height="8" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L6 6L1 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              {isDropdownOpen && (
                <div className={styles.dropdownMenu}>
                  {productLinks.map((link) => (
                    <a key={link.name} onClick={() => onLinkClick(link.path)} className={styles.dropdownItem}>
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            <button onClick={() => onLinkClick('/blog')} className={styles.navLink}>
              BLOG
            </button>
            <button onClick={() => onLinkClick('/contact-us')} className={styles.navLink}>
              CONTACT US
            </button>
          </div>

          {/* Hamburger Icon for Mobile */}
          <button className={styles.hamburgerIcon} onClick={() => setMobileNavOpen(true)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Popup */}
      {isMobileNavOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.5)"
          placement="Top"
          onOutsideClick={() => setMobileNavOpen(false)}
        >
          <MobileNavbar onClose={() => setMobileNavOpen(false)} />
        </PortalPopup>
      )}
    </>
  );
};

export default Header;
