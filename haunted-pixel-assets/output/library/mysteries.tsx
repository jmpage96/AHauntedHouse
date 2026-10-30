<?xml version='1.0' encoding='utf-8'?>
<tileset version="1.10" name="victorian_library_mysteries" tilewidth="96" tileheight="96" tilecount="22" columns="0" objectalignment="topleft">
  <properties>
    <property name="schema" type="string" value="victorian.library.v1" />
    <property name="native_grid" type="int" value="32" />
    <property name="placement" type="string" value="tile objects, whole sprites, native size" />
    <property name="lighting" type="string" value="upper-left" />
  </properties>
  <transformations hflip="0" vflip="0" rotate="0" preferuntransformed="1" />
  <tile id="0" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.mysteries.mechanism_bookcase.v0.south.closed" />
      <property name="category" type="string" value="mysteries" />
      <property name="kind" type="string" value="mechanism_bookcase" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="closed" />
      <property name="interactable" type="bool" value="true" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="94" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/mysteries/library.mysteries.mechanism_bookcase.v0.south.closed.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="78" width="54" height="14" />
    </objectgroup>
  </tile>
  <tile id="1" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.mysteries.mechanism_bookcase.v0.south.open" />
      <property name="category" type="string" value="mysteries" />
      <property name="kind" type="string" value="mechanism_bookcase" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="open" />
      <property name="interactable" type="bool" value="true" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="94" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/mysteries/library.mysteries.mechanism_bookcase.v0.south.open.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="78" width="54" height="14" />
    </objectgroup>
  </tile>
  <tile id="32" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.mysteries.mechanism_bookcase.v1.south.closed" />
      <property name="category" type="string" value="mysteries" />
      <property name="kind" type="string" value="mechanism_bookcase" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="closed" />
      <property name="interactable" type="bool" value="true" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="94" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/mysteries/library.mysteries.mechanism_bookcase.v1.south.closed.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="78" width="54" height="14" />
    </objectgroup>
  </tile>
  <tile id="33" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.mysteries.mechanism_bookcase.v1.south.open" />
      <property name="category" type="string" value="mysteries" />
      <property name="kind" type="string" value="mechanism_bookcase" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="open" />
      <property name="interactable" type="bool" value="true" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="94" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/mysteries/library.mysteries.mechanism_bookcase.v1.south.open.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="78" width="54" height="14" />
    </objectgroup>
  </tile>
  <tile id="128" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.mysteries.locked_bookcase.v0.south.closed" />
      <property name="category" type="string" value="mysteries" />
      <property name="kind" type="string" value="locked_bookcase" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="closed" />
      <property name="interactable" type="bool" value="true" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="94" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/mysteries/library.mysteries.locked_bookcase.v0.south.closed.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="78" width="54" height="14" />
    </objectgroup>
  </tile>
  <tile id="129" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.mysteries.locked_bookcase.v0.south.open" />
      <property name="category" type="string" value="mysteries" />
      <property name="kind" type="string" value="locked_bookcase" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="open" />
      <property name="interactable" type="bool" value="true" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="94" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/mysteries/library.mysteries.locked_bookcase.v0.south.open.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="78" width="54" height="14" />
    </objectgroup>
  </tile>
  <tile id="160" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.mysteries.locked_bookcase.v1.south.closed" />
      <property name="category" type="string" value="mysteries" />
      <property name="kind" type="string" value="locked_bookcase" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="closed" />
      <property name="interactable" type="bool" value="true" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="94" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/mysteries/library.mysteries.locked_bookcase.v1.south.closed.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="78" width="54" height="14" />
    </objectgroup>
  </tile>
  <tile id="161" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.mysteries.locked_bookcase.v1.south.open" />
      <property name="category" type="string" value="mysteries" />
      <property name="kind" type="string" value="locked_bookcase" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="open" />
      <property name="interactable" type="bool" value="true" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="94" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/mysteries/library.mysteries.locked_bookcase.v1.south.open.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="78" width="54" height="14" />
    </objectgroup>
  </tile>
  <tile id="256" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.mysteries.marked_book.v0.south.closed" />
      <property name="category" type="string" value="mysteries" />
      <property name="kind" type="string" value="marked_book" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="tabletop interactable overlay" />
      <property name="state" type="string" value="closed" />
      <property name="interactable" type="bool" value="true" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="16" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/mysteries/library.mysteries.marked_book.v0.south.closed.png" width="32" height="32" />
  </tile>
  <tile id="257" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.mysteries.marked_book.v0.south.open" />
      <property name="category" type="string" value="mysteries" />
      <property name="kind" type="string" value="marked_book" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="tabletop interactable overlay" />
      <property name="state" type="string" value="open" />
      <property name="interactable" type="bool" value="true" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="16" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/mysteries/library.mysteries.marked_book.v0.south.open.png" width="32" height="32" />
  </tile>
  <tile id="384" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.mysteries.hidden_safe.v0.south.closed" />
      <property name="category" type="string" value="mysteries" />
      <property name="kind" type="string" value="hidden_safe" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="closed" />
      <property name="interactable" type="bool" value="true" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="28" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/mysteries/library.mysteries.hidden_safe.v0.south.closed.png" width="32" height="32" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="17" width="22" height="10" />
    </objectgroup>
  </tile>
  <tile id="385" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.mysteries.hidden_safe.v0.south.open" />
      <property name="category" type="string" value="mysteries" />
      <property name="kind" type="string" value="hidden_safe" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="open" />
      <property name="interactable" type="bool" value="true" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="28" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/mysteries/library.mysteries.hidden_safe.v0.south.open.png" width="32" height="32" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="17" width="24" height="10" />
    </objectgroup>
  </tile>
  <tile id="512" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.mysteries.puzzle_box.v0.south.closed" />
      <property name="category" type="string" value="mysteries" />
      <property name="kind" type="string" value="puzzle_box" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="tabletop interactable overlay" />
      <property name="state" type="string" value="closed" />
      <property name="interactable" type="bool" value="true" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="16" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/mysteries/library.mysteries.puzzle_box.v0.south.closed.png" width="32" height="32" />
  </tile>
  <tile id="513" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.mysteries.puzzle_box.v0.south.open" />
      <property name="category" type="string" value="mysteries" />
      <property name="kind" type="string" value="puzzle_box" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="tabletop interactable overlay" />
      <property name="state" type="string" value="open" />
      <property name="interactable" type="bool" value="true" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="16" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/mysteries/library.mysteries.puzzle_box.v0.south.open.png" width="32" height="32" />
  </tile>
  <tile id="640" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.mysteries.brass_device.v0.south.closed" />
      <property name="category" type="string" value="mysteries" />
      <property name="kind" type="string" value="brass_device" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="tabletop interactable overlay" />
      <property name="state" type="string" value="closed" />
      <property name="interactable" type="bool" value="true" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="16" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/mysteries/library.mysteries.brass_device.v0.south.closed.png" width="32" height="32" />
  </tile>
  <tile id="641" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.mysteries.brass_device.v0.south.open" />
      <property name="category" type="string" value="mysteries" />
      <property name="kind" type="string" value="brass_device" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="tabletop interactable overlay" />
      <property name="state" type="string" value="open" />
      <property name="interactable" type="bool" value="true" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="16" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/mysteries/library.mysteries.brass_device.v0.south.open.png" width="32" height="32" />
  </tile>
  <tile id="768" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.mysteries.secret_desk.v0.south.closed" />
      <property name="category" type="string" value="mysteries" />
      <property name="kind" type="string" value="secret_desk" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="closed" />
      <property name="interactable" type="bool" value="true" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="48" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/mysteries/library.mysteries.secret_desk.v0.south.closed.png" width="96" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="84" height="24" />
    </objectgroup>
  </tile>
  <tile id="769" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.mysteries.secret_desk.v0.south.open" />
      <property name="category" type="string" value="mysteries" />
      <property name="kind" type="string" value="secret_desk" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="open" />
      <property name="interactable" type="bool" value="true" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="48" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/mysteries/library.mysteries.secret_desk.v0.south.open.png" width="96" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="84" height="24" />
    </objectgroup>
  </tile>
  <tile id="800" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.mysteries.secret_desk.v1.south.closed" />
      <property name="category" type="string" value="mysteries" />
      <property name="kind" type="string" value="secret_desk" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="closed" />
      <property name="interactable" type="bool" value="true" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="48" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/mysteries/library.mysteries.secret_desk.v1.south.closed.png" width="96" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="84" height="24" />
    </objectgroup>
  </tile>
  <tile id="801" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.mysteries.secret_desk.v1.south.open" />
      <property name="category" type="string" value="mysteries" />
      <property name="kind" type="string" value="secret_desk" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="open" />
      <property name="interactable" type="bool" value="true" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="48" />
      <property name="anchor_y" type="int" value="61" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/mysteries/library.mysteries.secret_desk.v1.south.open.png" width="96" height="64" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="6" y="35" width="84" height="24" />
    </objectgroup>
  </tile>
  <tile id="896" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.mysteries.odd_bookcase.v0.south.closed" />
      <property name="category" type="string" value="mysteries" />
      <property name="kind" type="string" value="odd_bookcase" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="closed" />
      <property name="interactable" type="bool" value="true" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="94" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/mysteries/library.mysteries.odd_bookcase.v0.south.closed.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="78" width="54" height="14" />
    </objectgroup>
  </tile>
  <tile id="928" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.mysteries.odd_bookcase.v1.south.closed" />
      <property name="category" type="string" value="mysteries" />
      <property name="kind" type="string" value="odd_bookcase" />
      <property name="variant" type="int" value="1" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="closed" />
      <property name="interactable" type="bool" value="true" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="94" />
      <property name="source" type="string" value="native library drawing" />
    </properties>
    <image source="sprites/mysteries/library.mysteries.odd_bookcase.v1.south.closed.png" width="64" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="78" width="54" height="14" />
    </objectgroup>
  </tile>
</tileset>