import Input from "@/components/forms/Input";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Page = () => {
  return (
    <div>
      <Input
        placeholder="Login"
        color="green"
        icon={faCheck}
        typeInput="text"
      />
    </div>
  );
};

export default Page;
