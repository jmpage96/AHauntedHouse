<?xml version='1.0' encoding='utf-8'?>
<tileset version="1.10" name="victorian_library_bookshelves" tilewidth="128" tileheight="160" tilecount="48" columns="0" objectalignment="topleft">
  <properties>
    <property name="schema" type="string" value="victorian.library.v1" />
    <property name="native_grid" type="int" value="32" />
    <property name="placement" type="string" value="tile objects, whole sprites, native size" />
    <property name="lighting" type="string" value="upper-left" />
  </properties>
  <transformations hflip="0" vflip="0" rotate="0" preferuntransformed="1" />
  <tile id="0" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.narrow_bookcase.v0.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="narrow_bookcase" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="94" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.narrow_bookcase.v0.south.default.png" width="32" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="78" width="22" height="14" />
    </objectgroup>
  </tile>
  <tile id="32" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.narrow_bookcase.v1.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="narrow_bookcase" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="94" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.narrow_bookcase.v1.south.default.png" width="32" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="78" width="22" height="14" />
    </objectgroup>
  </tile>
  <tile id="64" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.narrow_bookcase.v2.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="narrow_bookcase" />
      <property name="variant" type="int" value="2" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="94" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.narrow_bookcase.v2.south.default.png" width="32" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="78" width="22" height="14" />
    </objectgroup>
  </tile>
  <tile id="128" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.double_bookcase.v0.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="double_bookcase" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="95" />
      <property name="source" type="string" value="generate.bookcase (unchanged)" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.double_bookcase.v0.south.default.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="79" width="52" height="14" />
    </objectgroup>
  </tile>
  <tile id="160" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.double_bookcase.v1.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="double_bookcase" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="94" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.double_bookcase.v1.south.default.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="78" width="54" height="14" />
    </objectgroup>
  </tile>
  <tile id="192" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.double_bookcase.v2.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="double_bookcase" />
      <property name="variant" type="int" value="2" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="94" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.double_bookcase.v2.south.default.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="78" width="54" height="14" />
    </objectgroup>
  </tile>
  <tile id="256" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.triple_bookcase.v0.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="triple_bookcase" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="48" />
      <property name="anchor_y" type="int" value="94" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.triple_bookcase.v0.south.default.png" width="96" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="78" width="86" height="14" />
    </objectgroup>
  </tile>
  <tile id="288" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.triple_bookcase.v1.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="triple_bookcase" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="48" />
      <property name="anchor_y" type="int" value="94" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.triple_bookcase.v1.south.default.png" width="96" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="78" width="86" height="14" />
    </objectgroup>
  </tile>
  <tile id="320" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.triple_bookcase.v2.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="triple_bookcase" />
      <property name="variant" type="int" value="2" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="48" />
      <property name="anchor_y" type="int" value="94" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.triple_bookcase.v2.south.default.png" width="96" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="78" width="86" height="14" />
    </objectgroup>
  </tile>
  <tile id="384" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.extra_tall_bookcase.v0.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="extra_tall_bookcase" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="158" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.extra_tall_bookcase.v0.south.default.png" width="64" height="160" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="142" width="54" height="14" />
    </objectgroup>
  </tile>
  <tile id="416" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.extra_tall_bookcase.v1.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="extra_tall_bookcase" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="158" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.extra_tall_bookcase.v1.south.default.png" width="64" height="160" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="142" width="54" height="14" />
    </objectgroup>
  </tile>
  <tile id="448" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.extra_tall_bookcase.v2.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="extra_tall_bookcase" />
      <property name="variant" type="int" value="2" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="158" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.extra_tall_bookcase.v2.south.default.png" width="64" height="160" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="142" width="54" height="14" />
    </objectgroup>
  </tile>
  <tile id="512" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.half_bookcase.v0.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="half_bookcase" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="62" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.half_bookcase.v0.south.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="46" width="54" height="14" />
    </objectgroup>
  </tile>
  <tile id="544" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.half_bookcase.v1.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="half_bookcase" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="62" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.half_bookcase.v1.south.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="46" width="54" height="14" />
    </objectgroup>
  </tile>
  <tile id="576" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.half_bookcase.v2.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="half_bookcase" />
      <property name="variant" type="int" value="2" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="62" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.half_bookcase.v2.south.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="46" width="54" height="14" />
    </objectgroup>
  </tile>
  <tile id="640" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.corner_bookcase.v0.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="corner_bookcase" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="48" />
      <property name="anchor_y" type="int" value="94" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.corner_bookcase.v0.south.default.png" width="96" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="78" width="86" height="14" />
    </objectgroup>
  </tile>
  <tile id="672" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.corner_bookcase.v1.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="corner_bookcase" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="48" />
      <property name="anchor_y" type="int" value="94" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.corner_bookcase.v1.south.default.png" width="96" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="78" width="86" height="14" />
    </objectgroup>
  </tile>
  <tile id="704" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.corner_bookcase.v2.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="corner_bookcase" />
      <property name="variant" type="int" value="2" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="48" />
      <property name="anchor_y" type="int" value="94" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.corner_bookcase.v2.south.default.png" width="96" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="78" width="86" height="14" />
    </objectgroup>
  </tile>
  <tile id="768" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.glass_bookcase.v0.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="glass_bookcase" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="94" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.glass_bookcase.v0.south.default.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="78" width="54" height="14" />
    </objectgroup>
  </tile>
  <tile id="800" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.glass_bookcase.v1.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="glass_bookcase" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="94" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.glass_bookcase.v1.south.default.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="78" width="54" height="14" />
    </objectgroup>
  </tile>
  <tile id="832" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.glass_bookcase.v2.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="glass_bookcase" />
      <property name="variant" type="int" value="2" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="94" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.glass_bookcase.v2.south.default.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="78" width="54" height="14" />
    </objectgroup>
  </tile>
  <tile id="896" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.built_in_shelving.v0.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="built_in_shelving" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="64" />
      <property name="anchor_y" type="int" value="126" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.built_in_shelving.v0.south.default.png" width="128" height="128" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="110" width="118" height="14" />
    </objectgroup>
  </tile>
  <tile id="928" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.built_in_shelving.v1.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="built_in_shelving" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="64" />
      <property name="anchor_y" type="int" value="126" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.built_in_shelving.v1.south.default.png" width="128" height="128" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="110" width="118" height="14" />
    </objectgroup>
  </tile>
  <tile id="960" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.built_in_shelving.v2.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="built_in_shelving" />
      <property name="variant" type="int" value="2" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="64" />
      <property name="anchor_y" type="int" value="126" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.built_in_shelving.v2.south.default.png" width="128" height="128" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="110" width="118" height="14" />
    </objectgroup>
  </tile>
  <tile id="1024" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.crowned_bookcase.v0.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="crowned_bookcase" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="48" />
      <property name="anchor_y" type="int" value="126" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.crowned_bookcase.v0.south.default.png" width="96" height="128" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="110" width="86" height="14" />
    </objectgroup>
  </tile>
  <tile id="1056" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.crowned_bookcase.v1.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="crowned_bookcase" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="48" />
      <property name="anchor_y" type="int" value="126" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.crowned_bookcase.v1.south.default.png" width="96" height="128" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="110" width="86" height="14" />
    </objectgroup>
  </tile>
  <tile id="1088" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.crowned_bookcase.v2.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="crowned_bookcase" />
      <property name="variant" type="int" value="2" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="48" />
      <property name="anchor_y" type="int" value="126" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.crowned_bookcase.v2.south.default.png" width="96" height="128" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="110" width="86" height="14" />
    </objectgroup>
  </tile>
  <tile id="1152" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.empty_bookcase.v0.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="empty_bookcase" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="94" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.empty_bookcase.v0.south.default.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="78" width="54" height="14" />
    </objectgroup>
  </tile>
  <tile id="1184" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.empty_bookcase.v1.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="empty_bookcase" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="94" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.empty_bookcase.v1.south.default.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="78" width="54" height="14" />
    </objectgroup>
  </tile>
  <tile id="1216" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.empty_bookcase.v2.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="empty_bookcase" />
      <property name="variant" type="int" value="2" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="94" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.empty_bookcase.v2.south.default.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="78" width="54" height="14" />
    </objectgroup>
  </tile>
  <tile id="1280" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.partial_bookcase.v0.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="partial_bookcase" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="94" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.partial_bookcase.v0.south.default.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="78" width="54" height="14" />
    </objectgroup>
  </tile>
  <tile id="1312" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.partial_bookcase.v1.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="partial_bookcase" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="94" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.partial_bookcase.v1.south.default.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="78" width="54" height="14" />
    </objectgroup>
  </tile>
  <tile id="1344" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.partial_bookcase.v2.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="partial_bookcase" />
      <property name="variant" type="int" value="2" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="94" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.partial_bookcase.v2.south.default.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="78" width="54" height="14" />
    </objectgroup>
  </tile>
  <tile id="1408" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.overstuffed_bookcase.v0.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="overstuffed_bookcase" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="94" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.overstuffed_bookcase.v0.south.default.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="78" width="54" height="14" />
    </objectgroup>
  </tile>
  <tile id="1440" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.overstuffed_bookcase.v1.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="overstuffed_bookcase" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="94" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.overstuffed_bookcase.v1.south.default.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="78" width="54" height="14" />
    </objectgroup>
  </tile>
  <tile id="1472" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.overstuffed_bookcase.v2.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="overstuffed_bookcase" />
      <property name="variant" type="int" value="2" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="94" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.overstuffed_bookcase.v2.south.default.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="78" width="54" height="14" />
    </objectgroup>
  </tile>
  <tile id="1536" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.ornament_bookcase.v0.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="ornament_bookcase" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="94" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.ornament_bookcase.v0.south.default.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="78" width="54" height="14" />
    </objectgroup>
  </tile>
  <tile id="1568" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.ornament_bookcase.v1.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="ornament_bookcase" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="94" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.ornament_bookcase.v1.south.default.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="78" width="54" height="14" />
    </objectgroup>
  </tile>
  <tile id="1600" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.ornament_bookcase.v2.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="ornament_bookcase" />
      <property name="variant" type="int" value="2" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="94" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.ornament_bookcase.v2.south.default.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="78" width="54" height="14" />
    </objectgroup>
  </tile>
  <tile id="1664" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.locked_cabinet_bookcase.v0.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="locked_cabinet_bookcase" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="94" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.locked_cabinet_bookcase.v0.south.default.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="78" width="54" height="14" />
    </objectgroup>
  </tile>
  <tile id="1696" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.locked_cabinet_bookcase.v1.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="locked_cabinet_bookcase" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="94" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.locked_cabinet_bookcase.v1.south.default.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="78" width="54" height="14" />
    </objectgroup>
  </tile>
  <tile id="1728" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.locked_cabinet_bookcase.v2.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="locked_cabinet_bookcase" />
      <property name="variant" type="int" value="2" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="94" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.locked_cabinet_bookcase.v2.south.default.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="78" width="54" height="14" />
    </objectgroup>
  </tile>
  <tile id="1792" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.revolving_bookcase.v0.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="revolving_bookcase" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.revolving_bookcase.v0.south.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="9" y="45" width="46" height="14" />
    </objectgroup>
  </tile>
  <tile id="1824" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.revolving_bookcase.v1.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="revolving_bookcase" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.revolving_bookcase.v1.south.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="9" y="45" width="46" height="14" />
    </objectgroup>
  </tile>
  <tile id="1856" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.revolving_bookcase.v2.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="revolving_bookcase" />
      <property name="variant" type="int" value="2" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.revolving_bookcase.v2.south.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="9" y="45" width="46" height="14" />
    </objectgroup>
  </tile>
  <tile id="1920" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.book_display.v0.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="book_display" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.book_display.v0.south.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="45" width="52" height="14" />
    </objectgroup>
  </tile>
  <tile id="1952" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.book_display.v1.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="book_display" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.book_display.v1.south.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="45" width="52" height="14" />
    </objectgroup>
  </tile>
  <tile id="1984" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.bookshelves.book_display.v2.south.default" />
      <property name="category" type="string" value="bookshelves" />
      <property name="kind" type="string" value="book_display" />
      <property name="variant" type="int" value="2" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored; north facade" />
      <property name="state" type="string" value="default" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="library casework" />
    </properties>
    <image source="sprites/bookshelves/library.bookshelves.book_display.v2.south.default.png" width="64" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="45" width="52" height="14" />
    </objectgroup>
  </tile>
</tileset>