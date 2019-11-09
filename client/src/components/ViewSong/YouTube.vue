<template>
<panel title="YouTube Video">
<!--  TODO: сделать резиновым размер YouTube-->
  <youtube
    ref="youtube"
  :video-id="youtubeId"
  :player-height="230">

  </youtube>
  </panel>
</template>

<script>
import VueYouTube from 'vue-youtube-embed'
export default {
	name: 'YouTube',
	props: [
		'youtubeId'
	],
	components: {
		VueYouTube
	}
}
</script>

<style scoped>

</style>
