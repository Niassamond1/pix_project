'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "92a5976d4b77bbd781bdaad056bd2506",
"assets/AssetManifest.bin.json": "aa9971f1da75d37957be5b1734abd303",
"assets/AssetManifest.json": "e463398232ee1161d8369b327635be54",
"assets/assets/audio/bounce.wav": "a7e737d0b570a5ba0130a9c27dc82869",
"assets/assets/audio/collect_fruit.wav": "6971cfd2a48b29e48501a23f83fd0a9b",
"assets/assets/audio/disappear.wav": "998b72afbbec3525985aa0ecbe505d03",
"assets/assets/audio/hit.wav": "e0e47a8f3c6ba5c337646952b519bba1",
"assets/assets/audio/jump.wav": "1c58d28d78432ab4800c26148655bc7a",
"assets/assets/icon-adaptive-foreground.png": "923365fc6d4bb21747444fbac8af4e21",
"assets/assets/icon.png": "9457ebd93f5c2096205ae065b8349128",
"assets/assets/images/20%2520Enemies.png": "73730ecfde474d999a027b06288751b6",
"assets/assets/images/2x/back.png": "85cda8f41a13153d6f3fb1c403f272ea",
"assets/assets/images/2x/restart.png": "83aea4677055df9b0d8171f5315f2a60",
"assets/assets/images/2x/settings.png": "8404e18c68ba99ca0b181bd96ace0376",
"assets/assets/images/3.5x/back.png": "85db134e26410547037485447f659277",
"assets/assets/images/3.5x/restart.png": "583169ac365d9515fc12f29e3b530de0",
"assets/assets/images/3.5x/settings.png": "c977a1e6c59e8cfd5cd88a0c973928fc",
"assets/assets/images/3x/back.png": "88a977a654df5a490037340f90a5a19e",
"assets/assets/images/3x/restart.png": "429270ce832c881b80fbd592e5ff1e0e",
"assets/assets/images/3x/settings.png": "21ff2cc135a762f74ed1a80aac6502bb",
"assets/assets/images/back.png": "3c82301693d5c4140786184a06c23f7e",
"assets/assets/images/Background/Blue.png": "f86e07aab82505fc49710152f83cc385",
"assets/assets/images/Background/Brown.png": "45c9c887fa73b0ade76974de63ab9157",
"assets/assets/images/Background/Gray.png": "31fb9bc36ec926ee64d999d3387b7e09",
"assets/assets/images/Background/Green.png": "e6eeace8a9d516f2e9768e5228e824fb",
"assets/assets/images/Background/Pink.png": "31b5e360eb9610c58138bb7cfdfb96a1",
"assets/assets/images/Background/Purple.png": "f8cc6aa8fd738e6e4db8b6607b7e6c37",
"assets/assets/images/Background/Yellow.png": "c3f96416e21f366bc0c3635ce5b530d5",
"assets/assets/images/blue_button1.png": "c5ac9ffc08055cdbb731e6bfb0d2593a",
"assets/assets/images/blue_button2.png": "b2ac54312d3b566d324f461aa50b8f5b",
"assets/assets/images/bullet.png": "f35b61944969e005d6077b91e2020b9e",
"assets/assets/images/cooldown/cooldown.png": "51e3a3fd54f133bf9ede0a1fc3596af4",
"assets/assets/images/direction_attack.png": "04fa54924d587beff5005965f2caa4b8",
"assets/assets/images/Enemies/Chicken/Hit%2520(32x34).png": "1a0b324bc2c06c132f6e17d509928a34",
"assets/assets/images/Enemies/Chicken/Idle%2520(32x34).png": "540724fcaccd692f5d3adb169fa8db2b",
"assets/assets/images/Enemies/Chicken/Run%2520(32x34).png": "58190fdf957eaba5b783bbe2df837c2e",
"assets/assets/images/enemy/attack_effect_right.png": "15831f9ccee22a845e854ccb3d18f6e5",
"assets/assets/images/enemy/goblin_idle.png": "8c97e935786b994c3cff4008212381b9",
"assets/assets/images/enemy/goblin_idle_left.png": "a7563675f85ed259b2d0aae50ded196b",
"assets/assets/images/enemy/goblin_run_left.png": "05863189b562610b17a062114c7849a9",
"assets/assets/images/enemy/goblin_run_right.png": "565c2f9a0bb01a9c56975664f8cd375c",
"assets/assets/images/exp_animation.png": "8fbf66bfa0f42b973859ddefcce70fc0",
"assets/assets/images/exp_animation_0.png": "449127509d726b9a0ab801662942a428",
"assets/assets/images/exp_animation_100.png": "2ba40e53b460965e431a6a96c6a0750d",
"assets/assets/images/exp_animation_25.png": "0700b8397509bbef984513f6686f02d0",
"assets/assets/images/exp_animation_50.png": "dab7f99a0d91718f8b68d0bdc04664ad",
"assets/assets/images/exp_animation_75.png": "799fecd91fb52d93a13277a92a53c78d",
"assets/assets/images/furniture.png": "63948b94a5eaca29b9e523ba1d3bbaf2",
"assets/assets/images/health_ui.png": "219e39516312f2f6bc264357497b99cb",
"assets/assets/images/Hello.png": "a55305158db44491131714a2496e6054",
"assets/assets/images/HUD/Joystick.png": "09122c4ce3cb6bfb3a3ad20ef4d1dcd5",
"assets/assets/images/HUD/JumpButton.png": "7213f3e7a78bd6ee2ea1b4053971977e",
"assets/assets/images/HUD/knob.png": "bd43ff270c826f3734c601cce6d0e14c",
"assets/assets/images/human.png": "7e5d257d818a12a74dab746c59498440",
"assets/assets/images/Items/Checkpoints/Checkpoint/Checkpoint%2520(Flag%2520Idle)(64x64).png": "dd8752c20a0f69ab173f1ead16044462",
"assets/assets/images/Items/Checkpoints/Checkpoint/Checkpoint%2520(Flag%2520Out)%2520(64x64).png": "c4730e5429a75691e2d2a9351c76738e",
"assets/assets/images/Items/Checkpoints/Checkpoint/Checkpoint%2520(No%2520Flag).png": "9126203dc833ec3b7dfb7a05e41910e5",
"assets/assets/images/Items/Fruits/Apple.png": "de3dbfa7d33e6bb344d0560e36d8bf53",
"assets/assets/images/Items/Fruits/Bananas.png": "03466a1dbd95724e705efe17e72c1c4e",
"assets/assets/images/Items/Fruits/Cherries.png": "fc2a60aee885c33d0d10e643157213e4",
"assets/assets/images/Items/Fruits/Collected.png": "0aa8cdedde5af58d5222c2db1e0a96de",
"assets/assets/images/Items/Fruits/Kiwi.png": "3d903dd9bf3421c31a5373b0920c876e",
"assets/assets/images/Items/Fruits/Melon.png": "eb6f978fbf95d76587bcf656c649540b",
"assets/assets/images/Items/Fruits/Orange.png": "60e0f68620c442b9403a477bbe3588ed",
"assets/assets/images/Items/Fruits/Pineapple.png": "0740bf84a38504383c80103d60582217",
"assets/assets/images/Items/Fruits/Strawberry.png": "568a3f91b8f6102f1b518c1aba0e8e09",
"assets/assets/images/itens/barrel.png": "dc4d5a9e456b6f1c6ec6fdcc66af7727",
"assets/assets/images/itens/bookshelf.png": "ce2fc17cb8251da9966a3e91bb0b2272",
"assets/assets/images/itens/chest_spritesheet.png": "bcc8785d27d816e23eca114dd4e708ed",
"assets/assets/images/itens/column.png": "2ccdc666f36fef12bb99345d4c6c9d66",
"assets/assets/images/itens/flag_green.png": "1a5a7df4b10a84b0a722b3b6600198dd",
"assets/assets/images/itens/flag_red.png": "6aca7b9e01f86f1b1a45e262e65821b8",
"assets/assets/images/itens/potion_life.png": "825b71a3532854e849d512683dba06b0",
"assets/assets/images/itens/prisoner.png": "45dcdd9a419bcd1f39cfd78024865578",
"assets/assets/images/itens/spikes.png": "8ee92dd121da5fc50964a6a68e3e262c",
"assets/assets/images/itens/table.png": "5e22fb237c60943f46ba18d5e176c10c",
"assets/assets/images/itens/torch_spritesheet.png": "858f57abd642f0303de50d719532f198",
"assets/assets/images/joystick_attack.png": "0f5325cb2ddcba703e4c9d7d2dd266df",
"assets/assets/images/joystick_attack_range.png": "8994f23fc67442c8361432f0cc9a2fa1",
"assets/assets/images/joystick_background.png": "8c9aa78348b48e03f06bb97f74b819c9",
"assets/assets/images/joystick_knob.png": "bb0811554c35e7d74df6d80fb5ff5cd5",
"assets/assets/images/lpc/body/brown.png": "348cde94f6fbf7cca65441ae19bccfbd",
"assets/assets/images/lpc/body/light.png": "3d41d5018dc1a56537d3376a6451641c",
"assets/assets/images/lpc/body/orc1.png": "c69e7396b657d44f57afd9f3f54b1151",
"assets/assets/images/lpc/body/skeleton.png": "de95019a45f5939391e4a49ff88f8046",
"assets/assets/images/lpc/feet/1.png": "2ed974e03ae8ac6df7b8a90988e6c1ef",
"assets/assets/images/lpc/gloves/2.png": "41a8a35710ac3befbab29f5b0cb07ad5",
"assets/assets/images/lpc/hair/curly.png": "2457c495445802029febfdde40884920",
"assets/assets/images/lpc/hair/longknot.png": "fafd02037d781328ae6ceb81cebc4f7e",
"assets/assets/images/lpc/hair/single.png": "b9e9111f8bd9288a9b903c271a5251e9",
"assets/assets/images/lpc/hair/xlong.png": "8e7f9106bf942f17b215aa58e62f4198",
"assets/assets/images/lpc/head/1.png": "85d7057dada8a67b14e0b4ebd691d897",
"assets/assets/images/lpc/leg/1.png": "50190606e97dc98ff93156dcf95c3a4c",
"assets/assets/images/lpc/torco/arms.png": "7834f862fa0aae30488fb285dbccce70",
"assets/assets/images/lpc/torco/chest.png": "31cb64fb657680a0c20226eae7fc3539",
"assets/assets/images/Main%2520Characters/Appearing%2520(96x96).png": "9449bf1f8d68ac08331aa091d6095e34",
"assets/assets/images/Main%2520Characters/Desappearing%2520(96x96).png": "1284313649da02eccc0d3ed6796996a3",
"assets/assets/images/Main%2520Characters/Mask%2520Dude/Double%2520Jump%2520(32x32).png": "5afb26aa4240eff1eab105eb3263ab83",
"assets/assets/images/Main%2520Characters/Mask%2520Dude/Fall%2520(32x32).png": "469d2d7814fa8258325eb5d305808315",
"assets/assets/images/Main%2520Characters/Mask%2520Dude/Hit%2520(32x32).png": "d03a7bbce7fbda59dd057397f86a8899",
"assets/assets/images/Main%2520Characters/Mask%2520Dude/Idle%2520(32x32).png": "29c95dbb63a9bf44c42821aa0cf49de8",
"assets/assets/images/Main%2520Characters/Mask%2520Dude/Jump%2520(32x32).png": "99da59b514370539951a76ba1fe51821",
"assets/assets/images/Main%2520Characters/Mask%2520Dude/Run%2520(32x32).png": "b04bbc82dc692516a4b13c0d9d5b9ebd",
"assets/assets/images/Main%2520Characters/Mask%2520Dude/Wall%2520Jump%2520(32x32).png": "552254b40eac6d10d2c3d779edb92116",
"assets/assets/images/Main%2520Characters/Ninja%2520Frog/Double%2520Jump%2520(32x32).png": "351c1df6eb5ac94209e8e490ab816879",
"assets/assets/images/Main%2520Characters/Ninja%2520Frog/Fall%2520(32x32).png": "ef8f3627041b7ae2a1dc76dfc3e419f3",
"assets/assets/images/Main%2520Characters/Ninja%2520Frog/Hit%2520(32x32).png": "4c1ba2bf4e576409abbbd1aacc91d51d",
"assets/assets/images/Main%2520Characters/Ninja%2520Frog/Idle%2520(32x32).png": "cb655be6f9354444720c7ce1dbd61dae",
"assets/assets/images/Main%2520Characters/Ninja%2520Frog/Jump%2520(32x32).png": "4f048ccbc783c8eb3824be9651da8a34",
"assets/assets/images/Main%2520Characters/Ninja%2520Frog/Run%2520(32x32).png": "fb191b4e6ac599286c38e496a700cfd2",
"assets/assets/images/Main%2520Characters/Ninja%2520Frog/Wall%2520Jump%2520(32x32).png": "37ec0be0f82c3750a07efa558c032ee7",
"assets/assets/images/Main%2520Characters/Pink%2520Man/Double%2520Jump%2520(32x32).png": "c76baa04d956c9d985c79643d7b2f672",
"assets/assets/images/Main%2520Characters/Pink%2520Man/Fall%2520(32x32).png": "a20bd61d76132e4301fcfe7aa02ca9ba",
"assets/assets/images/Main%2520Characters/Pink%2520Man/Hit%2520(32x32).png": "5d93268a09fb2959e1755da4ba201f9e",
"assets/assets/images/Main%2520Characters/Pink%2520Man/Idle%2520(32x32).png": "1b35f85f1241dc1f0597cafbe1eac7f6",
"assets/assets/images/Main%2520Characters/Pink%2520Man/Jump%2520(32x32).png": "cafaf2f48f36c9a6655a37f9c1c47b4a",
"assets/assets/images/Main%2520Characters/Pink%2520Man/Run%2520(32x32).png": "25fcce89dfb6673a81d384091c87353d",
"assets/assets/images/Main%2520Characters/Pink%2520Man/Wall%2520Jump%2520(32x32).png": "955d352171a2b666ae705b6205856ce1",
"assets/assets/images/Main%2520Characters/Virtual%2520Guy/Double%2520Jump%2520(32x32).png": "612926916a3e8c5deff2023722c465ac",
"assets/assets/images/Main%2520Characters/Virtual%2520Guy/Fall%2520(32x32).png": "5eb8c32845fad5fcc7794247eb91aed0",
"assets/assets/images/Main%2520Characters/Virtual%2520Guy/Hit%2520(32x32).png": "bbd39134a77e658b0b9b64ded537972c",
"assets/assets/images/Main%2520Characters/Virtual%2520Guy/Idle%2520(32x32).png": "1cb575929ac10fe13dfafa61d78ba28d",
"assets/assets/images/Main%2520Characters/Virtual%2520Guy/Jump%2520(32x32).png": "f28e95fc98b251913baf3a21d5602381",
"assets/assets/images/Main%2520Characters/Virtual%2520Guy/Run%2520(32x32).png": "016f388a07f71a930fd79a7a806d5da8",
"assets/assets/images/Main%2520Characters/Virtual%2520Guy/Wall%2520Jump%2520(32x32).png": "76cbdd4a22d50bd65ac02be8a5eb1547",
"assets/assets/images/multi_scenario/tile/biome1.png": "ec2cc3e413fecc22cedad090324fb1b9",
"assets/assets/images/multi_scenario/tile/biome1_tileset.json": "6ad3ca3beda0df8ee950a1b9d506ab95",
"assets/assets/images/multi_scenario/tile/biome2.png": "491e506fbfa06177ad91771b74f86d01",
"assets/assets/images/multi_scenario/tile/biome2_tileset.json": "89a9d4fa226f4bf58486454301b09995",
"assets/assets/images/multi_scenario/tile/map_biome1.json": "b98d2d6d518dd4bdab6ca4057c7d21fe",
"assets/assets/images/multi_scenario/tile/map_biome2.json": "ee905b1ade79fa34bb2dac7072158b57",
"assets/assets/images/npc/critter_idle.png": "609755d64e5a0dbcd7b6507ab816e55a",
"assets/assets/images/npc/critter_run_left.png": "145c02015fea8ed28f964ec0ca686d84",
"assets/assets/images/npc/critter_run_right.png": "fe08ed1dcc559998705239d5925a6ab1",
"assets/assets/images/npc/wizard_idle.png": "b05bbd5361ae3eac51138a70c8278efc",
"assets/assets/images/orc.png": "cdcfcf2e7470c748b506e7fd852601d1",
"assets/assets/images/orc2.png": "93259e831c1b46afd56e17fa36027342",
"assets/assets/images/platform/back.png": "d7678242fcc92af2b001aed53dc42863",
"assets/assets/images/platform/enemy-deadth.png": "ac815579fcdbf6113666bb0f97564420",
"assets/assets/images/platform/fox/player-idle.png": "922c4dfb18292e378215399d3f840f34",
"assets/assets/images/platform/fox/player-jump.png": "9fed489d410b3e3a2863891a218bd07f",
"assets/assets/images/platform/fox/player-run.png": "2d261128f9e70056707e48cd25f66cf1",
"assets/assets/images/platform/frog/frog-idle.png": "6b98d75e717849f03bc308a3f78effb0",
"assets/assets/images/platform/frog/frog-jump.png": "b4a165f45820043374aa8fbb886c6252",
"assets/assets/images/platform/gem.png": "b0ef6efe21f94eebf58abbc0240447f0",
"assets/assets/images/platform/item-feedback.png": "399bd58d97151076d86ed315898335ce",
"assets/assets/images/platform/middle.png": "2d7dac09c16985539aa88e6c7783aaa9",
"assets/assets/images/platform/parallax_map.tmj": "3ee0ac09ca748d4d440b0a86c38dcf2c",
"assets/assets/images/platform/platform_map.tmj": "cff020a48e512369c79c25fa7355e1d8",
"assets/assets/images/platform/props.png": "a18949e323b1767f90798403bfa9fa27",
"assets/assets/images/platform/props.tsj": "44a2e8648f6b2b01caef16aa4dd3de8d",
"assets/assets/images/platform/simple_map.tmj": "aa89040861ac2618445afad7c3536fa2",
"assets/assets/images/platform/simple_map_gem.tmj": "d57a97972c5f85ef7a5211c7dff3319e",
"assets/assets/images/platform/tileset.png": "db1342e18dd58977563f7d3691700f30",
"assets/assets/images/platform/tileset.tsj": "41b01770edbaa71b0672e1894d62dc75",
"assets/assets/images/player/attack_effect_bottom.png": "e2406062be291971a034123fdd1757f9",
"assets/assets/images/player/attack_effect_left.png": "5b5475da758d76f79c34429f70f7f6af",
"assets/assets/images/player/attack_effect_right.png": "39b3d8583205c90284cd60f0e018f29d",
"assets/assets/images/player/attack_effect_top.png": "7b01845d595c3803a07567ee87710658",
"assets/assets/images/player/crypt.png": "8e55febc1e2563a9d7ba4b48625ba88d",
"assets/assets/images/player/emote_exclamacao.png": "8b1897ae92f3a077e0aadaef2626d65a",
"assets/assets/images/player/explosion_fire.png": "81a3691935a18a30572870b759ad1683",
"assets/assets/images/player/fireball_bottom.png": "05522f950d8d60e15615ee9705ff2ef0",
"assets/assets/images/player/fireball_left.png": "cb3370c9039ec112af7bee6edf3e342d",
"assets/assets/images/player/fireball_right.png": "aaa2c18fe241c16e95be131619693b80",
"assets/assets/images/player/fireball_top.png": "e9a76f3ea950d6bc22f8f4cd3a22d7e3",
"assets/assets/images/player/knight_idle.png": "191737282656dd3c8851a2dd3dfc1c0c",
"assets/assets/images/player/knight_idle_left.png": "e4ddca181210b0cf9555331aaf2af512",
"assets/assets/images/player/knight_run.png": "9cac5c91f943ba81915573bd93060d4d",
"assets/assets/images/player/knight_run_left.png": "ce9f3ad71135b459f6b66c892b5b9e30",
"assets/assets/images/player/pirate.png": "3129a70b4ba971c0b0f99c386fb4b2ab",
"assets/assets/images/player/slime-attacking.png": "9ca732fb30dc09ad31153e6dfbb9fcaa",
"assets/assets/images/player/slime-running.png": "bbdf3f338b8c5b3f1143e6001c7b8979",
"assets/assets/images/player/slime-Sheet.png": "b0fd84b5e6eb2385a99d32f4464478d7",
"assets/assets/images/restart.png": "d3d2e3f3b2f6cb1e1a69b8b2529096f7",
"assets/assets/images/robot.png": "b696d8a120962de4bde2ff8b7319786c",
"assets/assets/images/settings.png": "840fd7e3337c743046bf992ef18a10b8",
"assets/assets/images/smoke_explosion.png": "555a8a42b72e662af232dc2092103c2a",
"assets/assets/images/soldier.png": "ce7013efe144160b1210e355a926aaf6",
"assets/assets/images/Terrain/Terrain%2520(16x16).png": "df891f02449c0565d51e2bf7823a0e38",
"assets/assets/images/tile/floor_1.png": "00c3bd0c3d76a954f3f0a648cb13c3b3",
"assets/assets/images/tile/floor_10.png": "baf86a2272c83bd904bc25b4af03aa29",
"assets/assets/images/tile/floor_2.png": "10968e74b671f14aab19e13a76da334d",
"assets/assets/images/tile/floor_3.png": "3fa52d5af2a38dede0142f5c3dcaab55",
"assets/assets/images/tile/floor_4.png": "2685b25c2471a762ff6f900b496c9e29",
"assets/assets/images/tile/floor_5.png": "6d63b1d77dcc35d4f7beb91125851e29",
"assets/assets/images/tile/floor_6.png": "d464c18724611d109498d4c4e57316c4",
"assets/assets/images/tile/floor_7.png": "7ba4503a62a1b242f05b5244e7b0dae4",
"assets/assets/images/tile/floor_8.png": "28692ad0c494efc5bc0f9669579006fe",
"assets/assets/images/tile/floor_9.png": "2b4e26d91d8f632bf4eaa5400cb7d748",
"assets/assets/images/tile/wall.png": "7a6ce85ad0ebd6694dd57e9fdca7535b",
"assets/assets/images/tile/wall_bottom.png": "31d2b04aca916c16bd31574d7134a853",
"assets/assets/images/tile/wall_bottom_left.png": "7e83621a422ddd0e7b4425abe8ac3ec8",
"assets/assets/images/tile/wall_bottom_right.png": "dd6772364441f0f2ea76c532fb4031dc",
"assets/assets/images/tile/wall_left.png": "b4ee6ba9d296a18fa532119ef8cb6157",
"assets/assets/images/tile/wall_left_and_bottom.png": "6583c02205abb0c84aef143379eb9bed",
"assets/assets/images/tile/wall_left_and_top.png": "5e7c81163a737dad7ed4a626d76a0b73",
"assets/assets/images/tile/wall_right.png": "aca869be30facbfd420754e870a78f58",
"assets/assets/images/tile/wall_right_and_bottom.png": "533d830adf7d86b810481118ed7aa2f9",
"assets/assets/images/tile/wall_top.png": "845ed35ef1482e21857c8bd70061c810",
"assets/assets/images/tile/wall_top_inner_left.png": "484e3c33e8559ff61f560e5f32791c5a",
"assets/assets/images/tile/wall_top_inner_right.png": "b26bd1cad50d0201d41ab18200976cfc",
"assets/assets/images/tile/wall_turn_left_top.png": "c9d8c9116dd5570fb87b6e1328cb0ee3",
"assets/assets/images/tiled/bigMap.json": "3fa9268a37d7c31c48d602bb00f42393",
"assets/assets/images/tiled/collision.json": "41907794fdb924260024f2c9fbe7d0a9",
"assets/assets/images/tiled/image_bg.jpeg": "baac8674ee1595c79ac2ad933bf296d5",
"assets/assets/images/tiled/mapa1.json": "a47b31fe367ed7321abe1fd836b4d192",
"assets/assets/images/tiled/mapa2.json": "2b4cfac1d51e9b2b5016bddcf27db80e",
"assets/assets/images/tiled/map_tiled1.8.tmj": "7e03fc396f9add52d10cb75e86f0319c",
"assets/assets/images/tiled/punnyworld/compressed.tmj": "385a16d7e6fd06fdf8f8acc03b257005",
"assets/assets/images/tiled/punnyworld/embeded.tmj": "a69965376f87aaabec8fd66141dedbd4",
"assets/assets/images/tiled/punnyworld/pathfinding_map.tmj": "0d9a570d4bb11b94130e00c3186c3d6e",
"assets/assets/images/tiled/punnyworld/punyworld_tileset.png": "86f25e027c2712c30d0f6a3049a29564",
"assets/assets/images/tiled/punnyworld/punyworld_tileset.tsj": "9ed9f2681307ae2a136f15db33120bd5",
"assets/assets/images/tiled/punnyworld/simple_map.tmj": "b04116ba3dd711e0c9c03af1df69c1cf",
"assets/assets/images/tiled/simple_topdown/HouseTemplate_Tileset.png": "a548ea71a481976e98e0625967e8013e",
"assets/assets/images/tiled/simple_topdown/HouseTemplate_Tileset.tsj": "ca32b82f7323212eef00b860d66edf7a",
"assets/assets/images/tiled/simple_topdown/simple.tmj": "a99b566474bb7851153492e226e0300d",
"assets/assets/images/tiled/tiled_example.tmj": "895dfd072a9d976f9fcf7e179ca3b6db",
"assets/assets/images/tiled/tileset/0x72_DungeonTilesetII_v1.3.png": "99ee27544da829bed54efd1f22e5a588",
"assets/assets/images/tiled/tileset/0x72_DungeonTilesetII_v1.json": "00968b1efbfa26b3145b30aec9515e61",
"assets/assets/images/tiled/tileset/tileset1.8.tsj": "72408d194660a6004ddfb5ba9a257b51",
"assets/assets/images/tiled/top_down/map.json": "73957553a68d3d24620660a435a39c5a",
"assets/assets/images/tiled/top_down/tilesheet.json": "03d43534a53b04a4a761aaffc7a3ff71",
"assets/assets/images/tiled/top_down/tilesheet.png": "bbd9628ccc0e7734c82ca71591f15c7e",
"assets/assets/images/tile_random/earth_to_grass.png": "7504d7c5abb15cc963686ffce67b2be1",
"assets/assets/images/tile_random/earth_to_water.png": "457993098c6762efe45dd296b3255dc6",
"assets/assets/images/tile_random/tile_types.png": "3f54b0b25f73b3270ddcd943480fdd3a",
"assets/assets/images/tile_random/tree.png": "373b98c4cf13e3eba31aeb556e10d8d9",
"assets/assets/images/topdown/idle.png": "e092108827961a61d43f92f86f905c0e",
"assets/assets/images/topdown/running.png": "9b97a499297b053c7c4f4eb9347c9abc",
"assets/assets/images/Traps/Saw/Chain.png": "69669f8f421b508058cdf1232dc49e28",
"assets/assets/images/Traps/Saw/Off.png": "66d27386fec46e0b052941957d9bdc22",
"assets/assets/images/Traps/Saw/On%2520(38x38).png": "817477a39df8b330334e3866c1cb574b",
"assets/assets/images/zombie.png": "41ebd5de73051a779ea2aa8be90b95af",
"assets/assets/music/Mr_Smith-Azul.mp3": "9463595498dc48b3d3d6805fb7c19dc7",
"assets/assets/music/Mr_Smith-Sonorus.mp3": "9353b7bb732002062e2c9107a95f3d2a",
"assets/assets/music/Mr_Smith-Sunday_Solitude.mp3": "5fb1f2fbf4314eb5df35b62706942698",
"assets/assets/music/README.md": "5047154cbbd54e90f4cbf3fb248e53fb",
"assets/assets/Permanent_Marker/PermanentMarker-Regular.ttf": "c863f8028c2505f92540e0ba7c379002",
"assets/assets/sfx/dsht1.mp3": "c99ece72f0957a9eaf52ade494465946",
"assets/assets/sfx/ehehee1.mp3": "52f5042736fa3f4d4198b97fe50ce7f3",
"assets/assets/sfx/fwfwfwfw1.mp3": "d0f7ee0256d1f0d40d77a1264f23342b",
"assets/assets/sfx/fwfwfwfwfw1.mp3": "46355605b43594b67a39170f89141dc1",
"assets/assets/sfx/hash1.mp3": "f444469cd7a5a27062580ecd2b481770",
"assets/assets/sfx/hash2.mp3": "d26cb7676c3c0d13a78799b3ccac4103",
"assets/assets/sfx/hash3.mp3": "38aad045fbbf951bf5e4ca882b56245e",
"assets/assets/sfx/haw1.mp3": "00db66b69283acb63a887136dfe7a73c",
"assets/assets/sfx/hh1.mp3": "fab21158730b078ce90568ce2055db07",
"assets/assets/sfx/hh2.mp3": "4d39e7365b89c74db536c32dfe35580b",
"assets/assets/sfx/k1.mp3": "37ffb6f8c0435298b0a02e4e302e5b1f",
"assets/assets/sfx/k2.mp3": "8ec44723c33a1e41f9a96d6bbecde6b9",
"assets/assets/sfx/kch1.mp3": "a832ed0c8798b4ec95c929a5b0cabd3f",
"assets/assets/sfx/kss1.mp3": "fd0664b62bb9205c1ba6868d2d185897",
"assets/assets/sfx/lalala1.mp3": "b0b85bf59814b014ff48d6d79275ecfd",
"assets/assets/sfx/oo1.mp3": "94b9149911d0f2de8f3880c524b93683",
"assets/assets/sfx/p1.mp3": "ad28c0d29ac9e8adf9a91a46bfbfac82",
"assets/assets/sfx/p2.mp3": "ab829255f1ef20fbd4340a7c9e5157ad",
"assets/assets/sfx/README.md": "2db52900312b320724a357f554f7595e",
"assets/assets/sfx/sh1.mp3": "f695db540ae0ea850ecbb341a825a47b",
"assets/assets/sfx/sh2.mp3": "e3212b9a7d1456ecda26fdc263ddd3d0",
"assets/assets/sfx/spsh1.mp3": "2e1354f39a5988afabb2fdd27cba63e1",
"assets/assets/sfx/swishswish1.mp3": "219b0f5c2deec2eda0a9e0e941894cb6",
"assets/assets/sfx/wehee1.mp3": "5a986231104c9f084104e5ee1c564bc4",
"assets/assets/sfx/ws1.mp3": "5cfa8fda1ee940e65a19391ddef4d477",
"assets/assets/sfx/wssh1.mp3": "cf92e8d8483097569e3278c82ac9f871",
"assets/assets/sfx/wssh2.mp3": "255c455d9692c697400696cbb28511cc",
"assets/assets/sfx/yay1.mp3": "8d3b940e33ccfec612d06a41ae616f71",
"assets/assets/tiles/level-01.tmx": "0b4e57204fe0c88607d72a7322da18c1",
"assets/assets/tiles/level-02.tmx": "fc6e9ea7e13a330e2035ca5f4890a8b8",
"assets/assets/tiles/Pixel%2520Adventure.tiled-project": "f569bfd3353c5a0faa26a765cae42f0d",
"assets/assets/tiles/Pixel%2520Adventure.tiled-session": "62ddf0971efba9299442a78d8d9c8f6d",
"assets/assets/tiles/Pixel%2520Adventure.tsx": "fdae9b2a5573e60d3819a38423d4eeab",
"assets/FontManifest.json": "202bfb5144bfc3359dc068bcf44cba82",
"assets/fonts/MaterialIcons-Regular.otf": "6df5f85638eeaed6e6c220e806395fc5",
"assets/NOTICES": "1c9e3bef6641b5e47678fdda14fbc0c5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "4e38d613d880ccc8170489526ce442df",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e0588d5b277e36293d16693eef4aa78f",
"/": "e0588d5b277e36293d16693eef4aa78f",
"main.dart.js": "821c3b4bd17ceb2c594ac0ac8bf37a32",
"manifest.json": "915e58f753fd0dafd5d59c8655eb4da9",
"version.json": "4af817f8de4133edacca0908f16858d5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
