<template>
  <section class="video-box">
    <videoPlayer
      ref="videoPlayer"
      :options="videoOptions"
      class="vjs-custom-skin videoPlayer"
      :playsinline="true"
    />
  </section>
</template>

<script>
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "vue-video-player/src/custom-theme.css";
import { videoPlayer } from "vue-video-player";
import "videojs-flash";
import SWF_URL from "videojs-swf/dist/video-js.swf";

videojs.options.flash.swf = SWF_URL; // 设置flash路径，Video.js会在不支持html5的浏览中使用flash播放视频文件

export default {
  components: {
    videoPlayer
  },

  data() {
    return {
      videoSrc:
        "https://overwatch.nosdn.127.net/1/assets/img/pages/home/anniversary/header.webm",

      // 视频播放

      videoOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度

        // autoplay: true, //如果true,浏览器准备好时开始回放。

        muted: false, // 默认情况下将会消除任何音频。

        fluid: true,

        loop: false, // 导致视频一结束就重新开始。

        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）

        language: "zh-CN",

        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）

        techOrder: ["html5", "flash"], // 兼容顺序

        sources: [
          {
            // 流配置，数组形式，会根据兼容顺序自动切换

            src:
              "https://overwatch.nosdn.127.net/1/assets/img/pages/home/anniversary/header.webm",
            type: "video/webm"
          }
        ],

        poster: "../../assets/images/VideoMonitoring/u155.png", //你的封面地址

        // width: document.documentElement.clientWidth,

        notSupportedMessage: "此视频暂无法播放，请稍后再试", // 允许覆盖Video.js无法播放媒体源时显示的默认信息。

        controlBar: {
          timeDivider: false,

          durationDisplay: false,

          remainingTimeDisplay: false,

          currentTimeDisplay: false, // 当前时间

          volumeControl: true, // 声音控制键

          playToggle: true, // 暂停和播放键

          progressControl: false, // 进度条

          fullscreenToggle: true // 全屏按钮
        }
      }
    };
  }
};
</script>

<style lang="less" scoped>
.video-box {
  width: 100%;
  height: 100%;
  // margin: 0 auto;
}
::v-deep .video-js .vjs-big-play-button {
  height: 2em !important;
  width: 2em !important;
  line-height: 2em !important;
  border-radius: 1em !important;
  margin-left: -1em !important;
}
</style>
