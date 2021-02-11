import React from 'react';
import Aux from '../../hoc/Auxiliary';
import './Layout.scss';

const layout = (props: any) => {
  return (
    <Aux>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className='Content'>{props.children}</main>
    </Aux>
  );
};

export default layout;
