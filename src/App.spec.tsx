import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'


const sum = (x: number, y: number) => {
    return x + y
}

describe('App Component', () => {

    it('should add up correctly', () => {
        expect(sum(2, 4)).toBe(6)
    })

    it('should render App with hello message', () => {
        render(<App />)

        screen.getByText('Hello World')

    })

    it('should change message on button click', () => {
        render(<App />)

        screen.getByText("Let's learn more about testing in react")

        const button = screen.getByText("Change message")

        fireEvent.click(button)

        screen.getByText("New message!")

    })

    it('should render list items', () => { //-> os teste no componente pai abrange os componentes filhos
        const { getByText } = render(<App />)

        expect(getByText('Luiz')).toBeTruthy();
        expect(getByText('Gustavo')).toBeTruthy();
        expect(getByText('Lucas')).toBeTruthy();
    });


});