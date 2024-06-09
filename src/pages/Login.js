import React from 'react'
import TabNavigation from '../components/TabNavigation/Navigation'
import HospitalLogin from './HospitalLogin'
import UserLogin from './UserLogin'

const Signup = () => {
    const tabNames = ['Patient', 'Hospital'];
    const components = [<UserLogin />, <HospitalLogin />]
    return (
        
      <TabNavigation tabNames={tabNames} Components={components} isFitted={false} TabNavigationAuxillaryFunctionButton={false} tabWidth='fit-content' />
    )
}

export default Signup