import { screen, render, waitFor } from "@testing-library/react";
import Image from ".";
import placeholder from "./../../assets/images/placeholder.jpg";

describe("Image component", () => {
  it("mount render placeholder", () => {
    render(
      <div style={{ width: "500px", height: "500px" }}>
        <Image
          src={`https://via.placeholder.com/500`}
          placeholder={placeholder}
        />
      </div>
    );

    const element = screen.getByTestId("component-container");
    expect(element).toHaveStyle(`background: url(${placeholder})`);
  });

  it("Not show placeholder when parent size is not defined", () => {
    render(
      <Image
        src={`https://via.placeholder.com/500`}
        placeholder={placeholder}
      />
    );

    const element = screen.getByTestId("component-container");
    expect(element.clientHeight).toBe(0);
  });

  it("The snapshot of the component  must be the same", () => {
    const { container } = render(
      <Image
        src={`https://via.placeholder.com/500`}
        placeholder={placeholder}
      />
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it("Show loaded image correct", async () => {
    render(
      <Image
        src={`https://via.placeholder.com/500`}
        placeholder={placeholder}
      />
    );

    await waitFor(() =>
      expect(
        screen.getByTestId("component-image", {}, { timeout: 500 })
      ).toBeInTheDocument()
    );
  });

  it("remove placeholder when image is loaded", () => {});
});
