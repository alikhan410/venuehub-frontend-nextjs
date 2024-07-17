import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type LoginResponse = {
  username: string;
  jwt: string;
};

export type ErrorResponse = {
  status: number;
  error: string;
  message: string;
};
