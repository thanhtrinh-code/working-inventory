import Webcam from "react-webcam";

const videoConstraints = {
    facingMode: 'environment'
  }
export default function Camera({webcamRef}) {
    function onUserMedia(e) {
        return;
    }    
    return (
    <Webcam ref={webcamRef} 
    audio={false} 
    screenshotFormat="image/jpeg" 
    videoConstraints={videoConstraints} 
    onUserMedia={onUserMedia}
    mirrored={true}
    style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        position: 'absolute',
        top: 0,
        left: 0}}/>
    )
}
