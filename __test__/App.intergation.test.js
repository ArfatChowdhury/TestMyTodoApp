import { fireEvent, render, waitFor } from "@testing-library/react-native";
import App from "../App";


describe('App integration test', () => {
    test('should show the search input then flatlist and add input and add button', () => {
        const { getByTestId } = render(<App/>);
        expect(getByTestId('search-input')).toBeTruthy();
        expect(getByTestId('flatlist')).toBeTruthy();
        expect(getByTestId('add-input')).toBeTruthy();
        expect(getByTestId('add-button')).toBeTruthy();
    });
});     

// describe('App integration test', () => {
//     test('should add a new task when press add button', async () => {
//         const {getByTestId, getByText} = render(<App/>);
//         const input = getByTestId('add-input')
//         const addButton = getByTestId('add-button')

//         fireEvent.changeText(input, 'but milk')
//         fireEvent.press(addButton)

//         await waitFor(()=>{
//             expect(getByText('but milk')).toBeTruthy()
//         })

//     });
// });

describe('App integration test', () => {

    beforeEach(() => {
      jest.clearAllMocks(); // Clears AsyncStorage mocks and others
    });
  
    test('should add a new task when pressing the Add button', async () => {
      const { getByTestId, getByText, queryByText } = render(<App />);
  
      // Ensure the task does not exist yet
      expect(queryByText('buy milk')).toBeNull();
  
      const input = getByTestId('add-input');
      const addButton = getByTestId('add-button');
  
      fireEvent.changeText(input, 'buy milk');
      fireEvent.press(addButton);
  
      await waitFor(() => {
        expect(getByText('buy milk')).toBeTruthy();
      });
    });
  });


  describe('should delete a task when pressing the Delete button',  () => {

    test('should delete a task when pressing the Delete button', async () => {
      
    const {getByTestId, getByText, queryByText, getAllByTestId} = render(<App/>)
    const input = getByTestId('add-input')
    const addButton = getByTestId('add-button')
    fireEvent.changeText(input, 'buy milk')
    fireEvent.press(addButton)

    await waitFor(() => {
      expect(getByText('buy milk')).toBeTruthy();
    });
        
    const deleteButtons = getAllByTestId(/delete-button-/)
    const deleteButton = deleteButtons[0];
   

    fireEvent.press(deleteButton)

    await waitFor(()=>{
      expect(queryByText('buy milk')).toBeNull();
    })
    });

  })