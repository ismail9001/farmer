<template>
<panel title="YouTube Video">
  <youtube
    ref="youtube"
  :video-id="youtubeId"
  :player-height="230">

  </youtube>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
import VueYouTube from 'vue-youtube-embed'
export default {
	name: 'YouTube',
	props: [
		'youtubeId'
	],
	components: {
		Panel,
		VueYouTube
	}
}
</script>

<style scoped>

</style>
