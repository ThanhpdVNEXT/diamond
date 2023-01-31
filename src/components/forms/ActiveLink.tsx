import Link from "next/link";
import { useRouter } from "next/router";

type ModelLink = {
  children: React.ReactNode;
  href: string;
  query: string;
};

function ActiveLink({ children, href, query }: ModelLink) {
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: router.asPath === href ? "red" : "black",
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Link
      href={{
        pathname: href,
        query: query,
      }}
      onClick={handleClick}
      style={style}
      legacyBehavior
    >
      {children}
    </Link>
  );
}

export default ActiveLink;
