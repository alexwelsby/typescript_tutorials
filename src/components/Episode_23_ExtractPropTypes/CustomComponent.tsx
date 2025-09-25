import React from "react";
import { Greet } from "../Greet";

export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return <div>{props.isLoggedIn}</div>; //just showing that we can extract Greet's props to use here
};
