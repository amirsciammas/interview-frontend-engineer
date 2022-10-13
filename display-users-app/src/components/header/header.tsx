import "./header.css";
import { HeaderType } from "./header.types";
import backArrow from "../../assets/back-arrow.png";

export const Header = (props: HeaderType) => {
  const { isBackEnabled, onGoBack } = props;
  return (
    <div className="Header-Container">
      {isBackEnabled && (
        <div onClick={() => onGoBack()} className="Back-Button">
          <img src={backArrow} alt="Back" className="Back-Icon" />
        </div>
      )}
      <p className="Header-Title">Technical Evaluation App</p>
    </div>
  );
};
