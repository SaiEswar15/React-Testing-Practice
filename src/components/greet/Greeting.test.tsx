import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"

test("greetings renders here", ()=>{
    render(<Greeting/>)
    const textElement = screen.getByText("Hello from eswar");
    expect(textElement).toBeInTheDocument();

})