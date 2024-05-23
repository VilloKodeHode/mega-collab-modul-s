import "@testing-library/jest-dom";
import Page from "../app/page"
import { render, screen } from "@testing-library/react";

describe("Page", ()=> {
    it("render a page with a h1", ()=> {
        render(<Page/>)

        const page = screen.getByRole("heading", { level: 1})
        expect(page).toBeInTheDocument()
    })
})