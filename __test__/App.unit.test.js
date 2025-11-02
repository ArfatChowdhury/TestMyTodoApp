import { fireEvent, render } from "@testing-library/react-native";
import App from "../App";
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { jest } from '@jest/globals';
// import { jest } from "@jest/globals";


const mockAlert = jest.fn();

// jest.mock("react-native", () => {
//     const rn = jest.requireActual("react-native");
//     return Object.setPrototypeOf(
//       {
//         Alert: {
//             alert: mockAlert,
//         },
//       },
//       rn
//     );
//   });


describe('Unit Tests', () => {
    let alertSpy;

  beforeEach(() => {
    jest.clearAllMocks();
    AsyncStorage.getItem.mockResolvedValue(null);
    
    // Create spy on Alert.alert
    alertSpy = jest.spyOn(Alert, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    // Restore the original implementation after each test
    alertSpy.mockRestore();
  });
    test('handleAdd function validates empty input', () => {
        // Test the validation logic separately
        const { getByTestId, getByText, queryByText } = render(<App />)
        const input = getByTestId('add-input')
        const addButton = getByTestId('add-button')
        fireEvent.changeText(input, ' ')
        fireEvent.press(addButton)
        // expect(getByText('write task to add')).toBeTruthy()
        expect(Alert.alert).toHaveBeenCalledWith('write task to add');
    });

    test('handleAdd function adds a task', () => {
        const { getByTestId, getByText } = render(<App />)
        const input = getByTestId('add-input')
        const addButton = getByTestId('add-button')
        fireEvent.changeText(input, 'buy milk')
        fireEvent.press(addButton)
        expect(getByText('buy milk')).toBeTruthy()
    });             

    test('filteredData filters tasks correctly', () => {
        // Test the search/filter logic separately
        const { getByTestId, getByText } = render(<App />)
        const inputAdd = getByTestId('add-input')
        const addButton = getByTestId('add-button')
        fireEvent.changeText(inputAdd, 'buy milk')
        fireEvent.press(addButton)
        const inputSearch = getByTestId('search-input')
        fireEvent.changeText(inputSearch, 'buy milk')
        expect(getByText('buy milk')).toBeTruthy()
    });

    test('handleDelete removes correct task', () => {
        // Test delete logic with mock data
        const { getByTestId, getByText, getAllByTestId, queryByText } = render(<App />)
        const inputAdd = getByTestId('add-input')
        const addButton = getByTestId('add-button')
        fireEvent.changeText(inputAdd, 'buy milk')
        fireEvent.press(addButton)
        expect(getByText('buy milk')).toBeTruthy()
        const deleteButtons = getAllByTestId(/delete-button-/);
        const deleteButton = deleteButtons[0];
        fireEvent.press(deleteButton)
        expect(queryByText('buy milk')).toBeNull();
    });
});