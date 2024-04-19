import { render, screen } from "@testing-library/react";
import React from "react";
import Home from "@/app/page";

describe("Home", () => {
  it("should render Home", async () => {
    render(<Home />);
    expect(await screen.findByText("ランダム都市：")).toBeInTheDocument();
  });
});
