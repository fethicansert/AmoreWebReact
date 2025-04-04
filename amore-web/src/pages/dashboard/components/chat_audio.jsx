import React, { useEffect, useRef, useState } from "react";
import { colors } from "../../../utils/theme";
import { PauseIcon, PlayIcon } from "../../../assets/svg/svg_package";

const ChatAudio = ({ message, isSender }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const audioRef = useRef(new Audio(message.dataUrl));
  const currentTimeRef = useRef(0);
  const durationRef = useRef(message?.metadata?.duration ?? 0);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    audioRef.current.addEventListener(
      "loadedmetadata",
      (e) => {
        // console.log(e.target.duration);
      },
      { signal }
    );


    audioRef.current.addEventListener(
      "timeupdate",
      (e) => {
        const progress = e.target.currentTime / durationRef.current * 100;
        if (progress <= 100) {
          setProgress(progress);
          currentTimeRef.current = e.target.currentTime;
        }
      },
      { signal }
    );

    audioRef.current.addEventListener(
      "ended",
      () => {
        setIsPlaying(false);
        setProgress(0);
      },
      { signal }
    );

    return () => controller.abort();
  }, []);

  const togglePlay = () => {
    // const audio = audioRef.current;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div
      className="chat-audio"
      style={{
        background: isSender ? colors.inputColor : colors.brand1,
        color: isSender ? colors.darkText : colors.whiteText,
        alignSelf: isSender ? "flex-start" : "flex-end",
      }}
    >

      {isPlaying ? (
        <PauseIcon
          color={isSender ? colors.darkText : colors.backGround3}
          onClick={togglePlay}
        />
      ) : (
        <PlayIcon
          onClick={togglePlay}
          color={isSender ? colors.darkText : colors.backGround3}
        />
      )}

      <div
        style={{
          height: "2.5px",
          background: isSender ? "#00000033" : "#FFFFFF33",
          borderRadius: "2px",
          position: "relative",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: colors.backGround3,
            position: "relative",
            transition: isPlaying ? `width 0.25s ease-in` : "none",
          }}
        >
          <div
            className="audio-duration-progress-circle"
            style={{
              background: isSender ? colors.darkText : colors.backGround3,
            }}
          ></div>
        </div>

        <span className="audio-duration">
          {" "}
          {formatTime(currentTimeRef.current)} / {formatTime(durationRef.current)}
        </span>
      </div>
    </div>
  );
};

export default ChatAudio;
