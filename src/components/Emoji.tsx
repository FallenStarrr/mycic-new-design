import { PropertySafetyFilled } from "@ant-design/icons";
import React, { FC } from "react";

interface IEmoji {
  emoji: string;
}

const Emoji: FC<IEmoji> = (props) => {
  return <span style={{ fontSize: "40px" }}>{props.emoji}</span>;
};

export default Emoji;
