<script>
  import { onMount } from 'svelte';
  import { WindowMDD, WindowFDND, WindowCMD, WindowTalks } from './index.js';
  let showClass = '';

  onMount(() => {
    if (typeof window !== 'undefined' && window.location.search.includes('?show-vids')) {
      showClass = 'show';
    }
  });
</script>

<div class="clip-paths">  
  <WindowMDD />
  <WindowFDND />
  <WindowCMD />
  <WindowTalks />
</div>
<svg
  preserveAspectRatio="xMaxYMax meet"
  viewBox="0 0 2015 1010"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  class="building-svg"
>
<g id="tth" stroke="none" fill="none">
  <g class="mdd" stroke-width="1" fill-rule="evenodd" transform="translate(698.9853, 425)">
      <polygon id="Path" fill="#112C39" fill-rule="nonzero" points="2.25428372 63.9163748 2.25428372 22.9704288 129.606808 14.6892262 129.606808 57.4754395 120.902858 56.0952391 63.1819301 58.8556399"></polygon>
      <polygon id="Path-2" fill="#112C39" fill-rule="nonzero" points="139.226962 58.8556399 139.226962 12.3888922 167.629324 8.70835771 253.752613 4.10768962 275.741538 1.34728877 275.741538 24.3506292 273.909128 49.1942369"></polygon>
      <polygon id="mdd-hover" class="hover-rect" transform="translate(139.5147, 33) rotate(-3) translate(-139.5147, -33)" points="1.17186464 7.26756258 277.869087 7.20555735 277.857589 58.7324374 1.16036698 58.7944427"></polygon>
    </g>
  <g class="fdnd" stroke-width="1" fill-rule="evenodd" transform="translate(976.9839, 373)">
      <polygon id="Path" fill="#9747FF" fill-rule="nonzero" points="6.54336107 102.220426 6.54336107 52.2206322 63.7621867 47.6334952 102.213238 44.4224992 155.312308 42.5876444 156.227809 94.422293 105.417492 99.0094301 66.5086904 99.0094301"></polygon>
      <path d="M474.82223,75.6150311 L337.039298,84.3305915 L335.208296,57.7251967 L337.039298,26.9913785 L441.406436,19.1932455 C458.555403,18.0219219 471.425281,17.29084 480.016071,17 C488.606861,16.70916 498.319346,16.675719 509.153526,16.899677 L507.780274,27.9088059 L509.153526,43.0463581 L506.864773,73.3214626 L474.82223,75.6150311 Z" id="Path" fill="#9747FF" fill-rule="nonzero"></path>
      <polygon id="Path" fill="#9747FF" fill-rule="nonzero" points="166.298322 93.0461519 166.298322 40.7527896 324.680032 28.8262333 326.968785 53.5967733 324.680032 82.4957367 314.151768 84.7893052"></polygon>
      <polygon id="Path" fill="#9747FF" fill-rule="nonzero" points="521.055041 69.651753 522.428293 15.5235358 577.816116 12.7712536 669.823988 6.80797545 708.016071 6 706.444036 61.3949063 700.035528 61.3949063"></polygon>
      <polygon id="fdnd-hover" class="hover-rect" transform="translate(356.0161, 55) rotate(-4) translate(-356.0161, -55)" points="1.26014339 24.7771443 710.780845 24.6732653 710.771999 85.2228557 1.25129692 85.3267347"></polygon>
  </g>
  <g class="cmd" stroke-width="1" fill-rule="evenodd" transform="translate(698.9774, 471)">
      <polygon id="Path" fill="#FFF021" fill-rule="nonzero" points="2.71977335 100.783409 2.71977335 56.1755233 42.1089235 54.3360228 83.3301272 55.255773 130.047491 52.0366473 130.963518 94.3451574"></polygon>
      <polygon id="Path" fill="#FFF021" fill-rule="nonzero" points="139.207759 92.505657 139.207759 48.3576464 167.604588 45.5983957 216.154006 43.7588953 275.237731 39.1601442 275.237731 60.3143993 273.405677 86.9871557 246.840902 86.9871557 199.207511 92.505657"></polygon>
      <polygon id="Path" fill="#FFF021" fill-rule="nonzero" points="284.397998 86.5272805 284.397998 36.8607686 287.604092 38.240394 362.718285 35.4811433 433.252345 31.3422673 434.626385 82.3884046 409.893663 82.3884046 386.992994 83.3081548 360.428219 84.227905 332.489403 84.227905 307.298667 86.5272805"></polygon>
      <polygon id="Path" fill="#FFF021" fill-rule="nonzero" points="445.618706 81.4686543 444.702679 29.0428917 477.221629 29.0428917 514.778726 25.3638909 571.114371 24.4441406 604.549347 21.2250149 605.923387 46.978021 604.549347 75.0304028 580.274638 75.0304028 540.885488 76.8699032 479.969709 78.2495286"></polygon>
      <polygon id="Path" fill="#FFF021" fill-rule="nonzero" points="614.625641 73.6507775 614.625641 20.3052646 788.21271 9.7281371 789.58675 33.1817677 788.21271 67.2125259"></polygon>
      <polygon id="Path" fill="#FFF021" fill-rule="nonzero" points="800.121058 66.7526508 798.747018 13.8670131 983.326407 2.37013533 981.952367 57.0952735 911.418308 59.8545241"></polygon>
      <polygon id="cmd-hover" class="hover-rect" transform="translate(494.5226, 53.5) rotate(-3) translate(-494.5226, -53.5)" points="0.78456321 26.0126911 988.272392 25.8029075 988.260716 80.9873089 0.772886943 81.1970925"></polygon>
  </g>
  <g class="talks" stroke-width="1" fill-rule="evenodd" transform="translate(698.8069, 570)">
      <polygon id="Path" fill="#5FCE67" fill-rule="nonzero" points="1.62877944 80.6077432 2.08622085 35.6405181 127.425169 29.2166288 128.797493 48.4882967 127.425169 75.5604016 78.4789374 79.6900447"></polygon>
      <polygon id="Path" fill="#5FCE67" fill-rule="nonzero" points="139.318646 76.4781001 137.946322 31.0520257 196.041381 29.2166288 229.892046 27.3812318 272.891539 27.3812318 272.891539 68.677663 231.26437 70.9719092"></polygon>
      <polygon id="Path" fill="#5FCE67" fill-rule="nonzero" points="614.087415 65.5991355 614.087415 13.7378577 646.636402 13.7378577 708.525321 9.18862281 760.787075 6.00415839 788.293261 7.36892885 788.293261 23.7461745 786.459515 39.6684966 788.293261 61.9597476 779.124532 61.9597476 741.074308 64.2343651 646.636402 64.2343651"></polygon>
      <polygon id="Path" fill="#5FCE67" fill-rule="nonzero" points="797.46199 62.4146711 797.46199 8.73369932 882.272731 4.18446443 985.879366 1 985.879366 5.5492349 984.504057 26.4757154 982.211874 57.8654362 913.904845 59.6851302"></polygon>
      <polygon id="Path" fill="#5FCE67" fill-rule="nonzero" points="284.320337 73.3180492 284.320337 22.8602363 306.739146 22.8602363 364.84504 20.5666993 427.983727 20.5666993 433.016521 22.8602363 434.846628 53.5936314 433.016521 71.0245123 420.205773 70.1070975 369.420307 71.0245123"></polygon>
      <polygon id="Path" fill="#5FCE67" fill-rule="nonzero" points="538.247666 68.2722679 443.082109 68.2722679 442.167055 60.9329497 443.082109 25.1537732 441.252002 16.8970402 487.004674 14.1447958 600.4713 12.3099663 605.961621 12.3099663 605.046568 42.1259467 605.046568 65.978731 577.594964 66.8961457"></polygon>
      <polygon id="talks-hover" class="hover-rect" transform="translate(493.4602, 45.8864) rotate(-2) translate(-493.4602, -45.8864)" points="0.970073944 15.438994 985.950404 15.4039276 985.930733 76.3688611 1.26695167 63.833635"></polygon>
  </g>
  <path d="M1129,746 C1128.05504,754.325309 1128.44683,756.921275 1128,760" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1358.7702,749 C1361.93147,754.044315 1358,786.70877 1358,818" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1367.47535,740.049286 C1370.24515,742.176062 1485.92803,731.811395 1488.02138,737.9943 C1492.78399,751.993332 1481.28426,745.595056 1428.58479,748.466653 C1385.99558,750.781877 1381.14156,744.688709 1367,746.671905" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1144,327 C1156.29427,325.610595 1240.7888,316.063197 1298,313" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1144.92058,377 C1141.15604,374.919405 1147.07149,377.510087 1198.29242,373.581011 C1199.45666,373.492097 1296.84617,370.438124 1304,368" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1142.01879,414 C1140.01933,412.054371 1298.25205,403.227396 1302,402" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1144,387.495288 C1156.76034,389.809091 1168.35681,383.416833 1219.35775,383.416833 C1226.39334,383.416833 1256.54838,383.416833 1307,376" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1144.5012,397 C1138.64096,397 1147.35425,396.062283 1217.63123,392.363557 C1260.83075,390.090093 1260.61333,388.955968 1304,388" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1142,465 C1284.37344,456.818426 1284.61523,459.493688 1303,455" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1141,475 C1187.58493,472.233108 1187.25369,470.639128 1233.73953,469.760135 C1281.21999,468.860872 1298.41671,466.701167 1304,466" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1140,483 C1144.45215,481.164122 1144.62939,481.90458 1303,476" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1142,500 C1156.03887,497.82927 1167.64078,501.426686 1210.90587,496.301452 C1222.96625,494.874766 1261.43703,496.033271 1272.54019,494.719455 C1274.9671,494.432312 1299.92702,491.477808 1303,492.080989" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1143,552 C1166.17626,547.193803 1242.64164,547.761443 1245.84899,547.43389 C1257.71773,546.212036 1257.62358,546.376259 1269.50786,545.871095 C1286.12135,545.16333 1291.7326,546.510136 1301,545" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1141,563 C1147.13263,562.795974 1208.82391,560.745557 1217.65838,559.675574 C1258.67248,554.709706 1259.70236,555.003282 1304,555.003282" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1138,573 C1180.8959,570.496306 1180.85554,571.857051 1223.69731,569.810151 C1282.6129,567 1294.81501,567 1301,567" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1141,587 C1141,584.972794 1208.62445,583.820347 1214.50993,583.720096 C1298.83794,582.285526 1299.05558,580.955643 1306,583.203757" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1141.02879,638.371901 C1140.06204,639.398697 1163.5439,636.667418 1195.82619,638.392437 C1231.43037,640.292011 1301.886,637.242424 1303,636" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1139,649 C1163.89559,648.450977 1211.24479,643.164418 1305,645.670442" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1138,660 C1187.09789,657.865473 1187.07865,661.390942 1236.04375,658.635303 C1248.21679,657.952954 1285.18651,657.638024 1302,658.635303" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1142.9503,413 C1142.1573,456.778676 1141.4943,456.693755 1142.7503,466" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1170,413.792883 C1171.24277,410.270814 1168.83622,417.083058 1171,463" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1204,408 C1204.46496,435.591423 1204.17521,435.473219 1205,463" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1237.38533,406 C1236.37733,405.811962 1237.83733,455.681257 1237.96733,460" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1274.54714,404 C1273.18012,417.407665 1275.68133,417.355166 1274.81156,434.693855 C1274.27856,445.288646 1274.25112,455.518702 1274,458" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1302.57085,401 C1302.37627,403.091498 1303.25628,403.036579 1303.99451,427.206421 C1304.13629,431.837921 1301.47964,451.012882 1302.09174,455" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1143,328 C1145.16903,330.765583 1144.33205,353.519788 1144.81418,358.867681 C1145.68676,368.503236 1143.14022,375.042401 1144.26734,376" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1175.29258,324 C1174.93704,326.43691 1175.65985,326.448892 1175.01181,354.974753 C1174.88572,360.49006 1175.80647,373.321629 1176,375" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1205,322 C1205.72904,326.929641 1206.15414,369.160236 1207,372" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1240,318 C1241.22772,328.327117 1239.76502,366.820272 1241,372" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1272.76823,315 C1273.79838,319.07737 1271.06154,344.210294 1271.04669,344.971647 C1270.83138,357.569756 1271.40678,357.421154 1271.83275,370" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1297,312.444763 C1304.89176,312.086761 1304.78277,312.118725 1306,312 C1305.98939,357.662677 1305.46951,362.647314 1305.01715,367.029192 C1303.2183,367.388108 1301.81395,367.957989 1301.77248,368" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1143.5822,387 C1143.5552,387.799703 1143.6682,387.682809 1143.4152,397" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1304.9205,376.081995 C1304.32957,375.603439 1305.95829,376.926663 1304,388" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1141,475 C1141.89641,477.912217 1141.50042,482.463348 1142,483" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1303.46193,467.283476 C1301.95446,465.533009 1304.6947,472.230489 1303.8256,478" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1143.14522,500 C1143.27422,504.1596 1144.35222,538.557866 1143.57622,552" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1171.65176,500 C1171.60276,503.999409 1171.11276,543.787719 1171.48976,550" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1205.19659,497 C1204.2903,501.01294 1206.81109,519.492133 1206.82024,519.914016 C1206.86102,521.518824 1206.6771,544.789464 1207,548" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1238,496 C1237.92397,500.163344 1237.40744,500.060669 1236,548" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1272.43324,494 C1270.56523,499.546524 1275.46052,521.172289 1273.54828,533.095758 C1272.43324,540.040357 1273.33741,544.067034 1273.54828,545" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1302.48567,493 C1302.91602,494.604562 1301.91253,494.663176 1303.76489,513.644997 C1304.71028,523.286107 1302.45415,523.178037 1303.12774,546 C1301.41915,545.866287 1299.70958,545.733489 1298,545.599775" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1139.75732,564.077358 C1138.87332,563.686303 1139.30432,564.505196 1139.74632,573" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1302.486,555 C1302.152,565.835577 1302.287,566.114204 1302.702,567" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1140,589 C1142.54908,592.670583 1139.2056,632.095944 1140.96282,638" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1173,585 C1172.72938,591.511073 1175.62472,637.70812 1174.87491,639" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1203.99999,585 C1203.99999,632.041704 1203.99539,634.041704 1204.99999,638" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1237,584 C1238.32751,586.448073 1238.39671,629.8732 1240,638" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1271.65691,583 C1272.11991,588.570711 1270.75691,635.735817 1271.44091,637" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1304.97365,584 C1305.0541,585.302942 1305.00102,585.278307 1304.07539,613.858178 C1303.69966,625.439582 1304.89319,625.275346 1304.07539,637" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1139.066,649 C1139.265,654.110471 1139.19,654.004803 1139.934,659" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1303,646.196335 C1302.45128,645.358277 1303.02308,646.773664 1302,659" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1138.25159,676 C1137.87459,695.364512 1138.54259,726.560869 1138.86059,728" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1140,674.825681 C1142.21581,674.084519 1186.79054,675.965218 1230.37153,674.260545 C1266.27208,672.861601 1266.17892,673.176595 1302,672" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1141,728 C1145.48898,725.475869 1146.09575,729.158334 1206.17583,725.104165 C1217.34933,724.343467 1274.34615,728.069154 1301,725.977237" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1303,673 C1301.03077,722.473935 1300.66435,722.455537 1301.26009,727" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1171,676 C1169.71258,699.525777 1170.34083,720.33986 1170,727" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1201.92575,677 C1202.02775,677.925483 1200.27075,713.810618 1201.52075,724" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1234,675 C1233.35209,698.27337 1234.52702,698.180978 1233.12188,721.491304 C1232.89963,725.15 1233.03211,725.658152 1233.12188,726" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1268.23655,674 C1269.28755,707.690428 1268.44155,707.589613 1268.44155,728" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1133,763.806687 C1164.63521,761.896757 1318.29428,760.868333 1359,764" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1138.33343,766 C1137.18138,790.927887 1139.33122,787.900469 1140,815" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1349.28018,764 C1348.236,788.998758 1350.40333,788.823425 1351,816" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1313.4388,310 C1313.2688,314.317104 1313.6088,314.27495 1313.6088,364" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1313,312 C1314.38198,310.107861 1391.23184,304.324377 1397.55678,303.979491 C1442.20611,301.543492 1481.0332,297.722262 1485,298.015984" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1315,364 C1395.21369,353.643291 1480.72503,356.23812 1487,353" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1485.86799,297 C1485.72799,301.398236 1484.55799,338.162274 1485.48799,352" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1345,309 C1347.78505,340.702678 1347.30841,357.967401 1348,360" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1380,306 C1380,308.360952 1380.01987,308.281546 1381,359" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1419.80605,303 C1417.93932,310.262462 1419.73024,310.341762 1421,355" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1454,301 C1454.25067,303.722788 1455.73439,348.585573 1454.542,355" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1312,375.594268 C1318.52478,377.813999 1334.22413,370.305152 1399.80112,368.076094 C1437.64595,366.789022 1463.97915,361.793694 1485,361" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1312.02807,375.433773 C1312.13153,376.378285 1311.92918,377.338509 1312.02807,378.283021 C1312.07751,378.743263 1312.09766,378.706296 1312.92628,384 C1370.04808,376.989169 1410.74669,375.522495 1419.27097,375.214743 C1482.53007,372.93479 1488.37163,376.624117 1486.78763,368.641048 C1486.57704,367.574544 1485.74384,359.280027 1485.70722,359" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1314,400 C1311.99739,427.127867 1313.5919,455.664774 1313.7668,456" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1313,400 C1320.54248,399.270092 1320.57,400.345395 1407.3452,392.14275 C1408.62063,392.021575 1479.91631,387.607776 1487,389.44829" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1312,458 C1314.46162,454.2998 1483.31825,448.45873 1483.46456,445.915186 C1485.01907,419.51113 1487.52458,419.554241 1484.76303,400.163504 C1484.60758,399.117835 1485.48542,399.184794 1485.8329,387" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1345,398 C1345.40154,424.029322 1346.62162,433.535491 1346.63707,434.276891 C1346.83784,442.43229 1346.43629,453.308617 1347,456" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1380,396 C1380,400.484049 1380,436.981126 1382,452" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1418.18134,393 C1417.73718,421.495505 1418.14651,421.342461 1419,451" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1453.06152,391 C1453.22152,395.638057 1454.37152,427.186193 1453.76152,449" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1314,464 C1394.17978,459.600868 1394.06071,459.318745 1405.58301,459.318745 C1432.17222,459.318745 1467.60007,455.654761 1481,454" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1315,465.575478 C1315.24694,473.011434 1315.17377,472.892629 1315.439,476 C1327.18229,474.446314 1416.02518,468.171708 1435.28636,468.171708 C1443.1518,468.171708 1486.51233,464.125863 1489,464.061394 C1486.84158,459.777937 1486.07332,459.70518 1487.57325,455.172139 C1487.82933,454.419702 1487.42691,453.753836 1478.75664,454.089071" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1312.39396,492 C1312.39396,533.515891 1311.18622,533.525924 1313,545" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1313,491 C1321.09302,490.412319 1390.27828,485.38173 1414.24537,484.526338 C1438.44186,483.666361 1446.49818,480 1487,480" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1314,544 C1318.16509,543.881471 1481.70202,537.241316 1488,538.071865" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1487.51264,481 C1487.98221,482.237749 1486.59204,482.446037 1487.9575,498.720174 C1488.22935,501.979057 1487.11104,519.734253 1487.0369,522.968251 C1486.85154,531.066612 1487.4385,536.992691 1487.17282,539" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1451.00189,484 C1450.9684,484.049265 1451.39042,500.916168 1451.43061,502.386822 C1452,524.836189 1452,535.148099 1452,538" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1417,485 C1418.79305,487.432483 1415.74091,488.297711 1417.77787,515.081469 C1417.93608,517.140145 1418.18658,520.491648 1417.77787,541" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1377.08,487 C1378.98,513.984838 1376.28,513.881001 1377.92,541" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1342,489 C1342.09434,490.548177 1343.83962,537.758468 1344,542" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1313.73315,553.578325 C1313.92512,559.78011 1313.86113,559.660777 1314.10795,563.788473 C1328.79837,564.360206 1328.70695,563.870404 1413.83274,561.109701 C1424.88483,560.749919 1448.26882,558.306251 1486.26096,559.319696 C1488.74745,554.41366 1487.76017,554.236441 1487.99785,548.734627 C1475.63852,552.748333 1471.74423,545.135026 1422.11495,549.276971 C1390.98809,551.874704 1313,550.424889 1313,553.218543" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1312.64639,584 C1312.64639,621.545755 1311.41439,631.081199 1312.84639,635" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1314,583.924345 C1327.09432,583.025419 1332.00126,585.929012 1372.12488,581.205798 C1395.01481,578.507207 1469.68806,573.974481 1488,577.005974" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1314,634.988457 C1316.3408,633.938077 1324.82622,636.375288 1351.35227,633.667275 C1362.80941,632.50201 1428.91882,634.537122 1443.75914,633.831397 C1469.83716,632.600483 1473.60439,631.38598 1487,632.346094" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1486.83888,578 C1485.96655,581.540753 1488.00199,588.776681 1486.28876,606.699744 C1485.36928,616.372624 1486.94105,632.908626 1486.92533,633" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1450.29549,579 C1452.15977,579.863377 1449.69602,608.363988 1450.03199,614.384741 C1450.11104,615.869786 1450.9806,631.571719 1450.29549,633" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1416,577 C1417.09044,581.376293 1418.93501,588.794354 1417.43693,633" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1379.04491,581 C1379.65917,595.742552 1380.76327,595.625418 1379.20042,610.244479 C1378.45398,617.209872 1380.08681,624.668317 1379.35593,634" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1343.00625,583 C1342.83372,584.724112 1346.29437,607.219586 1345.97977,618.232343 C1345.96962,618.554865 1343.83843,629.125305 1345.97977,634" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1313,647 C1331.6062,645.601938 1401.89118,645.601938 1409.62005,645.601938 C1425.23383,645.601938 1468.1465,640.102893 1486,642.693968" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1313.38909,645.537 C1313.34332,646.294293 1312.89479,653.617754 1313.02294,654.98088 C1313.0504,655.265978 1392.90709,652.272447 1399.84558,652.014076 C1421.81441,651.18551 1426.8947,654.081039 1447.26163,654.419593 C1466.77728,654.749238 1466.49351,651.987348 1486,651.05187 C1484.91071,646.525935 1484.79171,646.695212 1484.58118,642" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1312,674 C1424.05714,671.682709 1424.00227,672.565062 1433.74136,672.333333 C1455.82577,671.825312 1455.57886,669.730838 1487,669" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1310,674 C1313.31444,709.022891 1308.3508,719.076521 1312,730" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1311,730 C1414.47239,725.523991 1420.05343,731.155393 1459.06578,726.852238 C1484.03405,724.095671 1485.87304,727.416288 1485.52537,725.332942 C1480.65798,696.338958 1486.84286,679.190022 1485.90049,668" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1452.78689,674.431501 L1452.59497,672 C1452.99801,675.540931 1453.46823,725.566986 1452,727" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1412.66639,674 C1415.84581,686.787634 1412.39341,726.460667 1412,731" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1375,675 C1378,699.007837 1378,723.754093 1378,728" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1343,675 C1345.39713,687.91628 1344.21374,687.888992 1344.89141,700.92352 C1346.004,722.12623 1346.09503,721.962502 1345.94331,724" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1366,766.482036 C1367.32833,767.939546 1367.73141,765.95294 1421.07548,765.034509 C1437.5743,764.745003 1460.07353,766.412155 1479,765.034509" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1483.05926,769 C1482.72826,775.5875 1483.88676,815.916304 1484,820" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1450.76789,766 C1450.70789,770.241104 1449.94789,816.755251 1450.34789,819" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1411.14902,765 C1410.78432,767.406698 1411.09692,806.488186 1412,814" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1498,296 C1568.07984,291.638455 1670.66934,281.196216 1679,283.269201" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1500,350 C1660.70505,336.956458 1661.72999,347.445403 1682,341" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1498.33133,372 L1497,361.304949 C1497.19281,360.603112 1679.80582,350.127441 1680.44854,350 C1680.86171,352.93388 1681.44933,359.073817 1680.44854,360.16617" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1499.00966,372 C1497.96458,371.334014 1582.06555,365.41267 1590.18779,364.510244 C1626.23369,360.50679 1676.59893,363.493838 1680,360" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1499.16125,389 C1496.16193,385.476716 1535.18962,388.699254 1600.79967,382.601331 C1665.55931,376.582833 1665.76963,380.68173 1685,378" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1498.3972,443 C1488.34846,440.641624 1672.25132,434.546675 1678,434" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1500,455 C1504.84307,451.082879 1505.75114,452.844958 1683,445" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1498,466 C1505.22739,465.623598 1577.87782,461.858668 1588.31024,460.999095 C1642.71312,456.532935 1680.53064,456.322114 1682,456" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1497,484 C1503.88752,483.388303 1672.09518,476.16395 1682,473" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1496,537 C1550.93217,531.178831 1672.44547,529.325967 1678,528" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1499,550 C1502.84036,548.424564 1567.29239,547.779551 1610.44372,546.533167 C1645.79519,545.51197 1645.49272,543.766334 1681,543" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1498,558 C1528.73117,556.766078 1567.30295,556.416986 1612.91024,553.543019 C1677.41002,549.480928 1677.5564,552.284903 1683,551" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1495,578 C1556.13977,573.065947 1675.74829,571.689744 1684,570" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1496.0029,632 C1495.36281,631.429825 1600.97689,629.464912 1603.31778,629.385965 C1673.91919,626.973684 1673.94662,627.964912 1680,627" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1496,642.855442 C1500.45369,643.499166 1674.95403,641.833055 1683,641" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1496,653 C1518.20073,648.256724 1676.11328,651.611247 1681,649" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1496.16175,672 C1489.79341,668.090592 1673.53925,671.15331 1683,669" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1497,727 C1544.42848,726.226629 1544.19001,725.623229 1591.50842,724.866856 C1625.37149,724.322946 1669.74569,725.189802 1680,724" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1495,767 C1562.36147,758.779388 1562.39806,765.777173 1679,765.777173" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1499.37813,298 C1499.25572,302.240405 1497.96026,346.441404 1501,351" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1535.01916,295 C1531.66104,296.900759 1532.84137,298.122938 1536,347" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1569.24494,294 C1569.08629,297.918761 1568.24347,317.747583 1571,343" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1607.21199,290 C1606.44682,290.61424 1604.55103,329.147926 1608,343" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1646.81538,287 C1645.91538,337.366029 1646.14538,340.370763 1646.48538,345" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1681,282 C1681.26207,294.457095 1686.19943,341.92065 1682.82399,342" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1500,391 C1499,391.640674 1499,436.078525 1499,440" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1534,388 C1533.56061,396.760417 1533,429.801243 1533,439" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1572,386 C1574.0028,412.454222 1572.37821,412.370989 1572.37821,439" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1610,382 C1611.78909,382.71374 1610.65196,410.182191 1610.55341,412.630346 C1610.4776,414.417903 1609.66644,434.062701 1610.43969,435" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1649.56433,381 C1649.55004,381.005466 1648.05018,422.575463 1650,435" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1685,379 C1684.95187,379.038694 1684.22984,428.781361 1684.60529,435 C1683.9988,434.97144 1680.52347,434.808374 1677,434.996315" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1499.63418,456 C1499.12418,464.460239 1499.47418,467.046669 1499.60418,468" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1682.18598,448.187699 C1681.70457,446.494151 1682.2385,446.593407 1682.86871,445 C1682.89496,445.800248 1682.80744,445.772776 1683,455" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1531.13535,483 C1532.99535,489.778394 1530.58535,531.112554 1531.61535,533" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1569.28255,482 C1569.35929,482.319233 1569.71742,490.962172 1569.97323,498.482794 C1570.24822,506.708275 1568.29131,529.588462 1569.28255,531" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1609.02,479 C1610.75,482.147447 1608.88,510.793424 1609.98,529" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1648.02,479 C1649.74,482.148304 1647.87,510.792843 1648.98,529" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1498.29819,484 C1497.78819,484.354754 1498.76819,535.610244 1498.84819,537" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1498.64238,550 C1498.53238,550.261373 1498.07238,555.463241 1498.62238,559" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1681.62542,473 C1682.64591,480.275666 1681.27631,495.542833 1681.10623,497.493865 C1679.64711,513.737001 1680.9809,513.742459 1680.27372,528 C1679.06525,527.813538 1679.16372,527.818086 1678,527.671645" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1681.24157,542.689935 C1680.37915,540.636177 1682.09278,543.539068 1682.22719,546.527312 C1682.32799,548.950642 1681.73438,549.017516 1683,551" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1496.45311,578 C1496.45311,580.835156 1496.36311,580.775284 1496.55311,582.026143 C1497.41311,587.845673 1496.11311,632.852623 1496.15311,633" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1531.24432,576 C1531.83036,579.973412 1531.43709,590.812748 1531.39083,592.101372 C1530.6737,611.626514 1530.98214,611.552065 1532,631" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1495.6,643 C1495.42,647.521994 1495.58,647.460411 1495.4,652" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1569.00279,574 C1568.94445,590.14842 1569.81957,590.078791 1569.96126,599.689418 C1570.15295,611.986257 1569.59454,613.048099 1569.13614,630" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1609.30846,573 C1609.47776,576.397626 1610.69915,600.025942 1609.42939,615.518784 C1608.8852,622.041746 1607.31311,629.206205 1608.34102,630" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1647.76533,572 C1648.3965,574.93836 1647.64698,601.996978 1646.78897,611.537535 C1645.47731,626.019715 1647.04539,626.119969 1646,629" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1684.77768,570 C1685.89283,578.241041 1682.48687,600.759007 1681.76937,627 L1681,626.908727" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1681.65205,641 C1681.56205,641.04345 1682.15205,649.385819 1681.24205,648.98608" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1496.48024,672 C1498.12859,684.885767 1493.56932,706.185234 1498,727" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1533.49842,670 C1535.42638,678.141779 1531.09881,723.206433 1532.1745,726" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1569.095,671 C1570.175,671.492211 1569.485,725.061153 1569.905,726" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1609,670 C1610.344,690.945017 1609.888,719.320962 1610,723" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1645.67364,670 C1645.6541,678.354612 1645.46838,678.28992 1646.02552,686.663016 C1646.71951,697.106281 1643.18117,700.28547 1646.31876,716.26459 C1647.70672,723.380798 1646.4947,723.44549 1646.78793,724" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1681.63625,670 C1683.02806,673.910915 1679.86783,676.609997 1681.39882,698.074124 C1681.538,700.139748 1681.07134,700.112207 1681.07953,724 C1680.39181,723.972458 1679.6959,723.935736 1679,723.908194" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1681,738 C1681.22913,738.598214 1681.2092,738.607143 1681.97628,745.821429 C1682.09582,746.973214 1681.73719,746.892857 1681.48814,748" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1496,738.035132 C1500.61215,744.341855 1505.76529,733.563948 1560.836,740.623712 C1577.18483,742.722816 1677.92774,735.258291 1680,737.385634" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1495,739.05785 C1495.75042,738.317496 1496.05241,744.86331 1496.50083,748.393535 C1508.19634,746.813511 1596.21464,747.174659 1599.00582,747.553865 C1628.47338,751.517468 1633.48835,745.946755 1682,747.138544" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1493.81112,767 C1492.81112,781.205772 1493.17112,816.244847 1493.81112,818" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1527.59362,767 C1527.25362,768.263662 1527.45362,816.089105 1527.59362,820" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1560.09484,765 C1559.70826,766.612184 1560.61554,788.740565 1560.81278,791.255572 C1561.51494,800.265379 1559.95283,825.99584 1560.81278,827" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1601.01974,766 C1600.81031,769.408608 1602.34611,810.366582 1601.92726,838" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1640,766 C1640,787.830014 1641.83221,787.674933 1640.69463,809.358988 C1640.57383,811.56662 1639.55705,830.778492 1643,837" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1680.07658,765 C1679.61819,765.449522 1681.39234,765.541261 1680.79812,773.256524 C1680.15298,781.577266 1681.08674,869.903727 1680.99336,838.134456" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M987.078476,258.12569 C988.765476,255.236031 987.418476,303.091691 987.305476,307" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M987,257 C1045.50412,250.416498 1128.71663,241.86664 1133,241" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M987,306 C992.219327,306 1007.50332,306 1052.03036,300.505904 C1063.2435,299.123129 1098.35143,297.690711 1132,294" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1132.70166,241 C1132.6591,243.42124 1132.63169,243.385295 1132.00919,271.264121 C1131.86204,277.94903 1133.54127,291.695812 1132.81851,294" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1013,255 C1015.31051,279.980376 1012.75454,301.122743 1013.74662,305" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1043.35038,252 C1042.97238,269.859743 1044.19638,295.150959 1043.51138,302" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1076,248 C1079.05416,272.923998 1076.27583,272.986802 1078,298" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1106.94518,245 C1106.29604,247.301872 1107.31237,247.347873 1105.07622,274.484576 C1104.48166,281.722318 1107.5818,291.05033 1106.90198,296" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M985,318 C1020.46156,316.359097 1104.48545,304.150034 1135,303" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M984.283948,318.211188 C984.466506,323.679724 983.378496,323.675139 984.555492,328.973098 C984.654569,329.417881 1023.25509,324.230888 1058.55121,322.025315 C1083.8947,320.441522 1105.82004,316.602633 1134.03125,313.427709 C1134.77249,308.213203 1134.78258,308.303077 1134.72846,307.857377 C1134.64406,307.198915 1133.61017,306.453331 1135,302" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1142,239 C1142.42076,249.962772 1142.35749,285.183088 1143,289" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1142,237.971083 C1146.97155,238.499969 1202.22502,231.600402 1204.91806,231.477427 C1238.65652,229.927752 1248.80185,228.378077 1264.45312,226.532522 C1291.17669,223.382317 1297.14475,223.245473 1307,222" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1145,289 C1156.25761,287.693233 1156.32179,288.91743 1180.21042,285.932328 C1195.11605,284.070005 1208.74089,287.351283 1276.36084,280.732185 C1292.06136,279.195656 1303.97633,279.368875 1307,279" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1307,222 C1307.21658,224.31512 1306.77877,224.312379 1308.83864,251.042235 C1309.49304,259.573643 1307.98778,267.547741 1307.34189,279" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1173,236 C1173.11574,239.922536 1174.18351,276.461202 1175,285" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1207.93786,232 C1207.86031,234.116899 1208.30535,234.114142 1207.56025,258.477772 C1206.85645,281.495371 1206.91966,281.978656 1207.1877,284" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1242.41781,228 C1243.29681,229.608715 1241.51781,280.816744 1242.71481,283" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1275.90898,225 C1276.46878,247.593342 1274.27112,247.380049 1274.08232,258.054847 C1273.77174,275.97606 1274.41367,278.549424 1274.78466,280" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1144,296.865853 C1146.6304,297.747978 1167.12154,293.99088 1188.74247,293.99088 C1231.23359,293.99088 1230.91772,289.079737 1273.47292,288.240012 C1277.77697,288.15521 1305.62004,284.874663 1306,285.003709" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1314.32,219 C1314.83,270.560886 1314.31,270.533434 1314.68,275" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1314,218.969824 C1320.88565,219.356243 1320.49192,215.994953 1399.88749,210.98445 C1426.313,209.317672 1426.02,207.734094 1452.30816,204.6714 C1471.89381,202.389865 1471.83887,204.163879 1488,203" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1315,275 C1350.46986,272.279341 1352.20858,269.136527 1401.32281,265.118862 C1411.1603,264.314072 1436.26191,262.553593 1446.35563,261.50988 C1467.69612,259.305689 1467.47649,258.242216 1489,257" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1487,203 C1484.97949,205.271704 1485.36923,251.038886 1485,259" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1344,216 C1348.06186,241.35402 1346.21649,246.465051 1348,272" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1314,283 C1356.85537,281.231493 1356.34225,276.884405 1399.05101,275.31341 C1430.21439,274.166566 1433.85211,271.669903 1453.15856,270.193568 C1467.80104,269.074939 1467.68192,269.146845 1485,268" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1314.10454,284.16786 C1313.90326,290.814077 1314.04965,295.053429 1314.07709,296 C1334.76314,293.591298 1362.21949,295.388864 1418.10201,286.753011 C1431.4139,284.697205 1468.32125,283.359139 1484.81702,280.457853 C1484.81702,267.3676 1484.44191,267.281214 1485,267" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1497,204 C1497.53996,208.107885 1500.2012,242.206462 1498.35954,258" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1497,203 C1650.67063,189.372836 1672.80411,189.336119 1681,188" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1499,257 C1549.43886,252.361289 1575.67221,254.472747 1602.96076,251.406261 C1612.76042,250.305518 1667.44763,247.523962 1680,246" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1681,188 C1682.05941,195.831026 1682.4745,248.755535 1681.25401,246.955121" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1532.48709,199 C1533.66709,211.275528 1532.07709,211.16831 1532.07709,254" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1569,197.018335 C1570.62694,195.877951 1570.41969,248.296145 1571,253" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1608,193 C1609.44275,208.024012 1608.67939,247.425717 1610,249" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1646.82953,189 C1649.64991,203.860401 1646.49772,222.242701 1646.41476,223.090328 C1646.15554,225.957117 1646.2696,245.765511 1646,246" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1498.18321,265.984799 C1503.70704,264.907151 1503.76201,265.864361 1568.10593,258.620125 C1569.36093,258.478116 1659.85832,256.649082 1680.9185,253 C1680.94598,253.910473 1681.09255,259.884721 1680.90934,264.392145 C1655.10398,264.404728 1655.28719,265.016803 1629.38106,264.578195 C1609.38351,264.24025 1515.73489,269.054162 1504.6231,274.50891 C1504.60478,274.516999 1499.37409,275.871473 1498.73285,276 C1498.17405,268.080774 1498.24734,268.09875 1498,267.105588" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M702,370 C731.030489,366.392035 730.736491,364.790829 759.940623,363.695652 C765.628571,363.481915 823.81358,361.298867 831,360" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M700,416 C717.386202,415.68998 797.222095,410.67644 803.199633,410.000374 C805.510887,409.738911 828.727023,407.111215 832,406" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M702,422.624914 C703.877554,424.485989 768.259178,418.855648 783.576688,418.097265 C808.99222,416.837822 824.661657,414.241922 831,414" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M702,433 C751.226912,427.029676 751.37413,431.785743 786.429617,428.586274 C790.15764,428.246686 833.306511,424.3093 832.998357,424" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M701,448 C711.254172,447.531413 711.233061,447.453931 829,439" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M700,489 C708.255418,487.369683 758.487075,484.945809 763.579424,484.703334 C815.025677,482.222148 814.956219,481.271644 826,482.602173" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M701,501.881616 C701.896504,502.4906 727.858459,500.57505 750.520398,500.107821 C779.621034,499.504432 779.303865,496.356925 826,495" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M702,512.502596 C726.589849,508.831544 737.301264,515.003662 780.478515,512.284432 C803.86075,510.810672 803.720988,510.800546 827,509" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M701.021734,526.727143 C700.016264,527.906242 734.064999,524.821228 768.342457,525.814203 C798.723378,526.697364 798.504718,523.566749 829,523" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M701,570.985473 C705.27082,573.378101 705.604693,571.10647 761.268055,568.633828 C823.510073,565.867474 824.537301,565.730864 830,565" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M701,580 C723.860055,579.368324 769.453334,577.343616 775.4034,577.077559 C823.865099,574.926516 823.803521,574.813567 828,575.134006" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M703,588 C709.315919,585.055693 731.133213,587.029469 770.676715,585.021161 C798.96308,583.581721 798.787001,582.866546 827,581" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M702,605 C727.429827,602.680114 769.543207,602.45 784.531987,601.577273 C822.739344,599.349432 822.67627,599.097159 826,599" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M702,650 C731.685713,648.196147 771.416858,649.938704 789.391886,648.371278 C823.128309,645.429072 823.06159,645.148862 826,645" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M701.205984,663.967817 C700.266386,663.107516 702.007028,664.701604 717.817781,663.588273 C741.345349,661.918276 744.107253,663.908777 776.165526,661.100147 C792.760807,659.649443 792.609407,660.096462 826,659" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M702,670.164932 C715.302445,668.775927 758.194106,671.745525 774.166543,670.816328 C820.047096,668.15327 820.021511,668.354436 824,668" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M700,681.961919 C705.131101,682.348858 756.777202,679.699167 825,678" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M702.600069,369 C700.855069,371.784737 703.809069,376.124658 702.715069,395.070538 C702.083069,406.031621 701.805069,405.869261 702.275069,417" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M728.378917,366 C727.848975,380.624932 727.726826,406.213934 729,415" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M757.598038,365.784263 C757.855038,365.088423 757.855038,362.921458 757.644038,364.660144 C757.322038,367.30744 757.217038,412.897724 757.203038,413" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M782,363 C783.873016,370.582669 783.689342,409.739283 784,411" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M810.426401,361 C810.091401,363.343702 811.056401,363.325327 810.537401,390.545712 C810.200401,408.146904 810.258401,408.464788 810.537401,410" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M832.89682,359 C832.73694,361.339549 833.630785,361.764005 832,406" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M701.781188,424.034833 C702.391188,423.227943 700.252188,436.754268 701.511188,431.974631" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M831.319924,415 C830.569924,415.2258 831.285924,415.522905 831.998924,424" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M700.530329,448 C700.468329,488.975316 700.447329,488.856468 700.498329,489" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M828.708871,439 C828.437871,448.892062 828.209871,448.776761 828.708871,458.578229 C828.807871,460.530104 829.481871,473.805233 828.046871,483" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M726.183077,446 C725.38401,453.661455 727.496297,453.591064 726.888482,488" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M752.2135,445.787192 C753.0415,442.663506 751.8415,447.435288 752.7865,486" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M780,444 C780.704683,449.179561 780.508308,466.371707 781,485" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M807.15907,441 C806.357801,444.035424 808.909534,444.083969 807.638381,481" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M700.663132,503 C700.375132,507.596958 700.223132,507.474115 700.438132,512" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M827.189,495 C827.331,502.105281 827.016,501.984695 827.811,509" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M701.776323,527 C700.962323,527.108469 701.251323,570.80592 701.381323,572" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M727.078743,527 C727.071743,530.518982 726.992743,570.573539 727.925743,571" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M752.526359,526 C751.714359,528.425132 752.770359,566.946371 752.780359,567" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M782,526.27976 C782.445364,525.130774 781.843134,526.960435 782.722949,542.511161 C783.542064,556.987089 782.218931,559.770992 782.872995,566" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M805,525.268384 C805.884891,524.160944 804.950473,525.895751 806.55186,541.765425 C806.580476,542.059106 807.545711,562.716776 806.55186,566" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M829,523 C829,556.811389 830.922816,556.826826 829.435878,565" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M702.381527,580 C702.207493,586.831473 701.340134,589.106534 703,587.514081" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M826.135187,575 C827.046187,578.505191 825.152187,578.739248 826.879187,582" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M701,605.162283 C699.754024,604.276233 701.379182,606.305426 700.338896,629.56034 C699.671879,644.471693 700.165406,649.301355 700.338896,651" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M726,605 C726.31521,605.252636 726.271163,628.587013 727,649" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M752.56724,604 C752.14124,607.890698 752.71724,648.441176 752.56724,649" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M780,602 C781.708983,644.388598 782.631547,644.508978 781.50566,648" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M804.382928,600 C803.453185,628.018214 804.438349,648.371747 805,649" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M826.033815,598 C826.432815,599.836695 827.915815,619.995203 826.033815,646" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M701.605388,664 C701.421388,664.528846 701.241388,665.048077 701.605388,671" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M826,658 C824.975893,658.686887 825.082143,667.830508 825,668" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M700.437417,683 C699.956417,705.157858 700.222417,707.933241 700.811417,709" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M728.042551,681.024187 C727.825873,680.068145 728.481382,707.7655 729,709" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M753.004986,681 C752.996308,683.481099 752.910257,709.244241 754,712" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M783.238804,680.586208 C782.368492,677.980777 784.089437,683.136401 785,715" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M825.070512,678 C824.794512,680.503501 825.873512,713.886555 825.974512,717" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M806.033678,680.015019 C805.929101,679.174294 806.020707,713.906154 807,715" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M837,357 C863.171167,356.435131 944.653469,346.615859 977,344" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M839,402 C846.585465,401.780605 917.969809,397.076538 936.077787,396.255482 C939.359129,396.106025 970.511683,394.692889 977,393" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M838,412 C888.290842,406.518588 888.280753,407.834954 918.477453,406.424111 C919.224025,406.38992 978.830499,401.190136 976.956734,402.108804" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M838,422 C838.342484,421.34582 967.453485,413.868447 977,412" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M837,437 C862.216967,435.384344 861.989109,433.343143 928.273,431.353149 C951.267427,430.66186 951.138797,430.441142 974,428" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M838,484 C882.532035,479.213831 905.19021,480.738854 973,474" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M837,495 C845.637089,494.393616 847.639733,492.202564 870.968693,491.730718 C911.612253,490.917722 969.290225,483.422015 976,486.928661" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M836,501.979361 C839.480333,502.224082 839.37008,500.230962 879.522544,499.262953 C887.005996,499.082584 936.678843,497.885261 973,496" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M838,518 C843.497675,517.665429 867.039144,514.600131 902.152356,513.98777 C944.963593,513.248744 945.644284,510.790566 973,510" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M839.019541,563 C838.10472,561.408424 869.40584,563.993952 912.939267,561.327011 C927.446758,560.439521 943.869711,555.573538 972,557.411142" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M837,574 C842.573626,573.783099 884.3309,571.216901 904.15119,571.676995 C925.482226,572.173709 966.579466,569.369014 972,569" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M838,582 C855.348481,579.616264 916.566756,579.803473 973,578" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M837,600.970042 C856.230443,601.307514 856.038541,598.671247 875.238827,599.207791 C910.704209,600.204093 910.580843,597 974,597" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M838,646 C839.720457,644.661355 964.461351,640.115538 971,639" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M838,657 C840.314881,654.3241 967.617768,654.390582 971,654" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M838,665 C866.000028,662.113095 908.630552,663.89881 916.595029,662.886905 C924.348278,661.894841 969.768655,660.049603 970,660" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M838,682 C848.318057,681.760213 848.272227,681.085258 908.941338,680.117229 C913.748854,680.046181 938.906508,679.646536 969,677" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M837,729.944294 C838.936023,730.514773 911.643026,726.482742 923.721212,727.894437 C933.555039,729.045064 936.400517,727.701054 945.732039,726.386051 C947.581142,726.124984 950.036854,725.776895 969,726.192668" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M839,742 C839.723888,741.957369 938.108703,739.885525 941.931966,739.61269 C957.338355,738.504296 961.614048,737.498215 970,738.274091" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M840,749.916922 C844.36109,750.611788 844.273136,746.666744 895.511367,748.48236 C960.339526,750.783636 960.556664,746.823649 974,749.356546" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M837,763.967805 C842.491861,764.362854 837.858561,760.965436 901.643775,762.340205 C932.130008,763.003887 956.961455,759.559062 972,761.723929" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M837.637347,357 C837.632347,357.321607 836.310347,390.349147 837.886347,402" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M865.257498,357.003872 C864.215295,356.540332 866.6504,397.856049 867,398" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M893.093,353 C892.747476,355.027292 893.435252,397.4697 894,398" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M923.118761,350 C923.118761,372.422304 922.903761,397.082703 923.900761,398" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M949,347 C949.556124,350.87124 950.291059,355.943335 951,396" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M977.237831,343 C978.622831,364.619941 977.711831,389.526921 977.038831,392" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M837.703668,413 C837.336668,420.92832 837.008668,421.000213 837.703668,422" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M976.387,403 C976.926,403.277076 976.187,403.457581 976.613,410" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M837.873201,437 C836.638201,442.604098 837.150201,485.672323 837.873201,486" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M865.000147,436 C864.980346,462.053432 866.972866,479.725868 867,480" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M892,434.087047 C894.146695,431.756262 891.530917,476.971826 894,481" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M920.190654,432 C920.132547,435.600037 919.474279,476.163674 921,477" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M949.037618,430 C948.755425,430.647862 950.159136,445.544981 949.984982,452.776816 C949.937412,454.71578 949.428658,475.650673 949.037618,477" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M973.694604,427 C973.211512,443.74687 975.14496,443.69253 972.850544,460.326116 C972.355564,463.875719 972.039987,474.743731 972,476" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M837,495.330357 C834.77128,493.973475 836.97878,496.848271 836.875998,503" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M973.589206,487 C973.535206,488.979853 973.643206,490.958785 973.589206,492.938638 C973.578206,493.187155 973.573206,493.166905 973.395206,496" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M837.613872,519.778615 C837.589872,520.025072 837.585872,518.785461 837.560872,519.032833 C837.560872,519.032833 837.372872,567.395987 837.386872,563.810003" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M863.715556,516 C862.745556,533.770312 863.715556,560.37494 863.715556,562" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M892.759,515 C892.241,522.57239 892.241,558.236198 892.241,562" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M921.202023,514 C920.259011,523.019029 922.918906,558.722504 923,560" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M950,512 C949.701031,512.637428 949.666237,512.587901 949,559" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M973.570109,510 C974.943385,533.031738 972.643972,532.919295 972,556" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M837.472997,574 C837.003997,581.331234 837.253997,581.550972 837.774997,582" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M972.063,568 C973.379,574.230558 971.557,574.472735 972.937,577" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M837,602 C837.87955,605.637065 836.509596,644.621148 838,646" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M865,601 C865.65203,604.364796 866,606.166188 866,644" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M893.076512,599 C893.043312,599.76763 892.657142,637.321387 894,643" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M921.529386,598 C921.050386,601.970121 921.519386,640.099996 921.680386,641" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M948.680452,598 C948.270452,604.025207 948.195452,635.981347 948.529452,640" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M973,597.306852 C971.738494,592.653387 969.813037,642.524365 971.977727,638.801231" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M837.858,657 C837.318,658.221154 837.533,658.230769 837.142,665" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M970.8665,654 C970.2735,657.514208 970.3165,657.400541 970.1335,661" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M837.217288,682 C837.389826,687.715113 836.759658,694.945184 837.105472,711.455511 C837.135093,712.870681 837.428332,726.895387 838,729" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M866.08161,681 C865.606103,704.064016 867.383683,724.732008 866.923035,727" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M897,680 C897.678203,683.377465 897.694404,702.384886 897.781296,708.836946 C897.995582,725.696739 897.480118,725.696739 898,727" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M927,679 C928.603148,696.714045 926.637945,721.970077 928,728" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M969,677.444964 C969.399268,677.190883 969.887262,676.419563 973.012395,677.798864 C975.344908,705.811388 972.874377,705.766017 972.416944,727 C970.780439,726.419241 970.871137,726.555357 969,726.428316" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M948.640295,680 C946.835465,680.802017 949.353477,681.403529 949.990089,701.262556 C950.108224,704.980997 949.117208,725.241032 949.82492,727" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M839.0675,743 C839.4775,745.484663 839.1685,751.300613 839.9325,752" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M972.082467,738 C971.677628,738.653188 972.889106,749.048212 973,750" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M837.874863,765 C838.035344,804.013699 835.74276,822.369863 838,831" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M865.666394,764 C865.329644,766.915259 867.064116,766.878704 864.864014,800.801717 C864.039184,813.504569 863.19024,817.534755 865.462681,830" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M896.691448,763 C896.285005,766.157164 898.722708,766.295233 894.28523,802.680863 C893.698463,807.513257 894.182188,829.843522 894.28523,830" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M928.456568,763 C932.834068,763.999295 926.28182,818.832158 928.45549,828" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M954,762 C953.714383,785.052046 953.766314,784.942535 953.766314,808.104092 C953.766314,808.514758 950.744738,825.114787 952.605575,826" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M972.295137,762 C971.101567,764.102767 974.395821,764.370224 972.262151,792.73913 C971.845487,798.28195 972.360241,824.612648 972,825" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M986,340 C1020.61738,338.286409 1047.14141,334.044615 1064.84519,333.168316 C1070.2215,332.902524 1127.72645,330.05682 1132,329" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M985.969824,341.928777 C984.492824,338.240366 985.198824,343.787983 985.198824,391" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M987.404524,391 C981.63653,388.216552 990.956797,392.138386 1066.588,383.044358 C1083.56058,381.003661 1120.40435,379.803689 1131,378" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1131,329 C1134.17031,331.436002 1132.65697,375.001036 1132.51815,379" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1103,332 C1104.27205,373.987052 1104.06424,377.092615 1103.80449,381" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1072,335.011704 C1072.83102,334.181305 1071.39243,377.805308 1073,381" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1040,337 C1042.04308,341.719348 1040.949,384.628422 1043,387" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1009,340 C1009.2792,340.139094 1011.27797,351.459687 1012,387" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M984.17624,399.420415 C1050.22519,394.131183 1049.94797,392.741876 1116.10064,390.059108 C1116.74411,390.033052 1122.57749,387.636892 1131.48407,388.047264 C1132.27991,388.083555 1132.05777,388.528357 1131.47397,398.094385 C1109.95609,400.462629 1104.59176,399.05471 1047.86521,402.888566 C1019.45467,404.809216 991.900538,408.578864 983.364799,407.924689 C982.86086,398.168829 982.825979,397.867332 983.59795,397.605848" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M983.615827,425 C983.804827,433.277386 982.946827,473.555364 983.615827,476" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M983,426 C987.001119,424.061027 1044.37989,421.5836 1057.39639,420.319479 C1106.69943,415.534897 1133.61881,415.990444 1134,416.027886" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M984,475.997534 C988.73902,476.1169 1015.3983,471.860119 1062.32557,472.553361 C1065.76273,472.602943 1083.94026,472.87014 1105.20364,469.820793 C1113.80432,468.588567 1128.47058,468.544493 1135,468" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1132,416.138731 C1133.51416,413.413111 1131.33383,451.560758 1133,468" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1012,423 C1012.9159,448.035953 1012.00457,447.957594 1013,473" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1043,421 C1043.44068,425.583595 1042.43569,473 1044,473" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1077,418.00962 C1078.52617,417.189624 1077.01495,469.061662 1079,471" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1105.16664,416 C1106.22601,421.277491 1104.67855,441.296702 1105.06284,458.510982 C1105.07904,459.275796 1105.41621,459.217953 1106,468" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M983,482.318034 C988.234591,481.490932 988.259373,483.080319 1049.13409,478.302114 C1072.58557,476.461674 1072.53601,477.3965 1095.92324,475.069476 C1097.89757,474.872286 1127.27112,474.390266 1130.1009,474.036054 C1133.78706,473.578683 1133.10875,477.509702 1134,483.730316 C1134,483.730316 1133.71271,485.157205 1133.68793,485.280449 C1104.31437,485.974265 1062.67078,485.595405 1002.47896,490.324313 C984.984427,491.69734 985.013798,490.584494 984.029846,490.392782 C983.856369,486.367732 983.277196,486.495541 983.504826,482.4358" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M984,508.336566 C985.964157,510.390817 991.238145,507.018637 1049.78919,507.018637 C1069.94418,507.018637 1130.91251,502.056346 1133,502" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M983,558 C982.989929,557.981605 1000.14174,557.872985 1011.72374,556.512614 C1041.05108,553.061317 1059.27911,556.319026 1083.88022,554.576734 C1118.10964,552.150315 1129.47548,554.685354 1133,553" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M982.979695,508 C982.273695,508.877317 982.861695,534.029822 982.230695,543.231601 C982.020695,546.304954 981.707695,551.112835 982.780695,557" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1132.37018,503 C1131.24081,503.340494 1133.06187,551.384967 1132.99837,554" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1103,505 C1103.40433,515.830448 1103.80939,515.716211 1103.49819,526.517178 C1103.25632,535.003915 1103.91047,550.884765 1104,553" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1071.07125,506.305429 C1070.79957,504.969551 1071.32889,507.553468 1072.25046,523.385448 C1072.39744,525.910806 1073.51885,545.130975 1072.70876,555" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1041.29449,508.56835 C1040.82549,506.026125 1042.48049,512.0793 1041.71549,525.384245 C1041.58549,527.670148 1040.35149,549.0241 1041.71549,554" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1008,507 C1010.6002,529.646001 1007.16432,546.235729 1008.38279,556" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M982,569.197704 C982.351934,569.31913 1088.10498,566.706103 1098.95706,565.534194 C1131.41404,562.033528 1133.20771,562.39875 1132.94031,565.168973 C1132.638,568.248881 1134.70826,572.364211 1127.57125,572.678603 C1056.66245,575.839462 1056.72678,575.05819 985.754579,577.259872 C985.650744,577.26552 986.22505,577.833119 984.680398,577.990315 C981.504719,578.320709 982.252694,570.101344 982.178264,568.10204" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M982.673822,594 C981.935822,600.737614 983.164822,608.363746 982.328822,628.059501 C982.274822,629.334013 981.741822,641.988092 982.846822,644" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M983,593.048585 C1010.12155,593.804432 1044.4813,591.320673 1069.3881,591.320673 C1120.14525,591.320673 1127.54453,589.918005 1131.74249,592.979872 C1130.50425,612.017137 1135.13692,616.446859 1131.71321,641.48051 C1106.38634,638.887726 1071.76118,641.278951 1066.56109,641.63626 C1015.17795,645.18187 985.23397,641.755364 983,644" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1008.53466,592 C1010.61914,609.172345 1004.84292,632.483149 1007.92706,642" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1038,592 C1039.2452,596.7805 1041.77495,597.86488 1040.7689,643" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1072.04641,592 C1072.22441,595.91416 1073.61541,627.416866 1072.56441,641" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1104.16143,591.183529 C1102.43093,590.129177 1106.91146,592.854215 1103.97303,619.865925 C1102.44799,633.888897 1103.12483,640.235126 1103.30858,642" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M983.867985,654 C984.140477,654 982.760585,654 983.036747,654 C989.228831,653.851744 996.493451,650.843023 1036.41859,652.5 C1041.16655,652.69186 1124.35462,651.139535 1132,651" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M983.088309,653.823934 C983.276398,658.146655 981.579925,664.288025 987.499689,662.761822 C993.024007,661.336146 1062.1289,660.166361 1065.13099,660.257751 C1097.01532,661.189923 1108.45023,659.608886 1133,658.996576 L1133,651" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M983.753732,679.941581 C983.753732,679.932405 1045.473,677.023613 1085.32285,678.757877 C1103.82512,679.556189 1130.91843,673.600964 1132.09716,677.124549 C1135.52861,687.410845 1133.28048,721.114295 1133.23546,721.563919 C1133.19136,722.086951 1132.86981,725.628887 1132.73108,728.088055 C1092.13246,727.895359 1092.21699,725.500423 1042.46692,729.051535 C1037.56458,729.400223 1010.42626,731.336359 981.025108,728.400039 C983.040799,715.66375 979.980514,685.805045 981.381575,680.070045 C982.069703,679.978285 982.778042,680.143453 983.471682,680.060869 C983.708714,680.024165 983.689421,680.014989 986.403345,679.565365" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1010.1176,679.795801 C1010.1066,680.043425 1010.06361,678.77779 1010.05861,679.034585 C1009.67565,693.36011 1011.30847,693.259226 1010.94751,707.667293 C1010.46756,726.422541 1010.38157,726.459227 1010.94751,728" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1041.22113,679.185924 C1038.22992,670.223407 1041.64474,681.805316 1041.88604,693.706664 C1042.31501,715.328053 1041.35607,728.452392 1041.88604,729" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1073,679 C1074.72581,682.939406 1072.5871,722.149377 1074,727" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1102.28841,678 C1103.70641,680.615169 1102.18041,726.651311 1102.11041,727" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M980,738 C980.03931,738.685296 979.940577,738.667021 980.177354,746.479392 C986.100431,744.889506 986.139741,749.567791 1056.87293,747.429669 C1094.96931,746.269235 1088.88808,746.013391 1127,744.862094" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M980,737.566153 C982.371445,737.366584 982.355868,737.418645 1067.83969,735.101904 C1086.63349,734.598641 1081.96116,736.021659 1128,738" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M981,763 C1008.47148,756.270834 1054.78952,763.308599 1128,760.951248" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M981,762 C984.473441,812.073135 982.280895,817.61322 982.676234,825" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1008,762 C1009.64768,795.105932 1011.03581,794.875645 1012,828" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1038,761 C1040.78858,801.336916 1039.31757,819.980879 1040,827" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1067,761 C1068.98038,820.929264 1065.75353,825.32858 1068,841" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1099,761 C1100.56123,780.186854 1101,854.972499 1101,855" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1128,762 C1129.31117,775.308625 1128.9562,804.591289 1128.9562,816" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1128,737.927785 C1148.71074,737.314247 1151.90215,738.367796 1161.0334,737.853416 C1183.48034,736.589157 1356.96863,737.103537 1363,737.103537" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1128.56143,738 C1128.07399,744.073296 1126.49095,747.223111 1132.39693,746.430942 C1143.73426,744.912618 1146.20438,747.930404 1158.21296,746.694998 C1162.64473,746.24233 1355.55299,747.54375 1365,745.450161" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1363.095,737 C1363.165,737.519849 1363.085,737.463138 1363.385,743.559546 C1363.455,744.844991 1363.855,746.725898 1363.905,747" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1384.04572,213 C1383.99319,214.676328 1383.84436,219.221527 1384.64981,233.953641 C1385.49903,249.502427 1384.46595,249.352445 1385,265" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1417.2743,210 C1419.37397,214.838415 1416.138,260.78653 1417.23313,262" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1454,205 C1454.79937,208.893915 1454.69804,214.711904 1455.58748,228.719564 C1456.63455,245.375343 1455.29476,245.26367 1455.81266,262" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1143,297.536298 C1143.2066,303.316697 1142.89122,303.256806 1143.55214,309 C1164.15865,308.067151 1164.15865,308.650635 1184.55309,305.758621 C1186.77079,305.443739 1219.15415,302.64882 1222.16441,302.389292 C1245.34788,300.387477 1245.25921,300.459165 1268.47285,299.019056 C1286.60113,297.893829 1286.39362,295.922868 1304.4826,295.913793 C1302.8664,290.585299 1304.06392,290.57804 1305,285" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1313.11,178 C1313.45,182.849989 1313.1,182.788212 1313.43,187.635435 C1313.45,187.906518 1313.63,190.519611 1313.89,191" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1314,178 C1314.02744,177.986089 1336.92988,173.527939 1357.10671,172.675632 C1364.77134,172.351959 1476.40244,158.191978 1488,158" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1314,191 C1319.58006,190.581556 1383.63654,185.785615 1383.80093,185.762268 C1411.20805,181.912764 1473.20968,172.505859 1487,171" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1487.585,158 C1487.585,165.797514 1487.575,165.84452 1487.415,170" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1497.47872,156 C1497.28872,162.768419 1497.39872,160.243887 1497.61872,167" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1499,155 C1499.4934,154.497988 1499.59391,154.701902 1532.76123,152.85662 C1542.35509,152.324433 1542.24544,151.24177 1652.33722,142.307974 C1654.6306,142.121434 1680.04061,140.060351 1681,140" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1498,167 C1508.94094,163.261484 1638.3095,157.181979 1660.43857,155.416961 C1662.25138,155.272085 1678.18212,154.263251 1682,154" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1681.28111,141 C1681.14111,151.872695 1681.88111,153.576492 1681.71111,154" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1314,178 C1314.39305,178.201174 1318.45155,180.296971 1318.48812,181.23106 C1318.68921,186.634419 1318.71664,186.535249 1319,192" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1319,181 C1330.51857,180.612308 1374.63496,174.42799 1377.52604,174.378859 C1400.3985,173.993846 1400.3985,175.299851 1423.10627,172.342134 C1432.66696,171.09866 1478.30208,163.364467 1488,163" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1498,155 C1498.39655,156.743386 1500.12069,156.719839 1500.5,157.340526 C1501.17241,158.445329 1500.92241,165.908639 1501,166" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1501,158 C1502.12454,157.89754 1511.34031,158.099614 1524.04856,156.356848 C1536.40939,154.663414 1680.18631,144.066409 1681,144" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1678.425,34 C1678.575,34.2846741 1678.575,114.960952 1678.575,122" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1781,260 C1783.83076,259.551683 1811.41459,261.640185 1900.47803,250.568028 C1945.69683,244.944929 1985.51063,245.489834 1996,244" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1784,342 C1797.31652,341.658857 1836.69706,337.953279 1846.39765,336.80674 C1908.85036,329.427536 1996.47688,328.268779 1997,328" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1783.19588,360 C1782.04067,357.424376 1785.08456,362.179665 1817.48543,358.241869 C1822.93142,357.579728 1822.91308,358.433218 1885.99118,354.599621 C1986.77862,348.474582 1986.78779,349.736344 1995.47019,348.454689 C1997.24885,348.192296 1997.20301,348.616672 1999,348" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1821,259 C1821.43333,275.900842 1822.03333,275.706001 1822.80833,292.626052 C1824.05833,320.296195 1823.36667,320.183681 1824,339" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1863.65913,256 C1865.0416,288.974911 1861.63765,322.898576 1863.65913,335" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1907.75026,250 C1908.58202,272.330104 1907.1398,272.177634 1906.29277,294.489478 C1905.58311,313.268934 1906.34619,313.142027 1906.66669,332" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1952.79439,247 C1953.83103,284.236248 1950.48702,297.02613 1952.88802,330" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1825,359 C1825.90451,368.78562 1825.75375,368.671185 1826.71624,378.472368 C1827.48159,386.319906 1826.48432,440.363738 1826.2292,441" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1865.42323,357 C1866.96119,360.174586 1864.9284,392.237536 1865.00196,396.251858 C1865.08889,400.680977 1865.57702,433.061017 1865.14238,439" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1905,354.441526 C1905.30189,352.742453 1905.51153,355.154604 1907.40671,375.918395 C1908.8239,391.463671 1908.80713,433.736493 1909,435" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1952.61759,351 C1954.15213,368.607974 1950.53854,418.817883 1951.05005,433" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1781,442 C1796.92585,442 1986.52496,435.676482 1998,436.012968" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1781,460 C1782.03444,459.609271 1782.10768,460.485594 1794.84141,459.481532 C1840.88789,455.846621 1844.00038,463.257331 1945.23856,454.603988 C1995.56013,450.302207 1995.67914,452.807196 2000,452.068004" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1825.00024,460 C1824.97634,460.233212 1826.74505,541.417428 1827,542" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1866.5287,459 C1866.1887,463.856471 1867.4287,497.691681 1866.7187,510.650197 C1865.3887,534.969141 1866.3887,539.539291 1866.9287,542" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1913.36211,457 C1913.29211,463.641917 1912.61211,532.979256 1913.88211,540" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1952.79686,454 C1952.29628,488.155903 1951.18629,535.72087 1953,538" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1952.79686,764 C1952.29628,794.496342 1951.18629,836.965063 1953,839" id="Path-Copy-2" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1782,545 C1847.76265,543.853508 1861.85399,540.870553 1947.91477,540.870553 C1973.182,540.870553 1972.93447,539.574481 1998,538" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1781.65725,562.30207 C1778.54324,566.282419 1784.4507,561.871836 1844.81664,562.935036 C1890.04301,563.730372 1988.79368,555.577033 1997,557.219076" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1825.09668,564 C1824.80925,566.961414 1827.45603,566.9669 1824.82122,601.075736 C1824.56972,604.42207 1822.96488,625.280887 1825.07273,643" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1865.32667,562 C1865.96667,577.006159 1864.38667,634.720685 1865.80667,645" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1908.92642,561 C1909.38789,577.329809 1907.50292,639.099045 1908.12863,642" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1957,560 C1956.61586,578.701297 1956.41464,598.091008 1956.23171,600.44385 C1955.98476,603.676838 1954.14635,627.596932 1955.48171,641" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1957,663 C1956.61586,682.393938 1956.41464,702.501787 1956.23171,704.94177 C1955.98476,708.294498 1954.14635,733.100522 1955.48171,747" id="Path-Copy" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1781,646 C1785.4833,644.63879 1873.44756,644.63879 1881.49006,644.63879 C1905.04113,644.63879 1904.87644,642.975089 1928.50071,643.366548 C1933.82577,643.455516 1984.82564,644.291815 1995,641" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1780,664.881847 C1787.4094,665.405052 1787.3177,664.021092 1872.92009,664.021092 C1876.71649,664.021092 1876.55143,662.409285 1920.22836,661.430386 C1979.31098,660.097059 1987.75659,662.37553 1997,661.430386" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1822.73584,665 C1822.15692,667.478728 1823.58574,667.588894 1822.70504,697.774295 C1822.58803,701.712718 1821.36244,743.786834 1822.44022,747" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1866.85598,667 C1866.73117,667.0731 1867.20544,700.388456 1866.88926,713.729218 C1866.44828,731.940272 1865.4831,743.307332 1866.34843,749" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1908.3855,662 C1910.4392,677.118972 1906.50236,742.18993 1908.67888,748" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1777,748.616894 C1778.7151,748.250204 1778.72427,749.416944 1799.10367,748.833574 C1858.44422,747.150135 1975.61201,748.39188 1998,745" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1780,768.429158 C1788.25325,770.543601 1788.2807,766.230137 1886.29486,764.491595 C1891.85803,764.39762 1994.87721,763.570638 1997,764.294247" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1822.36255,767 C1822.96255,781.672529 1822.44255,834.804174 1822.35255,837" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1864.68893,767 C1866.03861,796.484738 1862.40604,816.390817 1864.89717,837" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1910.88276,766 C1910.43272,768.708565 1913.62304,768.726804 1910.86276,800.262887 C1909.3326,817.718081 1910.02267,817.617764 1911.49282,835" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1699,185 C1733.20439,181.269995 1761.49941,182.037448 1777,181" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1698,166.79032 C1740.10125,166.94732 1739.89875,167.02732 1782,166.11232" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1699,263 C1700.48042,261.894908 1734.93461,259.075298 1738.07016,258.818888 C1743.72085,258.356252 1765.47522,258.600236 1780,258" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1702.01744,279 C1700.75462,276.417483 1768.45305,274.622124 1777,274" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1699,361 C1705.47926,360.611332 1768.4312,356.833996 1780,356" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1701.00505,375 C1700.54571,374.569725 1731.43188,371 1778,371" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1697,460 C1702.97297,457.299338 1743.72703,457.167933 1782,456" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1699,475 C1721.55698,473.831901 1721.31789,474.48042 1744.08637,473.002865 C1761.30066,471.885387 1760.94203,471.885387 1778,471" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1697,553 C1725.01967,552.288437 1724.80954,549.841043 1752.9023,551.657709 C1774.06094,553.028718 1779.67949,552.37459 1782,552.105494" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1698,570 C1769.76091,565.418537 1772.54454,565.70763 1779,566.383458" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1697,652.051165 C1705.44187,653.381165 1759.82172,653.011165 1778,652.361165" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1699,668 C1703.91275,667.113924 1753.9018,666 1776,666" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1700,753 C1724.23224,751.104284 1742.25274,752.486208 1777,752.486208" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1700,765.980849 C1702.88754,766.21769 1771.7589,764.183013 1778,764" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1681.25331,122 C1683.31168,121.428687 1793.77718,112.748205 1797.9305,112.587066 C1792.63364,24.245017 1802.76079,14.7679933 1794.83838,18.7360563 C1788.8554,21.7272105 1787.94972,16.2438857 1711.78113,27.9713707 C1701.57165,29.542482 1680.63123,31.7608984 1680,32.0758531" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1791.57399,114 C1791.80338,121.028988 1791.71327,120.936196 1792,123.726449 C1791.74603,123.935231 1789.01796,126.157598 1789.00157,126.621557 C1788.99338,126.873024 1788.99338,137.534816 1789.64058,139" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1679.31136,122 C1678.02968,127.700139 1680.80512,126.970847 1685.79354,136.990282 C1691.05858,147.561314 1692.20196,150.19528 1694,152" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1790,139 C1785.91961,147.26184 1781.2421,153.907391 1780.03879,160.196719 C1777.76789,172.094061 1780.65402,183.48225 1779.90308,204.801678 C1777.44218,274.359737 1783.67585,272.983375 1782.40017,342.78319 C1781.23305,406.582137 1784.2187,406.400819 1780.90734,453.338178 C1776.3203,518.273563 1785.9739,545.555399 1777.62313,706.164021 C1777.44218,709.5248 1775.92222,812.280399 1778.4193,835" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1790,138.995012 C1790.96148,139.243832 1876.9359,130.109128 1893.56489,128.206222 C1988.99842,117.293022 1984.74961,122.320314 1993,121.259059" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1780,160 C1835.64732,154.062074 1837.58072,155.736315 1870.91597,152.937137 C1891.14802,151.237474 1960.50329,146.321889 1992.21667,146.003202 C1996.84402,145.956897 1994.47995,143.22309 1993.71025,122" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1820.13202,157 C1819.5746,189.643855 1820.96018,238.870795 1821,239" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1865.11374,153 C1865.08374,159.720589 1864.82374,225.784305 1865.93374,237" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1909.86504,150 C1908.88504,150.669519 1909.17504,227.653252 1909.17504,234" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1950,148 C1949.13122,168.329981 1949.42986,168.198196 1948,188.575178 C1948,188.575178 1949.8009,235.03923 1949.70136,231.842281" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1780,243 C1887.78959,233.472371 1914.14345,237.283422 1967.59367,231.168449 C1994.70836,228.066845 1995.33169,230.621212 1997,229" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1695,151 C1703.16961,437.731494 1696.09627,484.071993 1699.96659,539.908691 C1700.11911,542.17685 1699.7092,838.799684 1699.54714,841" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M695.515418,246 C698.24265,280.685822 696.881314,403.407222 694.104844,428.527765 C687.967433,484.073117 693.928864,506.086825 688.066821,623.966914 C687.737656,630.572035 687,701.096938 687,708" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M696,246 C722.137318,242.556202 740.953697,239.419903 779.166857,234.928231 C791.658318,233.460293 875.387269,224.012042 997.912527,206.734482 C1261.72083,169.533595 1677.73181,122.97689 1681,128.43956" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M842.397282,236 C841.579282,236.418885 842.594282,236.679504 842.914282,247" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M842,236 C854.031957,232.784284 951.978285,223.728287 974.837718,219.11749 C975.485367,218.986123 975.400971,219.060133 976,219" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M843,247 C857.302894,245.579783 857.158893,244.97008 871.521405,244.716567 C872.470712,244.699302 933.850067,238.463248 939.268914,237.912607 C942.348888,237.599124 942.259919,237.340159 977.678705,232.954113 C978.865568,232.807821 976.408376,224.638163 976.052501,219" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M988.276788,215 C988.244788,216.200147 988.109788,221.081353 988.756788,230" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M988,215 C992.379415,214.564911 992.305234,214.012402 1042.58791,208.459097 C1049.16345,207.733644 1070.51836,206.494823 1123.61076,200.63204 C1127.49563,200.203322 1135.32949,199.071908 1138,199" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M989,230 C992.876063,227.128777 1086.0624,217.158801 1108.85186,214.750794 C1116.85526,213.905469 1130.12909,211.971494 1138,211" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1137,200 C1137.97631,212.31982 1138.35999,209.25045 1137.59263,210" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M992.323933,219 C992.237933,224.029337 991.967933,223.98555 992.787933,229" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M989,215 C990.955127,217.064713 990.825814,217.058599 993,219" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M992,219 C1034.52542,213.847443 1034.4455,213.857238 1077.03522,208.999443 C1088.57235,207.684143 1088.42905,207.122224 1100.57523,206.280681 C1103.08126,206.10703 1134.51969,203.44437 1137,203" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1143.0365,197 C1143.4725,204.165226 1143.7635,202.849275 1143.9635,210" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1143,196 C1149.38196,195.19473 1165.81156,192.947186 1167.79194,192.676297 C1174.50565,191.758234 1183.18416,191.342193 1184.52855,191.277476 C1192.27872,190.904888 1192.07619,189.506067 1208.975,188.653646 C1211.24223,188.539004 1299.26357,180.709118 1307,180" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1144,210 C1163.43277,209.429023 1165.1096,208.238939 1178.12597,207.807639 C1191.31488,207.369733 1191.20658,206.955421 1206.69093,205.218897 C1218.3572,203.909898 1307.23414,193.050019 1309,193" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1143,196 C1143.13547,196.489509 1143.39655,197.410668 1147.7147,200.157612 C1147.7147,200.97591 1147.54603,208.072413 1148,209" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1149,201 C1153.18717,200.276104 1180.6108,198.425621 1181.60617,198.223801 C1202.2934,194.027288 1202.53014,196.469964 1223.3563,193.148948 C1236.57042,191.04169 1301.63927,187.363464 1308,186" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1308.15971,181.002546 C1308.07371,180.796082 1308.93571,193.214907 1308.83871,194" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M842,236 C842.361936,236.517864 842.53589,236.113075 849.389292,238.595971 C849.28361,243.538008 849.525836,244.389396 850,246" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M849,238 C895.22301,232.350673 895.237686,233.112108 941.312105,226.504036 C952.950867,224.834978 973.221703,224.100448 976,224" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M705.573677,252 C705.020677,252.110851 705.618677,259.832858 705.659677,261" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M705,252 C708.117145,251.327241 708.125394,251.459646 727.931775,249.043262 C741.813656,247.349735 741.640431,246.349543 779.009509,242.701259 C803.182276,240.34213 803.101621,240.362707 827.288137,238.546616 C827.745489,238.512621 831.170591,238.254968 833,238" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M706,262 C726.636923,259.856126 719.447043,259.37188 740.118749,257.064483 C746.9306,256.304687 746.104061,255.488876 797.376921,251.286053 C803.610286,250.774704 827.838946,249.343648 834,248.474534 C833.968879,241.640881 833.716249,245.621457 833.870939,238" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M706.019339,253.009277 C705.672826,252.842785 710.095526,254.968621 710.25481,255.266553 C710.671185,256.050817 710.554749,250.952667 711,261" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M711,255 C726.6345,253.620083 737.194741,250.501274 766.797635,248.810365 C780.389073,248.033773 817.586886,243.576809 834,244.032635" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <polygon id="Path" fill="#DBDBDB" fill-rule="nonzero" points="833.738779 742.106501 832.36465 719.673582 649.60552 707.312586 580.89908 699.987552 -55 667 -55 1020 2030 1019 2017 835 1948.15723 838.24758 1826.31781 835.958506 1699.89796 840.078838 1698.52384 838.24758 1681.57625 838.24758 1648.13911 840.078838 1615.61807 838.24758 1597.75439 833.211618 1517.13883 818.561549 1400.79593 818.561549 1328.88319 814.899032 1119.09953 814.899032 1118.18344 865.258645 1113.60301 860.222683 1078.79175 845.572614 1005.04684 826.344398 989.015333 824.970954 984.434904 826.344398 888.245888 831.38036 810.836632 831.38036 805.79816 743.937759 819.997491 741.190871"></polygon>
  <path d="M1607,837 C1640.90525,842.088004 1668.0496,839.549496 1677,837.758255" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1677,837.887637 C1678.73515,836.837637 1678.78205,837.367637 1688.3113,837.787637 C1695.05494,838.087637 1695.13935,836.567637 1698,837.327637" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1120,814.965544 C1124.73031,813.918907 1129.5879,814.001536 1326.82988,814.001536 C1340.60145,814.001536 1384.30602,820.235451 1516.79325,817.820842 C1520.40096,817.756575 1606.52819,833.263323 1614,837" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1120,815 C1157.40325,818.3 1154.28059,823.635 1170.10007,824.35 C1425.84333,835.799167 1550.27343,824.386667 1607,837" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1120,816 C1119.2502,840.004572 1119,839.757668 1119,864" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1207.11098,827 C1206.84954,833.934532 1207.01317,834.833453 1208,878" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1121,863 C1131.10099,867.554191 1189.41189,902.324049 1222.05838,896.301363 C1249.83014,891.170927 1308.34336,896.412895 1351.71333,888.559238 C1395.97495,880.52899 1412.77331,886.393673 1414,882.657377" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1209,878 C1272.98232,878 1272.63724,876.695 1336.35046,875.003 C1374.94983,873.968 1374.64777,873.194 1413,869" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1119,855 C1135.16331,858.7996 1177.84315,874.6236 1208,878" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1413,839.164283 C1422.06037,842.421475 1592.96812,834.75866 1616,839.728599" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1412,839 C1417.02718,846.194937 1414.43742,846.782278 1413.4517,865.540506 C1412.65416,880.618671 1416.21172,885.886392 1414.40158,897" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1414.20007,888.339291 C1408.98936,886.611773 1390.04216,892.013695 1388,892.598675 C1407.13951,910.422276 1412.64327,900.861514 1433.32127,916.73823 C1434.27366,917.469454 1504.48546,947.276 1636.38326,963.728555 C1728.82985,975.263624 1836.80784,1003.46148 1938,1019" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1399,891 C1408.75744,892.370126 1506.67048,934.369051 1654.30435,951.705711 C1671.15561,953.678692 1948.98627,1008.88563 1955,1010" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1413,840 C1440.01482,844.569544 1452.38669,864.821761 1722.05871,872.690515 C1944.12053,879.170128 1966.19379,885.747567 2022,875" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M989.222848,824.111516 C998.575184,822.458199 1062.34403,839.709023 1068.62014,841.398677 C1092.29276,847.803011 1090.23889,852.626701 1113.73836,858.558659 L1118,864.436112 C1036.97299,869.205297 378.400454,841.577497 346,848" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M989,824 C804.925324,841.073913 425.184733,821.226087 346,835 C319.333333,845 319.333333,849.333333 346,848" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1117,865 C1119.13676,870.262182 1126,915.33391 1126,939" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1123.10484,901 C1134.55057,909.689967 1136.23721,912.342694 1162.39116,942.821611 C1183.61428,967.556001 1127.7921,962.982335 1071.57068,966.732741 C1019.8305,970.172139 385,931 328,926 C271,921 278,906 327,904" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1137,935.983134 C1113.22798,947.044768 1090.81254,957.458936 809.087125,938.54564 C602.697133,924.6844 435.305441,922.350333 328,912 L326,846" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M-1,671 C274.009836,681.075438 631.393906,706.471334 655.287989,707.322269 C663.571478,707.611949 815.318306,715.795413 833,719" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M806,743 C822.031919,739.941803 834.208294,742.57094 833.997299,741.238113 C832.494307,731.762267 832.247991,730.484215 832.625366,723.747052 C832.700655,722.414226 832.800111,720.862305 832.919086,719" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M807.149597,743 C806.076111,759.896657 811.101246,802.544073 812,830 L807.149597,743 Z" id="Path" fill="#FFFFFF" fill-rule="evenodd"></path>
  <path d="M807.149597,743 C806.076111,759.896657 811.101246,802.544073 812,830" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M423.477966,374 C422.893166,374.815487 423.668766,395.161085 423.738866,397" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M424,374 C424.009427,373.958741 431.818344,371.917866 468,369" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M424.576463,396.820094 C421.213741,397.793239 432.162802,394.623301 468,392" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M467.552365,369 C468.186265,374.000629 467.197665,377.26297 467.197665,384.908544 C467.197665,388.873251 468.007265,391.080687 467.752865,392" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M424.0801,441 C425.5258,451.609142 423.7427,458.680374 424.9199,463" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M424,440.953431 C426.939241,441.302691 450.486904,439.588042 453.247814,439.119815 C460.793138,437.84065 460.8095,438.711617 468,438" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M424,462.94624 C426.378954,463.540088 462.88442,458.992146 469,460.207378" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M468.277569,438 C467.403667,449.129327 468.859969,460.703279 469,461" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M423.44717,507 C423.52157,508.837795 423.93177,519.021814 423.34427,530" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M423,529.972151 C424.834877,530.246231 424.731884,528.415773 446.094906,528.051639 C460.098394,527.813778 461.593977,528.489187 464,528.236643" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M424,507 C429.444216,505.951598 443.104317,505.301337 444.768595,505.221499 C456.919712,504.63847 461.934796,505.403236 465,505.295034" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M464.992267,505 C465.072561,507.658565 464.493756,526.285905 464.812864,527.982627 C464.829198,528.071398 464.777231,527.795017 464,527.716313" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M423.23535,574 C424.63945,580.330437 422.43865,595.414795 423.76465,599" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M424,573.889053 C427.186087,573.560053 436.240144,572.628053 464,573.425053" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M425,599 C428.034996,598.841121 444,598 463,598" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M463.50965,574.063542 C462.83805,573.722376 464.00665,574.49395 463.73015,582.962672 C463.48435,590.508295 463.59975,590.478547 463.93175,598 C463.64395,597.934927 463.35605,597.864277 463.06825,597.794557" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M540.07518,293.853918 C532.689608,295.123058 563.31782,287.859411 633.062276,282.269088 C666.525651,279.587098 673.899279,278.996989 679,278" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M542,305 C546.194484,302.795073 611.91416,293.353345 624.95584,292.801882 C630.715253,292.558643 662.233332,291.49935 677,290" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M544,371.278259 C550.691708,374.655676 550.479476,365.287162 636.437049,361.595765 C640.794206,361.40813 660.745833,359.455414 676,359" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M543,384 C575.023244,383.610367 598.88791,374.991459 656.500337,374.991459 C659.627854,374.991459 661.560629,374.855133 677,373" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M543.045248,443.182732 C541.053386,446.310654 605.447767,439.460532 612.99887,439.335865 C619.125773,439.235569 667.825526,438.067637 672,437" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M543,457 C600.588197,452.482923 664.118209,449.466061 676,449" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M538,522 C674.986257,511.814713 663.440407,517.007512 675,514" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M539,535 C545.941628,534.363475 545.88759,535.115291 626.020847,531.261263 C672.277605,529.036816 658.59768,530.623769 677,529" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M678.540245,278 C678.316697,336.697784 680.680604,336.639114 676.453791,395.286478 C675.432761,409.461768 676.453791,409.415015 676.453791,573.086769 C676.453791,584.002192 676.141457,679.379903 678.392005,708" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M679,277 C681.968337,278.935718 695.657648,278.219285 697,279" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M586.845966,214 C586.943966,249.687022 585.000966,249.480653 586.927966,285" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M587.466184,214 C579.331391,213.032519 680.245954,203.737299 688.32866,202.992941 C711.750685,200.835783 711.393383,199.709061 735,198" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M735.645596,198 C735.112596,216.71818 735.441596,240.207045 735.612596,241" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M737,198 C752.446665,202.313631 786.885478,226.94421 791,231" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M539.817004,293 C540.358538,321.676315 539.631408,407.546636 538.511899,518.922603 C537.970365,572.937687 536.841534,663.321948 537.018656,697" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M565,303 C565.548023,310.864418 564.392655,361.713806 566,368" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M591.271438,298 C591.200438,303.360148 590.524438,354.473578 591.950438,365" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M621.368267,294 C620.278972,296.719779 621.953111,296.865876 621.953111,330.825447 C621.953111,339.374375 622.884268,359.354647 623,362" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M650,292 C653.759904,318.504354 649.403361,316.172641 652,360" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M567,382 C567.304619,396.517119 567.17603,426.281288 568,442" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M593.190314,379 C592.215085,390.366652 595.348538,390.257217 594.485249,409.747597 C594.378397,412.165199 593.854318,423.989655 595,440" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M624,377 C623.917898,407.587902 622.116492,407.42858 623.555685,438" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M653.29958,375 C653.278101,379.793659 652.29938,436.320652 654,438" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M567.104631,455 C569.142631,479.103128 566.445631,479.029457 567.711631,517" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M593,453 C594.543867,471.773997 593.839796,497.146849 593.839796,518" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M623.255222,452 C623.020365,454.281681 624.306974,460.951839 623.096311,478.234316 C622.747216,483.217579 623.416048,513.500626 624,516" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M654.23839,450 C654.508818,455.481338 652.441667,452.780349 657,515" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M567.1415,537 C567.2485,541.402689 567.8585,566.446959 567.8585,592" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M594.278918,533 C596.540364,560.614556 592.574165,587.272024 594.594185,593" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M626,532 C628.634297,543.575056 627.953576,554.202979 627.830486,556.137316 C626.123089,582.807301 627.749359,582.79273 626.548307,591" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M656.971817,531 C656.267817,560.226846 655.364817,561.763136 656.760817,591" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M540,595 C581.252951,590.770626 666.857459,594.042794 676,592" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M538,608 C574.097885,606.948433 640.076532,607.4908 649.776898,606.275353 C653.278506,605.839314 675.187208,604.356585 677,605.318408" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M568,608 C568.111435,621.696378 568.802987,621.543576 568.97866,635.271064 C569.150401,648.693862 568.229425,667.954251 568.218937,668" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M595.039914,607 C594.929486,608.226642 594.902866,614.368108 597,669" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M627.218866,608 C628.278866,615.246151 627.920866,623.097365 627.860866,624.410616 C626.827866,647.042519 627.139866,667.822729 627.032866,669" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M656.205182,607.9206 C659.224618,598.559528 652.5422,663.546237 654.299334,669" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M538,671.845883 C562.346708,669.180568 582.364295,671.93654 624.434487,670.050875 C630.59007,669.769838 668.702314,670.685474 678,672" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M537,683 C541.692878,682.671166 571.924747,681.69896 589.207579,682.092132 C634.033288,683.121526 633.909307,682.685463 675,682.685463" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M566.517744,684 C567.150744,694.702454 565.813744,698.346626 566.517744,699" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M597.637085,683 C598.204085,685.083693 596.515085,694.850432 597.637085,700" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M626.95969,683 C627.16069,684.236534 624.76669,688.620609 626.95969,703" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M656.454872,684 C656.054985,684.744186 655.708857,685.404651 656.374706,694.595349 C656.975479,702.893023 656.651042,703.590698 657,706" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M416,320 C479.17291,309.643094 479.148131,310.710202 543,305" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M416.196205,320 C415.064979,322.881944 417.611288,323.79488 416.96568,358.985604 C416.14479,403.783724 418.863097,403.654353 417.696466,448.494679 C417.002727,475.164356 421.131602,532.528887 417.453042,601.59644 C414.627493,654.64769 414.441538,685.825163 415.887511,691" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M423.452219,326.145711 C441.295583,323.1245 466.26598,320.406701 470,320 C469.995551,324.456194 469.990649,328.912388 469.986291,333.36766 C454.327884,334.646787 442.706554,334.907777 441.554063,335.119889 C432.221464,336.843528 432.481306,337.348908 423.002444,338 C422.981926,338.000922 423.087061,336.979096 423.452219,326.145711 Z" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M423.123663,325.730595 C422.552048,325.907196 423.824699,326.076119 429.847347,329.606217 C432.689232,331.272408 432.632844,327.381429 470,323" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M431.412798,330 C431.911398,330.960633 431.324898,334.852306 431.389598,337" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M448,326 C449.653855,326.271134 470.426355,329.36701 471,330" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M735.488494,252.005673 C735.617494,251.813977 735.284494,256.540781 735.554494,257" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M812.504185,245 C812.474185,245.398996 812.508185,245.397265 812.508185,250" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M704,290 C744.960468,286.12597 744.705613,285.014897 785.63685,281.015926 C791.971697,280.397474 823.254968,278.750051 834,277" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M703,290.994511 C700.949379,287.892948 702.687856,289.444643 702.687856,335" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M702,335.793069 C710.551122,337.514947 825.131021,327.982657 833,326" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M831,279.262643 C835.352791,275.44495 831.273528,280.996965 831.078151,286.434148 C830.647293,298.464121 833.766125,320.334065 832.16712,326" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M805,280 C803.482102,306.013623 804.143349,305.844697 804.143349,332" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M780,282.363809 C777.289253,280.424018 781.14421,284.737222 779.393169,333" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M753.223892,285 C753.223892,286.443939 753.223892,299.870363 753.488892,303.04003 C753.889892,307.847021 753.753892,307.761379 753.753892,334" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M725.162672,287 C724.631336,309.869862 725.531919,332.911747 726,334" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M703,346 C708.749505,344.708361 708.901146,347.028795 776.502858,340.385436 C803.294667,337.75248 820.898848,334.297572 831,335.124943" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M701,344.599645 C701.588881,349.872167 701.384053,349.764787 701.997623,355 C706.98665,353.769684 745.071873,348.716471 761.274323,348.213243 C796.160936,347.128526 795.916789,346.595268 831,345.067383 C830.835406,341.378255 830.670812,337.689128 830.506218,334" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M841.938501,276 C840.282501,292.745408 841.459501,318.126906 841.570501,322" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M843,275 C850.406056,274.490733 850.272184,273.484554 935.254314,265.304501 C945.54412,264.31421 971.181525,262.661959 976,262" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M843,321 C843,321 845.919013,319.454869 909.346099,316.568612 C968.678345,313.868063 972.603252,313.081317 978,312" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M976,260.335128 C977.432638,258.844174 975.56208,261.437652 976.216775,286.679255 C976.541937,299.204541 978.850416,299.634816 977.663398,312" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M865,272.879379 C866.311436,269.404559 864.692214,274.629571 867,318" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M893.594668,270.277347 C894.28588,268.577425 891.898178,274.451549 893.667144,294.579358 C893.906049,297.32031 893.750358,314.616444 894,317" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M924.0298,266.557288 C924.19665,262.606355 923.47209,279.723083 925,316" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M955.12,262 C955.934,270.310021 955.697,313.498294 955.88,314" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M840,333 C850.190409,329.891283 955.695871,323.027332 977,324.115806" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M840.79958,333.347575 C840.640978,334.16149 838.256458,346.451325 842.568947,343.560683 C845.585122,341.539262 888.009599,335.912835 898.871498,335.735857 C931.737724,335.203079 956.970002,337.995092 979,334.096045 C978.486608,328.93695 977.833868,329.006082 978.980748,324" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1696,838.6827 C1700.10565,840.197664 1806.71497,835.817255 1816.33758,835.419036 C1868.55626,833.280773 1951,842 2017,835" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1995,144 C1995,153 1999.65402,183.48225 1998.90308,204.801678 C1996.44218,274.359737 1999.27569,271.200185 1998,341 C1996.83288,404.798947 2003.2187,406.400819 1999.90734,453.338178 C1995.3203,518.273563 2004.9739,545.555399 1996.62313,706.164021 C1996.44218,709.5248 1994.92222,812.280399 1997.4193,835" id="Path" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
