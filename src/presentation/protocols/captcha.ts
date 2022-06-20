import { RefObject } from "react";

export interface Captcha {
  validate: (ref: RefObject<any>) => Promise<string | null>;
  reset: (ref: RefObject<any>) => void;
}
