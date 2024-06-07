import React from 'react'
import Signupuser from './Signupuser'
import Signuphospital from './Signuphospital'
import TabNavigation from '../components/TabNavigation/Navigation'

const Signup = () => {
    const tabNames = ['Patient', 'Hospital'];
    const components = [<Signupuser />, <Signuphospital />]
    return (
        
      <TabNavigation tabNames={tabNames} Components={components} isFitted={false} TabNavigationAuxillaryFunctionButton={false} tabWidth='fit-content' />
    )
}

export default Signup