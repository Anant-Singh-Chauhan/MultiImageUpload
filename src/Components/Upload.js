
// Expected Component Use: serves a 'upload' button to the DOM, used to trigger Uploading of the images 
// Last Modified By: Anant Singh Chauhan
// Last Modify Date: Jun 30,2023

export default function Upload(props) {

    function uploadHandler() {
        let payload = JSON.stringify(props.imgObjs);
        console.log("uploading...");
        console.log(payload);

        // some logic to make a HttpRequest,and sending 'payload' in body
        // payload : is a stringified array of objects containg 'fileName', 'objUrl' and 'dataUrls'; which backend can use as per convenience 

        alert(`${props.imgObjs.length} images uploaded successfully!`);
        props.onClearImage([]);
        props.onSetUpload(false);
    }

    return(
        <button disabled={!props.isUploadActive} className="btn btn-secondary p-2 mx-1" onClick={uploadHandler}>Upload</button>
    );
} 