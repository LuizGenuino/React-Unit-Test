import { getAllByText, render, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import List from './List';


describe('List Component', () => {
    it('should render list items', async () => {
        const { getByText, rerender, queryByText } = render(<List initialItems={['Luiz', 'Gustavo', 'Lucas']} />)

        expect(getByText('Luiz')).toBeInTheDocument();
        expect(getByText('Gustavo')).toBeInTheDocument();
        expect(getByText('Lucas')).toBeInTheDocument();

        await rerender(<List initialItems={['Silva']} />)
        
        expect(getByText('Silva')).toBeInTheDocument();
        expect(queryByText('Lucas')).not.toBeInTheDocument();

    });

     it('should be able to add new item to the list', async () => {
        const { getByText, getByPlaceholderText} = render(<List initialItems={['Luiz', 'Gustavo', 'Lucas']} />)

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
        const { getAllByText, getByText} = render(<List initialItems={['Luiz', 'Gustavo', 'Lucas']} />)
   
        const removeBtns = getAllByText('Remover')

        

         await userEvent.click(removeBtns[0])


        await waitForElementToBeRemoved(() => {
            return getByText('Luiz')
        })

    })
});