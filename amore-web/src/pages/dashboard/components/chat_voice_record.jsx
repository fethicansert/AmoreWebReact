import React, { useEffect, useRef, useState } from "react";
import {
  CrossCloseIcon,
  MicrophoneIcon,
  PlayIcon,
  SendMessageIcon,
} from "../../../assets/svg/svg_package";
import { LiveAudioVisualizer, AudioVisualizer } from "react-audio-visualize";
import { colors } from "../../../utils/theme";
import { setAudioType } from "../../../utils/functions";
import WavesurferPlayer from "@wavesurfer/react";

const mimeType = setAudioType();

const ChatVoiceRecord = ({ setIsShowRecording, sendVoice }) => {
  const [permission, setPermission] = useState(false);
  const [stream, setStream] = useState(null);
  const [recordingStatus, setRecordingStatus] = useState("inactive");
  const [time, setTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);

  const mediaRecorder = useRef(null);
  const audioChunks = useRef([]);
  const visualizerRef = useRef(null);
  const counterIntetvalRef = useRef();
  const totalDurationCounterRef = useRef();
  const voicePlayerRef = useRef();

  const [wavesurfer, setWavesurfer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [url, setUrl] = useState("");

  const onReady = (ws) => {
    setWavesurfer(ws);
    setIsPlaying(false);
  };

  const onPlayPause = () => {
    wavesurfer && wavesurfer.playPause();
  };

  useEffect(() => {
    getMicrophonePermission();

    const clear = () => {
      //Array kullanilabilir
      if (counterIntetvalRef.current) {
        stopCounter({ counterRef: totalDurationCounterRef });
        stopCounter({ counterRef: counterIntetvalRef });
      }

      if (voicePlayerRef.current) {
        voicePlayerRef.current.pause();
        voicePlayerRef.current = null;
      }

      if (mediaRecorder.current) {
        mediaRecorder.current.stop();
        setIsShowRecording(false);
        if (stream) {
          stream.getTracks().forEach((track) => track.stop());
        }
      }
    };
    return clear;
  }, []);

  return (
    <div className="chat-voice-recording">
      <span className="chat-voice-recording-loading-text">
        {recordingStatus !== "pause" ? "Ses Kaydediliyor..." : "Duraklatıldı"}
      </span>

      <div className="chat-voice-recording-container">
        <div
          className="chat-voice-recording-cancel-button"
          onClick={handleCancel}
        >
          <CrossCloseIcon width="16px" height="16px" />
        </div>

        <div
          className="chat-voice-record"
          style={{
            gridTemplateColumns:
              recordingStatus === "recording" ? "30px auto" : "auto auto 30px",
          }}
        >
          {mediaRecorder.current && recordingStatus === "recording" && (
            <>
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
          )}

          {audioChunks.current.length > 0 && recordingStatus === "pause" && (
            <>
              <div
                className="chat-voice-recording-play-button"
                onClick={playAudio}
              >
                <PlayIcon width="17px" height="17px" />
              </div>

              <WavesurferPlayer
                mediaControls={false}
                hideScrollbar={true}
                minPxPerSec={100}
                barHeight={5.5}
                height={34}
                width={120}
                barWidth={2}
                barGap={3}
                waveColor={colors.fadedText}
                cursorColor={colors.brand2}
                cursorWidth={2}
                progressColor={colors.backGround4}
                url={url}
                onReady={onReady}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* <AudioVisualizer
                ref={visualizerRef}
                blob={audioChunks.current[0]}
                width={120}
                height={34}
                barWidth={2}
                gap={3}
                barColor={colors.brand2}
              /> */}
              <span className="chat-voice-record-time">
                {formatTime(totalDuration)}
              </span>
            </>
          )}
        </div>

        <div
          className="chat-voice-recording-pause-button"
          onClick={
            recordingStatus === "pause" ? resumeRecording : pauseRecording
          }
          style={{
            background:
              recordingStatus === "pause" ? "unset" : colors.backGround3,
          }}
        >
          {recordingStatus === "pause" ? (
            <MicrophoneIcon
              color={colors.brand1}
              width="21.5"
              height="21.5"
              style={{ strokeWidth: "1.3" }}
            />
          ) : (
            <>
              <div className="chat-voice-recording-pause-button-line"></div>
              <div className="chat-voice-recording-pause-button-line"></div>
            </>
          )}
        </div>

        <div
          className="chat-voice-recording-send-button"
          onClick={handleSendVoice}
        >
          <SendMessageIcon width="16" height="16" strokeWidth="1.5" />
        </div>
      </div>
    </div>
  );

  function handleSendVoice() {
    const { audioUrl, audioBlob } = processAudioChucks({
      chunks: audioChunks.current,
    });
    const fileMimeType = "webm";
    const audioFile = new File([audioBlob], `recording.${fileMimeType}`, {
      type: audioBlob.type,
    });

    sendVoice({ messageType: "audio", audioUrl, audioFile, duration: time });
  }

  function playAudio() {
    onPlayPause();
    // const { audioUrl } = processAudioChucks({ chunks: audioChunks.current });
    // voicePlayerRef.current = new Audio(audioUrl);
    // voicePlayerRef.current.play();
    // playCounter();
  }

  function resumeRecording() {
    //Stop player if playing the recordew
    if (voicePlayerRef.current) {
      voicePlayerRef.current.pause();
      voicePlayerRef.current.currentTime = 0;
      stopCounter({ counterRef: totalDurationCounterRef });
    }
    mediaRecorder.current.resume();
    setRecordingStatus("recording");
    startCounter({ counterRef: counterIntetvalRef });
  }

  function pauseRecording() {
    mediaRecorder.current.pause();
    const { audioUrl } = processAudioChucks({ chunks: audioChunks.current });
    setUrl(audioUrl);
    setRecordingStatus("pause");
    setTotalDuration(time);
    stopCounter({ counterRef: counterIntetvalRef });
  }

  function processAudioChucks({ chunks }) {
    const audioBlob = new Blob(chunks, { type: mimeType });
    const audioUrl = URL.createObjectURL(audioBlob);
    return { audioBlob, audioUrl };
  }

  async function stopRecording() {
    setRecordingStatus("pause");
    mediaRecorder.current.stop();
  }

  async function startRecording(stream) {
    setRecordingStatus("recording");

    //crete new MediaRecorder instance using stream coming from permissions
    const media = new MediaRecorder(stream, { mimeType });

    //set the MediaRecorder instance to the medaRecorder red
    mediaRecorder.current = media;

    //start recording
    mediaRecorder.current.start(450);

    startCounter({ counterRef: counterIntetvalRef });

    //start(timeSlice) olmadığı için mediaRecorder.current.stop() anında tek bir kez çalışır
    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === "undefined" && event.data.size === 0) return;
      audioChunks.current.push(event.data);
    };

    // mediaRecorder.current.onstop = () => {}
  }

  function handleCancel() {
    mediaRecorder.current.stop();
    setIsShowRecording(false);
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
  }

  function playCounter() {
    const totalCount = totalDuration;
    let currentCounter = 1;
    totalDurationCounterRef.current = setInterval(() => {
      if (currentCounter <= totalCount) {
        setTotalDuration(currentCounter);
        currentCounter += 1;
      } else {
        stopCounter({ counterRef: totalDurationCounterRef });
      }
    }, 1000);
  }

  function startCounter({ counterRef }) {
    counterRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  }

  function stopCounter({ counterRef }) {
    clearInterval(counterRef.current);
  }

  async function getMicrophonePermission() {
    if ("MediaRecorder" in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        setPermission(true);
        setStream(streamData);
        startRecording(streamData);
      } catch (e) {
        alert(e);
      }
    }
  }

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  }
};

export default ChatVoiceRecord;
