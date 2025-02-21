import React, { useEffect, useRef, useState } from 'react';

const Chat = () => {

    // const SvgaPlayer = ({ svgaUrl }) => {
    //     const canvasRef = useRef(null); // Canvas elementi için referans
    //     const playerRef = useRef(null); // SVGA player için referans

    //     useEffect(() => {
    //         // SVGA player'ı başlat
    //         const player = new SVGA.Player(canvasRef.current);
    //         const parser = new SVGA.Parser(canvasRef.current);

    //         // SVGA dosyasını yükle ve oynat
    //         parser.load(svgaUrl, (videoItem) => {
    //             player.setVideoItem(videoItem);
    //             player.startAnimation();
    //         })

    //         // Player'ı referans olarak sakla
    //         playerRef.current = player;

    //         // Component temizlendiğinde player'ı durdur
    //         return () => {
    //             player.clear();
    //         };
    //     }, [svgaUrl]);

    //     return <canvas ref={canvasRef} style={{ width: "fit-contet", height: 'fit-content' }} />;
    // };



    const [svga, setSvga] = useState();


    return (
        <section>
            {/* <SvgaPlayer svgaUrl={svga1} /> */}

        </section>
    )
}

export default Chat
