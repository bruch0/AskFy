import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Captcha } from "@/presentation/protocols";

export default function CaptchaForm({
  children,
  onSuccess,
  captchaHandler,
}: {
  children: React.ReactElement;
  onSuccess: Function;
  captchaHandler: Captcha;
}) {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const recaptchaValidation = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const captcha = await captchaHandler.validate(recaptchaRef);
    onSuccess(captcha);

    captchaHandler.reset(recaptchaRef);
  };

  return (
    <form data-testid="form" onSubmit={recaptchaValidation}>
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        data-testid="captcha"
        sitekey={process.env.NEXT_PUBLIC_GOOGLE_SECRET_KEY!}
      />
      {children}
    </form>
  );
}
