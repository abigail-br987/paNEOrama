import { HTMLProps } from "react";

export interface Props extends HTMLProps<HTMLAnchorElement> {}

const ExternalLink = (props: Props) => (
  <a target="_blank" rel="noopener noreferrer" {...props} />
);

export default ExternalLink;
