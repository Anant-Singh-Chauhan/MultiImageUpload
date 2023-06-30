import React from "react";
import "./ImgSelect.css";

// Expected Component Use: serves a 'Add Immages' button to the DOM, which helps to append the 'image' state.
// Note: user can add multiple images at once or one by one or in any order. The 'Image' state will keep appending unless it is cleared.
// Last Modified By: Anant Singh Chauhan
// Last Modify Date: Jun 30,2023

export default function ImgSelect(props) {

    // process images, gathers dataUrls, updates 'image' state, triggers Preview update.
    async function imageSelectHandler(e){
        let images = [...e.target.files];
        if(images.length>0){
            props.onSetUpload(true);
        }

        let imgObjs=[...props.images];
        Array.from(images).forEach((img,index) => {
            let imgObj=null;
            imgDataUrl(img)
            .then(data => {
                imgObj = {
                    "fileName":img.name,
                    "objUrl":URL.createObjectURL(img),
                    "dataUrl":data
                }

                imgObjs.push(imgObj);

                if(index === images.length-1){
                    props.onAddImg(imgObjs);
                }
            })
        })
       
    }

    // converts img into base664 encoded dataUrls
    async function imgDataUrl(img) {
        let dataUrl = await new Promise((resolve) => {
            let fr = new FileReader();
            fr.onload = (e) => resolve(fr.result);

            if(img) fr.readAsDataURL(img);
        });
        return dataUrl;
    }

    return(
        <div id="imageSelect" className="btn btn-primary">
            <label htmlFor="imgs">Add Images</label>
            <input type="file"  className="w-0" multiple accept="image/*" id="imgs" style={{visibility: "hidden"}} onChange={imageSelectHandler} />
        </div>
    );
}

