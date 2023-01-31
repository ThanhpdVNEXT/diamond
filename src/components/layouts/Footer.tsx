import Link from "next/link";
import * as styles from "@/styles/layouts/Footer";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navLinks } from "@/common/path-route";
const Footer = () => {
  const router = useRouter();
  
  return (
    <div css={styles.navbar}>
      {navLinks.map((menuItem, index) => (
        <div css={styles.active(router.pathname == menuItem.path ? true : false)} key={index}>
          <Link
            css={styles.linkMenu}
            href={{
              pathname: menuItem.path,
              query: menuItem?.query,
            }}
            as={menuItem.as}
          >
            {typeof menuItem.icon === "string" ? (
              <img src={menuItem.icon} height="25px"/>
            ) : (
              <FontAwesomeIcon icon={menuItem.icon} height="25px"/>
            )}
            <hr className="link-hr"/>
            <p className="link-name">
              {menuItem.name}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Footer;
