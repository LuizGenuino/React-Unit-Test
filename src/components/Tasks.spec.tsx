import { fireEvent, render, screen } from "@testing-library/react"
import Tasks from "./Tasks"
import { server } from "../mocks/node"

describe('Tasks Component', async () => {
    beforeAll(() => server.listen())
    it('should fetch and show tasks on button click', async () => {
        render(<Tasks />)
        const button = screen.getByText('Get Tasks from API')

        await fireEvent.click(button)

        await screen.findByText('John')
    })

    afterAll(() => server.close())

})