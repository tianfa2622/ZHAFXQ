<template>
  <div class="h-100 w-100 bgc">
    <Historical v-if="Page === '1'" :Page.sync="Page" />
    <DeviceInformation v-if="Page === '2'" :Page.sync="Page" />
  </div>
</template>

<script>
import Historical from './Historical1'
import DeviceInformation from './DeviceInformation'
export default {
  name: 'Historicalvioed',
  components: {
    Historical,
    DeviceInformation
  },
  data() {
    return {
      Page: '1'
    }
  }
}
</script>

<style lang="less" scoped>
.bgc {
  background-color: #fff;
}
</style>
