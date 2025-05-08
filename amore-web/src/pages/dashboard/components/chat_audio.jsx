import React, { useCallback, useEffect, useRef, useState } from "react";
import { colors } from "../../../utils/theme";
import { PauseIcon, PlayIcon } from "../../../assets/svg/svg_package";
import { getTimeFromISO } from "../../../utils/functions";
import { BeatLoader } from "react-spinners";
import WavesurferPlayer, { useWavesurfer } from "@wavesurfer/react";

const ChatAudio = ({ message, isSender }) => {
  const containerRef = useRef(null);

  const { wavesurfer, isPlaying, currentTime } = useWavesurfer({
    container: containerRef,
    hideScrollbar: true,
    mediaControls: false,
    minPxPerSec: 90,
    barRadius: 5,
    barWidth: 2.5,
    barGap: 2.5,
    barHeight: 1.5,
    cursorWidth: 2,
    cursorColor: isSender ? colors.darkText : colors.whiteText,
    width: "100%",
    height: 30,
    waveColor: "rgb(195, 195, 195)",
    progressColor: isSender ? colors.darkText : colors.whiteText,
    url: `https://cors.albsoftware.tech/${message.dataUrl}`,
  });

  const onPlayPause = useCallback(() => {
    wavesurfer && wavesurfer.playPause();
  }, [wavesurfer]);

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
          width="23"
          height="26"
          color={isSender ? colors.darkText : colors.backGround3}
          onClick={onPlayPause}
        />
      ) : (
        <PlayIcon
          width="23"
          height="26"
          onClick={onPlayPause}
          color={isSender ? colors.darkText : colors.backGround3}
        />
      )}

      <div style={{ position: "relative" }}>
        <div ref={containerRef} id="waveform"></div>

        <div
          style={{
            width: "100%",
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingRight: ".2rem",
            left: "0",
            bottom: "-15.5px",
          }}
        >
          <span style={{ fontSize: ".55rem" }}>
            {formatTime(
              isPlaying
                ? currentTime
                : wavesurfer
                ? wavesurfer.getDuration()
                : 0
            )}
          </span>

          <span
            style={{
              position: "relative",
              fontSize: ".55rem",
              alignSelf: "center",
              color: isSender
                ? "rgba(0, 0, 0, .65)"
                : "rgba(255, 255, 255, .8)",
            }}
          >
            {message.isSending ? (
              <BeatLoader
                size={4}
                color={"rgba(255, 255, 255, .8)"}
                style={{
                  alignSelf: "self-end",
                  jusifySelf: "center",
                  position: "relative",
                  top: "2px",
                }}
              />
            ) : (
              getTimeFromISO(message?.createdDate)
            )}
          </span>
        </div>
      </div>
    </div>
  );

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  }
};

export default ChatAudio;
