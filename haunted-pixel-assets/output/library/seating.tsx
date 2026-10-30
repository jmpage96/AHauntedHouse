<?xml version='1.0' encoding='utf-8'?>
<tileset version="1.10" name="victorian_library_seating" tilewidth="128" tileheight="96" tilecount="63" columns="0" objectalignment="topleft">
  <properties>
    <property name="schema" type="string" value="victorian.library.v1" />
    <property name="native_grid" type="int" value="32" />
    <property name="placement" type="string" value="tile objects, whole sprites, native size" />
    <property name="lighting" type="string" value="upper-left" />
  </properties>
  <transformations hflip="0" vflip="0" rotate="0" preferuntransformed="1" />
  <tile id="0" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.leather_wingback.v0.south.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="leather_wingback" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.leather_wingback.v0.south.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="52" height="24" />
    </objectgroup>
  </tile>
  <tile id="8" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.leather_wingback.v0.north.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="leather_wingback" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="north" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.leather_wingback.v0.north.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="52" height="24" />
    </objectgroup>
  </tile>
  <tile id="16" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.leather_wingback.v0.east.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="leather_wingback" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="east" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.leather_wingback.v0.east.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="7" y="35" width="51" height="24" />
    </objectgroup>
  </tile>
  <tile id="24" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.leather_wingback.v0.west.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="leather_wingback" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="west" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.leather_wingback.v0.west.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="7" y="35" width="51" height="24" />
    </objectgroup>
  </tile>
  <tile id="32" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.leather_wingback.v1.south.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="leather_wingback" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.leather_wingback.v1.south.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="52" height="24" />
    </objectgroup>
  </tile>
  <tile id="40" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.leather_wingback.v1.north.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="leather_wingback" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="north" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.leather_wingback.v1.north.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="52" height="24" />
    </objectgroup>
  </tile>
  <tile id="48" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.leather_wingback.v1.east.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="leather_wingback" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="east" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.leather_wingback.v1.east.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="7" y="35" width="51" height="24" />
    </objectgroup>
  </tile>
  <tile id="56" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.leather_wingback.v1.west.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="leather_wingback" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="west" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.leather_wingback.v1.west.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="7" y="35" width="51" height="24" />
    </objectgroup>
  </tile>
  <tile id="128" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.green_armchair.v0.south.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="green_armchair" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.green_armchair.v0.south.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="52" height="24" />
    </objectgroup>
  </tile>
  <tile id="136" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.green_armchair.v0.north.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="green_armchair" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="north" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.green_armchair.v0.north.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="52" height="24" />
    </objectgroup>
  </tile>
  <tile id="144" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.green_armchair.v0.east.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="green_armchair" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="east" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.green_armchair.v0.east.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="7" y="35" width="51" height="24" />
    </objectgroup>
  </tile>
  <tile id="152" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.green_armchair.v0.west.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="green_armchair" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="west" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.green_armchair.v0.west.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="7" y="35" width="51" height="24" />
    </objectgroup>
  </tile>
  <tile id="160" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.green_armchair.v1.south.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="green_armchair" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.green_armchair.v1.south.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="52" height="24" />
    </objectgroup>
  </tile>
  <tile id="168" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.green_armchair.v1.north.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="green_armchair" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="north" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.green_armchair.v1.north.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="52" height="24" />
    </objectgroup>
  </tile>
  <tile id="176" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.green_armchair.v1.east.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="green_armchair" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="east" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.green_armchair.v1.east.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="7" y="35" width="51" height="24" />
    </objectgroup>
  </tile>
  <tile id="184" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.green_armchair.v1.west.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="green_armchair" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="west" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.green_armchair.v1.west.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="7" y="35" width="51" height="24" />
    </objectgroup>
  </tile>
  <tile id="256" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.burgundy_armchair.v0.south.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="burgundy_armchair" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.burgundy_armchair.v0.south.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="52" height="24" />
    </objectgroup>
  </tile>
  <tile id="264" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.burgundy_armchair.v0.north.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="burgundy_armchair" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="north" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.burgundy_armchair.v0.north.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="52" height="24" />
    </objectgroup>
  </tile>
  <tile id="272" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.burgundy_armchair.v0.east.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="burgundy_armchair" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="east" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.burgundy_armchair.v0.east.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="7" y="35" width="51" height="24" />
    </objectgroup>
  </tile>
  <tile id="280" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.burgundy_armchair.v0.west.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="burgundy_armchair" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="west" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.burgundy_armchair.v0.west.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="7" y="35" width="51" height="24" />
    </objectgroup>
  </tile>
  <tile id="288" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.burgundy_armchair.v1.south.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="burgundy_armchair" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.burgundy_armchair.v1.south.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="52" height="24" />
    </objectgroup>
  </tile>
  <tile id="296" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.burgundy_armchair.v1.north.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="burgundy_armchair" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="north" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.burgundy_armchair.v1.north.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="52" height="24" />
    </objectgroup>
  </tile>
  <tile id="304" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.burgundy_armchair.v1.east.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="burgundy_armchair" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="east" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.burgundy_armchair.v1.east.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="7" y="35" width="51" height="24" />
    </objectgroup>
  </tile>
  <tile id="312" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.burgundy_armchair.v1.west.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="burgundy_armchair" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="west" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.burgundy_armchair.v1.west.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="7" y="35" width="51" height="24" />
    </objectgroup>
  </tile>
  <tile id="384" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.reading_chair.v0.south.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="reading_chair" />
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
    <image source="sprites/seating/library.seating.reading_chair.v0.south.default.png" width="32" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="7" y="35" width="18" height="24" />
    </objectgroup>
  </tile>
  <tile id="392" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.reading_chair.v0.north.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="reading_chair" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="north" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.reading_chair.v0.north.default.png" width="32" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="7" y="35" width="18" height="24" />
    </objectgroup>
  </tile>
  <tile id="400" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.reading_chair.v0.east.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="reading_chair" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="east" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.reading_chair.v0.east.default.png" width="32" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="7" y="35" width="17" height="24" />
    </objectgroup>
  </tile>
  <tile id="408" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.reading_chair.v0.west.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="reading_chair" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="west" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.reading_chair.v0.west.default.png" width="32" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="7" y="35" width="17" height="24" />
    </objectgroup>
  </tile>
  <tile id="512" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.desk_chair.v0.south.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="desk_chair" />
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
    <image source="sprites/seating/library.seating.desk_chair.v0.south.default.png" width="32" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="20" height="24" />
    </objectgroup>
  </tile>
  <tile id="520" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.desk_chair.v0.north.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="desk_chair" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="north" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.desk_chair.v0.north.default.png" width="32" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="20" height="24" />
    </objectgroup>
  </tile>
  <tile id="528" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.desk_chair.v0.east.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="desk_chair" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="east" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.desk_chair.v0.east.default.png" width="32" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="7" y="35" width="19" height="24" />
    </objectgroup>
  </tile>
  <tile id="536" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.desk_chair.v0.west.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="desk_chair" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="west" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.desk_chair.v0.west.default.png" width="32" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="7" y="35" width="19" height="24" />
    </objectgroup>
  </tile>
  <tile id="544" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.desk_chair.v1.south.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="desk_chair" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.desk_chair.v1.south.default.png" width="32" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="20" height="24" />
    </objectgroup>
  </tile>
  <tile id="552" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.desk_chair.v1.north.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="desk_chair" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="north" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.desk_chair.v1.north.default.png" width="32" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="20" height="24" />
    </objectgroup>
  </tile>
  <tile id="560" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.desk_chair.v1.east.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="desk_chair" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="east" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.desk_chair.v1.east.default.png" width="32" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="7" y="35" width="19" height="24" />
    </objectgroup>
  </tile>
  <tile id="568" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.desk_chair.v1.west.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="desk_chair" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="west" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.desk_chair.v1.west.default.png" width="32" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="7" y="35" width="19" height="24" />
    </objectgroup>
  </tile>
  <tile id="640" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.tufted_sofa.v0.south.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="tufted_sofa" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="64" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.tufted_sofa.v0.south.default.png" width="128" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="116" height="24" />
    </objectgroup>
  </tile>
  <tile id="648" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.tufted_sofa.v0.north.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="tufted_sofa" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="north" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="64" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.tufted_sofa.v0.north.default.png" width="128" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="116" height="24" />
    </objectgroup>
  </tile>
  <tile id="656" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.tufted_sofa.v0.east.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="tufted_sofa" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="east" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="93" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.tufted_sofa.v0.east.default.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="18" width="52" height="74" />
    </objectgroup>
  </tile>
  <tile id="664" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.tufted_sofa.v0.west.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="tufted_sofa" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="west" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="93" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.tufted_sofa.v0.west.default.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="18" width="52" height="74" />
    </objectgroup>
  </tile>
  <tile id="672" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.tufted_sofa.v1.south.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="tufted_sofa" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="64" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.tufted_sofa.v1.south.default.png" width="128" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="116" height="24" />
    </objectgroup>
  </tile>
  <tile id="680" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.tufted_sofa.v1.north.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="tufted_sofa" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="north" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="64" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.tufted_sofa.v1.north.default.png" width="128" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="116" height="24" />
    </objectgroup>
  </tile>
  <tile id="688" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.tufted_sofa.v1.east.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="tufted_sofa" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="east" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="93" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.tufted_sofa.v1.east.default.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="18" width="52" height="74" />
    </objectgroup>
  </tile>
  <tile id="696" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.tufted_sofa.v1.west.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="tufted_sofa" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="west" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="93" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.tufted_sofa.v1.west.default.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="18" width="52" height="74" />
    </objectgroup>
  </tile>
  <tile id="768" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.chaise_longue.v0.south.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="chaise_longue" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="48" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.chaise_longue.v0.south.default.png" width="96" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="84" height="24" />
    </objectgroup>
  </tile>
  <tile id="776" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.chaise_longue.v0.north.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="chaise_longue" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="north" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="48" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.chaise_longue.v0.north.default.png" width="96" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="84" height="24" />
    </objectgroup>
  </tile>
  <tile id="784" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.chaise_longue.v0.east.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="chaise_longue" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="east" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="93" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.chaise_longue.v0.east.default.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="18" width="52" height="74" />
    </objectgroup>
  </tile>
  <tile id="792" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.chaise_longue.v0.west.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="chaise_longue" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="west" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="93" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.chaise_longue.v0.west.default.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="18" width="52" height="74" />
    </objectgroup>
  </tile>
  <tile id="800" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.chaise_longue.v1.south.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="chaise_longue" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="48" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.chaise_longue.v1.south.default.png" width="96" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="84" height="24" />
    </objectgroup>
  </tile>
  <tile id="808" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.chaise_longue.v1.north.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="chaise_longue" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="north" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="48" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.chaise_longue.v1.north.default.png" width="96" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="84" height="24" />
    </objectgroup>
  </tile>
  <tile id="816" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.chaise_longue.v1.east.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="chaise_longue" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="east" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="93" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.chaise_longue.v1.east.default.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="18" width="52" height="74" />
    </objectgroup>
  </tile>
  <tile id="824" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.chaise_longue.v1.west.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="chaise_longue" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="west" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="93" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.chaise_longue.v1.west.default.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="18" width="52" height="74" />
    </objectgroup>
  </tile>
  <tile id="896" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.footstool.v0.south.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="footstool" />
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
    <image source="sprites/seating/library.seating.footstool.v0.south.default.png" width="32" height="32" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="3" width="20" height="24" />
    </objectgroup>
  </tile>
  <tile id="928" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.footstool.v1.south.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="footstool" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="29" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.footstool.v1.south.default.png" width="32" height="32" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="3" width="20" height="24" />
    </objectgroup>
  </tile>
  <tile id="1024" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.wooden_stool.v0.south.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="wooden_stool" />
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
    <image source="sprites/seating/library.seating.wooden_stool.v0.south.default.png" width="32" height="32" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="3" width="20" height="24" />
    </objectgroup>
  </tile>
  <tile id="1152" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.bench.v0.south.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="bench" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="48" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.bench.v0.south.default.png" width="96" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="84" height="24" />
    </objectgroup>
  </tile>
  <tile id="1160" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.bench.v0.north.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="bench" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="north" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="48" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.bench.v0.north.default.png" width="96" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="84" height="24" />
    </objectgroup>
  </tile>
  <tile id="1168" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.bench.v0.east.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="bench" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="east" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="93" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.bench.v0.east.default.png" width="32" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="18" width="20" height="74" />
    </objectgroup>
  </tile>
  <tile id="1176" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.bench.v0.west.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="bench" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="west" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="93" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.bench.v0.west.default.png" width="32" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="18" width="20" height="74" />
    </objectgroup>
  </tile>
  <tile id="1184" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.bench.v1.south.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="bench" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="48" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.bench.v1.south.default.png" width="96" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="84" height="24" />
    </objectgroup>
  </tile>
  <tile id="1192" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.bench.v1.north.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="bench" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="north" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="48" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.bench.v1.north.default.png" width="96" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="84" height="24" />
    </objectgroup>
  </tile>
  <tile id="1200" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.bench.v1.east.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="bench" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="east" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="93" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.bench.v1.east.default.png" width="32" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="18" width="20" height="74" />
    </objectgroup>
  </tile>
  <tile id="1208" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.seating.bench.v1.west.default" />
      <property name="category" type="string" value="seating" />
      <property name="kind" type="string" value="bench" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="west" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="93" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/seating/library.seating.bench.v1.west.default.png" width="32" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="18" width="20" height="74" />
    </objectgroup>
  </tile>
</tileset>