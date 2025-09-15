import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import { Home } from "../screens/Home";

const mockNavigate = jest.fn();

const props = {
  navigation: { navigate: mockNavigate } as any,
  route: {} as any,
};

describe("Home Screen", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renderiza o título corretamente", () => {
    render(<Home {...props} />);
    expect(screen.getByText("Visto Gallery")).toBeTruthy();
  });

  it("renderiza os botões de navegação", () => {
    render(<Home {...props} />);
    expect(screen.getByText("Minhas fotos")).toBeTruthy();
    expect(screen.getByText("Album de fotos")).toBeTruthy();
  });

  it("navega para Dashboard com step=photos ao clicar em 'Minhas fotos'", () => {
    render(<Home {...props} />);
    fireEvent.press(screen.getByText("Minhas fotos"));
    expect(mockNavigate).toHaveBeenCalledWith("Dashboard", { step: "photos" });
  });

  it("navega para Dashboard com step=albums ao clicar em 'Album de fotos'", () => {
    render(<Home {...props} />);
    fireEvent.press(screen.getByText("Album de fotos"));
    expect(mockNavigate).toHaveBeenCalledWith("Dashboard", { step: "albums" });
  });
});
