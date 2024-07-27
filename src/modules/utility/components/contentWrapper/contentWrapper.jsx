import React from "react";
import "./contentWrapper.scss";
import { ContentWrapperProps } from "./contentWrapper.types";

export const ContentWrapper = ({ children }) => {
  return <div className="contentWrapper">{children}</div>;
};
