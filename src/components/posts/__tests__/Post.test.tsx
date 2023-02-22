import { render, act, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Post from '../Post';
import '@testing-library/jest-dom'
import axios from 'axios';

// Mock jest and set the type
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate
}));

test("should render the post successfully", async () => {
    mockedAxios.get.mockResolvedValue({
        status: 200,
        statusText: "OK",
        data: {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        }
    });
    await act(async () => {
        render(
            <BrowserRouter>
                <Post />
            </BrowserRouter>
        );
    });
    expect(screen.getByTestId('test-post')).toBeInTheDocument();
    expect(screen.getByText('qui est esse')).toBeInTheDocument();
    expect(axios.get).toHaveBeenCalledWith('http://jsonplaceholder.typicode.com/posts/undefined');
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('button').textContent).toEqual('Back to users');
});
