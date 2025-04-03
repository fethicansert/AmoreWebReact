import React, { useEffect, useState } from "react";
import {
  CrossCloseIcon,
  SendMessageIcon,
} from "../../../assets/svg/svg_package";

const ChatVoiceRecord = ({ isRecording, setIsRecording }) => {
  const [permission, setPermission] = useState(false);
  const [stream, setStream] = useState(null);


    useEffect(() => {
        getMicrophonePermission();
    },[]);


  return (
    <div className="chat-voice-recording">
      <span>Ses Kaydediliyor...</span>

      <div className="chat-voice-recording-container">
        <div
          className="chat-voice-recording-cancel-button"
          onClick={() => setIsRecording(false)}
        >
          <CrossCloseIcon width="16px" height="16px" />
        </div>

        <div className="chat-voice-record"></div>

        <div className="chat-voice-recording-pause-button">
          <div className="chat-voice-recording-pause-button-line"></div>
          <div className="chat-voice-recording-pause-button-line"></div>
        </div>

        <div className="chat-voice-recording-send-button">
          <SendMessageIcon width="16" height="16" strokeWidth="1.5" />
        </div>
      </div>
    </div>
  );

  async function getMicrophonePermission(){
    if("MediaRecorder" in window){
        try {
            const streamData = await navigator.mediaDevices.getUserMedia({
                audio:true,
                video:false
            });
            console.log(streamData);
            setPermission(true);
            setStream(streamData)
            
        } catch (e){
            alert(e);
        }
    }
  }
};

export default ChatVoiceRecord;
