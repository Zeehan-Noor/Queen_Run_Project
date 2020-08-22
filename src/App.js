import React, { useRef, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
// import useWebAnimations from "@wellyshen/use-web-animations";
// import { scryRenderedDOMComponentsWithClass } from 'react-dom/test-utils';

function App() {
  const firstBackground = useRef(null);
  const secondBackground = useRef(null);
  const firstForeground = useRef(null);
  const secondForeground = useRef(null);
  const aliceAnimation = useRef(null);
  useEffect(() => {

    // For Foregorund Key Frame
    var keyFrameForeground = [
      { transform: 'translateX(0%)' },
      { transform: 'translateX(-100%)' },
    ];

    // Background Key Frame 
    var keyFrameFirstBackground = [
      { transform: 'translateX(0%)' },
      { transform: 'translateX(-1000px)' },

    ];

    var keyFrameSecondBackground = [
      { transform: 'translateX(0%)' },
      { transform: 'translateX(-100%)' },
    ];
//******************************* */

    var TimingFirstBackground = {
      duration: 27000,
      iterations: Infinity,

    }

    var TimingSecondBackground = {
      duration: 30000,
      iterations: Infinity,

    }


    var sceneryTimingForeground = {
      duration: 30000,
      iterations: Infinity,
    };

    const spriteFrames = [
      { transform: "translateY(0)" },
      { transform: "translateY(-100%)" }
    ]

    const firstForegroundMovement = firstForeground.current.animate(keyFrameForeground, sceneryTimingForeground);
    firstForegroundMovement.currentTime = firstForegroundMovement.effect.getTiming().duration / 4;

    const secondForegroundMovement = secondForeground.current.animate(keyFrameForeground, sceneryTimingForeground);

    const firstBackgroundMovement = firstBackground.current.animate(keyFrameFirstBackground, TimingFirstBackground);
    firstBackgroundMovement.currentTime = firstBackgroundMovement.effect.getTiming().duration / 4;

    const secondBackgroundMovement = secondBackground.current.animate(keyFrameSecondBackground, TimingSecondBackground);


    const aliceAnimationMovement = aliceAnimation.current.animate(spriteFrames, {
      easing: 'steps(7,end)',
      direction: 'reverse',
      duration: 600,
      playbackRate: 0.5,
      iterations: Infinity,
    });

    var scenes = [firstForegroundMovement, secondForegroundMovement, firstBackgroundMovement, secondBackgroundMovement];

    const adjustPlaybackRate = () => {
      if (aliceAnimationMovement.playbackRate > 1) {
        scenes.forEach((animation) => {
          animation.playbackRate = aliceAnimationMovement.playbackRate * 3;
          // console.log(animation.playbackRate);
        })
      } else {
        scenes.forEach((animation) => {
          animation.playbackRate = 0;
          // console.log(animation.playbackRate);
        })
      }
    }


    const goFaster = () => {
      aliceAnimationMovement.playbackRate *= 1.1;
      adjustPlaybackRate();
    }

    window.addEventListener("click", goFaster);
  })
  return (
    <div className="wrapper">
      <div className="sky"></div>
      <div className="earth">
        <div id="red-queen_and_alice">
          <img id="red-queen_and_alice_sprite" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x" alt="Alice and the Red Queen running to stay in place." ref={aliceAnimation} />
        </div>
      </div>
      <div className="scenery" id="foreground2" ref={secondForeground}>
        <img id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" " />
        <img id="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" " />
      </div>
      <div className="scenery" id="foreground1" ref={firstForeground}>
        <img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" " />
      </div>
      <div className="scenery" id="background1" ref={firstBackground} >
        <img id="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" " />
        <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" " />
        <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" " />
      </div>
      <div className="scenery" id="background2" ref={secondBackground} >
        <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" alt=" " />
        <img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" alt=" " />
        <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" alt=" " />
      </div>
    </div>
  );
}

export default App;