import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {CheckBox} from './CheckBox';
import {Text} from 'react-native';
import {tailwindFullConfig} from '@utils/tailwindFullConfig';

const onChange = jest.fn((value: boolean) => !value);

describe('CheckBox Component', () => {
  it('should be rendered', () => {
    const {getByTestId} = render(
      <CheckBox
        onChange={() => null}
        value={true}
        label={<Text testID="checkBox-label">lorem ipsum</Text>}
      />,
    );
    const CheckBoxContainer = getByTestId('checkBox-container');
    const CheckBoxComponent = getByTestId('checkBox');
    const checkboxLabel = getByTestId('checkBox-label');
    const checkboxIcon = getByTestId('checkBox-icon');

    expect(CheckBoxContainer).toBeTruthy();
    expect(CheckBoxComponent).toBeTruthy();
    expect(checkboxLabel).toBeTruthy();
    expect(checkboxIcon).toBeTruthy();
  });

  it('verify if onChange is called when press in checkBox-container, checkBox-label or checkBox', () => {
    let value = false;

    const {getByTestId} = render(
      <CheckBox
        onChange={() => (value = onChange(value))}
        value={value}
        label={<Text testID="checkBox-label">lorem ipsum</Text>}
      />,
    );

    const CheckBoxContainer = getByTestId('checkBox-container');
    const CheckBoxComponent = getByTestId('checkBox');
    const checkboxLabel = getByTestId('checkBox-label');

    fireEvent.press(CheckBoxContainer);
    expect(onChange).toBeCalledTimes(1);

    fireEvent.press(CheckBoxComponent);
    expect(onChange).toBeCalledTimes(2);

    fireEvent.press(checkboxLabel);
    expect(onChange).toBeCalledTimes(3);
  });

  it('verify if the style changes after changing the value', async () => {
    let value = true;
    const {getByTestId, rerender} = render(
      <CheckBox onChange={() => (value = onChange(value))} value={value} />,
    );
    const CheckBoxComponent = getByTestId('checkBox');

    expect(CheckBoxComponent.props.style.backgroundColor).toEqual(
      tailwindFullConfig.theme!.colors!['high-green'],
    );
    expect(CheckBoxComponent.children.length).toEqual(1);

    fireEvent.press(CheckBoxComponent);
    expect(onChange).toBeCalled();

    rerender(
      <CheckBox onChange={() => (value = onChange(value))} value={value} />,
    );

    expect(CheckBoxComponent.props.style.backgroundColor).toBeUndefined();
    expect(CheckBoxComponent.children.length).toEqual(0);
  });

  it('verify when disabled the onChange not be called', async () => {
    const onChangeMock = jest.fn(() => null);

    const {getByTestId} = render(
      <CheckBox onChange={onChangeMock} value={true} disabled={true} />,
    );
    const CheckBoxComponent = getByTestId('checkBox');

    fireEvent.press(CheckBoxComponent);
    expect(CheckBoxComponent.props.style.backgroundColor).toEqual(
      (tailwindFullConfig.theme!.colors!.zinc as {'500': string})['500'],
    );
    expect(onChangeMock).not.toBeCalled();
  });

  it('check label position', async () => {
    const {getByTestId, rerender} = render(
      <CheckBox
        onChange={() => null}
        value={true}
        label={<Text testID="checkBox-label">lorem ipsum</Text>}
        labelPosition={'left'}
      />,
    );
    const CheckBoxContainer = getByTestId('checkBox-container');
    expect(CheckBoxContainer.props.style.flexDirection).toEqual('row');

    rerender(
      <CheckBox
        onChange={() => null}
        value={true}
        label={<Text testID="checkBox-label">lorem ipsum</Text>}
        labelPosition={'right'}
      />,
    );
    expect(CheckBoxContainer.props.style.flexDirection).toEqual('row-reverse');
  });
});
