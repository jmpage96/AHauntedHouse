<?xml version='1.0' encoding='utf-8'?>
<tileset version="1.10" name="victorian_walls" tilewidth="32" tileheight="32" tilecount="640" columns="16" objectalignment="topleft" spacing="0" margin="0">
  <properties>
    <property name="schema" type="string" value="victorian.architecture.v1" />
    <property name="native_pixel_size" type="int" value="32" />
    <property name="wall_height_pixels" type="int" value="96" />
    <property name="lighting" type="string" value="upper-left" />
    <property name="id_policy" type="string" value="append-only reserved blocks" />
  </properties>
  <image source="walls.png" width="512" height="1280" />
  <transformations hflip="0" vflip="0" rotate="0" preferuntransformed="1" />
  <tile id="0" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.upper" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="upper" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="1" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.middle" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="middle" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="2" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.lower" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="lower" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="3" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.surface" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="surface" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="4" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.middle_v1" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="middle_v1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="5" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.middle_v2" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="middle_v2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="6" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.middle_v3" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="middle_v3" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="7" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.middle_v4" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="middle_v4" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="8" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.skirting" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="skirting" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="9" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.cornice" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="cornice" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="10" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.window_0_0" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="window_0_0" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="11" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.window_1_0" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="window_1_0" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="12" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.door_0_0" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="door_0_0" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="13" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.door_1_0" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="door_1_0" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="14" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.horizontal_north" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="horizontal_north" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="15" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.horizontal_south" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="horizontal_south" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="16" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.vertical_left" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="vertical_left" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="17" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.vertical_right" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="vertical_right" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="18" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.room_nw" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="room_nw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="19" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.room_ne" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="room_ne" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="20" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.room_sw" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="room_sw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="21" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.room_se" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="room_se" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="22" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.outer_nw" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="outer_nw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="23" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.outer_ne" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="outer_ne" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="24" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.outer_sw" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="outer_sw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="25" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.outer_se" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="outer_se" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="26" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.window_0_1" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="window_0_1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="27" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.window_1_1" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="window_1_1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="28" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.door_0_1" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="door_0_1" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="29" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.door_1_1" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="door_1_1" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="30" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.inner_nw" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="inner_nw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="31" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.inner_ne" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="inner_ne" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="32" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.inner_sw" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="inner_sw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="33" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.inner_se" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="inner_se" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="34" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.end_left" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="end_left" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="35" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.end_right" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="end_right" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="36" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.surround_left_0" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="surround_left_0" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="37" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.surround_left_1" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="surround_left_1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="38" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.surround_left_2" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="surround_left_2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="39" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.surround_right_0" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="surround_right_0" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="40" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.surround_right_1" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="surround_right_1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="41" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.surround_right_2" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="surround_right_2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="42" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.window_0_2" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="window_0_2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="43" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.window_1_2" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="window_1_2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="44" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.door_0_2" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="door_0_2" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="45" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.door_1_2" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="door_1_2" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="46" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.header_left" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="header_left" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="47" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.header_right" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="header_right" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="48" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.threshold_left" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="threshold_left" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="49" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.threshold_right" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="threshold_right" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="50" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.burgundy_damask.wall_to_floor" />
      <property name="family" type="string" value="burgundy_damask" />
      <property name="role" type="string" value="wall_to_floor" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="64" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.upper" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="upper" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="65" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.middle" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="middle" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="66" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.lower" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="lower" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="67" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.surface" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="surface" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="68" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.middle_v1" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="middle_v1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="69" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.middle_v2" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="middle_v2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="70" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.middle_v3" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="middle_v3" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="71" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.middle_v4" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="middle_v4" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="72" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.skirting" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="skirting" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="73" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.cornice" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="cornice" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="74" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.window_0_0" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="window_0_0" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="75" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.window_1_0" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="window_1_0" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="76" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.door_0_0" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="door_0_0" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="77" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.door_1_0" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="door_1_0" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="78" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.horizontal_north" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="horizontal_north" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="79" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.horizontal_south" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="horizontal_south" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="80" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.vertical_left" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="vertical_left" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="81" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.vertical_right" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="vertical_right" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="82" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.room_nw" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="room_nw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="83" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.room_ne" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="room_ne" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="84" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.room_sw" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="room_sw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="85" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.room_se" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="room_se" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="86" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.outer_nw" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="outer_nw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="87" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.outer_ne" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="outer_ne" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="88" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.outer_sw" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="outer_sw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="89" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.outer_se" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="outer_se" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="90" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.window_0_1" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="window_0_1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="91" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.window_1_1" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="window_1_1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="92" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.door_0_1" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="door_0_1" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="93" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.door_1_1" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="door_1_1" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="94" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.inner_nw" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="inner_nw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="95" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.inner_ne" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="inner_ne" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="96" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.inner_sw" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="inner_sw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="97" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.inner_se" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="inner_se" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="98" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.end_left" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="end_left" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="99" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.end_right" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="end_right" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="100" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.surround_left_0" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="surround_left_0" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="101" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.surround_left_1" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="surround_left_1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="102" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.surround_left_2" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="surround_left_2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="103" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.surround_right_0" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="surround_right_0" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="104" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.surround_right_1" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="surround_right_1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="105" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.surround_right_2" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="surround_right_2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="106" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.window_0_2" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="window_0_2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="107" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.window_1_2" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="window_1_2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="108" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.door_0_2" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="door_0_2" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="109" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.door_1_2" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="door_1_2" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="110" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.header_left" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="header_left" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="111" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.header_right" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="header_right" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="112" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.threshold_left" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="threshold_left" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="113" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.threshold_right" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="threshold_right" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="114" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.green_damask.wall_to_floor" />
      <property name="family" type="string" value="green_damask" />
      <property name="role" type="string" value="wall_to_floor" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="128" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.upper" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="upper" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="129" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.middle" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="middle" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="130" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.lower" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="lower" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="131" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.surface" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="surface" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="132" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.middle_v1" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="middle_v1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="133" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.middle_v2" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="middle_v2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="134" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.middle_v3" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="middle_v3" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="135" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.middle_v4" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="middle_v4" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="136" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.skirting" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="skirting" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="137" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.cornice" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="cornice" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="138" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.window_0_0" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="window_0_0" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="139" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.window_1_0" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="window_1_0" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="140" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.door_0_0" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="door_0_0" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="141" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.door_1_0" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="door_1_0" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="142" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.horizontal_north" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="horizontal_north" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="143" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.horizontal_south" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="horizontal_south" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="144" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.vertical_left" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="vertical_left" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="145" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.vertical_right" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="vertical_right" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="146" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.room_nw" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="room_nw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="147" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.room_ne" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="room_ne" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="148" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.room_sw" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="room_sw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="149" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.room_se" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="room_se" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="150" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.outer_nw" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="outer_nw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="151" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.outer_ne" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="outer_ne" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="152" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.outer_sw" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="outer_sw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="153" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.outer_se" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="outer_se" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="154" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.window_0_1" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="window_0_1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="155" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.window_1_1" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="window_1_1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="156" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.door_0_1" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="door_0_1" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="157" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.door_1_1" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="door_1_1" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="158" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.inner_nw" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="inner_nw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="159" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.inner_ne" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="inner_ne" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="160" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.inner_sw" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="inner_sw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="161" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.inner_se" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="inner_se" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="162" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.end_left" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="end_left" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="163" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.end_right" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="end_right" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="164" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.surround_left_0" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="surround_left_0" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="165" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.surround_left_1" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="surround_left_1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="166" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.surround_left_2" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="surround_left_2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="167" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.surround_right_0" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="surround_right_0" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="168" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.surround_right_1" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="surround_right_1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="169" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.surround_right_2" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="surround_right_2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="170" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.window_0_2" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="window_0_2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="171" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.window_1_2" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="window_1_2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="172" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.door_0_2" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="door_0_2" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="173" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.door_1_2" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="door_1_2" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="174" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.header_left" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="header_left" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="175" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.header_right" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="header_right" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="176" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.threshold_left" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="threshold_left" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="177" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.threshold_right" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="threshold_right" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="178" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.blue_floral.wall_to_floor" />
      <property name="family" type="string" value="blue_floral" />
      <property name="role" type="string" value="wall_to_floor" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="192" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.upper" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="upper" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="193" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.middle" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="middle" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="194" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.lower" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="lower" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="195" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.surface" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="surface" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="196" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.middle_v1" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="middle_v1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="197" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.middle_v2" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="middle_v2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="198" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.middle_v3" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="middle_v3" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="199" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.middle_v4" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="middle_v4" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="200" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.skirting" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="skirting" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="201" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.cornice" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="cornice" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="202" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.window_0_0" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="window_0_0" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="203" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.window_1_0" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="window_1_0" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="204" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.door_0_0" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="door_0_0" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="205" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.door_1_0" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="door_1_0" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="206" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.horizontal_north" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="horizontal_north" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="207" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.horizontal_south" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="horizontal_south" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="208" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.vertical_left" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="vertical_left" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="209" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.vertical_right" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="vertical_right" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="210" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.room_nw" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="room_nw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="211" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.room_ne" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="room_ne" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="212" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.room_sw" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="room_sw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="213" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.room_se" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="room_se" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="214" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.outer_nw" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="outer_nw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="215" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.outer_ne" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="outer_ne" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="216" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.outer_sw" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="outer_sw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="217" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.outer_se" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="outer_se" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="218" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.window_0_1" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="window_0_1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="219" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.window_1_1" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="window_1_1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="220" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.door_0_1" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="door_0_1" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="221" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.door_1_1" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="door_1_1" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="222" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.inner_nw" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="inner_nw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="223" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.inner_ne" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="inner_ne" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="224" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.inner_sw" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="inner_sw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="225" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.inner_se" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="inner_se" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="226" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.end_left" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="end_left" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="227" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.end_right" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="end_right" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="228" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.surround_left_0" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="surround_left_0" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="229" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.surround_left_1" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="surround_left_1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="230" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.surround_left_2" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="surround_left_2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="231" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.surround_right_0" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="surround_right_0" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="232" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.surround_right_1" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="surround_right_1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="233" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.surround_right_2" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="surround_right_2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="234" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.window_0_2" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="window_0_2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="235" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.window_1_2" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="window_1_2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="236" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.door_0_2" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="door_0_2" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="237" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.door_1_2" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="door_1_2" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="238" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.header_left" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="header_left" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="239" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.header_right" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="header_right" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="240" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.threshold_left" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="threshold_left" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="241" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.threshold_right" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="threshold_right" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="242" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cream_floral.wall_to_floor" />
      <property name="family" type="string" value="cream_floral" />
      <property name="role" type="string" value="wall_to_floor" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="256" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.upper" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="upper" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="257" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.middle" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="middle" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="258" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.lower" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="lower" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="259" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.surface" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="surface" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="260" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.middle_v1" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="middle_v1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="261" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.middle_v2" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="middle_v2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="262" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.middle_v3" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="middle_v3" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="263" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.middle_v4" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="middle_v4" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="264" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.skirting" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="skirting" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="265" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.cornice" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="cornice" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="266" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.window_0_0" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="window_0_0" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="267" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.window_1_0" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="window_1_0" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="268" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.door_0_0" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="door_0_0" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="269" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.door_1_0" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="door_1_0" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="270" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.horizontal_north" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="horizontal_north" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="271" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.horizontal_south" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="horizontal_south" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="272" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.vertical_left" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="vertical_left" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="273" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.vertical_right" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="vertical_right" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="274" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.room_nw" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="room_nw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="275" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.room_ne" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="room_ne" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="276" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.room_sw" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="room_sw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="277" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.room_se" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="room_se" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="278" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.outer_nw" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="outer_nw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="279" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.outer_ne" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="outer_ne" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="280" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.outer_sw" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="outer_sw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="281" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.outer_se" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="outer_se" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="282" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.window_0_1" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="window_0_1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="283" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.window_1_1" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="window_1_1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="284" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.door_0_1" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="door_0_1" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="285" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.door_1_1" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="door_1_1" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="286" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.inner_nw" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="inner_nw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="287" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.inner_ne" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="inner_ne" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="288" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.inner_sw" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="inner_sw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="289" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.inner_se" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="inner_se" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="290" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.end_left" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="end_left" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="291" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.end_right" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="end_right" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="292" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.surround_left_0" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="surround_left_0" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="293" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.surround_left_1" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="surround_left_1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="294" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.surround_left_2" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="surround_left_2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="295" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.surround_right_0" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="surround_right_0" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="296" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.surround_right_1" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="surround_right_1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="297" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.surround_right_2" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="surround_right_2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="298" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.window_0_2" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="window_0_2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="299" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.window_1_2" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="window_1_2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="300" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.door_0_2" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="door_0_2" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="301" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.door_1_2" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="door_1_2" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="302" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.header_left" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="header_left" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="303" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.header_right" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="header_right" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="304" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.threshold_left" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="threshold_left" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="305" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.threshold_right" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="threshold_right" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="306" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.wood_panelling.wall_to_floor" />
      <property name="family" type="string" value="wood_panelling" />
      <property name="role" type="string" value="wall_to_floor" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="320" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.upper" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="upper" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="321" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.middle" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="middle" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="322" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.lower" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="lower" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="323" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.surface" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="surface" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="324" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.middle_v1" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="middle_v1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="325" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.middle_v2" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="middle_v2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="326" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.middle_v3" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="middle_v3" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="327" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.middle_v4" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="middle_v4" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="328" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.skirting" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="skirting" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="329" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.cornice" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="cornice" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="330" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.window_0_0" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="window_0_0" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="331" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.window_1_0" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="window_1_0" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="332" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.door_0_0" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="door_0_0" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="333" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.door_1_0" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="door_1_0" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="334" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.horizontal_north" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="horizontal_north" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="335" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.horizontal_south" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="horizontal_south" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="336" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.vertical_left" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="vertical_left" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="337" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.vertical_right" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="vertical_right" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="338" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.room_nw" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="room_nw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="339" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.room_ne" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="room_ne" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="340" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.room_sw" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="room_sw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="341" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.room_se" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="room_se" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="342" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.outer_nw" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="outer_nw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="343" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.outer_ne" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="outer_ne" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="344" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.outer_sw" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="outer_sw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="345" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.outer_se" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="outer_se" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="346" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.window_0_1" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="window_0_1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="347" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.window_1_1" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="window_1_1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="348" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.door_0_1" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="door_0_1" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="349" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.door_1_1" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="door_1_1" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="350" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.inner_nw" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="inner_nw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="351" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.inner_ne" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="inner_ne" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="352" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.inner_sw" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="inner_sw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="353" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.inner_se" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="inner_se" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="354" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.end_left" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="end_left" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="355" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.end_right" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="end_right" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="356" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.surround_left_0" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="surround_left_0" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="357" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.surround_left_1" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="surround_left_1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="358" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.surround_left_2" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="surround_left_2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="359" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.surround_right_0" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="surround_right_0" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="360" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.surround_right_1" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="surround_right_1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="361" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.surround_right_2" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="surround_right_2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="362" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.window_0_2" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="window_0_2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="363" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.window_1_2" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="window_1_2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="364" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.door_0_2" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="door_0_2" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="365" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.door_1_2" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="door_1_2" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="366" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.header_left" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="header_left" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="367" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.header_right" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="header_right" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="368" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.threshold_left" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="threshold_left" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="369" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.threshold_right" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="threshold_right" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="370" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.half_panelling.wall_to_floor" />
      <property name="family" type="string" value="half_panelling" />
      <property name="role" type="string" value="wall_to_floor" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="384" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.upper" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="upper" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="385" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.middle" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="middle" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="386" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.lower" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="lower" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="387" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.surface" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="surface" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="388" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.middle_v1" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="middle_v1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="389" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.middle_v2" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="middle_v2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="390" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.middle_v3" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="middle_v3" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="391" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.middle_v4" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="middle_v4" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="392" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.skirting" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="skirting" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="393" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.cornice" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="cornice" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="394" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.window_0_0" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="window_0_0" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="395" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.window_1_0" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="window_1_0" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="396" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.door_0_0" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="door_0_0" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="397" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.door_1_0" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="door_1_0" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="398" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.horizontal_north" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="horizontal_north" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="399" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.horizontal_south" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="horizontal_south" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="400" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.vertical_left" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="vertical_left" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="401" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.vertical_right" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="vertical_right" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="402" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.room_nw" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="room_nw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="403" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.room_ne" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="room_ne" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="404" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.room_sw" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="room_sw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="405" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.room_se" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="room_se" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="406" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.outer_nw" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="outer_nw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="407" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.outer_ne" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="outer_ne" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="408" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.outer_sw" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="outer_sw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="409" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.outer_se" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="outer_se" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="410" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.window_0_1" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="window_0_1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="411" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.window_1_1" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="window_1_1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="412" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.door_0_1" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="door_0_1" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="413" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.door_1_1" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="door_1_1" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="414" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.inner_nw" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="inner_nw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="415" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.inner_ne" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="inner_ne" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="416" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.inner_sw" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="inner_sw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="417" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.inner_se" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="inner_se" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="418" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.end_left" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="end_left" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="419" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.end_right" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="end_right" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="420" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.surround_left_0" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="surround_left_0" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="421" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.surround_left_1" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="surround_left_1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="422" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.surround_left_2" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="surround_left_2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="423" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.surround_right_0" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="surround_right_0" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="424" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.surround_right_1" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="surround_right_1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="425" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.surround_right_2" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="surround_right_2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="426" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.window_0_2" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="window_0_2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="427" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.window_1_2" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="window_1_2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="428" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.door_0_2" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="door_0_2" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="429" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.door_1_2" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="door_1_2" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="430" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.header_left" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="header_left" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="431" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.header_right" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="header_right" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="432" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.threshold_left" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="threshold_left" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="433" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.threshold_right" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="threshold_right" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="434" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.plaster.wall_to_floor" />
      <property name="family" type="string" value="plaster" />
      <property name="role" type="string" value="wall_to_floor" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="448" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.upper" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="upper" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="449" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.middle" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="middle" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="450" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.lower" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="lower" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="451" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.surface" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="surface" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="452" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.middle_v1" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="middle_v1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="453" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.middle_v2" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="middle_v2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="454" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.middle_v3" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="middle_v3" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="455" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.middle_v4" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="middle_v4" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="456" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.skirting" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="skirting" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="457" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.cornice" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="cornice" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="458" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.window_0_0" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="window_0_0" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="459" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.window_1_0" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="window_1_0" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="460" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.door_0_0" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="door_0_0" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="461" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.door_1_0" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="door_1_0" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="462" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.horizontal_north" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="horizontal_north" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="463" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.horizontal_south" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="horizontal_south" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="464" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.vertical_left" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="vertical_left" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="465" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.vertical_right" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="vertical_right" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="466" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.room_nw" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="room_nw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="467" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.room_ne" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="room_ne" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="468" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.room_sw" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="room_sw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="469" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.room_se" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="room_se" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="470" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.outer_nw" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="outer_nw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="471" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.outer_ne" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="outer_ne" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="472" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.outer_sw" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="outer_sw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="473" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.outer_se" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="outer_se" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="474" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.window_0_1" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="window_0_1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="475" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.window_1_1" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="window_1_1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="476" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.door_0_1" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="door_0_1" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="477" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.door_1_1" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="door_1_1" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="478" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.inner_nw" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="inner_nw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="479" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.inner_ne" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="inner_ne" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="480" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.inner_sw" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="inner_sw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="481" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.inner_se" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="inner_se" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="482" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.end_left" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="end_left" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="483" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.end_right" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="end_right" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="484" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.surround_left_0" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="surround_left_0" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="485" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.surround_left_1" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="surround_left_1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="486" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.surround_left_2" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="surround_left_2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="487" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.surround_right_0" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="surround_right_0" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="488" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.surround_right_1" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="surround_right_1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="489" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.surround_right_2" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="surround_right_2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="490" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.window_0_2" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="window_0_2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="491" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.window_1_2" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="window_1_2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="492" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.door_0_2" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="door_0_2" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="493" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.door_1_2" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="door_1_2" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="494" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.header_left" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="header_left" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="495" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.header_right" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="header_right" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="496" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.threshold_left" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="threshold_left" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="497" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.threshold_right" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="threshold_right" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="498" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.brick.wall_to_floor" />
      <property name="family" type="string" value="brick" />
      <property name="role" type="string" value="wall_to_floor" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="512" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.upper" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="upper" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="513" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.middle" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="middle" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="514" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.lower" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="lower" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="515" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.surface" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="surface" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="516" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.middle_v1" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="middle_v1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="517" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.middle_v2" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="middle_v2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="518" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.middle_v3" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="middle_v3" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="519" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.middle_v4" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="middle_v4" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="520" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.skirting" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="skirting" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="521" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.cornice" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="cornice" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="522" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.window_0_0" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="window_0_0" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="523" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.window_1_0" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="window_1_0" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="524" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.door_0_0" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="door_0_0" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="525" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.door_1_0" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="door_1_0" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="526" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.horizontal_north" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="horizontal_north" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="527" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.horizontal_south" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="horizontal_south" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="528" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.vertical_left" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="vertical_left" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="529" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.vertical_right" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="vertical_right" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="530" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.room_nw" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="room_nw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="531" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.room_ne" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="room_ne" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="532" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.room_sw" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="room_sw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="533" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.room_se" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="room_se" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="534" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.outer_nw" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="outer_nw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="535" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.outer_ne" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="outer_ne" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="536" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.outer_sw" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="outer_sw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="537" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.outer_se" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="outer_se" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="538" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.window_0_1" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="window_0_1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="539" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.window_1_1" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="window_1_1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="540" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.door_0_1" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="door_0_1" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="541" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.door_1_1" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="door_1_1" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="542" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.inner_nw" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="inner_nw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="543" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.inner_ne" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="inner_ne" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="544" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.inner_sw" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="inner_sw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="545" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.inner_se" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="inner_se" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="546" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.end_left" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="end_left" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="547" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.end_right" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="end_right" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="548" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.surround_left_0" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="surround_left_0" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="549" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.surround_left_1" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="surround_left_1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="550" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.surround_left_2" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="surround_left_2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="551" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.surround_right_0" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="surround_right_0" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="552" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.surround_right_1" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="surround_right_1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="553" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.surround_right_2" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="surround_right_2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="554" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.window_0_2" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="window_0_2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="555" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.window_1_2" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="window_1_2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="556" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.door_0_2" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="door_0_2" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="557" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.door_1_2" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="door_1_2" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="558" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.header_left" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="header_left" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="559" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.header_right" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="header_right" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="560" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.threshold_left" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="threshold_left" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="561" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.threshold_right" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="threshold_right" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="562" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.cellar_wall.wall_to_floor" />
      <property name="family" type="string" value="cellar_wall" />
      <property name="role" type="string" value="wall_to_floor" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="576" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.upper" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="upper" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="577" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.middle" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="middle" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="578" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.lower" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="lower" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="579" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.surface" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="surface" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="580" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.middle_v1" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="middle_v1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="581" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.middle_v2" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="middle_v2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="582" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.middle_v3" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="middle_v3" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="583" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.middle_v4" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="middle_v4" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="584" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.skirting" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="skirting" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="585" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.cornice" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="cornice" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="586" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.window_0_0" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="window_0_0" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="587" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.window_1_0" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="window_1_0" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="588" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.door_0_0" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="door_0_0" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="589" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.door_1_0" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="door_1_0" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="590" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.horizontal_north" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="horizontal_north" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="591" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.horizontal_south" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="horizontal_south" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="592" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.vertical_left" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="vertical_left" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="593" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.vertical_right" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="vertical_right" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="594" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.room_nw" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="room_nw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="595" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.room_ne" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="room_ne" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="596" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.room_sw" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="room_sw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="597" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.room_se" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="room_se" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="598" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.outer_nw" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="outer_nw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="599" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.outer_ne" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="outer_ne" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="600" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.outer_sw" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="outer_sw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="601" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.outer_se" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="outer_se" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="602" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.window_0_1" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="window_0_1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="603" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.window_1_1" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="window_1_1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="604" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.door_0_1" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="door_0_1" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="605" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.door_1_1" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="door_1_1" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="606" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.inner_nw" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="inner_nw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="607" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.inner_ne" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="inner_ne" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="608" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.inner_sw" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="inner_sw" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="609" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.inner_se" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="inner_se" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="610" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.end_left" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="end_left" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="611" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.end_right" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="end_right" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="612" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.surround_left_0" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="surround_left_0" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="613" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.surround_left_1" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="surround_left_1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="614" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.surround_left_2" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="surround_left_2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="615" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.surround_right_0" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="surround_right_0" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="616" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.surround_right_1" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="surround_right_1" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="617" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.surround_right_2" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="surround_right_2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="618" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.window_0_2" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="window_0_2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="619" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.window_1_2" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="window_1_2" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="620" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.door_0_2" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="door_0_2" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="621" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.door_1_2" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="door_1_2" />
      <property name="passable" type="bool" value="true" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="622" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.header_left" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="header_left" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="623" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.header_right" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="header_right" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="624" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.threshold_left" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="threshold_left" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="625" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.threshold_right" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="threshold_right" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
  <tile id="626" type="Architecture" probability="1">
    <properties>
      <property name="asset" type="string" value="wall.striped.wall_to_floor" />
      <property name="family" type="string" value="striped" />
      <property name="role" type="string" value="wall_to_floor" />
      <property name="passable" type="bool" value="false" />
      <property name="wall_height" type="int" value="96" />
    </properties>
  </tile>
</tileset>