import { render } from "@testing-library/react-native";
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