</g>
</svg>

<div class="window-1 {showClass}" style="--clip-url: url(#mdd-window)">
  <video src="/videos/people.mp4" autoplay loop muted playsinline></video>
</div>
<div class="window-2 {showClass}" style="--clip-url: url(#fdnd-window)">
  <video src="/videos/party.mp4" autoplay loop muted playsinline></video>
</div>
<div class="window-3 {showClass}" style="--clip-url: url(#cmd-window)">
  <video src="/videos/cmd.mp4" autoplay loop muted playsinline></video>
</div>
<div class="window-4 {showClass}" style="--clip-url: url(#talks-window)">
  <video src="/videos/talk.mp4" autoplay loop muted playsinline></video>
</div>


<style lang="scss">
  .clip-paths {
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 1px;
    --scale: 0.0004963;
    :global(svg) {
      position: absolute;
      width: 1px;
      height: 1px;
      
    }
  }
  
  .window-1, .window-2, .window-3, .window-4 {
    position: absolute;
    bottom: 0;
    width: 100%;
    aspect-ratio: 2015/1010;
    clip-path: var(--clip-url);
    display: none;
    &.show {
      display: block;
    }
    @media (prefers-reduced-motion: reduce) {
      display: none;
    }
    video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }
  }
  
  .window-1 {
    video {
      width: 6%;
      top: 42%;
      left: 45%;
    }
  }
  .window-2 {
    background-color: hotpink;
    video {
      width: 7%;
      top: 36%;
      left: 75%;
    }
  }
  .window-3 {
    background-color: hotpink;
    video {
      width: 5%;
      top: 50%;
      left: 43.5%;
    }
  }
  .window-4 {
    background-color: hotpink;
    video {
      width: 4%;
      top: 54%;
      left: 61%;
    }
  }
</style>