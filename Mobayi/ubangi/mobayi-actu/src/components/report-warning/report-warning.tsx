import { useState } from "react";


const ReportWarning = () => {

    const [report, setReport] = useState<boolean>(true)

    return(
        <>
            <i onClick={()=>{setReport(report===true ? false : true)}} title="warning">
                <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                    <path d="M20.0429 21H3.95705C2.41902 21 1.45658 19.3364 2.22324 18.0031L10.2662 4.01533C11.0352 2.67792 12.9648 2.67791 13.7338 4.01532L21.7768 18.0031C22.5434 19.3364 21.581 21 20.0429 21Z" stroke={report ? "red" : "#c1c1c1"} stroke-width={report ? "1.5" : "1.0"} stroke-linecap="round"></path>
                    <path d="M12 9V13" stroke={report ? "red" : "#c1c1c1"} stroke-width={report ? "1.5" : "1.0"} stroke-linecap="round">
                    </path>
                    <path d="M12 17.01L12.01 16.9989" stroke={report ? "red" : "#c1c1c1"} stroke-width={report ? "1.5" : "1.0"} stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </i>
        </>
    )

}

export default ReportWarning;