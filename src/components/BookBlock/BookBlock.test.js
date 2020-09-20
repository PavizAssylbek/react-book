import React from 'react'
import BookBlock from './index'

const onClick = () => {
  console.log("check function")
}



describe('should render BookBlock component', () => {
  
  it('should contain function onClick={Func}', () => {
    const component = shallow(<BookBlock onClickAddPizza={onClick} />)
    expect(component).toMatchSnapshot()
  });

  it('should contain id', () => {
    const component = shallow(<BookBlock id={1} />)
    expect(component).toMatchSnapshot()
  });

  it('should contain name ', () => {
    const component = shallow(<BookBlock name="string" />)
    expect(component).toMatchSnapshot()
  });

  it('should contain img ', () => {
    const component = shallow(<BookBlock imageUrl="string" />)
    expect(component).toMatchSnapshot()
  });

  it('should contain price and addedCount ', () => {
    const component = shallow(<BookBlock price={123} addedCount={1234} />)
    expect(component).toMatchSnapshot()
  });

  it('should contain function onClickAddPizza ', () => {
    const component = shallow(<BookBlock onClickAddPizza={onClick} />)
    expect(component).toMatchSnapshot()
  });

})