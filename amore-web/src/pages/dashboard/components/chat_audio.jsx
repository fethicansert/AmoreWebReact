import React, { useEffect, useRef, useState } from 'react'
import { colors } from '../../../utils/theme';
import { PauseIcon, PlayIcon } from '../../../assets/svg/svg_package';

const ChatAudio = ({ message, isSender }) => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [canPlay, setCanPlay] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(new Audio(message?.dataUrl));
    const currentTimeRef = useRef(0);

    useEffect(() => {

        const controller = new AbortController();
        const { signal } = controller;

        audioRef.current.addEventListener('timeupdate', (e) => {
            console.log(e.target.currentTime);

            setProgress((e.target.currentTime / e.target.duration) * 100);
            currentTimeRef.current = e.target.currentTime;
        }, { signal });

        audioRef.current.addEventListener('ended', () => {
            setIsPlaying(false);
            setProgress(0);
        }, { signal });

        audioRef.current.addEventListener('canplay', () => setDuration(audioRef.current.duration), { signal });

        return () => controller.abort();
    }, []);


    const togglePlay = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    const bubbleStyle = {
        background: isSender ? colors.inputColor : colors.brand1,
        color: isSender ? colors.darkText : colors.whiteText,
        alignSelf: isSender ? 'self-start' : 'self-end'
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);

        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (

        <div className='chat-audio-container' style={bubbleStyle}>

            {isPlaying ? <PauseIcon color={isSender ? colors.darkText : colors.backGround3} onClick={togglePlay} /> : <PlayIcon onClick={togglePlay} color={isSender ? colors.darkText : colors.backGround3} />}

            <div style={{ height: '2.5px', background: isSender ? '#00000033' : '#FFFFFF33', borderRadius: '2px', position: 'relative' }}>
                <div style={{ width: `${progress}%`, height: '100%', background: colors.backGround3, position: 'relative', transition: isPlaying ? `width 0.25s ease-in` : 'none' }}>
                    <div className='audio-duration-progress-circle' style={{ background: isSender ? colors.darkText : colors.backGround3 }}></div>
                </div>

                <span className='audio-duration'> {formatTime(currentTimeRef.current)} / {formatTime(duration)}</span>
            </div>

        </div>

    )
}

export default ChatAudio;


// .chat-audio-container {
//     position: relative;
//     width: fit-content;
//     display: grid;
//     grid-template-columns: auto 200px;
//     gap: 0 2px;
//     align-items: center;
//     padding: .75rem 1.1rem .7rem .6rem;
//     background: var(--brand1);
//     margin-block: .85rem;
//     border-radius: 20px;
// }


// const onReady = (ws) => {
//     setWavesurfer(ws)
//     setIsPlaying(false)
// }

// const onPlayPause = () => {
//     console.log(wavesurfer);
//     wavesurfer && wavesurfer.playPause()
// }

/* <WavesurferPlayer
              barRadius={'12px'}
              height={50}
              waveColor="violet"
              url="/sounds/dogdoing.mp3"
              onReady={onReady}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
          /> */