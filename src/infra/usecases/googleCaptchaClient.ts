import { CaptchaAdapter } from "@/data/protocols/captchaClient";
import { RefObject } from "react";

export class GoogleCaptchaClient implements CaptchaAdapter {
  async validate(ref: RefObject<any>): Promise<any> {
    return ref.current.executeAsync();
  }

  async reset(ref: RefObject<any>): Promise<any> {
    ref.current.reset();
  }
}
