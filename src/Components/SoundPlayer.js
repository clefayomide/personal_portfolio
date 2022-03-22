import React, { useState } from "react";
import Sound from "react-sound";
// eslint-disable-next-line
import falling from "../falling.mp3";
import avinam from "../ES_Avinam - Valante.mp3";

const SoundPlayer = ({
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying,
}) => {
  const [vol] = useState(15);
  return (
    <div>
      <Sound
        url={avinam}
        playStatus={true}
        onLoading={handleSongLoading}
        onPlaying={handleSongPlaying}
        onFinishedPlaying={handleSongFinishedPlaying}
        loop={true}
        volume={vol}
      />
    </div>
  );
};

export default SoundPlayer;
