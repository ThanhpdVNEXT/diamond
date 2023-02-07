import Input from "@/components/forms/Input";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Chat = () => {
  return (
    <div>
      <div className="bubbleWrapper">
        <div className="inlineContainer">
          <div className="otherBubble other">何かおこまりごとでしょうか。</div>
        </div>
        {/* <span className="other">08:41</span> */}
      </div>
      <div className="bubbleWrapper">
        <div className="inlineContainer own">
          <div className="ownBubble own">
            先日、修理いただきましたネックレスについてサイズ調整をお願いしたいのですが
          </div>
        </div>
        {/* <span className="own">08:55</span> */}
      </div>
      <Input
        placeholder="Message here..."
        icon={faArrowUp}
        typeInput="text"
        className="input-chat"
        colorBtn="#5DB075"
        colorIcon="white"
      />
    </div>
  );
};

export default Chat;
