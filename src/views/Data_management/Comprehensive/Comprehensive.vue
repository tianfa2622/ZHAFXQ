<template>
  <div class="h-100 w-100 bgc">
    <MapComponent v-if="currentPage === '1'" :currentPage.sync="currentPage" />
    <VisitorManagement
      v-if="currentPage === '2'"
      :currentPage.sync="currentPage"
    />
    <Parkinglot v-if="currentPage === '3'" :currentPage.sync="currentPage" />
    <GeneralSituation
      v-if="currentPage === '4'"
      :currentPage.sync="currentPage"
    />
    <Communityinfo v-if="currentPage === '5'" :currentPage.sync="currentPage" />
    <Accesscontrol v-if="currentPage === '6'" :currentPage.sync="currentPage" />
    <BuildingAccessControl
      v-if="currentPage === '7'"
      :currentPage.sync="currentPage"
    />
    <UnitInfo v-if="currentPage === '8'" :currentPage.sync="currentPage" />
    <HousingInfo v-if="currentPage === '9'" :currentPage.sync="currentPage" />
    <RoomRelationship
      v-if="currentPage === '10'"
      :currentPage.sync="currentPage"
    />
  </div>
</template>

<script>
import MapComponent from './components/MapComponent/index'
import Parkinglot from './components/Parkinglot/index'
import VisitorManagement from './components/VisitorManagement/index'
import GeneralSituation from './components/Parkinglot/GeneralSituation/index'
import Communityinfo from './components/Communityinfo/index'
import Accesscontrol from './components/Accesscontrol/index'
import BuildingAccessControl from './components/Accesscontrol/BuildingAccessControl/index'
import UnitInfo from './components/Communityinfo/Unit_Info/index'
import HousingInfo from './components/Communityinfo/HousingInfo/index'
import RoomRelationship from './components/Communityinfo/Roomrelationship/index'
export default {
  name: 'Indexpage',
  components: {
    MapComponent,
    Parkinglot,
    VisitorManagement,
    GeneralSituation,
    Communityinfo,
    Accesscontrol,
    BuildingAccessControl,
    UnitInfo,
    HousingInfo,
    RoomRelationship
  },
  data() {
    return {
      currentPage: '1'
    }
  }
}
</script>

<style lang="less" scoped>
.bgc {
  background-color: #fff;
}
</style>
