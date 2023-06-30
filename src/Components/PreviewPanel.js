import "./PreviewPanel.css";

// Expected Component Use: serves a div to the DOM, which is used to 'preview' images based on 'image' state.
// Last Modified By: Anant Singh Chauhan
// Last Modify Date: Jun 30,2023
export default function PreviewPanel(props) {
    return (
        <div id="previewPanel" className="border border-secondary rounded m-2 d-flex flex-wrap">
            {props.imgObj.map(img => {
                return <img key={Math.random()+img.fileName} title={img.fileName} className="m-1" src={img.objUrl} height="150" width="180" alt={"preview_"+img.fileName}/>
            })}
        </div>
    );
}