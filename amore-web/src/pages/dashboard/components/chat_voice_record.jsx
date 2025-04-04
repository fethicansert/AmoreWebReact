import React, { useEffect, useRef, useState } from "react";
import {
  CrossCloseIcon,
  MicrophoneIcon,
  TrashIcon,
  PlayIcon,
  SendMessageIcon,
} from "../../../assets/svg/svg_package";
import { LiveAudioVisualizer, AudioVisualizer } from 'react-audio-visualize';
import { colors } from "../../../utils/theme";

const mimeType = "audio/webm;codecs=opus";

const ChatVoiceRecord = ({ setIsShowRecording, sendVoice }) => {
  const [permission, setPermission] = useState(false);
  const [stream, setStream] = useState(null);
  const [recordingStatus, setRecordingStatus] = useState('inactive'); //recording inactive paused
  const [audio, setAudio] = useState(null);
  const [time, setTime] = useState(0);


  const mediaRecorder = useRef(null);
  const audioChunks = useRef([]);
  const visualizerRef = useRef(null);
  const counterIntetvalRef = useRef();
  const audioBlobRef = useRef();
  const voicePlayerRef = useRef();

  useEffect(() => {
    getMicrophonePermission();

    const clear = () => {
      if (counterIntetvalRef.current)
        clearInterval(counterIntetvalRef.current)
    }
    return clear
  }, []);


  return (
    <div className="chat-voice-recording">
      <span className="chat-voice-recording-loading-text">
        {recordingStatus !== 'pause' ? 'Ses Kaydediliyor...' : "Duraklatıldı"}
      </span>

      <div className="chat-voice-recording-container">

        <div
          className="chat-voice-recording-cancel-button"
          onClick={handleCancel}
        >
          <CrossCloseIcon width="16px" height="16px" />
        </div>


        <div className="chat-voice-record" style={{ gridTemplateColumns: recordingStatus === 'recording' ? '30px auto' : 'auto auto 30px' }}>

          {
            (mediaRecorder.current && recordingStatus === 'recording') && <>

              <span className="chat-voice-record-time">{formatTime(time)}</span>

              <LiveAudioVisualizer
                mediaRecorder={mediaRecorder.current}
                width={140}
                height={25}
                barColor={colors.brand2}
                gap={3}
                barWidth={2}
              />

            </>
          }

          {
            (audioChunks.current.length > 0 && recordingStatus === 'pause') &&
            <>
              <div
                className="chat-voice-recording-play-button"
                onClick={() => playAudio(audio)}
              >
                <PlayIcon width="17px" height="17px" />
              </div>

              <AudioVisualizer
                ref={visualizerRef}
                blob={audioChunks.current[0]}
                width={120}
                height={34}
                barWidth={2}
                gap={3}
                barColor={colors.brand2}
              />

              <span className="chat-voice-record-time">{formatTime(time)}</span>

            </>

          }
        </div>

        <div className="chat-voice-recording-pause-button"
          onClick={recordingStatus === 'pause' ? resumeRecording : pauseRecording}
          style={{ background: recordingStatus === 'pause' ? 'unset' : colors.backGround3 }}>

          {
            recordingStatus === 'pause' ? <MicrophoneIcon color={colors.brand1} width="21.5" height="21.5" style={{ strokeWidth: "1.3" }} /> : <>
              <div className="chat-voice-recording-pause-button-line"></div>
              <div className="chat-voice-recording-pause-button-line"></div>
            </>
          }

        </div>

        <div className="chat-voice-recording-send-button" onClick={() => handleSendVoice()} >
          <SendMessageIcon width="16" height="16" strokeWidth="1.5" />
        </div>
      </div>
    </div>
  );

  function playAudio(voiceRecord) {
    const audioBlob = new Blob(audioChunks.current, { type: mimeType });
    const audioUrl = URL.createObjectURL(audioBlob);
    voicePlayerRef.current = new Audio(audioUrl);
    voicePlayerRef.current.play();
    playCounter();
  }

  async function pauseRecording() {
    mediaRecorder.current.pause();
    console.log(mediaRecorder.current.state);
    setRecordingStatus('pause');
    stopCounter();
  }

  async function resumeRecording() {
    if (visualizerRef.current) {
      voicePlayerRef.current.pause();
      voicePlayerRef.current.currentTime = 0;
    }
    mediaRecorder.current.resume();
    setRecordingStatus('recording');
    startCounter();
  }

  async function stopRecording() {
    setRecordingStatus('pause')
    mediaRecorder.current.stop();
    stopCounter()

    mediaRecorder.current.onstop = () => {
      const audioBlob = new Blob(audioChunks.current, { type: mimeType });
      const audioUrl = URL.createObjectURL(audioBlob);
      audioBlobRef.current = audioBlob;
      setAudio(audioUrl);
    }
  }

  async function startRecording(stream) {
    setRecordingStatus('recording');

    //crete new MediaRecorder instance using stream coming from permissions
    const media = new MediaRecorder(stream, { mimeType });

    //set the MediaRecorder instance to the medaRecorder red
    mediaRecorder.current = media;

    //start recording
    mediaRecorder.current.start(500);

    startCounter();

    //start(timeSlice) olmadığı için mediaRecorder.current.stop() anında tek bir kez çalışır 
    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === "undefined" && event.data.size === 0) return;
      audioChunks.current.push(event.data);
      console.log(event);

    };

  }

  function handleSendVoice() {
    sendVoice({ audio: audio, audioBlob: audioBlobRef.current, duration: time });
  }

  function handleCancel() {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
    mediaRecorder.current.stop();
    setIsShowRecording(false);
  }

  async function getMicrophonePermission() {

    if ("MediaRecorder" in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false
        });
        setPermission(true);
        setStream(streamData);
        startRecording(streamData);
      } catch (e) {
        alert(e);
      }
    }
  }

  function startCounter() {
    counterIntetvalRef.current = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
  }

  function stopCounter() {
    clearInterval(counterIntetvalRef.current)
  }

  function playCounter() {
    // const totalCount = time;
    // let currentCounter = 1;
    // counterIntetvalRef.current = setInterval(() => {
    //   if (currentCounter <= totalCount) {
    //     setTime(currentCounter);
    //     currentCounter += 1;
    //   } else {
    //     stopCounter();
    //   }

    // }, 1000);
  }



  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

};

export default ChatVoiceRecord;


// function record() {
//   // Yeni kaydı başlat
//   if (stream) {
//     setRecordingStatus('recording');
//     setTime(0);
//     audioChunks.current = [];
//     mediaRecorder.current.start();
//     startCounter();
//   }
// }