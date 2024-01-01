import MainApp from './App';
import {createRoot} from "react-dom/client";

it('component should render', () => {
    const div = document.createElement('div');
    const root = createRoot(div);
        root.render(<MainApp />);
        root.unmount();
});