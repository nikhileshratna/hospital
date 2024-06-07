import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'


const TabNavigation = ({ TabNavigationAuxillaryFunctionButton = false, Components, tabNames, isFitted = true, tabWidth = "100%" }) => {
    return (
        <Tabs variant='soft-rounded' colorScheme='facebook' isFitted={isFitted} width={"100%"} padding={5} height={"100%"}>
            <div className='flex justify-between px-3 items-center'>
                {/* {TabNavigationAuxillaryFunctionButton && <Button _hover={{ background: "" }} background={"none"} border={"1px solid #0a7a7d"} onClick={() => {
                    ButtonFunction();
                }}>{buttonText}</Button>} */}
                {/* <h1 className='text-4xl font-bold'>{Heading}</h1> */}
                <TabList background={"#e4eff381"} borderRadius={30} height={'40px'} width={tabWidth} >
                    {tabNames.map((tab, index) => {
                        return <Tab key={index}>{tab}</Tab>
                    })}
                </TabList>
            </div>
            <TabPanels height={'95%'} overflowY={'scroll'} className='no-scroll-bar'>
                {Components.map((component, index) => {
                    return (
                        <TabPanel height={"full"} key={index}>
                            {component}
                        </TabPanel>
                    )
                })}
            </TabPanels>
        </Tabs>
    )
}

export default TabNavigation
