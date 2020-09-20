import React from 'react'
import CartItem from './index'

const onClick = () => {
  console.log("check function")
}



describe('should render CartItem component', () => {
  
  it('should contain id', () => {
    const component = <CartItem id={1} />
    expect(component).toMatchSnapshot()
  });

  it('should contain name and author ', () => {
    const component = <CartItem name="string" author="string" />
    expect(component).toMatchSnapshot()
  });

  it('should contain totalPrice', () => {
    const component = <CartItem totalPrice={1} />
    expect(component).toMatchSnapshot()
  });

  it('should contain totalCount', () => {
    const component = <CartItem totalCount={1} />
    expect(component).toMatchSnapshot()
  });

  it('should contain function onClick={Func}', () => {
    const component = <CartItem onRemove={onClick} onMinus={onClick} onPlus={onClick} />
    expect(component).toMatchSnapshot()
  });

})