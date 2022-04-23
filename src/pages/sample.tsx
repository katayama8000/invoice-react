import { NextPage } from "next";
import { useRecoilState } from "recoil";
import { buttonColorState } from "@component/atoms";

const changeButtonColor = () => {
  return "red";
};

const Sample: NextPage = () => {
  const [buttonColor, setButtonColor] = useRecoilState(buttonColorState);
  return (
    <>
      <p>{buttonColor}</p>
      <button onClick={() => setButtonColor(changeButtonColor)}>
        turn red
      </button>
    </>
  );
};

export default Sample;
