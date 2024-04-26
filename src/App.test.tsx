import { render, screen } from "@testing-library/react"
import App from "./App";


test("renders text in app", ()=>{
    render(<App/>);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
})