import MockFormChildren from "../../mocks/FormChildren";
import { fireEvent, render, screen } from "@testing-library/react";
import CaptchaForm from "@/presentation/components/molecules/CaptchaForm";
import { captchaAdapterMock } from "tests/data/mocks/captchaAdapterMock";
import { act } from "react-dom/test-utils";

describe("FeedbackAlert Component", () => {
  const onSuccess = jest.fn();
  const captchaHandler = new captchaAdapterMock();

  const RenderComponents = () => (
    <CaptchaForm captchaHandler={captchaHandler} onSuccess={onSuccess}>
      <MockFormChildren />
    </CaptchaForm>
  );

  test("Should call the success function on form submission and captcha validation", async () => {
    render(<RenderComponents />);

    const form = screen.getByTestId("form");
    await act(async () => {
      fireEvent.submit(form);
    });

    expect(onSuccess).toBeCalled();
  });
});
