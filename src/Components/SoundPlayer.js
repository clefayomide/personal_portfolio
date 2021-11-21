import React, { useContext, useState } from "react";
import Sound from "react-sound";
import falling from "../falling.mp3";
import avinam from "../ES_Avinam - Valante.mp3";
import { Context } from "../App";

const SoundPlayer = ({
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying,
}) => {
  const { isPlaying } = useContext(Context);
  const [vol] = useState(15);
  return (
    <div>
      <Sound
        url={falling}
        playStatus={!isPlaying ? Sound.status.STOPPED : Sound.status.PLAYING}
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
