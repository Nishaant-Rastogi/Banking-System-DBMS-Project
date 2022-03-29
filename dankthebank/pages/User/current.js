import React from 'react';
import Userbar from '../../components/Userbar';
import DropDown from '../../components/dropDown';
import Table from '../../components/Table';
function current() {
  return (
    <div>
      <Userbar />
      <DropDown />
      <Table />
    </div>
  )
}

export default current