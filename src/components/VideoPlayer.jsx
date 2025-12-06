import ReactPlayer from "react-player";
import {
  MediaController,
  MediaControlBar,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaVolumeRange,
  MediaPlaybackRateButton,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaMuteButton,
  MediaFullscreenButton,
  MediaCaptionsButton,
} from "media-chrome/react";
import { useAnimeEpisodeSourcesStore } from "../store/ZustandStore";
import { useEffect } from "react";

const VideoPlayer = ({ episodeId }) => {
  const { animeSources, subtitles, loading, error, fetchAnimeEpisodeSource } = useAnimeEpisodeSourcesStore();

  const proxyURL=`https://m3u8-streaming-proxy-eta.vercel.app/api/v1/streamingProxy?url=${animeSources[0]?.url}`;
  const url = "https://vault-14.owocdn.top/stream/14/07/d863a663daf4e8f632af84f2f83325a3b5a6aac088e0d981cd8ba6f5fc0db312/uwu.m3u8";
  // useEffect(() => {
  //   fetchAnimeEpisodeSource(episodeId, subtitles);
  // }, [episodeId, subtitles, fetchAnimeEpisodeSource]);

  if (loading) return
  <div >
    <span className="loading loading-bars loading-xl text-warning"></span>;
  </div>
  if (error) return <div>Error: {error}</div>;



  return (
    <div>
      <h1>My Video Player</h1>


      
      <MediaController
      style={{
        width: "100%",
        aspectRatio: "16/9",
      }}
    >
      <ReactPlayer
        slot="media"
        // src={animeSources[0]?.url}
        src={proxyURL}
        controls={false}
        style={{
          width: "100%",
          height: "100%",
          "--controls": "none",
        }}
      ></ReactPlayer>
      <MediaControlBar>
        <MediaPlayButton />
        <MediaSeekBackwardButton seekOffset={10} />
        <MediaSeekForwardButton seekOffset={10} />
        <MediaTimeRange />
        <MediaTimeDisplay showDuration />
        <MediaMuteButton />
        <MediaVolumeRange />
        <MediaPlaybackRateButton />
        <MediaFullscreenButton />
        <MediaCaptionsButton  mediaSubtitlesList={subtitles}/>
      </MediaControlBar>
    </MediaController>
    </div>
    
  );
}
export default VideoPlayer;