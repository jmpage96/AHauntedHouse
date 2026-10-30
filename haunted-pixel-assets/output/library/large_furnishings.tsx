<?xml version='1.0' encoding='utf-8'?>
<tileset version="1.10" name="victorian_library_large_furnishings" tilewidth="96" tileheight="160" tilecount="25" columns="0" objectalignment="topleft">
  <properties>
    <property name="schema" type="string" value="victorian.library.v1" />
    <property name="native_grid" type="int" value="32" />
    <property name="placement" type="string" value="tile objects, whole sprites, native size" />
    <property name="lighting" type="string" value="upper-left" />
  </properties>
  <transformations hflip="0" vflip="0" rotate="0" preferuntransformed="1" />
  <tile id="0" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.large_furnishings.rolling_ladder.v0.south.default" />
      <property name="category" type="string" value="large_furnishings" />
      <property name="kind" type="string" value="rolling_ladder" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="125" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/large_furnishings/library.large_furnishings.rolling_ladder.v0.south.default.png" width="32" height="128" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="114" width="22" height="10" />
    </objectgroup>
  </tile>
  <tile id="128" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.large_furnishings.wooden_ladder.v0.south.default" />
      <property name="category" type="string" value="large_furnishings" />
      <property name="kind" type="string" value="wooden_ladder" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="87" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/large_furnishings/library.large_furnishings.wooden_ladder.v0.south.default.png" width="32" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="76" width="18" height="10" />
    </objectgroup>
  </tile>
  <tile id="256" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.large_furnishings.library_mantel.v0.south.fire_0" />
      <property name="category" type="string" value="large_furnishings" />
      <property name="kind" type="string" value="library_mantel" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="fire_0" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="62" />
      <property name="source" type="string" value="animate.fireplace with native mantel dressing" />
    </properties>
    <image source="sprites/large_furnishings/library.large_furnishings.library_mantel.v0.south.fire_0.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="4" y="51" width="56" height="10" />
    </objectgroup>
    <animation>
      <frame tileid="256" duration="100" />
      <frame tileid="257" duration="100" />
      <frame tileid="258" duration="100" />
      <frame tileid="259" duration="100" />
    </animation>
  </tile>
  <tile id="257" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.large_furnishings.library_mantel.v0.south.fire_1" />
      <property name="category" type="string" value="large_furnishings" />
      <property name="kind" type="string" value="library_mantel" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="fire_1" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="62" />
      <property name="source" type="string" value="animate.fireplace with native mantel dressing" />
    </properties>
    <image source="sprites/large_furnishings/library.large_furnishings.library_mantel.v0.south.fire_1.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="4" y="51" width="56" height="10" />
    </objectgroup>
  </tile>
  <tile id="258" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.large_furnishings.library_mantel.v0.south.fire_2" />
      <property name="category" type="string" value="large_furnishings" />
      <property name="kind" type="string" value="library_mantel" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="fire_2" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="62" />
      <property name="source" type="string" value="animate.fireplace with native mantel dressing" />
    </properties>
    <image source="sprites/large_furnishings/library.large_furnishings.library_mantel.v0.south.fire_2.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="4" y="51" width="56" height="10" />
    </objectgroup>
  </tile>
  <tile id="259" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.large_furnishings.library_mantel.v0.south.fire_3" />
      <property name="category" type="string" value="large_furnishings" />
      <property name="kind" type="string" value="library_mantel" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="fire_3" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="62" />
      <property name="source" type="string" value="animate.fireplace with native mantel dressing" />
    </properties>
    <image source="sprites/large_furnishings/library.large_furnishings.library_mantel.v0.south.fire_3.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="4" y="51" width="56" height="10" />
    </objectgroup>
  </tile>
  <tile id="384" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.large_furnishings.fireplace_grate.v0.south.default" />
      <property name="category" type="string" value="large_furnishings" />
      <property name="kind" type="string" value="fireplace_grate" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="hearth overlay" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="16" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/large_furnishings/library.large_furnishings.fireplace_grate.v0.south.default.png" width="64" height="32" />
  </tile>
  <tile id="512" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.large_furnishings.firewood_basket.v0.south.default" />
      <property name="category" type="string" value="large_furnishings" />
      <property name="kind" type="string" value="firewood_basket" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="29" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/large_furnishings/library.large_furnishings.firewood_basket.v0.south.default.png" width="32" height="32" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="7" y="18" width="19" height="10" />
    </objectgroup>
  </tile>
  <tile id="640" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.large_furnishings.fireplace_tools.v0.south.default" />
      <property name="category" type="string" value="large_furnishings" />
      <property name="kind" type="string" value="fireplace_tools" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/large_furnishings/library.large_furnishings.fireplace_tools.v0.south.default.png" width="32" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="8" y="50" width="17" height="10" />
    </objectgroup>
  </tile>
  <tile id="768" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.large_furnishings.folding_screen.v0.south.default" />
      <property name="category" type="string" value="large_furnishings" />
      <property name="kind" type="string" value="folding_screen" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="48" />
      <property name="anchor_y" type="int" value="93" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/large_furnishings/library.large_furnishings.folding_screen.v0.south.default.png" width="96" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="82" width="86" height="10" />
    </objectgroup>
  </tile>
  <tile id="800" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.large_furnishings.folding_screen.v1.south.default" />
      <property name="category" type="string" value="large_furnishings" />
      <property name="kind" type="string" value="folding_screen" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="48" />
      <property name="anchor_y" type="int" value="93" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/large_furnishings/library.large_furnishings.folding_screen.v1.south.default.png" width="96" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="82" width="86" height="10" />
    </objectgroup>
  </tile>
  <tile id="896" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.large_furnishings.display_cabinet.v0.south.default" />
      <property name="category" type="string" value="large_furnishings" />
      <property name="kind" type="string" value="display_cabinet" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="94" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/large_furnishings/library.large_furnishings.display_cabinet.v0.south.default.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="78" width="54" height="14" />
    </objectgroup>
  </tile>
  <tile id="928" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.large_furnishings.display_cabinet.v1.south.default" />
      <property name="category" type="string" value="large_furnishings" />
      <property name="kind" type="string" value="display_cabinet" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="94" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/large_furnishings/library.large_furnishings.display_cabinet.v1.south.default.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="78" width="54" height="14" />
    </objectgroup>
  </tile>
  <tile id="1024" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.large_furnishings.curiosity_cabinet.v0.south.default" />
      <property name="category" type="string" value="large_furnishings" />
      <property name="kind" type="string" value="curiosity_cabinet" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="158" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/large_furnishings/library.large_furnishings.curiosity_cabinet.v0.south.default.png" width="64" height="160" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="142" width="54" height="14" />
    </objectgroup>
  </tile>
  <tile id="1056" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.large_furnishings.curiosity_cabinet.v1.south.default" />
      <property name="category" type="string" value="large_furnishings" />
      <property name="kind" type="string" value="curiosity_cabinet" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="158" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/large_furnishings/library.large_furnishings.curiosity_cabinet.v1.south.default.png" width="64" height="160" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="142" width="54" height="14" />
    </objectgroup>
  </tile>
  <tile id="1152" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.large_furnishings.catalogue_cabinet.v0.south.default" />
      <property name="category" type="string" value="large_furnishings" />
      <property name="kind" type="string" value="catalogue_cabinet" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="48" />
      <property name="anchor_y" type="int" value="93" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/large_furnishings/library.large_furnishings.catalogue_cabinet.v0.south.default.png" width="96" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="4" y="77" width="90" height="14" />
    </objectgroup>
  </tile>
  <tile id="1184" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.large_furnishings.catalogue_cabinet.v1.south.default" />
      <property name="category" type="string" value="large_furnishings" />
      <property name="kind" type="string" value="catalogue_cabinet" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="48" />
      <property name="anchor_y" type="int" value="93" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/large_furnishings/library.large_furnishings.catalogue_cabinet.v1.south.default.png" width="96" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="4" y="77" width="90" height="14" />
    </objectgroup>
  </tile>
  <tile id="1280" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.large_furnishings.grandfather_clock.v0.south.swing_0" />
      <property name="category" type="string" value="large_furnishings" />
      <property name="kind" type="string" value="grandfather_clock" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="swing_0" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="119" />
      <property name="source" type="string" value="animate.clock, padded only" />
    </properties>
    <image source="sprites/large_furnishings/library.large_furnishings.grandfather_clock.v0.south.swing_0.png" width="64" height="128" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="17" y="108" width="30" height="10" />
    </objectgroup>
    <animation>
      <frame tileid="1280" duration="200" />
      <frame tileid="1281" duration="200" />
      <frame tileid="1282" duration="200" />
      <frame tileid="1283" duration="200" />
      <frame tileid="1284" duration="200" />
      <frame tileid="1285" duration="200" />
    </animation>
  </tile>
  <tile id="1281" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.large_furnishings.grandfather_clock.v0.south.swing_1" />
      <property name="category" type="string" value="large_furnishings" />
      <property name="kind" type="string" value="grandfather_clock" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="swing_1" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="119" />
      <property name="source" type="string" value="animate.clock, padded only" />
    </properties>
    <image source="sprites/large_furnishings/library.large_furnishings.grandfather_clock.v0.south.swing_1.png" width="64" height="128" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="17" y="108" width="30" height="10" />
    </objectgroup>
  </tile>
  <tile id="1282" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.large_furnishings.grandfather_clock.v0.south.swing_2" />
      <property name="category" type="string" value="large_furnishings" />
      <property name="kind" type="string" value="grandfather_clock" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="swing_2" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="119" />
      <property name="source" type="string" value="animate.clock, padded only" />
    </properties>
    <image source="sprites/large_furnishings/library.large_furnishings.grandfather_clock.v0.south.swing_2.png" width="64" height="128" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="17" y="108" width="30" height="10" />
    </objectgroup>
  </tile>
  <tile id="1283" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.large_furnishings.grandfather_clock.v0.south.swing_3" />
      <property name="category" type="string" value="large_furnishings" />
      <property name="kind" type="string" value="grandfather_clock" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="swing_3" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="119" />
      <property name="source" type="string" value="animate.clock, padded only" />
    </properties>
    <image source="sprites/large_furnishings/library.large_furnishings.grandfather_clock.v0.south.swing_3.png" width="64" height="128" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="17" y="108" width="30" height="10" />
    </objectgroup>
  </tile>
  <tile id="1284" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.large_furnishings.grandfather_clock.v0.south.swing_4" />
      <property name="category" type="string" value="large_furnishings" />
      <property name="kind" type="string" value="grandfather_clock" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="swing_4" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="119" />
      <property name="source" type="string" value="animate.clock, padded only" />
    </properties>
    <image source="sprites/large_furnishings/library.large_furnishings.grandfather_clock.v0.south.swing_4.png" width="64" height="128" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="17" y="108" width="30" height="10" />
    </objectgroup>
  </tile>
  <tile id="1285" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.large_furnishings.grandfather_clock.v0.south.swing_5" />
      <property name="category" type="string" value="large_furnishings" />
      <property name="kind" type="string" value="grandfather_clock" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="swing_5" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="119" />
      <property name="source" type="string" value="animate.clock, padded only" />
    </properties>
    <image source="sprites/large_furnishings/library.large_furnishings.grandfather_clock.v0.south.swing_5.png" width="64" height="128" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="17" y="108" width="30" height="10" />
    </objectgroup>
  </tile>
  <tile id="1408" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.large_furnishings.writing_cabinet.v0.south.default" />
      <property name="category" type="string" value="large_furnishings" />
      <property name="kind" type="string" value="writing_cabinet" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="48" />
      <property name="anchor_y" type="int" value="125" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/large_furnishings/library.large_furnishings.writing_cabinet.v0.south.default.png" width="96" height="128" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="109" width="84" height="14" />
    </objectgroup>
  </tile>
  <tile id="1440" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.large_furnishings.writing_cabinet.v1.south.default" />
      <property name="category" type="string" value="large_furnishings" />
      <property name="kind" type="string" value="writing_cabinet" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="48" />
      <property name="anchor_y" type="int" value="125" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/large_furnishings/library.large_furnishings.writing_cabinet.v1.south.default.png" width="96" height="128" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="109" width="84" height="14" />
    </objectgroup>
  </tile>
</tileset>