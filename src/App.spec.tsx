import { getAllByText, render, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App Component', () => {
    it('should render list items', () => {
        const { getByText } = render(<App />)

        expect(getByText('Luiz')).toBeInTheDocument();
        expect(getByText('Gustavo')).toBeInTheDocument();
        expect(getByText('Lucas')).toBeInTheDocument();
    });

    it('should be able to add new item to the list', async () => {
        const { getByText, getByPlaceholderText} = render(<App />)

        const inputElement = getByPlaceholderText('Novo Nome')
        const addBtn = getByText('Add')

         await userEvent.type(inputElement, 'Fernando')

         await userEvent.click(addBtn)

        // expect(await findByText('Fernando')).toBeInTheDocument();

        await waitFor(() => {
             expect(getByText('Fernando')).toBeInTheDocument();
        })

    })

    it('should be able to remove item to the list', async () => {
        const { getAllByText, getByText} = render(<App />)
   
        const removeBtns = getAllByText('Remover')

        

         await userEvent.click(removeBtns[0])


        await waitForElementToBeRemoved(() => {
            return getByText('Luiz')
        })

    })
});