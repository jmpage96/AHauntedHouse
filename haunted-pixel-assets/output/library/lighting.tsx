<?xml version='1.0' encoding='utf-8'?>
<tileset version="1.10" name="victorian_library_lighting" tilewidth="96" tileheight="96" tilecount="38" columns="0" objectalignment="topleft">
  <properties>
    <property name="schema" type="string" value="victorian.library.v1" />
    <property name="native_grid" type="int" value="32" />
    <property name="placement" type="string" value="tile objects, whole sprites, native size" />
    <property name="lighting" type="string" value="upper-left" />
  </properties>
  <transformations hflip="0" vflip="0" rotate="0" preferuntransformed="1" />
  <tile id="0" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.lighting.banker_lamp.v0.south.lit" />
      <property name="category" type="string" value="lighting" />
      <property name="kind" type="string" value="banker_lamp" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="tabletop overlay" />
      <property name="state" type="string" value="lit" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="16" />
      <property name="source" type="string" value="library light layers; animate.Animation convention" />
    </properties>
    <image source="sprites/lighting/library.lighting.banker_lamp.v0.south.lit.png" width="32" height="32" />
  </tile>
  <tile id="1" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.lighting.banker_lamp.v0.south.unlit" />
      <property name="category" type="string" value="lighting" />
      <property name="kind" type="string" value="banker_lamp" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="tabletop overlay" />
      <property name="state" type="string" value="unlit" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="16" />
      <property name="source" type="string" value="library light layers; animate.Animation convention" />
    </properties>
    <image source="sprites/lighting/library.lighting.banker_lamp.v0.south.unlit.png" width="32" height="32" />
  </tile>
  <tile id="128" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.lighting.brass_desk_lamp.v0.south.lit" />
      <property name="category" type="string" value="lighting" />
      <property name="kind" type="string" value="brass_desk_lamp" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="tabletop overlay" />
      <property name="state" type="string" value="lit" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="16" />
      <property name="source" type="string" value="library light layers; animate.Animation convention" />
    </properties>
    <image source="sprites/lighting/library.lighting.brass_desk_lamp.v0.south.lit.png" width="32" height="32" />
  </tile>
  <tile id="129" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.lighting.brass_desk_lamp.v0.south.unlit" />
      <property name="category" type="string" value="lighting" />
      <property name="kind" type="string" value="brass_desk_lamp" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="tabletop overlay" />
      <property name="state" type="string" value="unlit" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="16" />
      <property name="source" type="string" value="library light layers; animate.Animation convention" />
    </properties>
    <image source="sprites/lighting/library.lighting.brass_desk_lamp.v0.south.unlit.png" width="32" height="32" />
  </tile>
  <tile id="256" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.lighting.oil_lamp.v0.south.lit_0" />
      <property name="category" type="string" value="lighting" />
      <property name="kind" type="string" value="oil_lamp" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="tabletop overlay" />
      <property name="state" type="string" value="lit_0" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="16" />
      <property name="source" type="string" value="library light layers; animate.Animation convention" />
    </properties>
    <image source="sprites/lighting/library.lighting.oil_lamp.v0.south.lit_0.png" width="32" height="32" />
    <animation>
      <frame tileid="256" duration="100" />
      <frame tileid="257" duration="100" />
      <frame tileid="258" duration="100" />
      <frame tileid="259" duration="100" />
    </animation>
  </tile>
  <tile id="257" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.lighting.oil_lamp.v0.south.lit_1" />
      <property name="category" type="string" value="lighting" />
      <property name="kind" type="string" value="oil_lamp" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="tabletop overlay" />
      <property name="state" type="string" value="lit_1" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="16" />
      <property name="source" type="string" value="library light layers; animate.Animation convention" />
    </properties>
    <image source="sprites/lighting/library.lighting.oil_lamp.v0.south.lit_1.png" width="32" height="32" />
  </tile>
  <tile id="258" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.lighting.oil_lamp.v0.south.lit_2" />
      <property name="category" type="string" value="lighting" />
      <property name="kind" type="string" value="oil_lamp" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="tabletop overlay" />
      <property name="state" type="string" value="lit_2" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="16" />
      <property name="source" type="string" value="library light layers; animate.Animation convention" />
    </properties>
    <image source="sprites/lighting/library.lighting.oil_lamp.v0.south.lit_2.png" width="32" height="32" />
  </tile>
  <tile id="259" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.lighting.oil_lamp.v0.south.lit_3" />
      <property name="category" type="string" value="lighting" />
      <property name="kind" type="string" value="oil_lamp" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="tabletop overlay" />
      <property name="state" type="string" value="lit_3" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="16" />
      <property name="source" type="string" value="library light layers; animate.Animation convention" />
    </properties>
    <image source="sprites/lighting/library.lighting.oil_lamp.v0.south.lit_3.png" width="32" height="32" />
  </tile>
  <tile id="260" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.lighting.oil_lamp.v0.south.extinguished" />
      <property name="category" type="string" value="lighting" />
      <property name="kind" type="string" value="oil_lamp" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="tabletop overlay" />
      <property name="state" type="string" value="extinguished" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="16" />
      <property name="source" type="string" value="library light layers; animate.Animation convention" />
    </properties>
    <image source="sprites/lighting/library.lighting.oil_lamp.v0.south.extinguished.png" width="32" height="32" />
  </tile>
  <tile id="384" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.lighting.candle_holder.v0.south.lit_0" />
      <property name="category" type="string" value="lighting" />
      <property name="kind" type="string" value="candle_holder" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="tabletop overlay" />
      <property name="state" type="string" value="lit_0" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="16" />
      <property name="source" type="string" value="library light layers; animate.Animation convention" />
    </properties>
    <image source="sprites/lighting/library.lighting.candle_holder.v0.south.lit_0.png" width="32" height="32" />
    <animation>
      <frame tileid="384" duration="100" />
      <frame tileid="385" duration="100" />
      <frame tileid="386" duration="100" />
      <frame tileid="387" duration="100" />
    </animation>
  </tile>
  <tile id="385" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.lighting.candle_holder.v0.south.lit_1" />
      <property name="category" type="string" value="lighting" />
      <property name="kind" type="string" value="candle_holder" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="tabletop overlay" />
      <property name="state" type="string" value="lit_1" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="16" />
      <property name="source" type="string" value="library light layers; animate.Animation convention" />
    </properties>
    <image source="sprites/lighting/library.lighting.candle_holder.v0.south.lit_1.png" width="32" height="32" />
  </tile>
  <tile id="386" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.lighting.candle_holder.v0.south.lit_2" />
      <property name="category" type="string" value="lighting" />
      <property name="kind" type="string" value="candle_holder" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="tabletop overlay" />
      <property name="state" type="string" value="lit_2" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="16" />
      <property name="source" type="string" value="library light layers; animate.Animation convention" />
    </properties>
    <image source="sprites/lighting/library.lighting.candle_holder.v0.south.lit_2.png" width="32" height="32" />
  </tile>
  <tile id="387" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.lighting.candle_holder.v0.south.lit_3" />
      <property name="category" type="string" value="lighting" />
      <property name="kind" type="string" value="candle_holder" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="tabletop overlay" />
      <property name="state" type="string" value="lit_3" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="16" />
      <property name="source" type="string" value="library light layers; animate.Animation convention" />
    </properties>
    <image source="sprites/lighting/library.lighting.candle_holder.v0.south.lit_3.png" width="32" height="32" />
  </tile>
  <tile id="388" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.lighting.candle_holder.v0.south.extinguished" />
      <property name="category" type="string" value="lighting" />
      <property name="kind" type="string" value="candle_holder" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="tabletop overlay" />
      <property name="state" type="string" value="extinguished" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="16" />
      <property name="source" type="string" value="library light layers; animate.Animation convention" />
    </properties>
    <image source="sprites/lighting/library.lighting.candle_holder.v0.south.extinguished.png" width="32" height="32" />
  </tile>
  <tile id="512" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.lighting.three_candelabrum.v0.south.lit_0" />
      <property name="category" type="string" value="lighting" />
      <property name="kind" type="string" value="three_candelabrum" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="tabletop overlay" />
      <property name="state" type="string" value="lit_0" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="32" />
      <property name="source" type="string" value="animate.candelabra, padded only" />
    </properties>
    <image source="sprites/lighting/library.lighting.three_candelabrum.v0.south.lit_0.png" width="32" height="64" />
    <animation>
      <frame tileid="512" duration="100" />
      <frame tileid="513" duration="100" />
      <frame tileid="514" duration="100" />
      <frame tileid="515" duration="100" />
    </animation>
  </tile>
  <tile id="513" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.lighting.three_candelabrum.v0.south.lit_1" />
      <property name="category" type="string" value="lighting" />
      <property name="kind" type="string" value="three_candelabrum" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="tabletop overlay" />
      <property name="state" type="string" value="lit_1" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="32" />
      <property name="source" type="string" value="animate.candelabra, padded only" />
    </properties>
    <image source="sprites/lighting/library.lighting.three_candelabrum.v0.south.lit_1.png" width="32" height="64" />
  </tile>
  <tile id="514" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.lighting.three_candelabrum.v0.south.lit_2" />
      <property name="category" type="string" value="lighting" />
      <property name="kind" type="string" value="three_candelabrum" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="tabletop overlay" />
      <property name="state" type="string" value="lit_2" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="32" />
      <property name="source" type="string" value="animate.candelabra, padded only" />
    </properties>
    <image source="sprites/lighting/library.lighting.three_candelabrum.v0.south.lit_2.png" width="32" height="64" />
  </tile>
  <tile id="515" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.lighting.three_candelabrum.v0.south.lit_3" />
      <property name="category" type="string" value="lighting" />
      <property name="kind" type="string" value="three_candelabrum" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="tabletop overlay" />
      <property name="state" type="string" value="lit_3" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="32" />
      <property name="source" type="string" value="animate.candelabra, padded only" />
    </properties>
    <image source="sprites/lighting/library.lighting.three_candelabrum.v0.south.lit_3.png" width="32" height="64" />
  </tile>
  <tile id="516" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.lighting.three_candelabrum.v0.south.extinguished" />
      <property name="category" type="string" value="lighting" />
      <property name="kind" type="string" value="three_candelabrum" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="tabletop overlay" />
      <property name="state" type="string" value="extinguished" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="32" />
      <property name="source" type="string" value="animate.candelabra, padded only" />
    </properties>
    <image source="sprites/lighting/library.lighting.three_candelabrum.v0.south.extinguished.png" width="32" height="64" />
  </tile>
  <tile id="640" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.lighting.five_candelabrum.v0.south.lit_0" />
      <property name="category" type="string" value="lighting" />
      <property name="kind" type="string" value="five_candelabrum" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="tabletop overlay" />
      <property name="state" type="string" value="lit_0" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="32" />
      <property name="source" type="string" value="library light layers; animate.Animation convention" />
    </properties>
    <image source="sprites/lighting/library.lighting.five_candelabrum.v0.south.lit_0.png" width="64" height="64" />
    <animation>
      <frame tileid="640" duration="100" />
      <frame tileid="641" duration="100" />
      <frame tileid="642" duration="100" />
      <frame tileid="643" duration="100" />
    </animation>
  </tile>
  <tile id="641" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.lighting.five_candelabrum.v0.south.lit_1" />
      <property name="category" type="string" value="lighting" />
      <property name="kind" type="string" value="five_candelabrum" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="tabletop overlay" />
      <property name="state" type="string" value="lit_1" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="32" />
      <property name="source" type="string" value="library light layers; animate.Animation convention" />
    </properties>
    <image source="sprites/lighting/library.lighting.five_candelabrum.v0.south.lit_1.png" width="64" height="64" />
  </tile>
  <tile id="642" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.lighting.five_candelabrum.v0.south.lit_2" />
      <property name="category" type="string" value="lighting" />
      <property name="kind" type="string" value="five_candelabrum" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="tabletop overlay" />
      <property name="state" type="string" value="lit_2" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="32" />
      <property name="source" type="string" value="library light layers; animate.Animation convention" />
    </properties>
    <image source="sprites/lighting/library.lighting.five_candelabrum.v0.south.lit_2.png" width="64" height="64" />
  </tile>
  <tile id="643" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.lighting.five_candelabrum.v0.south.lit_3" />
      <property name="category" type="string" value="lighting" />
      <property name="kind" type="string" value="five_candelabrum" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="tabletop overlay" />
      <property name="state" type="string" value="lit_3" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="32" />
      <property name="source" type="string" value="library light layers; animate.Animation convention" />
    </properties>
    <image source="sprites/lighting/library.lighting.five_candelabrum.v0.south.lit_3.png" width="64" height="64" />
  </tile>
  <tile id="644" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.lighting.five_candelabrum.v0.south.extinguished" />
      <property name="category" type="string" value="lighting" />
      <property name="kind" type="string" value="five_candelabrum" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="tabletop overlay" />
      <property name="state" type="string" value="extinguished" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="32" />
      <property name="anchor_y" type="int" value="32" />
      <property name="source" type="string" value="library light layers; animate.Animation convention" />
    </properties>
    <image source="sprites/lighting/library.lighting.five_candelabrum.v0.south.extinguished.png" width="64" height="64" />
  </tile>
  <tile id="768" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.lighting.wall_sconce.v0.south.lit_0" />
      <property name="category" type="string" value="lighting" />
      <property name="kind" type="string" value="wall_sconce" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="north wall overlay" />
      <property name="state" type="string" value="lit_0" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="32" />
      <property name="source" type="string" value="library light layers; animate.Animation convention" />
    </properties>
    <image source="sprites/lighting/library.lighting.wall_sconce.v0.south.lit_0.png" width="32" height="64" />
    <animation>
      <frame tileid="768" duration="100" />
      <frame tileid="769" duration="100" />
      <frame tileid="770" duration="100" />
      <frame tileid="771" duration="100" />
    </animation>
  </tile>
  <tile id="769" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.lighting.wall_sconce.v0.south.lit_1" />
      <property name="category" type="string" value="lighting" />
      <property name="kind" type="string" value="wall_sconce" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="north wall overlay" />
      <property name="state" type="string" value="lit_1" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="32" />
      <property name="source" type="string" value="library light layers; animate.Animation convention" />
    </properties>
    <image source="sprites/lighting/library.lighting.wall_sconce.v0.south.lit_1.png" width="32" height="64" />
  </tile>
  <tile id="770" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.lighting.wall_sconce.v0.south.lit_2" />
      <property name="category" type="string" value="lighting" />
      <property name="kind" type="string" value="wall_sconce" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="north wall overlay" />
      <property name="state" type="string" value="lit_2" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="32" />
      <property name="source" type="string" value="library light layers; animate.Animation convention" />
    </properties>
    <image source="sprites/lighting/library.lighting.wall_sconce.v0.south.lit_2.png" width="32" height="64" />
  </tile>
  <tile id="771" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.lighting.wall_sconce.v0.south.lit_3" />
      <property name="category" type="string" value="lighting" />
      <property name="kind" type="string" value="wall_sconce" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="north wall overlay" />
      <property name="state" type="string" value="lit_3" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="32" />
      <property name="source" type="string" value="library light layers; animate.Animation convention" />
    </properties>
    <image source="sprites/lighting/library.lighting.wall_sconce.v0.south.lit_3.png" width="32" height="64" />
  </tile>
  <tile id="772" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.lighting.wall_sconce.v0.south.extinguished" />
      <property name="category" type="string" value="lighting" />
      <property name="kind" type="string" value="wall_sconce" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="north wall overlay" />
      <property name="state" type="string" value="extinguished" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="32" />
      <property name="source" type="string" value="library light layers; animate.Animation convention" />
    </properties>
    <image source="sprites/lighting/library.lighting.wall_sconce.v0.south.extinguished.png" width="32" height="64" />
  </tile>
  <tile id="896" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.lighting.standing_lamp.v0.south.lit" />
      <property name="category" type="string" value="lighting" />
      <property name="kind" type="string" value="standing_lamp" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="lit" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="93" />
      <property name="source" type="string" value="library light layers; animate.Animation convention" />
    </properties>
    <image source="sprites/lighting/library.lighting.standing_lamp.v0.south.lit.png" width="32" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="82" width="23" height="10" />
    </objectgroup>
  </tile>
  <tile id="897" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.lighting.standing_lamp.v0.south.unlit" />
      <property name="category" type="string" value="lighting" />
      <property name="kind" type="string" value="standing_lamp" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="floor; feet anchored" />
      <property name="state" type="string" value="unlit" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="true" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="93" />
      <property name="source" type="string" value="library light layers; animate.Animation convention" />
    </properties>
    <image source="sprites/lighting/library.lighting.standing_lamp.v0.south.unlit.png" width="32" height="96" />
    <objectgroup draworder="index">
      <object id="1" name="footprint" type="Collision" x="5" y="82" width="23" height="10" />
    </objectgroup>
  </tile>
  <tile id="1024" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.lighting.chandelier.v0.south.lit_0" />
      <property name="category" type="string" value="lighting" />
      <property name="kind" type="string" value="chandelier" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="ceiling overlay" />
      <property name="state" type="string" value="lit_0" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="48" />
      <property name="anchor_y" type="int" value="32" />
      <property name="source" type="string" value="library light layers; animate.Animation convention" />
    </properties>
    <image source="sprites/lighting/library.lighting.chandelier.v0.south.lit_0.png" width="96" height="64" />
    <animation>
      <frame tileid="1024" duration="100" />
      <frame tileid="1025" duration="100" />
      <frame tileid="1026" duration="100" />
      <frame tileid="1027" duration="100" />
    </animation>
  </tile>
  <tile id="1025" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.lighting.chandelier.v0.south.lit_1" />
      <property name="category" type="string" value="lighting" />
      <property name="kind" type="string" value="chandelier" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="ceiling overlay" />
      <property name="state" type="string" value="lit_1" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="48" />
      <property name="anchor_y" type="int" value="32" />
      <property name="source" type="string" value="library light layers; animate.Animation convention" />
    </properties>
    <image source="sprites/lighting/library.lighting.chandelier.v0.south.lit_1.png" width="96" height="64" />
  </tile>
  <tile id="1026" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.lighting.chandelier.v0.south.lit_2" />
      <property name="category" type="string" value="lighting" />
      <property name="kind" type="string" value="chandelier" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="ceiling overlay" />
      <property name="state" type="string" value="lit_2" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="48" />
      <property name="anchor_y" type="int" value="32" />
      <property name="source" type="string" value="library light layers; animate.Animation convention" />
    </properties>
    <image source="sprites/lighting/library.lighting.chandelier.v0.south.lit_2.png" width="96" height="64" />
  </tile>
  <tile id="1027" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.lighting.chandelier.v0.south.lit_3" />
      <property name="category" type="string" value="lighting" />
      <property name="kind" type="string" value="chandelier" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="ceiling overlay" />
      <property name="state" type="string" value="lit_3" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="48" />
      <property name="anchor_y" type="int" value="32" />
      <property name="source" type="string" value="library light layers; animate.Animation convention" />
    </properties>
    <image source="sprites/lighting/library.lighting.chandelier.v0.south.lit_3.png" width="96" height="64" />
  </tile>
  <tile id="1028" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.lighting.chandelier.v0.south.extinguished" />
      <property name="category" type="string" value="lighting" />
      <property name="kind" type="string" value="chandelier" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="ceiling overlay" />
      <property name="state" type="string" value="extinguished" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="48" />
      <property name="anchor_y" type="int" value="32" />
      <property name="source" type="string" value="library light layers; animate.Animation convention" />
    </properties>
    <image source="sprites/lighting/library.lighting.chandelier.v0.south.extinguished.png" width="96" height="64" />
  </tile>
  <tile id="1152" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.lighting.reading_lamp.v0.south.lit" />
      <property name="category" type="string" value="lighting" />
      <property name="kind" type="string" value="reading_lamp" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="tabletop overlay" />
      <property name="state" type="string" value="lit" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="16" />
      <property name="source" type="string" value="library light layers; animate.Animation convention" />
    </properties>
    <image source="sprites/lighting/library.lighting.reading_lamp.v0.south.lit.png" width="32" height="32" />
  </tile>
  <tile id="1153" type="LibraryFurniture">
    <properties>
      <property name="asset_id" type="string" value="library.lighting.reading_lamp.v0.south.unlit" />
      <property name="category" type="string" value="lighting" />
      <property name="kind" type="string" value="reading_lamp" />
      <property name="variant" type="int" value="0" />
      <property name="direction" type="string" value="south" />
      <property name="placement" type="string" value="tabletop overlay" />
      <property name="state" type="string" value="unlit" />
      <property name="interactable" type="bool" value="false" />
      <property name="blocking" type="bool" value="false" />
      <property name="anchor_x" type="int" value="16" />
      <property name="anchor_y" type="int" value="16" />
      <property name="source" type="string" value="library light layers; animate.Animation convention" />
    </properties>
    <image source="sprites/lighting/library.lighting.reading_lamp.v0.south.unlit.png" width="32" height="32" />
  </tile>
</tileset>