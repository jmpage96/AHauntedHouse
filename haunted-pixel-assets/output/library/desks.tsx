<?xml version='1.0' encoding='utf-8'?>
<tileset version="1.10" name="victorian_library_desks" tilewidth="128" tileheight="128" tilecount="42" columns="0" objectalignment="topleft">
  <properties>
    <property name="schema" type="string" value="victorian.library.v1" />
    <property name="native_grid" type="int" value="32" />
    <property name="placement" type="string" value="tile objects, whole sprites, native size" />
    <property name="lighting" type="string" value="upper-left" />
  </properties>
  <transformations hflip="0" vflip="0" rotate="0" preferuntransformed="1" />
  <tile id="0" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.desks.grand_desk.v0.south.default" />
      <property name="category" type="string" value="desks" />
      <property name="kind" type="string" value="grand_desk" />
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
    <image source="sprites/desks/library.desks.grand_desk.v0.south.default.png" width="96" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="84" height="24" />
    </objectgroup>
  </tile>
  <tile id="8" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.desks.grand_desk.v0.north.default" />
      <property name="category" type="string" value="desks" />
      <property name="kind" type="string" value="grand_desk" />
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
    <image source="sprites/desks/library.desks.grand_desk.v0.north.default.png" width="96" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="84" height="24" />
    </objectgroup>
  </tile>
  <tile id="16" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.desks.grand_desk.v0.east.default" />
      <property name="category" type="string" value="desks" />
      <property name="kind" type="string" value="grand_desk" />
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
    <image source="sprites/desks/library.desks.grand_desk.v0.east.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="52" height="24" />
    </objectgroup>
  </tile>
  <tile id="24" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.desks.grand_desk.v0.west.default" />
      <property name="category" type="string" value="desks" />
      <property name="kind" type="string" value="grand_desk" />
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
    <image source="sprites/desks/library.desks.grand_desk.v0.west.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="52" height="24" />
    </objectgroup>
  </tile>
  <tile id="32" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.desks.grand_desk.v1.south.default" />
      <property name="category" type="string" value="desks" />
      <property name="kind" type="string" value="grand_desk" />
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
    <image source="sprites/desks/library.desks.grand_desk.v1.south.default.png" width="96" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="84" height="24" />
    </objectgroup>
  </tile>
  <tile id="40" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.desks.grand_desk.v1.north.default" />
      <property name="category" type="string" value="desks" />
      <property name="kind" type="string" value="grand_desk" />
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
    <image source="sprites/desks/library.desks.grand_desk.v1.north.default.png" width="96" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="84" height="24" />
    </objectgroup>
  </tile>
  <tile id="48" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.desks.grand_desk.v1.east.default" />
      <property name="category" type="string" value="desks" />
      <property name="kind" type="string" value="grand_desk" />
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
    <image source="sprites/desks/library.desks.grand_desk.v1.east.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="52" height="24" />
    </objectgroup>
  </tile>
  <tile id="56" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.desks.grand_desk.v1.west.default" />
      <property name="category" type="string" value="desks" />
      <property name="kind" type="string" value="grand_desk" />
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
    <image source="sprites/desks/library.desks.grand_desk.v1.west.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="52" height="24" />
    </objectgroup>
  </tile>
  <tile id="128" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.desks.roll_top_desk.v0.south.default" />
      <property name="category" type="string" value="desks" />
      <property name="kind" type="string" value="roll_top_desk" />
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
    <image source="sprites/desks/library.desks.roll_top_desk.v0.south.default.png" width="96" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="67" width="84" height="24" />
    </objectgroup>
  </tile>
  <tile id="160" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.desks.roll_top_desk.v1.south.default" />
      <property name="category" type="string" value="desks" />
      <property name="kind" type="string" value="roll_top_desk" />
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
    <image source="sprites/desks/library.desks.roll_top_desk.v1.south.default.png" width="96" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="67" width="84" height="24" />
    </objectgroup>
  </tile>
  <tile id="256" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.desks.secretary_desk.v0.south.default" />
      <property name="category" type="string" value="desks" />
      <property name="kind" type="string" value="secretary_desk" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="125" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/desks/library.desks.secretary_desk.v0.south.default.png" width="64" height="128" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="99" width="52" height="24" />
    </objectgroup>
  </tile>
  <tile id="288" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.desks.secretary_desk.v1.south.default" />
      <property name="category" type="string" value="desks" />
      <property name="kind" type="string" value="secretary_desk" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="125" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/desks/library.desks.secretary_desk.v1.south.default.png" width="64" height="128" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="99" width="52" height="24" />
    </objectgroup>
  </tile>
  <tile id="384" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.desks.writing_bureau.v0.south.default" />
      <property name="category" type="string" value="desks" />
      <property name="kind" type="string" value="writing_bureau" />
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
    <image source="sprites/desks/library.desks.writing_bureau.v0.south.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="52" height="24" />
    </objectgroup>
  </tile>
  <tile id="392" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.desks.writing_bureau.v0.north.default" />
      <property name="category" type="string" value="desks" />
      <property name="kind" type="string" value="writing_bureau" />
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
    <image source="sprites/desks/library.desks.writing_bureau.v0.north.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="52" height="24" />
    </objectgroup>
  </tile>
  <tile id="400" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.desks.writing_bureau.v0.east.default" />
      <property name="category" type="string" value="desks" />
      <property name="kind" type="string" value="writing_bureau" />
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
    <image source="sprites/desks/library.desks.writing_bureau.v0.east.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="52" height="24" />
    </objectgroup>
  </tile>
  <tile id="408" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.desks.writing_bureau.v0.west.default" />
      <property name="category" type="string" value="desks" />
      <property name="kind" type="string" value="writing_bureau" />
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
    <image source="sprites/desks/library.desks.writing_bureau.v0.west.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="52" height="24" />
    </objectgroup>
  </tile>
  <tile id="416" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.desks.writing_bureau.v1.south.default" />
      <property name="category" type="string" value="desks" />
      <property name="kind" type="string" value="writing_bureau" />
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
    <image source="sprites/desks/library.desks.writing_bureau.v1.south.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="52" height="24" />
    </objectgroup>
  </tile>
  <tile id="424" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.desks.writing_bureau.v1.north.default" />
      <property name="category" type="string" value="desks" />
      <property name="kind" type="string" value="writing_bureau" />
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
    <image source="sprites/desks/library.desks.writing_bureau.v1.north.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="52" height="24" />
    </objectgroup>
  </tile>
  <tile id="432" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.desks.writing_bureau.v1.east.default" />
      <property name="category" type="string" value="desks" />
      <property name="kind" type="string" value="writing_bureau" />
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
    <image source="sprites/desks/library.desks.writing_bureau.v1.east.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="52" height="24" />
    </objectgroup>
  </tile>
  <tile id="440" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.desks.writing_bureau.v1.west.default" />
      <property name="category" type="string" value="desks" />
      <property name="kind" type="string" value="writing_bureau" />
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
    <image source="sprites/desks/library.desks.writing_bureau.v1.west.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="52" height="24" />
    </objectgroup>
  </tile>
  <tile id="512" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.desks.reading_table.v0.south.default" />
      <property name="category" type="string" value="desks" />
      <property name="kind" type="string" value="reading_table" />
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
    <image source="sprites/desks/library.desks.reading_table.v0.south.default.png" width="128" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="116" height="24" />
    </objectgroup>
  </tile>
  <tile id="520" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.desks.reading_table.v0.north.default" />
      <property name="category" type="string" value="desks" />
      <property name="kind" type="string" value="reading_table" />
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
    <image source="sprites/desks/library.desks.reading_table.v0.north.default.png" width="128" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="116" height="24" />
    </objectgroup>
  </tile>
  <tile id="528" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.desks.reading_table.v0.east.default" />
      <property name="category" type="string" value="desks" />
      <property name="kind" type="string" value="reading_table" />
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
    <image source="sprites/desks/library.desks.reading_table.v0.east.default.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="8" y="28" width="48" height="64" />
    </objectgroup>
  </tile>
  <tile id="536" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.desks.reading_table.v0.west.default" />
      <property name="category" type="string" value="desks" />
      <property name="kind" type="string" value="reading_table" />
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
    <image source="sprites/desks/library.desks.reading_table.v0.west.default.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="8" y="28" width="48" height="64" />
    </objectgroup>
  </tile>
  <tile id="544" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.desks.reading_table.v1.south.default" />
      <property name="category" type="string" value="desks" />
      <property name="kind" type="string" value="reading_table" />
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
    <image source="sprites/desks/library.desks.reading_table.v1.south.default.png" width="128" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="116" height="24" />
    </objectgroup>
  </tile>
  <tile id="552" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.desks.reading_table.v1.north.default" />
      <property name="category" type="string" value="desks" />
      <property name="kind" type="string" value="reading_table" />
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
    <image source="sprites/desks/library.desks.reading_table.v1.north.default.png" width="128" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="116" height="24" />
    </objectgroup>
  </tile>
  <tile id="560" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.desks.reading_table.v1.east.default" />
      <property name="category" type="string" value="desks" />
      <property name="kind" type="string" value="reading_table" />
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
    <image source="sprites/desks/library.desks.reading_table.v1.east.default.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="8" y="28" width="48" height="64" />
    </objectgroup>
  </tile>
  <tile id="568" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.desks.reading_table.v1.west.default" />
      <property name="category" type="string" value="desks" />
      <property name="kind" type="string" value="reading_table" />
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
    <image source="sprites/desks/library.desks.reading_table.v1.west.default.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="8" y="28" width="48" height="64" />
    </objectgroup>
  </tile>
  <tile id="640" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.desks.round_reading_table.v0.south.default" />
      <property name="category" type="string" value="desks" />
      <property name="kind" type="string" value="round_reading_table" />
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
    <image source="sprites/desks/library.desks.round_reading_table.v0.south.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="34" width="52" height="24" />
    </objectgroup>
  </tile>
  <tile id="672" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.desks.round_reading_table.v1.south.default" />
      <property name="category" type="string" value="desks" />
      <property name="kind" type="string" value="round_reading_table" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="60" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/desks/library.desks.round_reading_table.v1.south.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="34" width="52" height="24" />
    </objectgroup>
  </tile>
  <tile id="768" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.desks.ornate_side_table.v0.south.default" />
      <property name="category" type="string" value="desks" />
      <property name="kind" type="string" value="ornate_side_table" />
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
    <image source="sprites/desks/library.desks.ornate_side_table.v0.south.default.png" width="32" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="34" width="20" height="24" />
    </objectgroup>
  </tile>
  <tile id="800" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.desks.ornate_side_table.v1.south.default" />
      <property name="category" type="string" value="desks" />
      <property name="kind" type="string" value="ornate_side_table" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="60" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/desks/library.desks.ornate_side_table.v1.south.default.png" width="32" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="34" width="20" height="24" />
    </objectgroup>
  </tile>
  <tile id="896" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.desks.pedestal_table.v0.south.default" />
      <property name="category" type="string" value="desks" />
      <property name="kind" type="string" value="pedestal_table" />
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
    <image source="sprites/desks/library.desks.pedestal_table.v0.south.default.png" width="32" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="34" width="20" height="24" />
    </objectgroup>
  </tile>
  <tile id="928" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.desks.pedestal_table.v1.south.default" />
      <property name="category" type="string" value="desks" />
      <property name="kind" type="string" value="pedestal_table" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="60" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/desks/library.desks.pedestal_table.v1.south.default.png" width="32" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="34" width="20" height="24" />
    </objectgroup>
  </tile>
  <tile id="1024" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.desks.tea_table.v0.south.default" />
      <property name="category" type="string" value="desks" />
      <property name="kind" type="string" value="tea_table" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="59" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/desks/library.desks.tea_table.v0.south.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="33" width="52" height="24" />
    </objectgroup>
  </tile>
  <tile id="1056" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.desks.tea_table.v1.south.default" />
      <property name="category" type="string" value="desks" />
      <property name="kind" type="string" value="tea_table" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="59" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/desks/library.desks.tea_table.v1.south.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="33" width="52" height="24" />
    </objectgroup>
  </tile>
  <tile id="1152" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.desks.lectern.v0.south.default" />
      <property name="category" type="string" value="desks" />
      <property name="kind" type="string" value="lectern" />
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
    <image source="sprites/desks/library.desks.lectern.v0.south.default.png" width="32" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="20" height="24" />
    </objectgroup>
  </tile>
  <tile id="1184" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.desks.lectern.v1.south.default" />
      <property name="category" type="string" value="desks" />
      <property name="kind" type="string" value="lectern" />
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
    <image source="sprites/desks/library.desks.lectern.v1.south.default.png" width="32" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="20" height="24" />
    </objectgroup>
  </tile>
  <tile id="1280" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.desks.document_stand.v0.south.default" />
      <property name="category" type="string" value="desks" />
      <property name="kind" type="string" value="document_stand" />
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
    <image source="sprites/desks/library.desks.document_stand.v0.south.default.png" width="32" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="20" height="24" />
    </objectgroup>
  </tile>
  <tile id="1312" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.desks.document_stand.v1.south.default" />
      <property name="category" type="string" value="desks" />
      <property name="kind" type="string" value="document_stand" />
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
    <image source="sprites/desks/library.desks.document_stand.v1.south.default.png" width="32" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="20" height="24" />
    </objectgroup>
  </tile>
  <tile id="1408" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.desks.open_drawer_desk.v0.south.default" />
      <property name="category" type="string" value="desks" />
      <property name="kind" type="string" value="open_drawer_desk" />
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
    <image source="sprites/desks/library.desks.open_drawer_desk.v0.south.default.png" width="96" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="84" height="24" />
    </objectgroup>
  </tile>
  <tile id="1440" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.desks.open_drawer_desk.v1.south.default" />
      <property name="category" type="string" value="desks" />
      <property name="kind" type="string" value="open_drawer_desk" />
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
    <image source="sprites/desks/library.desks.open_drawer_desk.v1.south.default.png" width="96" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="84" height="24" />
    </objectgroup>
  </tile>
</tileset>