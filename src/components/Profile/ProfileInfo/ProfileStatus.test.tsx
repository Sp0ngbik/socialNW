import ProfileStatus from "./ProfileStatus";

import TestRenderer from 'react-test-renderer'

describe('Profile status component', () => {
    test('span should be displayed', () => {
        const component = TestRenderer.create(<ProfileStatus status={'hello'} updateUserStatus={() => {
        }}/>)
        const root = component.root
        const span = root.findByType('span');
        expect(span.children.length).toBe(1);
        expect(span.props.children).toBe('hello');

    })
    test('span should be displayed with correct status', () => {
        const component = TestRenderer.create(<ProfileStatus status={'hello'} updateUserStatus={() => {
        }}/>);
        const root = component.root;
        expect(root.props.status).toBe('hello')
    })
    test('input should be null', () => {
        const component = TestRenderer.create(
            <ProfileStatus status={'hello'} updateUserStatus={() => {
            }}/>
        );
        const root = component.root;
        expect(() => {
            root.findByType('input');
        }).toThrow();
    });
    test('input should be displayed in edit mode instead of span', () => {
        const component = TestRenderer.create(<ProfileStatus status={'hello'} updateUserStatus={() => {
        }}/>)
        const root = component.root
        const span = root.findByType('span');
        span.props.onDoubleClick()
        const input = root.findByType('input');


        expect(input.props.value).toBe('hello');
        expect(() => {
            root.findByType('span');
        }).toThrow();
    });

    test('callback should be called', () => {
        const mockCallback = jest.fn()
        const component = TestRenderer.create(
            <ProfileStatus status={'hello'} updateUserStatus={mockCallback}/>
        );
        const instance = component.root.instance;

        instance.deactivateEditModeHandler();

        expect(mockCallback.mock.calls.length).toBe(1)
    });
})