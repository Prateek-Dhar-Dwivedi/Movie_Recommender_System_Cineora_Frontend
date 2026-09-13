import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("Cineora App Component", () => {
  test("renders navbar and brand title", () => {
    render(<App />);
    const brandElements = screen.getAllByText(/CINE/i);
    expect(brandElements.length).toBeGreaterThan(0);
  });

  test("renders all main sections", () => {
    render(<App />);
    expect(screen.getByText(/Recommended Movies/i)).toBeInTheDocument();
    expect(screen.getByText(/Popular Actors/i)).toBeInTheDocument();
    expect(screen.getByText(/AI Movie Prediction/i)).toBeInTheDocument();
    expect(screen.getByText(/Curated recommendations powered by AI/i)).toBeInTheDocument();
    expect(screen.getByText(/2026 Cineora. All rights reserved./i)).toBeInTheDocument();
  });

  test("toggles mobile menu button", () => {
    render(<App />);
    const menuButton = screen.getByLabelText(/Open navigation menu/i);
    expect(menuButton).toBeInTheDocument();
    fireEvent.click(menuButton);
    expect(screen.getByLabelText(/Close navigation menu/i)).toBeInTheDocument();
  });

  test("toggles movie card flip state on click", () => {
    render(<App />);
    const interstellarCards = screen.getAllByLabelText(/Interstellar/i);
    expect(interstellarCards.length).toBeGreaterThan(0);
    const movieCard = interstellarCards[0];
    expect(movieCard).not.toHaveClass("flipped");
    fireEvent.click(movieCard);
    expect(movieCard).toHaveClass("flipped");
  });
});
