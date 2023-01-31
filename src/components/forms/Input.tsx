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
  icon?: IconDefinition | undefined;
  color?: string | undefined;
  typeBtn?: Button;
  typeInput?: Input;
};

const Input = (type: typeInput) => {
  return (
    <div css={inputImg(type?.color)}>
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
      <button css={iconBox()} type={type.typeBtn || "button"}>
        <FontAwesomeIcon icon={type?.icon || faMagnifyingGlass} />
      </button>
    </div>
  );
};
export default Input;
