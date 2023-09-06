"use client"
import ExtensionIcon from "@mui/icons-material/Extension"
import MapOutlinedIcon from "@mui/icons-material/MapOutlined"
import SendOutlinedIcon from "@mui/icons-material/SendOutlined"
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined"
import React from "react"
import TimerSection from "@/components/Elements/TimerSection"

const FooterTest: React.FC = () => {
    return (
        <React.Fragment>
            <div className="px-10 text-[#005e12] fixed bottom-0 left-0 right-0 bg-[#fbd83f] flex flex-row justify-between items-center h-16 z-50">
                <div className="cursor-pointer">Question Pallate</div>
                <div className="text-3xl flex flex-row items-center">
                    <TimerOutlinedIcon />
                    <TimerSection data={10} />
                </div>
                <div className="text-white flex flex-row">
                    <button
                        // onClick={setShowView}
                        className="mx-2 px-3 py-1 rounded bg-[#005e12] flex items-center"
                    >
                        Submit
                        <SendOutlinedIcon className="pl-1" />
                    </button>
                    <button className="mx-2 px-3 py-1 rounded bg-[#005e12] flex items-center">
                        Preview
                        <MapOutlinedIcon />
                    </button>
                    <button className="ml-2 px-3 py-1 rounded bg-[#005e12] flex items-center">
                        Solution
                        <ExtensionIcon className="pl-1" />
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FooterTest
