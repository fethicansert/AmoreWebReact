import React, { useCallback, useMemo, useRef, useState } from "react";
import { colors } from "../../../utils/theme";
import { PauseIcon, PlayIcon } from "../../../assets/svg/svg_package";
import { getTimeFromISO } from "../../../utils/functions";
import { BeatLoader } from "react-spinners";
import WavesurferPlayer, { useWavesurfer } from "@wavesurfer/react";
import Timeline from "wavesurfer.js/dist/plugins/timeline.esm.js";

const ChatAudio = ({ message, isSender }) => {
  const durationRef = useRef(0);
  const containerRef = useRef(null);

  const onReady = (ws) => {
    if (ws) durationRef.current = ws.getDuration();
    setWavesurfer(ws);
    setIsPlaying(false);
  };

  {
    /* <WavesurferPlayer
          mediaControls={false}
          hideScrollbar={true}
          minPxPerSec={90}
          height={30}
          width={"100%"}
          barWidth={2}
          barGap={2.5}
          barHeight={2}
          barRadius={10}
          waveColor={colors.fadedText}
          cursorColor={colors.brand2}
          progressColor={colors.brand2}
          cursorWidth={2}
          url={`https://cors.albsoftware.tech/${message.dataUrl}`}
          onReady={onReady}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onAudioprocess={(currentTime) => {
            console.log("Current time:", currentTime);
          }}
        /> */
  }

  const { wavesurfer, isPlaying, currentTime } = useWavesurfer({
    container: containerRef,
    hideScrollbar: true,
    mediaControls: false,
    minPxPerSec: 90,
    barWidth: 2,
    barHeight: 2,
    cursorWidth: 2,
    cursorColor: colors.brand2,
    width: "100%",
    height: 35,
    waveColor: colors.fadedText,
    progressColor: colors.brand2,
    url: `https://cors.albsoftware.tech/${message.dataUrl}`,
  });

  const onPlayPause = useCallback(() => {
    wavesurfer && wavesurfer.playPause();
  }, [wavesurfer]);

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

      <div>
        <span style={{ fontSize: ".62rem" }}>
          {formatTime(
            isPlaying ? currentTime : wavesurfer ? wavesurfer.getDuration() : 0
          )}
        </span>
      </div>

      <div
        style={{
          padding: ".3rem",
          background: colors.backGround3,
          borderRadius: "12px",
        }}
      >
        <div ref={containerRef}></div>
      </div>

      <span
        style={{
          position: "relative",
          bottom: "-2.5px",
          right: "-1px",
          marginTop: ".1rem",
          fontSize: ".6rem",
          alignSelf: "center",
          color: isSender ? "rgba(0, 0, 0, .65)" : "rgba(255, 255, 255, .8)",
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
  );
};

export default ChatAudio;

{
  /* <span className="chat-audio-duration">
          {formatTime(currentTimeRef.current)} /{" "}
          {formatTime(durationRef.current)}
        </span>

        <span
          className="chat-audio-time"
          style={{
            color: isSender ? "rgba(0, 0, 0, .65)" : "rgba(255, 255, 255, .8)",
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
        </span> */
}
