import ReactPlayer from "react-player/youtube";
import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeVideoFormList,
  updateVideoToNextVideo,
} from "../../store/playlist.slice";
import FBox from "../FBox/FBox";
import styles from "./VideoPlayer.module.css";
import { Video } from "../../../../types/playlist";

const videoOptions = {
  playerVars: {
    autoplay: 1,
  },
};

const youTubeUrlBuilder = (videoId: string) =>
  `https://www.youtube.com/watch?v=${videoId}`;

type VideoPlayerProps = {
  currentVideo: Video;
};

const VideoPlayer = ({ currentVideo }: VideoPlayerProps) => {
  const dispatch = useDispatch();
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    if (currentVideo?.videoId) {
      setVideoUrl(youTubeUrlBuilder(currentVideo.videoId));
    }
  }, [currentVideo]);

  const handleChangeToNextVideo = useCallback(() => {
    if (currentVideo) {
      dispatch(removeVideoFormList(currentVideo.id));
      dispatch(updateVideoToNextVideo());
    }
  }, [currentVideo, dispatch]);

  const handleError = useCallback(
    (e: any) => {
      if (e.data) {
        handleChangeToNextVideo();
      }
    },
    [handleChangeToNextVideo]
  );

  const onPlayerEnd = useCallback(() => {
    handleChangeToNextVideo();
  }, [handleChangeToNextVideo]);

  return (
    <FBox className={styles.videoOutterContainer}>
      <ReactPlayer
        url={videoUrl}
        config={videoOptions}
        playing
        onEnded={onPlayerEnd}
        onError={handleError}
        controls
      />
    </FBox>
  );
};

export default VideoPlayer;
