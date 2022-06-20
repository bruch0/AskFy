import { CaptchaAdapter } from "@/data/protocols/captchaClient";

export class captchaAdapterMock implements CaptchaAdapter {
  async validate() {
    return Promise.resolve("valid");
  }
  reset() {
    return null;
  }
}
