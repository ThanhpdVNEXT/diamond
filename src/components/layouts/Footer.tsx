import Link from "next/link";
import * as styles from "@/styles/layouts/Footer";
import { useRouter } from "next/router";
export const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about/[slug]",
    query: {
      slug: "my-post",
    },
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Blog",
    path: "/blog",
  },
];
const Footer = () => {
  const router = useRouter();
  return (
    <div css={styles.navbar}>
      {navLinks.map((menuItem, index) => (
        <div css={styles.active(router.pathname == menuItem.path)} key={index}>
          <Link
            href={{
              pathname: menuItem.path,
              query: menuItem?.query,
            }}
            legacyBehavior
          >
            {menuItem.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Footer;
