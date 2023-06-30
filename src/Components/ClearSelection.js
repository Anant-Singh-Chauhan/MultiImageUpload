
// Expected Component Use: serves a 'Clear Selection' button to the DOM, which should be used to empty the 'image' state.
// Last Modified By: Anant Singh Chauhan
// Last Modify Date: Jun 30,2023

export default function ClearSelection(props) {

    // function to clear 'image'state.
    function clearHandler() {
        props.onClearImage([]);
        props.onSetUpload(false);
    }

    
    return(
        <button disabled={!props.isUploadActive} className="btn btn-secondary p-2 mx-1" onClick={clearHandler}>Clear Selection</button>
    );
} 