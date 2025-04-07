import React, { useEffect, useRef, useState } from "react";
import { colors } from "../../../utils/theme";
import { PauseIcon, PlayIcon } from "../../../assets/svg/svg_package";
import { getTimeFromISO } from "../../../utils/functions";
import { BeatLoader } from "react-spinners";

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
        if (e.target.duration !== Infinity)
          durationRef.current = e.target.duration;
      },
      { signal }
    );

    audioRef.current.addEventListener(
      "timeupdate",
      (e) => {
        const progress = e.target.currentTime / durationRef.current * 100;
        setProgress(progress > 100 ? 100 : progress);
        currentTimeRef.current = Math.round(e.target.currentTime);
      },
      { signal }
    );

    audioRef.current.addEventListener(
      "ended",
      () => {
        currentTimeRef.current = 0;
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

        <span className="chat-audio-duration">
          {formatTime(currentTimeRef.current)} / {formatTime(durationRef.current)}
        </span>

        <span className="chat-audio-time" style={{ color: isSender ? 'rgba(0, 0, 0, .65)' : 'rgba(255, 255, 255, .8)', }}>
          {message.isSending ? <BeatLoader
            size={4}
            color={"rgba(255, 255, 255, .8)"}
            style={{
              alignSelf: "self-end",
              jusifySelf: "center",
              position: "relative",
              top: "2px",
            }}
          /> : getTimeFromISO(message?.createdDate)}

        </span>

      </div>


    </div>
  );
};

export default ChatAudio;
