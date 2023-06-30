Responsive web component, allows multiple image upload and large thumbnail previews, along with functionalities like 'counter', 'addImage', 'clearSelection', 'upload' etc.

Count: displays the no. of image objects in the 'image' state.

Add User:  helps to append the 'image' state, user can add multiple images at once or one by one or in any order. The 'Image' state will keep appending unless it is cleared.

ClearSelection: used to empty the 'image' state.

Upload: can used to trigger Uploading of the images. presently logs payload in the console, which is a stringified array of objects containg 'fileName', 'objUrl' and 'dataUrls'; which backend can use as per convenience  

Preview: used to 'preview' images based on 'image' state in the form of large thumbnails.