import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Button from "./Button"

describe("Button Component", () => {
    // it('should render with gray background if disabled', () => {
    //     render(<Button disabled={true} onClick={() => console.log('cick')}>Click me</Button>)

    //     const button = screen.getByText("Click me")

    //     expect(button).toHaveStyle({ backgroundColor: 'gray' })
    // })

    it('should call onCLick prop on click', () => {
        const onClick = jest.fn()
        render(<Button disabled={false} onClick={onClick}>Click me</Button>)

        const button = screen.getByText("Click me")

        fireEvent.click(button)

        expect(onClick).toHaveBeenCalled()
    })
})