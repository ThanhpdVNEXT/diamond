import {
  inputBox,
  inputImg,
  outlineBox,
  iconBox,
} from "@/styles/layouts/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Input, Value } from "@/common/model/input";

type typeInput = {
  value?: Value;
  placeholder?: string;
  icon?: IconDefinition;
  color?: string;
  typeBtn?: Button;
  typeInput?: Input;
  className?: string;
  colorBtn?: string;
  colorIcon?: string;
};

const Input = (type: typeInput) => {
  return (
    <div css={inputImg(type?.color)} className={type?.className}>
      {type?.typeInput == "textarea" ? (
        <textarea
          css={inputBox}
          value={type?.value}
          placeholder={type?.placeholder}
        ></textarea>
      ) : (
        <input
          type="search"
          css={inputBox}
          value={type?.value}
          placeholder={type?.placeholder}
        />
      )}
      <span css={outlineBox}></span>
      <button css={iconBox(type?.colorBtn)} type={type.typeBtn || "button"}>
        <FontAwesomeIcon icon={type?.icon || faMagnifyingGlass} color={type?.colorIcon} />
      </button>
    </div>
  );
};
export default Input;
