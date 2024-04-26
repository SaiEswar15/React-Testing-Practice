import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting";


describe("greet", ()=>{

    test("renders text", ()=>{
        render(<Greeting/>);
        const textElement = screen.getByText("Hello");
        expect(textElement).toBeInTheDocument();
    })
})

describe("group", ()=>{

    //writing test using the TDD method 
    //in this first we write the test and get errors and then solve them to be green.
    test("renders with name", ()=>{
        render(<Greeting name = "Eswar"/>)
        const textWithNameElement = screen.getByText("Hello Eswar");
        expect(textWithNameElement).toBeInTheDocument();
    })
})


