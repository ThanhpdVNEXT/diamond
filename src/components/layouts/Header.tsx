import { back, header, next } from "@/styles/layouts/Header";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Header = {
    title?: any;
};

const Header = (props: Header) => {
  return (
    <div css={header}>
        <FontAwesomeIcon icon={faAngleLeft} css={back}/>
        <p>
          {props.title}
        </p>
        <button css={next}>未読</button>
    </div>
  );
};

export default Header;
