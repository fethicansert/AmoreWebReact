import React, { useEffect, useRef, useState } from 'react'
import { colors } from '../../../utils/theme';
import { PauseButtonIcon, PlayButtonIcon } from '../../../assets/svg/svg_package';

const ChatAudio = ({ message, isSender }) => {

    const [isPlaying, setIsPlaying] = useState(false)
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0)
    const audioRef = useRef(new Audio(message?.dataUrl));
    const currentTimeRef = useRef(0);

    useEffect(() => {

        const controller = new AbortController();
        const { signal } = controller;

        audioRef.current.addEventListener('timeupdate', (e) => {
            setProgress((e.target.currentTime / e.target.duration) * 100);
            currentTimeRef.current = e.target.currentTime;
        }, { signal });

        audioRef.current.addEventListener('ended', () => setIsPlaying(false), { signal });

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



    return (

        <div className='chat-audio-container' style={bubbleStyle}>

            {isPlaying ? <PauseButtonIcon color={isSender ? colors.darkText : colors.backGround3} onClick={togglePlay} /> : <PlayButtonIcon onClick={togglePlay} color={isSender ? colors.darkText : colors.backGround3} />}

            <div style={{ height: '2.5px', background: isSender ? '#00000033' : '#FFFFFF33', transition: 'width 0.1s ease', borderRadius: '2px', position: 'relative' }}>
                <div style={{ width: `${progress}%`, height: '100%', background: colors.backGround3, position: 'relative' }}>
                    <div className='audio-duration-progress-circle' style={{ background: isSender ? colors.darkText : colors.backGround3 }}></div>
                </div>

                <span className='audio-duration'> 0:{Math.floor(currentTimeRef.current)} / 0:{Math.floor(duration)}</span>
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