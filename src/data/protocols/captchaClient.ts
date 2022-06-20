import { RefObject } from "react";

export interface CaptchaAdapter {
  validate: (ref: RefObject<any>) => Promise<string | null>;
  reset: (ref: RefObject<any>) => void;
}
