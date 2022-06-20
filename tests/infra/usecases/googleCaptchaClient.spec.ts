import { GoogleCaptchaClient } from "@/infra/usecases/googleCaptchaClient";
import { MutableRefObject } from "react";

describe("GoogleCaptchaClient Class", () => {
  const googleCaptchaClient = new GoogleCaptchaClient();
  const executeAsync = jest.fn();
  const reset = jest.fn();

  const recaptchaRef: MutableRefObject<any> = {
    current: { reset, executeAsync },
  };

  test("Should call the method consistently", () => {
    jest.spyOn(googleCaptchaClient, "validate");
    googleCaptchaClient.validate(recaptchaRef);

    expect(googleCaptchaClient.validate).toBeCalledTimes(1);
  });

  test("Should call the method consistently", () => {
    jest.spyOn(googleCaptchaClient, "reset");
    googleCaptchaClient.reset(recaptchaRef);

    expect(googleCaptchaClient.reset).toBeCalledTimes(1);
  });

  test("Should call the validation function", () => {
    googleCaptchaClient.validate(recaptchaRef);

    expect(recaptchaRef.current.executeAsync).toBeCalledTimes(2);
  });

  test("Should call the reset function", () => {
    googleCaptchaClient.reset(recaptchaRef);

    expect(recaptchaRef.current.reset).toBeCalledTimes(2);
  });
});
