import React from 'react'
import Button from './index'

const onClick = () => {
  console.log("check function")
}

describe('should render Button component', () => {

  it('should contain function onClick={Func}', () => {
    const component = shallow(<Button onClick={onClick} />)
    expect(component).toMatchSnapshot()
  });
  
  it('should contain string', () => {
    const component = shallow(<Button className="props" />)
    expect(component).toMatchSnapshot()
  });

  it('should contain boolean', () => {
    const component = shallow(<Button  outline={true} />)
    expect(component).toMatchSnapshot()
  });

  it('click', () => {
    const mockCallBack = jest.fn()
    const component = shallow(<Button onClick={mockCallBack} />)
    expect(mockCallBack.mock.calls.length).toEqual(0)
    component.find('.button').simulate('click')
    expect(mockCallBack.mock.calls.length).toEqual(1)
  })
})