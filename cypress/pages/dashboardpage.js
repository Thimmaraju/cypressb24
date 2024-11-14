class dashboardPage{

    pimMenu(){

        return 'a[href="/web/index.php/pim/viewPimModule"]'
    }

    dashBoardMenu(){

        return "Dashboard"
    }

    timeandWorkHeader(){

        return '#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div:nth-child(1) > div > div.orangehrm-dashboard-widget-header > div > p'
    }

    
    timeandWorkHeadersecond(){

        return '#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div:nth-child(1) > div > div.orangehrm-dashboard-widget-header > div > p'
    }

    dashBoardMenuergb(){

        return "Dashboard"
    }
}

const dashboard = new dashboardPage()

export default dashboard