import { BrowserRouter } from "react-router-dom"
import UserProfile from "../Components/User/UserGeneral/UserProfile"
import { render, screen } from "@testing-library/react"
import axios from "axios"


const MockUserProfile = () => {
    return(
        <BrowserRouter>
            <UserProfile />
        </BrowserRouter>
    )
}

describe('User profile test', () => {

    it('renders the data from API', async () => {

        const responseData = [
            {
                mobileNo: 7900001883,
                name: "Vikas Ambekar",
                email: "ambekarviks@gmail.com",
                password: "Vikas@123",
                city: "Mumbai",
                state: "Maharashtra",
                pinCode: 421204,
                address: "0001,CASA Urbano L wing"
            }
        ];

        axios.get.mockResolvedValueOnce({ data: responseData });
        render(<MockUserProfile />)
        const city = await screen.findByText(/Mumbai/i)
        expect(city).toBeInTheDocument

        // const name = await screen.findByText(/Hi, Vikas Ambekar/i)
        // expect(name).toBeInTheDocument

        

    })

})