import React from "react";
import "./contentWrapper.scss";
import { ContentWrapperProps } from "./contentWrapper.types";

export const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => {
  return <div className="contentWrapper">{children}</div>;
};
