import React, {useState} from "react";
import Count from "./Count";
import PreviewPanel from "./PreviewPanel";
import ImgSelect from "./ImgSelect";
import ClearSelection from "./ClearSelection";
import Upload from "./Upload";
import "./Shell.css";

// Expected Component Use: serves a 'outer most wrapper' to the DOM.
// Last Modified By: Anant Singh Chauhan
// Last Modify Date: Jun 30,2023

export default function Shell() {
    const [images, setImages] = useState([]);
    const [isUploadActive,setIsUploadActive] = useState(false);

    return (
    <div id="shell" className="container container-fluid border border-primary rounded w-75 shadow p-3 mb-5 bg-white rounded">
        <PreviewPanel imgObj = {images}/>
        <div id="btnPanel" className="d-flex flex-wrap justify-content-between">
            <Count len = {images.length}/>
            <div className="d-flex flex-wrap justify-content-between ">
                <ClearSelection onClearImage={setImages} isUploadActive={isUploadActive} onSetUpload = {setIsUploadActive}/>
                <ImgSelect images={images} onAddImg = {setImages} onSetUpload = {setIsUploadActive} />
                <Upload isUploadActive={isUploadActive} imgObjs={images} onClearImage={setImages} onSetUpload = {setIsUploadActive}/>
            </div>
        </div> 
    </div>
    );
}