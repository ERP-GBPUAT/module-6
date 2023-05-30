import React from 'react'
import HeaderDash from './Miscellaneous/HeaderDash'
import CardProfile from './Miscellaneous/CardProfile'
import ResearchList from './Miscellaneous/ResearchList'
import ResearchDash from './Miscellaneous/ResearchDash'

const AllResearchList = ({btnData,routeTo}) => {
    const [inputDisabled, setInputDisabled] = React.useState(true);
    const [showResearch,setShowResearch] =React.useState(false)
    const [research,setResearch] = React.useState({})
    const handleChange = () => {
        console.log("hi");
    };
    const handleInputDisabled = (edit) => {
        if (edit) {
            setInputDisabled(false);
        } else {
            setInputDisabled(true);
        }
    }
    const handleOpenResearch=(id)=>{
        setShowResearch(true)
    }
    return (
        <div>
            {/* <HeaderDash btnData={showResearch?"Back to Research":btnData} routeTo={showResearch?"/facultyResearches":routeTo} inputDisabled={inputDisabled} handleInputDisabled={handleInputDisabled} /> */}
            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
                        <CardProfile />
                    </div>
                    <div className="col-xl-8 order-xl-1">
                        {showResearch?<ResearchDash setShowResearch={setShowResearch} research={research} />:
                        <ResearchList handleOpenResearch={handleOpenResearch} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllResearchList