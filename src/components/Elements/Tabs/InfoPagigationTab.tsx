import React from "react"

interface pageProps {
    totalPage : any

}

const InfoPagigationTab:React.FC<pageProps> = ({totalPage}) => {
    console.log(totalPage)
    return (
        <div className="course__tab-inner grey-bg-2 mb-50">
            <div className="row align-items-center">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="course__tab-wrapper d-flex align-items-center">
                        <div className="course__view">
                            <h4>Showing {totalPage} in 5 pages</h4>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="course__sort d-flex justify-content-sm-end">
                        <div className="course__sort-inner">
                            <select>
                                <option>Default</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                                <option>Option 4</option>
                                <option>Option 5</option>
                                <option>Option 6</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoPagigationTab
