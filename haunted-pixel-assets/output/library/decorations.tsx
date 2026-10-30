<?xml version='1.0' encoding='utf-8'?>
<tileset version="1.10" name="victorian_library_decorations" tilewidth="160" tileheight="128" tilecount="24" columns="0" objectalignment="topleft">
  <properties>
    <property name="schema" type="string" value="victorian.library.v1" />
    <property name="native_grid" type="int" value="32" />
    <property name="placement" type="string" value="tile objects, whole sprites, native size" />
    <property name="lighting" type="string" value="upper-left" />
  </properties>
  <transformations hflip="0" vflip="0" rotate="0" preferuntransformed="1" />
  <tile id="0" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.decorations.terrestrial_globe.v0.south.default" />
      <property name="category" type="string" value="decorations" />
      <property name="kind" type="string" value="terrestrial_globe" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="62" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/decorations/library.decorations.terrestrial_globe.v0.south.default.png" width="32" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="3" y="51" width="23" height="10" />
    </objectgroup>
  </tile>
  <tile id="128" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.decorations.celestial_globe.v0.south.default" />
      <property name="category" type="string" value="decorations" />
      <property name="kind" type="string" value="celestial_globe" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="62" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/decorations/library.decorations.celestial_globe.v0.south.default.png" width="32" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="3" y="51" width="23" height="10" />
    </objectgroup>
  </tile>
  <tile id="256" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.decorations.marble_bust.v0.south.default" />
      <property name="category" type="string" value="decorations" />
      <property name="kind" type="string" value="marble_bust" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="60" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/decorations/library.decorations.marble_bust.v0.south.default.png" width="32" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="8" y="49" width="18" height="10" />
    </objectgroup>
  </tile>
  <tile id="384" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.decorations.bronze_bust.v0.south.default" />
      <property name="category" type="string" value="decorations" />
      <property name="kind" type="string" value="bronze_bust" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="60" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/decorations/library.decorations.bronze_bust.v0.south.default.png" width="32" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="8" y="49" width="18" height="10" />
    </objectgroup>
  </tile>
  <tile id="512" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.decorations.wall_mirror.v0.south.default" />
      <property name="category" type="string" value="decorations" />
      <property name="kind" type="string" value="wall_mirror" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="north wall overlay" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="48" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/decorations/library.decorations.wall_mirror.v0.south.default.png" width="64" height="96" />
  </tile>
  <tile id="640" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.decorations.framed_portrait.v0.south.normal" />
      <property name="category" type="string" value="decorations" />
      <property name="kind" type="string" value="framed_portrait" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="north wall overlay" />
      <property name="state" type="string" value="normal" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="32" />
      <property name="source" type="string" value="animate.portrait, padded only" />
    </properties>
    <image source="sprites/decorations/library.decorations.framed_portrait.v0.south.normal.png" width="64" height="64" />
  </tile>
  <tile id="641" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.decorations.framed_portrait.v0.south.following" />
      <property name="category" type="string" value="decorations" />
      <property name="kind" type="string" value="framed_portrait" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="north wall overlay" />
      <property name="state" type="string" value="following" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="32" />
      <property name="source" type="string" value="animate.portrait, padded only" />
    </properties>
    <image source="sprites/decorations/library.decorations.framed_portrait.v0.south.following.png" width="64" height="64" />
  </tile>
  <tile id="768" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.decorations.botanical_print.v0.south.default" />
      <property name="category" type="string" value="decorations" />
      <property name="kind" type="string" value="botanical_print" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="north wall overlay" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="32" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/decorations/library.decorations.botanical_print.v0.south.default.png" width="32" height="64" />
  </tile>
  <tile id="896" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.decorations.antique_map.v0.south.default" />
      <property name="category" type="string" value="decorations" />
      <property name="kind" type="string" value="antique_map" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="north wall overlay" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="32" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/decorations/library.decorations.antique_map.v0.south.default.png" width="64" height="64" />
  </tile>
  <tile id="1024" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.decorations.butterfly_display.v0.south.default" />
      <property name="category" type="string" value="decorations" />
      <property name="kind" type="string" value="butterfly_display" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="north wall overlay" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="16" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/decorations/library.decorations.butterfly_display.v0.south.default.png" width="32" height="32" />
  </tile>
  <tile id="1152" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.decorations.specimen_dome.v0.south.default" />
      <property name="category" type="string" value="decorations" />
      <property name="kind" type="string" value="specimen_dome" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="tabletop or shelf overlay" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="16" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/decorations/library.decorations.specimen_dome.v0.south.default.png" width="32" height="32" />
  </tile>
  <tile id="1280" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.decorations.ceramic_vase.v0.south.default" />
      <property name="category" type="string" value="decorations" />
      <property name="kind" type="string" value="ceramic_vase" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="tabletop or shelf overlay" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="16" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/decorations/library.decorations.ceramic_vase.v0.south.default.png" width="32" height="32" />
  </tile>
  <tile id="1312" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.decorations.ceramic_vase.v1.south.default" />
      <property name="category" type="string" value="decorations" />
      <property name="kind" type="string" value="ceramic_vase" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="tabletop or shelf overlay" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="16" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/decorations/library.decorations.ceramic_vase.v1.south.default.png" width="32" height="32" />
  </tile>
  <tile id="1408" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.decorations.telescope.v0.south.default" />
      <property name="category" type="string" value="decorations" />
      <property name="kind" type="string" value="telescope" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="60" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/decorations/library.decorations.telescope.v0.south.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="13" y="49" width="37" height="10" />
    </objectgroup>
  </tile>
  <tile id="1536" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.decorations.hourglass.v0.south.default" />
      <property name="category" type="string" value="decorations" />
      <property name="kind" type="string" value="hourglass" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="tabletop or shelf overlay" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="16" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/decorations/library.decorations.hourglass.v0.south.default.png" width="32" height="32" />
  </tile>
  <tile id="1664" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.decorations.ornamental_clock.v0.south.default" />
      <property name="category" type="string" value="decorations" />
      <property name="kind" type="string" value="ornamental_clock" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="tabletop or shelf overlay" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="16" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/decorations/library.decorations.ornamental_clock.v0.south.default.png" width="32" height="32" />
  </tile>
  <tile id="1792" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.decorations.certificate.v0.south.default" />
      <property name="category" type="string" value="decorations" />
      <property name="kind" type="string" value="certificate" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="north wall overlay" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="16" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/decorations/library.decorations.certificate.v0.south.default.png" width="32" height="32" />
  </tile>
  <tile id="1920" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.decorations.taxidermy_bird.v0.south.default" />
      <property name="category" type="string" value="decorations" />
      <property name="kind" type="string" value="taxidermy_bird" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="tabletop or shelf overlay" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="16" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/decorations/library.decorations.taxidermy_bird.v0.south.default.png" width="32" height="32" />
  </tile>
  <tile id="2048" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.decorations.urn.v0.south.default" />
      <property name="category" type="string" value="decorations" />
      <property name="kind" type="string" value="urn" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="tabletop or shelf overlay" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="16" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/decorations/library.decorations.urn.v0.south.default.png" width="32" height="32" />
  </tile>
  <tile id="2176" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.decorations.potted_fern.v0.south.default" />
      <property name="category" type="string" value="decorations" />
      <property name="kind" type="string" value="potted_fern" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="tabletop or shelf overlay" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="16" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/decorations/library.decorations.potted_fern.v0.south.default.png" width="32" height="32" />
  </tile>
  <tile id="2304" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.decorations.velvet_curtain.v0.south.default" />
      <property name="category" type="string" value="decorations" />
      <property name="kind" type="string" value="velvet_curtain" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="north wall overlay" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="64" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/decorations/library.decorations.velvet_curtain.v0.south.default.png" width="64" height="128" />
  </tile>
  <tile id="2336" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.decorations.velvet_curtain.v1.south.default" />
      <property name="category" type="string" value="decorations" />
      <property name="kind" type="string" value="velvet_curtain" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="north wall overlay" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="64" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/decorations/library.decorations.velvet_curtain.v1.south.default.png" width="64" height="128" />
  </tile>
  <tile id="2432" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.decorations.ornate_rug.v0.south.default" />
      <property name="category" type="string" value="decorations" />
      <property name="kind" type="string" value="ornate_rug" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor under furniture" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="80" />
      <property name="anchor_y" type="int" value="126" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/decorations/library.decorations.ornate_rug.v0.south.default.png" width="160" height="128" />
  </tile>
  <tile id="2464" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.decorations.ornate_rug.v1.south.default" />
      <property name="category" type="string" value="decorations" />
      <property name="kind" type="string" value="ornate_rug" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor under furniture" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="80" />
      <property name="anchor_y" type="int" value="126" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/decorations/library.decorations.ornate_rug.v1.south.default.png" width="160" height="128" />
  </tile>
</tileset>