TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "displayPlaybackBar": true,
  "id": "MainViewerPanoramaPlayer",
  "buttonCardboardView": {
   "verticalAlign": "middle",
   "borderSize": 0,
   "paddingRight": 0,
   "mode": "push",
   "width": 70,
   "height": 70,
   "maxHeight": 70,
   "paddingTop": 0,
   "borderRadius": 0,
   "paddingLeft": 0,
   "iconURL": "skin/IconButton_212B6B7F_0DD5_FC29_41A7_5D8E8AB80CE4.png",
   "horizontalAlign": "center",
   "maxWidth": 70,
   "minWidth": 1,
   "class": "IconButton",
   "minHeight": 1,
   "cursor": "hand",
   "shadow": false,
   "backgroundOpacity": 0,
   "id": "IconButton_212B6B7F_0DD5_FC29_41A7_5D8E8AB80CE4",
   "data": {
    "name": "IconButton12329"
   },
   "paddingBottom": 0,
   "transparencyActive": false
  },
  "viewerArea": "this.MainViewer",
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration",
  "preloadEnabled": false,
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true
 },
 "this.MainViewerPanoramaPlayer",
 {
  "thumbnailUrl": "media/panorama_F5FB01F6_FE42_B785_41E5_09665D3B8D68_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_F5FB01F6_FE42_B785_41E5_09665D3B8D68_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_F5FB01F6_FE42_B785_41E5_09665D3B8D68_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F5FB01F6_FE42_B785_41E5_09665D3B8D68.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_F29942E7_FE42_D583_41EF_48A80F896558",
      "maps": [
       {
        "hfov": 13.73,
        "yaw": -25.88,
        "image": {
         "levels": [
          {
           "height": 104,
           "width": 116,
           "url": "media/panorama_F5FB01F6_FE42_B785_41E5_09665D3B8D68_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -6.38
       }
      ],
      "items": [
       {
        "yaw": -25.88,
        "hfov": 13.73,
        "image": {
         "levels": [
          {
           "height": 208,
           "width": 233,
           "url": "media/panorama_F5FB01F6_FE42_B785_41E5_09665D3B8D68_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -6.38
       }
      ],
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_F37CAA93_FE42_B583_41EC_89B68906A17C",
      "maps": [
       {
        "hfov": 13.21,
        "yaw": 18.16,
        "image": {
         "levels": [
          {
           "height": 96,
           "width": 113,
           "url": "media/panorama_F5FB01F6_FE42_B785_41E5_09665D3B8D68_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -11.19
       }
      ],
      "items": [
       {
        "yaw": 18.16,
        "hfov": 13.21,
        "image": {
         "levels": [
          {
           "height": 193,
           "width": 227,
           "url": "media/panorama_F5FB01F6_FE42_B785_41E5_09665D3B8D68_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -11.19
       }
      ],
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_F4E56EA6_FE45_4D85_41E8_AA5AC389A545, this.camera_231A6E5E_0DCA_B46B_419A_48B8DB0B96AF); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_F0AB524D_FE45_5486_41D6_15AD0C372605",
      "maps": [
       {
        "hfov": 39.78,
        "yaw": -26.18,
        "image": {
         "levels": [
          {
           "height": 93,
           "width": 200,
           "url": "media/panorama_F5FB01F6_FE42_B785_41E5_09665D3B8D68_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -2.98
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": true,
      "items": [
       {
        "yaw": -26.18,
        "hfov": 39.78,
        "image": {
         "levels": [
          {
           "height": 315,
           "width": 672,
           "url": "media/panorama_F5FB01F6_FE42_B785_41E5_09665D3B8D68_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -2.98
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_F42A999F_FE46_D782_41EE_41EF573916FE, this.camera_23066E4B_0DCA_B469_41A8_388F0FF527D1); this.mainPlayList.set('selectedIndex', 18)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_EF025279_FE43_748F_41BC_F7328DA180CD",
      "maps": [
       {
        "hfov": 26.7,
        "yaw": 17.66,
        "image": {
         "levels": [
          {
           "height": 113,
           "width": 200,
           "url": "media/panorama_F5FB01F6_FE42_B785_41E5_09665D3B8D68_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -8.89
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": true,
      "items": [
       {
        "yaw": 17.66,
        "hfov": 26.7,
        "image": {
         "levels": [
          {
           "height": 259,
           "width": 456,
           "url": "media/panorama_F5FB01F6_FE42_B785_41E5_09665D3B8D68_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -8.89
       }
      ]
     },
     {
      "areas": [
       {
        "click": "this.openLink(\"https://www.google.co.id/maps/@-6.2714605,106.8343562,3a,75y,125.33h,92.6t/data=!3m6!1e1!3m4!1sR3UjCrfe8EVGwlnqV2Z-Yg!2e0!7i13312!8i6656\", \"_blank\")",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_EEDA734A_FE4D_B48D_41DC_E2E411463701",
      "maps": [
       {
        "hfov": 23.31,
        "yaw": 112.74,
        "image": {
         "levels": [
          {
           "height": 162,
           "width": 200,
           "url": "media/panorama_F5FB01F6_FE42_B785_41E5_09665D3B8D68_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 11.05
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 112.74,
        "hfov": 23.31,
        "image": {
         "levels": [
          {
           "height": 324,
           "width": 401,
           "url": "media/panorama_F5FB01F6_FE42_B785_41E5_09665D3B8D68_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 11.05
       }
      ]
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_2FB712EF_0D35_8C29_4183_5FB1A914A62E",
      "maps": [
       {
        "hfov": 51.63,
        "yaw": 57.1,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 23,
           "url": "media/panorama_F5FB01F6_FE42_B785_41E5_09665D3B8D68_0_HS_5_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -13.7
       }
      ],
      "items": [
       {
        "yaw": 57.1,
        "hfov": 51.63,
        "image": {
         "levels": [
          {
           "height": 617,
           "width": 897,
           "url": "media/panorama_F5FB01F6_FE42_B785_41E5_09665D3B8D68_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -13.7
       }
      ],
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay"
     }
    ]
   }
  ],
  "id": "panorama_F5FB01F6_FE42_B785_41E5_09665D3B8D68",
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "1-1",
  "vfov": 180,
  "class": "Panorama",
  "partial": false
 },
 {
  "id": "panorama_F5FB01F6_FE42_B785_41E5_09665D3B8D68_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "thumbnailUrl": "media/panorama_F4E56EA6_FE45_4D85_41E8_AA5AC389A545_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_F4E56EA6_FE45_4D85_41E8_AA5AC389A545_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_F4E56EA6_FE45_4D85_41E8_AA5AC389A545_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F4E56EA6_FE45_4D85_41E8_AA5AC389A545.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_ECAADAC9_FE45_558E_41CA_7027590B18C5",
      "maps": [
       {
        "hfov": 10.8,
        "yaw": 38.81,
        "image": {
         "levels": [
          {
           "height": 85,
           "width": 93,
           "url": "media/panorama_F4E56EA6_FE45_4D85_41E8_AA5AC389A545_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 12.34
       }
      ],
      "items": [
       {
        "yaw": 38.81,
        "hfov": 10.8,
        "image": {
         "levels": [
          {
           "height": 170,
           "width": 186,
           "url": "media/panorama_F4E56EA6_FE45_4D85_41E8_AA5AC389A545_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 12.34
       }
      ],
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.openLink(\"https://www.google.co.id/maps/@-6.2714605,106.8343562,3a,75y,125.33h,92.6t/data=!3m6!1e1!3m4!1sR3UjCrfe8EVGwlnqV2Z-Yg!2e0!7i13312!8i6656\", \"_blank\")",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_ED643F3F_FE45_CC83_41EE_88BB86944073",
      "maps": [
       {
        "hfov": 21.42,
        "yaw": 131.51,
        "image": {
         "levels": [
          {
           "height": 171,
           "width": 195,
           "url": "media/panorama_F4E56EA6_FE45_4D85_41E8_AA5AC389A545_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 22.04
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 131.51,
        "hfov": 21.42,
        "image": {
         "levels": [
          {
           "height": 343,
           "width": 390,
           "url": "media/panorama_F4E56EA6_FE45_4D85_41E8_AA5AC389A545_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 22.04
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_F5FB01F6_FE42_B785_41E5_09665D3B8D68, this.camera_23C23F3A_0DCA_B42B_4192_853719EB2664); this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_ED54A4F3_FE45_5D82_41ED_74FCDCF7558A",
      "maps": [
       {
        "hfov": 10.29,
        "yaw": 178.37,
        "image": {
         "levels": [
          {
           "height": 78,
           "width": 86,
           "url": "media/panorama_F4E56EA6_FE45_4D85_41E8_AA5AC389A545_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -2.33
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 178.37,
        "hfov": 10.29,
        "image": {
         "levels": [
          {
           "height": 157,
           "width": 173,
           "url": "media/panorama_F4E56EA6_FE45_4D85_41E8_AA5AC389A545_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -2.33
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_F4C1F983_FE45_7783_41EE_FAACB82CD48D, this.camera_23CBCF06_0DCA_B5DB_4196_A5C782D35EF0); this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_ED080303_FE42_F483_41D4_1FFD9F9E0AD5",
      "maps": [
       {
        "hfov": 34.78,
        "yaw": 38.76,
        "image": {
         "levels": [
          {
           "height": 94,
           "width": 200,
           "url": "media/panorama_F4E56EA6_FE45_4D85_41E8_AA5AC389A545_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 15.36
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": true,
      "items": [
       {
        "yaw": 38.76,
        "hfov": 34.78,
        "image": {
         "levels": [
          {
           "height": 289,
           "width": 609,
           "url": "media/panorama_F4E56EA6_FE45_4D85_41E8_AA5AC389A545_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 15.36
       }
      ]
     }
    ]
   }
  ],
  "id": "panorama_F4E56EA6_FE45_4D85_41E8_AA5AC389A545",
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "2-2",
  "vfov": 180,
  "class": "Panorama",
  "partial": false
 },
 {
  "id": "panorama_F4E56EA6_FE45_4D85_41E8_AA5AC389A545_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "thumbnailUrl": "media/panorama_F4C1F983_FE45_7783_41EE_FAACB82CD48D_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_F4C1F983_FE45_7783_41EE_FAACB82CD48D_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_F4C1F983_FE45_7783_41EE_FAACB82CD48D_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F4C1F983_FE45_7783_41EE_FAACB82CD48D.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_F4E56EA6_FE45_4D85_41E8_AA5AC389A545, this.camera_2264C063_0DCA_8C59_4194_8E09410D9759); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_EAFD45E5_FE5E_DF86_41B1_7805C49CBFE0",
      "maps": [
       {
        "hfov": 9.79,
        "yaw": 108.15,
        "image": {
         "levels": [
          {
           "height": 102,
           "width": 97,
           "url": "media/panorama_F4C1F983_FE45_7783_41EE_FAACB82CD48D_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -32.13
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 108.15,
        "hfov": 9.79,
        "image": {
         "levels": [
          {
           "height": 204,
           "width": 195,
           "url": "media/panorama_F4C1F983_FE45_7783_41EE_FAACB82CD48D_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -32.13
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_EB1EA0B9_FE5F_D58F_41E8_96E74DED0EAD",
      "maps": [
       {
        "hfov": 9.14,
        "yaw": 83.15,
        "image": {
         "levels": [
          {
           "height": 79,
           "width": 78,
           "url": "media/panorama_F4C1F983_FE45_7783_41EE_FAACB82CD48D_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -10.39
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 83.15,
        "hfov": 9.14,
        "image": {
         "levels": [
          {
           "height": 158,
           "width": 156,
           "url": "media/panorama_F4C1F983_FE45_7783_41EE_FAACB82CD48D_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -10.39
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_F5FB01F6_FE42_B785_41E5_09665D3B8D68, this.camera_23991022_0DCA_8BDB_4197_A5F3F0B09DEF); this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_EBBF9B89_FE5D_4B8E_41EB_E235941C04B6",
      "maps": [
       {
        "hfov": 29.5,
        "yaw": 83.1,
        "image": {
         "levels": [
          {
           "height": 105,
           "width": 200,
           "url": "media/panorama_F4C1F983_FE45_7783_41EE_FAACB82CD48D_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -8.01
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": true,
      "items": [
       {
        "yaw": 83.1,
        "hfov": 29.5,
        "image": {
         "levels": [
          {
           "height": 264,
           "width": 503,
           "url": "media/panorama_F4C1F983_FE45_7783_41EE_FAACB82CD48D_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -8.01
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.media_EBBCE794_FE45_BB85_41EC_536CAABE8C56, this.camera_E823DF94_FE47_4B85_41D7_6B143FF896D7); this.setMediaBehaviour(this.playList_23395E0D_0DCA_B7E9_419A_D6CC2DA9F55D, 0, this.panorama_F4C1F983_FE45_7783_41EE_FAACB82CD48D); this.MainViewerPanoramaPlayer.play()",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_EBC16639_FE43_5C8F_41E4_D962EFDD541E",
      "maps": [
       {
        "hfov": 36.98,
        "yaw": -2.13,
        "image": {
         "levels": [
          {
           "height": 199,
           "width": 124,
           "url": "media/panorama_F4C1F983_FE45_7783_41EE_FAACB82CD48D_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -21.31
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -2.13,
        "hfov": 36.98,
        "image": {
         "levels": [
          {
           "height": 1078,
           "width": 670,
           "url": "media/panorama_F4C1F983_FE45_7783_41EE_FAACB82CD48D_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -21.31
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.media_EBBCE794_FE45_BB85_41EC_536CAABE8C56, this.camera_226A303F_0DCA_8C29_41A5_C2F652A0DAF2); this.setMediaBehaviour(this.playList_23395E0D_0DCA_B7E9_419A_D6CC2DA9F55D, 0, this.panorama_F4C1F983_FE45_7783_41EE_FAACB82CD48D); this.MainViewerPanoramaPlayer.play()",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_E872D292_FE42_B59D_41DB_EB14588EE4BA",
      "maps": [
       {
        "hfov": 31.27,
        "yaw": -17.01,
        "image": {
         "levels": [
          {
           "height": 157,
           "width": 200,
           "url": "media/panorama_F4C1F983_FE45_7783_41EE_FAACB82CD48D_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 7.53
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -17.01,
        "hfov": 31.27,
        "image": {
         "levels": [
          {
           "height": 418,
           "width": 532,
           "url": "media/panorama_F4C1F983_FE45_7783_41EE_FAACB82CD48D_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 7.53
       }
      ]
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_E838FE2D_FE4D_CC87_41DA_84EB45764258",
      "maps": [
       {
        "hfov": 11.05,
        "yaw": -60.92,
        "image": {
         "levels": [
          {
           "height": 96,
           "width": 93,
           "url": "media/panorama_F4C1F983_FE45_7783_41EE_FAACB82CD48D_0_HS_5_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 1.16
       }
      ],
      "items": [
       {
        "yaw": -60.92,
        "hfov": 11.05,
        "image": {
         "levels": [
          {
           "height": 192,
           "width": 186,
           "url": "media/panorama_F4C1F983_FE45_7783_41EE_FAACB82CD48D_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 1.16
       }
      ],
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_F43C5432_FE45_5C9D_41E6_2337D3DD5F6A, this.camera_238F8000_0DCA_8BD7_41A2_B0DC54B66C00); this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_E8118393_FE4D_7B83_41CA_64000ED055BC",
      "maps": [
       {
        "hfov": 34.73,
        "yaw": -60.85,
        "image": {
         "levels": [
          {
           "height": 105,
           "width": 200,
           "url": "media/panorama_F4C1F983_FE45_7783_41EE_FAACB82CD48D_0_HS_6_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 3.93
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": true,
      "items": [
       {
        "yaw": -60.85,
        "hfov": 34.73,
        "image": {
         "levels": [
          {
           "height": 310,
           "width": 587,
           "url": "media/panorama_F4C1F983_FE45_7783_41EE_FAACB82CD48D_0_HS_6_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 3.93
       }
      ]
     },
     {
      "areas": [
       {
        "click": "this.openLink(\"https://www.google.co.id/maps/@-6.2714605,106.8343562,3a,75y,125.33h,92.6t/data=!3m6!1e1!3m4!1sR3UjCrfe8EVGwlnqV2Z-Yg!2e0!7i13312!8i6656\", \"_blank\")",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_E8181C08_FE4F_CC8D_41EC_B2A664936CB1",
      "maps": [
       {
        "hfov": 24.04,
        "yaw": 43.41,
        "image": {
         "levels": [
          {
           "height": 171,
           "width": 200,
           "url": "media/panorama_F4C1F983_FE45_7783_41EE_FAACB82CD48D_0_HS_7_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 13.81
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 43.41,
        "hfov": 24.04,
        "image": {
         "levels": [
          {
           "height": 358,
           "width": 418,
           "url": "media/panorama_F4C1F983_FE45_7783_41EE_FAACB82CD48D_0_HS_7_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 13.81
       }
      ]
     }
    ]
   }
  ],
  "id": "panorama_F4C1F983_FE45_7783_41EE_FAACB82CD48D",
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "3-3",
  "vfov": 180,
  "class": "Panorama",
  "partial": false
 },
 {
  "id": "panorama_F4C1F983_FE45_7783_41EE_FAACB82CD48D_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "thumbnailUrl": "media/panorama_F43C5432_FE45_5C9D_41E6_2337D3DD5F6A_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_F43C5432_FE45_5C9D_41E6_2337D3DD5F6A_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_F43C5432_FE45_5C9D_41E6_2337D3DD5F6A_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F43C5432_FE45_5C9D_41E6_2337D3DD5F6A.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_E90D2A7B_FE4D_7483_41B0_28B72BC0F844",
      "maps": [
       {
        "hfov": 18.43,
        "yaw": 159.1,
        "image": {
         "levels": [
          {
           "height": 190,
           "width": 156,
           "url": "media/panorama_F43C5432_FE45_5C9D_41E6_2337D3DD5F6A_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -4.41
       }
      ],
      "items": [
       {
        "yaw": 159.1,
        "hfov": 18.43,
        "image": {
         "levels": [
          {
           "height": 380,
           "width": 312,
           "url": "media/panorama_F43C5432_FE45_5C9D_41E6_2337D3DD5F6A_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -4.41
       }
      ],
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_F4C1F983_FE45_7783_41EE_FAACB82CD48D, this.camera_220BE12D_0DCA_8C29_41A3_A5B64D9C354C); this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_E6FDBDAF_FE45_4F83_41E2_ED1B73CC6F87",
      "maps": [
       {
        "hfov": 48.74,
        "yaw": 158.65,
        "image": {
         "levels": [
          {
           "height": 118,
           "width": 200,
           "url": "media/panorama_F43C5432_FE45_5C9D_41E6_2337D3DD5F6A_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 0.16
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": true,
      "items": [
       {
        "yaw": 158.65,
        "hfov": 48.74,
        "image": {
         "levels": [
          {
           "height": 488,
           "width": 823,
           "url": "media/panorama_F43C5432_FE45_5C9D_41E6_2337D3DD5F6A_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 0.16
       }
      ]
     },
     {
      "areas": [
       {
        "click": "this.setComponentVisibility(this.Container_1E6CC0D0_0CDD_8C77_4198_D491EAA50E6C, true, 0, null, null, false); this.setComponentVisibility(this.Container_1EF518DF_0CDF_BC69_4191_6CB778BDDE83, true, 0, null, null, false); this.setComponentVisibility(this.Container_1ECDEB78_0CCA_9C37_4199_B1D19C49885E, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_1EA43467_0CCE_9459_41A3_894C06C6BED8, true, 0, null, null, false); this.setComponentVisibility(this.Container_1F68764B_0D35_F469_419C_027D6BCC5D35, true, 0, null, null, false); this.setComponentVisibility(this.Container_1F5F05A6_0D35_B4DB_419B_F8D2FA8C69B2, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_1F3A9B80_0D3D_9CD7_418C_55D8338D5428, true, 0, null, null, false); this.setComponentVisibility(this.Container_1F67B7AE_0D3A_742B_41A6_C30EE97F16A1, true, 0, null, null, false); this.setComponentVisibility(this.Image_1F163DEA_0D3D_942B_416A_F7C81FC5A406, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_1C9F4F50_0D3A_B477_4161_8B3FE6A39E04, true, 0, null, null, false)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_E6DA3CF5_FEC7_4D87_41C1_A41384FD6592",
      "maps": [
       {
        "hfov": 85.01,
        "yaw": 81.27,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 200,
           "url": "media/panorama_F43C5432_FE45_5C9D_41E6_2337D3DD5F6A_0_HS_2_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -41.39
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Polygon"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": true,
      "items": [
       {
        "yaw": 81.27,
        "hfov": 85.01,
        "roll": 0,
        "image": {
         "levels": [
          {
           "height": 1174,
           "width": 1773,
           "url": "media/panorama_F43C5432_FE45_5C9D_41E6_2337D3DD5F6A_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -41.39
       }
      ]
     },
     {
      "areas": [
       {
        "click": "this.setComponentVisibility(this.Container_1E6CC0D0_0CDD_8C77_4198_D491EAA50E6C, true, 0, null, null, false); this.setComponentVisibility(this.Container_1EF518DF_0CDF_BC69_4191_6CB778BDDE83, true, 0, null, null, false); this.setComponentVisibility(this.Container_1ECDEB78_0CCA_9C37_4199_B1D19C49885E, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_1EA43467_0CCE_9459_41A3_894C06C6BED8, true, 0, null, null, false); this.setComponentVisibility(this.Container_1F68764B_0D35_F469_419C_027D6BCC5D35, true, 0, null, null, false); this.setComponentVisibility(this.Container_1F5F05A6_0D35_B4DB_419B_F8D2FA8C69B2, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_1F3A9B80_0D3D_9CD7_418C_55D8338D5428, true, 0, null, null, false); this.setComponentVisibility(this.Container_1F67B7AE_0D3A_742B_41A6_C30EE97F16A1, true, 0, null, null, false); this.setComponentVisibility(this.Image_1F163DEA_0D3D_942B_416A_F7C81FC5A406, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_1C9F4F50_0D3A_B477_4161_8B3FE6A39E04, true, 0, null, null, false)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_E617CB44_FECD_B485_41EE_8657466E262C",
      "maps": [
       {
        "hfov": 33.11,
        "yaw": 51.14,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 37,
           "url": "media/panorama_F43C5432_FE45_5C9D_41E6_2337D3DD5F6A_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -14.45
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 51.14,
        "hfov": 33.11,
        "image": {
         "levels": [
          {
           "height": 243,
           "width": 577,
           "url": "media/panorama_F43C5432_FE45_5C9D_41E6_2337D3DD5F6A_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -14.45
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_F42B4F15_FE45_4C87_41E6_311816BE6F5C, this.camera_22057150_0DCA_8C77_4185_A8F0AE60D16A); this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_1B5E7744_0D57_F45F_4198_C4770EE5F66D",
      "maps": [
       {
        "hfov": 32.68,
        "yaw": -13.12,
        "image": {
         "levels": [
          {
           "height": 161,
           "width": 200,
           "url": "media/panorama_F43C5432_FE45_5C9D_41E6_2337D3DD5F6A_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 4.89
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -13.12,
        "hfov": 32.68,
        "image": {
         "levels": [
          {
           "height": 447,
           "width": 553,
           "url": "media/panorama_F43C5432_FE45_5C9D_41E6_2337D3DD5F6A_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 4.89
       }
      ]
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_1AD8A9BB_0D56_BC29_4196_EA0982436FE5",
      "maps": [
       {
        "hfov": 43.73,
        "yaw": -124.16,
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 200,
           "url": "media/panorama_F43C5432_FE45_5C9D_41E6_2337D3DD5F6A_0_HS_5_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -22.62
       }
      ],
      "items": [
       {
        "yaw": -124.16,
        "hfov": 43.73,
        "image": {
         "levels": [
          {
           "height": 800,
           "width": 800,
           "url": "media/panorama_F43C5432_FE45_5C9D_41E6_2337D3DD5F6A_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -22.62
       }
      ],
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay"
     }
    ]
   }
  ],
  "id": "panorama_F43C5432_FE45_5C9D_41E6_2337D3DD5F6A",
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "4-4",
  "vfov": 180,
  "class": "Panorama",
  "partial": false
 },
 {
  "id": "panorama_F43C5432_FE45_5C9D_41E6_2337D3DD5F6A_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "thumbnailUrl": "media/panorama_F42B4F15_FE45_4C87_41E6_311816BE6F5C_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_F42B4F15_FE45_4C87_41E6_311816BE6F5C_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_F42B4F15_FE45_4C87_41E6_311816BE6F5C_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F42B4F15_FE45_4C87_41E6_311816BE6F5C.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.setMediaBehaviour(this.playList_233E4E0F_0DCA_B7E9_41A6_7AB82BDD9C1E, 0, this.panorama_F42B4F15_FE45_4C87_41E6_311816BE6F5C); this.MainViewerPanoramaPlayer.play()",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_1B4AFB59_0D55_FC68_418B_A4DCEE04FFC1",
      "maps": [
       {
        "hfov": 34.64,
        "yaw": -2.01,
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 128,
           "url": "media/panorama_F42B4F15_FE45_4C87_41E6_311816BE6F5C_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -22.22
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -2.01,
        "hfov": 34.64,
        "image": {
         "levels": [
          {
           "height": 981,
           "width": 632,
           "url": "media/panorama_F42B4F15_FE45_4C87_41E6_311816BE6F5C_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -22.22
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.media_18A160E6_0D5A_8C5B_417C_8C0CC71E887E, this.camera_23A95F9C_0DCA_B4EF_4198_33A5C91FB75C); this.setMediaBehaviour(this.playList_233E4E0F_0DCA_B7E9_41A6_7AB82BDD9C1E, 0, this.panorama_F42B4F15_FE45_4C87_41E6_311816BE6F5C); this.MainViewerPanoramaPlayer.play()",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_1B58F54E_0D5A_746B_41A0_9C2F5BB3654D",
      "maps": [
       {
        "hfov": 18.48,
        "yaw": -14.25,
        "image": {
         "levels": [
          {
           "height": 147,
           "width": 156,
           "url": "media/panorama_F42B4F15_FE45_4C87_41E6_311816BE6F5C_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -0.63
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": true,
      "items": [
       {
        "yaw": -14.25,
        "hfov": 18.48,
        "image": {
         "levels": [
          {
           "height": 295,
           "width": 312,
           "url": "media/panorama_F42B4F15_FE45_4C87_41E6_311816BE6F5C_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -0.63
       }
      ]
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_1B651FCA_0D5E_746B_418A_7DE1E737182A",
      "maps": [
       {
        "hfov": 43.12,
        "yaw": -135.97,
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 200,
           "url": "media/panorama_F42B4F15_FE45_4C87_41E6_311816BE6F5C_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -13.57
       }
      ],
      "items": [
       {
        "yaw": -135.97,
        "hfov": 43.12,
        "image": {
         "levels": [
          {
           "height": 749,
           "width": 749,
           "url": "media/panorama_F42B4F15_FE45_4C87_41E6_311816BE6F5C_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -13.57
       }
      ],
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_1A0B4150_0D5E_8C77_4176_694F27EE038E",
      "maps": [
       {
        "hfov": 48.69,
        "yaw": 150.86,
        "image": {
         "levels": [
          {
           "height": 176,
           "width": 200,
           "url": "media/panorama_F42B4F15_FE45_4C87_41E6_311816BE6F5C_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -21.29
       }
      ],
      "items": [
       {
        "yaw": 150.86,
        "hfov": 48.69,
        "image": {
         "levels": [
          {
           "height": 780,
           "width": 882,
           "url": "media/panorama_F42B4F15_FE45_4C87_41E6_311816BE6F5C_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -21.29
       }
      ],
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 15)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_1A7C365D_0D5F_9469_4181_2D474DDB8EEF",
      "maps": [
       {
        "hfov": 9.54,
        "yaw": 24.75,
        "image": {
         "levels": [
          {
           "height": 96,
           "width": 80,
           "url": "media/panorama_F42B4F15_FE45_4C87_41E6_311816BE6F5C_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -2.36
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 24.75,
        "hfov": 9.54,
        "image": {
         "levels": [
          {
           "height": 192,
           "width": 161,
           "url": "media/panorama_F42B4F15_FE45_4C87_41E6_311816BE6F5C_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -2.36
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_1A91DBAC_0D5E_9C2F_419C_3530EC6F3226",
      "maps": [
       {
        "hfov": 7.53,
        "yaw": -29.77,
        "image": {
         "levels": [
          {
           "height": 64,
           "width": 63,
           "url": "media/panorama_F42B4F15_FE45_4C87_41E6_311816BE6F5C_0_HS_5_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 1.29
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -29.77,
        "hfov": 7.53,
        "image": {
         "levels": [
          {
           "height": 128,
           "width": 127,
           "url": "media/panorama_F42B4F15_FE45_4C87_41E6_311816BE6F5C_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 1.29
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_F43C5432_FE45_5C9D_41E6_2337D3DD5F6A, this.camera_23D03F7B_0DCA_B429_41A3_E696D19B84D1); this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_1A926F62_0D5B_945B_419C_7094FDFFEB1A",
      "maps": [
       {
        "hfov": 31.44,
        "yaw": 101.81,
        "image": {
         "levels": [
          {
           "height": 167,
           "width": 200,
           "url": "media/panorama_F42B4F15_FE45_4C87_41E6_311816BE6F5C_0_HS_6_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 4.64
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 101.81,
        "hfov": 31.44,
        "image": {
         "levels": [
          {
           "height": 447,
           "width": 532,
           "url": "media/panorama_F42B4F15_FE45_4C87_41E6_311816BE6F5C_0_HS_6_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 4.64
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_F42FC9E2_FE45_5782_41CE_DFF2D9DC3A07, this.camera_23DA1F5D_0DCA_B469_4190_02467AEA06CF); this.mainPlayList.set('selectedIndex', 15)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_1AC56532_0D4A_B43B_417C_29CBC733EAEA",
      "maps": [
       {
        "hfov": 31.19,
        "yaw": 24.51,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 22,
           "url": "media/panorama_F42B4F15_FE45_4C87_41E6_311816BE6F5C_0_HS_7_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 0.87
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": true,
      "items": [
       {
        "yaw": 24.51,
        "hfov": 31.19,
        "image": {
         "levels": [
          {
           "height": 379,
           "width": 526,
           "url": "media/panorama_F42B4F15_FE45_4C87_41E6_311816BE6F5C_0_HS_7_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 0.87
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_F424BA21_FE45_B4BF_41E2_DF55EBCF5D82, this.camera_23A64FBE_0DCA_B42B_4191_059A29280595); this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_1544F61A_0D4A_97EB_41A1_972FEAAF4DEA",
      "maps": [
       {
        "hfov": 22.12,
        "yaw": -29.75,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_F42B4F15_FE45_4C87_41E6_311816BE6F5C_0_HS_8_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 3.13
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": true,
      "items": [
       {
        "yaw": -29.75,
        "hfov": 22.12,
        "image": {
         "levels": [
          {
           "height": 371,
           "width": 374,
           "url": "media/panorama_F42B4F15_FE45_4C87_41E6_311816BE6F5C_0_HS_8_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 3.13
       }
      ]
     }
    ]
   }
  ],
  "id": "panorama_F42B4F15_FE45_4C87_41E6_311816BE6F5C",
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "5-5",
  "vfov": 180,
  "class": "Panorama",
  "partial": false
 },
 {
  "id": "panorama_F42B4F15_FE45_4C87_41E6_311816BE6F5C_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "thumbnailUrl": "media/panorama_F424BA21_FE45_B4BF_41E2_DF55EBCF5D82_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_F424BA21_FE45_B4BF_41E2_DF55EBCF5D82_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_F424BA21_FE45_B4BF_41E2_DF55EBCF5D82_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F424BA21_FE45_B4BF_41E2_DF55EBCF5D82.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_F42B4F15_FE45_4C87_41E6_311816BE6F5C, this.camera_3DE443F6_0DCA_8C3B_41A5_EEC9CA9D37CC); this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_17839B29_0D4E_BC29_4197_CBC4CB84FE05",
      "maps": [
       {
        "hfov": 26.68,
        "yaw": 88.62,
        "image": {
         "levels": [
          {
           "height": 169,
           "width": 200,
           "url": "media/panorama_F424BA21_FE45_B4BF_41E2_DF55EBCF5D82_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -4.78
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 88.62,
        "hfov": 26.68,
        "image": {
         "levels": [
          {
           "height": 384,
           "width": 452,
           "url": "media/panorama_F424BA21_FE45_B4BF_41E2_DF55EBCF5D82_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -4.78
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_F426E5C9_FE45_DF8E_41CE_98C97F4B6443, this.camera_3D1583D2_0DCA_8C7B_41A5_59442D063B18); this.mainPlayList.set('selectedIndex', 6)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_1778AA89_0D4D_BCE9_419A_449FF5AD6AFC",
      "maps": [
       {
        "hfov": 9.5,
        "yaw": 25.62,
        "image": {
         "levels": [
          {
           "height": 76,
           "width": 91,
           "url": "media/panorama_F424BA21_FE45_B4BF_41E2_DF55EBCF5D82_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 28.42
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 25.62,
        "hfov": 9.5,
        "image": {
         "levels": [
          {
           "height": 153,
           "width": 182,
           "url": "media/panorama_F424BA21_FE45_B4BF_41E2_DF55EBCF5D82_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 28.42
       }
      ]
     }
    ]
   }
  ],
  "id": "panorama_F424BA21_FE45_B4BF_41E2_DF55EBCF5D82",
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "6-6",
  "vfov": 180,
  "class": "Panorama",
  "partial": false
 },
 {
  "id": "panorama_F424BA21_FE45_B4BF_41E2_DF55EBCF5D82_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "thumbnailUrl": "media/panorama_F426E5C9_FE45_DF8E_41CE_98C97F4B6443_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_F426E5C9_FE45_DF8E_41CE_98C97F4B6443_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_F426E5C9_FE45_DF8E_41CE_98C97F4B6443_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F426E5C9_FE45_DF8E_41CE_98C97F4B6443.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.media_16263ECE_0D4A_B46B_418B_72DF63983A62, this.camera_23199E6F_0DCA_B429_41A8_181E20742485); this.setMediaBehaviour(this.playList_233F4E12_0DCA_B7FB_41A7_069AA5DE35E0, 0, this.panorama_F426E5C9_FE45_DF8E_41CE_98C97F4B6443); this.MainViewerPanoramaPlayer.play()",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_17E99824_0D4B_9BDF_417C_4A73221B29CE",
      "maps": [
       {
        "hfov": 14.97,
        "yaw": 6.4,
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 94,
           "url": "media/panorama_F426E5C9_FE45_DF8E_41CE_98C97F4B6443_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -6.39
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 6.4,
        "hfov": 14.97,
        "image": {
         "levels": [
          {
           "height": 540,
           "width": 254,
           "url": "media/panorama_F426E5C9_FE45_DF8E_41CE_98C97F4B6443_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -6.39
       }
      ]
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_14C2865F_0D7A_9469_419F_3497F35AFF9A",
      "maps": [
       {
        "hfov": 51.89,
        "yaw": 50.44,
        "image": {
         "levels": [
          {
           "height": 192,
           "width": 200,
           "url": "media/panorama_F426E5C9_FE45_DF8E_41CE_98C97F4B6443_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -30.03
       }
      ],
      "items": [
       {
        "yaw": 50.44,
        "hfov": 51.89,
        "image": {
         "levels": [
          {
           "height": 973,
           "width": 1012,
           "url": "media/panorama_F426E5C9_FE45_DF8E_41CE_98C97F4B6443_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -30.03
       }
      ],
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 12)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_17F3AE82_0D7E_F4DB_419D_C293762AE4CC",
      "maps": [
       {
        "hfov": 25.07,
        "yaw": -11.74,
        "image": {
         "levels": [
          {
           "height": 165,
           "width": 200,
           "url": "media/panorama_F426E5C9_FE45_DF8E_41CE_98C97F4B6443_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 33.41
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -11.74,
        "hfov": 25.07,
        "image": {
         "levels": [
          {
           "height": 418,
           "width": 507,
           "url": "media/panorama_F426E5C9_FE45_DF8E_41CE_98C97F4B6443_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 33.41
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_F43A8A25_FE45_5486_41E9_ACF56C894EFE, this.camera_23129E81_0DCA_B4D9_41AA_7BFA74F79976); this.mainPlayList.set('selectedIndex', 12)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_17F88CCE_0D7E_946B_41A2_06374CC0F2D0",
      "maps": [
       {
        "hfov": 22.77,
        "yaw": 24.69,
        "image": {
         "levels": [
          {
           "height": 155,
           "width": 200,
           "url": "media/panorama_F426E5C9_FE45_DF8E_41CE_98C97F4B6443_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 35.67
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 24.69,
        "hfov": 22.77,
        "image": {
         "levels": [
          {
           "height": 367,
           "width": 473,
           "url": "media/panorama_F426E5C9_FE45_DF8E_41CE_98C97F4B6443_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 35.67
       }
      ]
     }
    ]
   }
  ],
  "id": "panorama_F426E5C9_FE45_DF8E_41CE_98C97F4B6443",
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "7-7",
  "vfov": 180,
  "class": "Panorama",
  "partial": false
 },
 {
  "id": "panorama_F426E5C9_FE45_DF8E_41CE_98C97F4B6443_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "thumbnailUrl": "media/panorama_F41AE162_FE45_F4BD_41E0_F243159C6C64_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_F41AE162_FE45_F4BD_41E0_F243159C6C64_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_F41AE162_FE45_F4BD_41E0_F243159C6C64_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F41AE162_FE45_F4BD_41E0_F243159C6C64.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_176F3A54_0D7A_7C7F_4159_C5A630B47664",
      "maps": [
       {
        "hfov": 48.85,
        "yaw": 59.61,
        "image": {
         "levels": [
          {
           "height": 195,
           "width": 200,
           "url": "media/panorama_F41AE162_FE45_F4BD_41E0_F243159C6C64_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -31.28
       }
      ],
      "items": [
       {
        "yaw": 59.61,
        "hfov": 48.85,
        "image": {
         "levels": [
          {
           "height": 940,
           "width": 965,
           "url": "media/panorama_F41AE162_FE45_F4BD_41E0_F243159C6C64_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -31.28
       }
      ],
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_17F7B8E4_0D7B_9C5F_4178_7B83F0151D83",
      "maps": [
       {
        "hfov": 12.63,
        "yaw": 10.5,
        "image": {
         "levels": [
          {
           "height": 94,
           "width": 107,
           "url": "media/panorama_F41AE162_FE45_F4BD_41E0_F243159C6C64_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -6.54
       }
      ],
      "items": [
       {
        "yaw": 10.5,
        "hfov": 12.63,
        "image": {
         "levels": [
          {
           "height": 189,
           "width": 214,
           "url": "media/panorama_F41AE162_FE45_F4BD_41E0_F243159C6C64_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -6.54
       }
      ],
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_F4274F58_FE45_4C8D_41A0_DB732DC48DD3, this.camera_3D6622C3_0DCA_8C59_41A0_7A170E7E1F4C); this.mainPlayList.set('selectedIndex', 11)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_1761579C_0D76_74EF_419D_FBD75D09E0F0",
      "maps": [
       {
        "hfov": 53.54,
        "yaw": 10.32,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 36,
           "url": "media/panorama_F41AE162_FE45_F4BD_41E0_F243159C6C64_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -1.39
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": true,
      "items": [
       {
        "yaw": 10.32,
        "hfov": 53.54,
        "image": {
         "levels": [
          {
           "height": 396,
           "width": 904,
           "url": "media/panorama_F41AE162_FE45_F4BD_41E0_F243159C6C64_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -1.39
       }
      ]
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_1743C747_0D76_9459_41A5_2DBB30469739",
      "maps": [
       {
        "hfov": 8.79,
        "yaw": -116.82,
        "image": {
         "levels": [
          {
           "height": 68,
           "width": 74,
           "url": "media/panorama_F41AE162_FE45_F4BD_41E0_F243159C6C64_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -1.48
       }
      ],
      "items": [
       {
        "yaw": -116.82,
        "hfov": 8.79,
        "image": {
         "levels": [
          {
           "height": 136,
           "width": 148,
           "url": "media/panorama_F41AE162_FE45_F4BD_41E0_F243159C6C64_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -1.48
       }
      ],
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_F422BD0B_FE45_CC83_41DC_38BC3F40C39E, this.camera_3D70C2E6_0DCA_8C5B_41AA_5D8497EF0348); this.mainPlayList.set('selectedIndex', 8)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_14F9380B_0D75_BBE9_41A9_5DF077E1D600",
      "maps": [
       {
        "hfov": 34.41,
        "yaw": -117.05,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 28,
           "url": "media/panorama_F41AE162_FE45_F4BD_41E0_F243159C6C64_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 3.01
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": true,
      "items": [
       {
        "yaw": -117.05,
        "hfov": 34.41,
        "image": {
         "levels": [
          {
           "height": 324,
           "width": 581,
           "url": "media/panorama_F41AE162_FE45_F4BD_41E0_F243159C6C64_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 3.01
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.media_16263ECE_0D4A_B46B_418B_72DF63983A62, this.camera_2297D2A0_0DCA_8CD7_4185_F76A19625E7C); this.setMediaBehaviour(this.playList_233F4E12_0DCA_B7FB_41A7_069AA5DE35E0, 0, this.panorama_F41AE162_FE45_F4BD_41E0_F243159C6C64); this.MainViewerPanoramaPlayer.play()",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_160C55D2_0D4B_947B_419E_C44C32BFFB6E",
      "maps": [
       {
        "hfov": 11.7,
        "yaw": 166.26,
        "image": {
         "levels": [
          {
           "height": 111,
           "width": 98,
           "url": "media/panorama_F41AE162_FE45_F4BD_41E0_F243159C6C64_0_HS_5_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -0.51
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 166.26,
        "hfov": 11.7,
        "image": {
         "levels": [
          {
           "height": 223,
           "width": 197,
           "url": "media/panorama_F41AE162_FE45_F4BD_41E0_F243159C6C64_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -0.51
       }
      ]
     }
    ]
   }
  ],
  "id": "panorama_F41AE162_FE45_F4BD_41E0_F243159C6C64",
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "8-8",
  "vfov": 180,
  "class": "Panorama",
  "partial": false
 },
 {
  "id": "panorama_F41AE162_FE45_F4BD_41E0_F243159C6C64_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "thumbnailUrl": "media/panorama_F422BD0B_FE45_CC83_41DC_38BC3F40C39E_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_F422BD0B_FE45_CC83_41DC_38BC3F40C39E_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_F422BD0B_FE45_CC83_41DC_38BC3F40C39E_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F422BD0B_FE45_CC83_41DC_38BC3F40C39E.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_F41AE162_FE45_F4BD_41E0_F243159C6C64, this.camera_2276E084_0DCA_8CD8_4177_2D06F165BD66); this.mainPlayList.set('selectedIndex', 7)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_11355189_0D4D_8CE9_41A6_B12D56F1FE72",
      "maps": [
       {
        "hfov": 12.8,
        "yaw": 163.04,
        "image": {
         "levels": [
          {
           "height": 89,
           "width": 108,
           "url": "media/panorama_F422BD0B_FE45_CC83_41DC_38BC3F40C39E_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -2.48
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 163.04,
        "hfov": 12.8,
        "image": {
         "levels": [
          {
           "height": 179,
           "width": 216,
           "url": "media/panorama_F422BD0B_FE45_CC83_41DC_38BC3F40C39E_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -2.48
       }
      ]
     }
    ]
   }
  ],
  "id": "panorama_F422BD0B_FE45_CC83_41DC_38BC3F40C39E",
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "9-9",
  "vfov": 180,
  "class": "Panorama",
  "partial": false
 },
 {
  "id": "panorama_F422BD0B_FE45_CC83_41DC_38BC3F40C39E_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "thumbnailUrl": "media/panorama_F4221894_FE45_D585_41D3_322EDDA8E7E1_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_F4221894_FE45_D585_41D3_322EDDA8E7E1_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_F4221894_FE45_D585_41D3_322EDDA8E7E1_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F4221894_FE45_D585_41D3_322EDDA8E7E1.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_16E23267_0D4E_8C59_41A6_0120ED9A42F1",
      "maps": [
       {
        "hfov": 12.3,
        "yaw": -4.7,
        "image": {
         "levels": [
          {
           "height": 88,
           "width": 105,
           "url": "media/panorama_F4221894_FE45_D585_41D3_322EDDA8E7E1_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -9.18
       }
      ],
      "items": [
       {
        "yaw": -4.7,
        "hfov": 12.3,
        "image": {
         "levels": [
          {
           "height": 176,
           "width": 210,
           "url": "media/panorama_F4221894_FE45_D585_41D3_322EDDA8E7E1_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -9.18
       }
      ],
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_F4274F58_FE45_4C8D_41A0_DB732DC48DD3, this.camera_22F0E1B0_0DCA_8C37_41A0_C1D7C885D03C); this.mainPlayList.set('selectedIndex', 11)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_16E83171_0D4F_8C39_4173_AFF7D0067E43",
      "maps": [
       {
        "hfov": 34.83,
        "yaw": -5,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 29,
           "url": "media/panorama_F4221894_FE45_D585_41D3_322EDDA8E7E1_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -5.03
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": true,
      "items": [
       {
        "yaw": -5,
        "hfov": 34.83,
        "image": {
         "levels": [
          {
           "height": 316,
           "width": 590,
           "url": "media/panorama_F4221894_FE45_D585_41D3_322EDDA8E7E1_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -5.03
       }
      ]
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_16CC92CD_0D4E_8C69_4190_998D3AC66BAC",
      "maps": [
       {
        "hfov": 7.51,
        "yaw": 113.43,
        "image": {
         "levels": [
          {
           "height": 64,
           "width": 63,
           "url": "media/panorama_F4221894_FE45_D585_41D3_322EDDA8E7E1_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -4.74
       }
      ],
      "items": [
       {
        "yaw": 113.43,
        "hfov": 7.51,
        "image": {
         "levels": [
          {
           "height": 128,
           "width": 127,
           "url": "media/panorama_F4221894_FE45_D585_41D3_322EDDA8E7E1_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -4.74
       }
      ],
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_F42063FE_FE45_BB85_41E8_9C2FFD114A8B, this.camera_2216316E_0DCA_8C2B_418E_109F5DF83654); this.mainPlayList.set('selectedIndex', 10)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_16D9D79F_0D4E_94E9_41A3_84232865108B",
      "maps": [
       {
        "hfov": 27.13,
        "yaw": 113.18,
        "image": {
         "levels": [
          {
           "height": 15,
           "width": 17,
           "url": "media/panorama_F4221894_FE45_D585_41D3_322EDDA8E7E1_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -0.35
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": true,
      "items": [
       {
        "yaw": 113.18,
        "hfov": 27.13,
        "image": {
         "levels": [
          {
           "height": 412,
           "width": 458,
           "url": "media/panorama_F4221894_FE45_D585_41D3_322EDDA8E7E1_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -0.35
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.media_16263ECE_0D4A_B46B_418B_72DF63983A62, this.camera_22E0618E_0DCA_8CEB_41A5_BC09EF67F702); this.setMediaBehaviour(this.playList_233F4E12_0DCA_B7FB_41A7_069AA5DE35E0, 0, this.panorama_F4221894_FE45_D585_41D3_322EDDA8E7E1); this.MainViewerPanoramaPlayer.play()",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_11878EE6_0D4A_945B_414A_77D7BA15EB62",
      "maps": [
       {
        "hfov": 10.19,
        "yaw": -146.01,
        "image": {
         "levels": [
          {
           "height": 79,
           "width": 86,
           "url": "media/panorama_F4221894_FE45_D585_41D3_322EDDA8E7E1_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -1.14
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -146.01,
        "hfov": 10.19,
        "image": {
         "levels": [
          {
           "height": 159,
           "width": 172,
           "url": "media/panorama_F4221894_FE45_D585_41D3_322EDDA8E7E1_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -1.14
       }
      ]
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_1034B00F_0D55_8BE9_418C_AF78BC06A15A",
      "maps": [
       {
        "hfov": 42.05,
        "yaw": 56.09,
        "image": {
         "levels": [
          {
           "height": 181,
           "width": 200,
           "url": "media/panorama_F4221894_FE45_D585_41D3_322EDDA8E7E1_0_HS_5_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -19.48
       }
      ],
      "items": [
       {
        "yaw": 56.09,
        "hfov": 42.05,
        "image": {
         "levels": [
          {
           "height": 685,
           "width": 753,
           "url": "media/panorama_F4221894_FE45_D585_41D3_322EDDA8E7E1_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -19.48
       }
      ],
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay"
     }
    ]
   }
  ],
  "id": "panorama_F4221894_FE45_D585_41D3_322EDDA8E7E1",
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "10-10",
  "vfov": 180,
  "class": "Panorama",
  "partial": false
 },
 {
  "id": "panorama_F4221894_FE45_D585_41D3_322EDDA8E7E1_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "thumbnailUrl": "media/panorama_F42063FE_FE45_BB85_41E8_9C2FFD114A8B_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_F42063FE_FE45_BB85_41E8_9C2FFD114A8B_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_F42063FE_FE45_BB85_41E8_9C2FFD114A8B_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F42063FE_FE45_BB85_41E8_9C2FFD114A8B.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_1198E159_0D4A_8C69_41A2_E777DD056E70",
      "maps": [
       {
        "hfov": 41.77,
        "yaw": -19.9,
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 200,
           "url": "media/panorama_F42063FE_FE45_BB85_41E8_9C2FFD114A8B_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -28.14
       }
      ],
      "items": [
       {
        "yaw": -19.9,
        "hfov": 41.77,
        "image": {
         "levels": [
          {
           "height": 800,
           "width": 800,
           "url": "media/panorama_F42063FE_FE45_BB85_41E8_9C2FFD114A8B_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -28.14
       }
      ],
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_F4221894_FE45_D585_41D3_322EDDA8E7E1, this.camera_22B9D241_0DCA_8C59_41A5_F989D032AAB0); this.mainPlayList.set('selectedIndex', 9)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_1024F1A1_0D4A_8CD9_418D_50BAAE77C964",
      "maps": [
       {
        "hfov": 10.04,
        "yaw": -148.35,
        "image": {
         "levels": [
          {
           "height": 70,
           "width": 84,
           "url": "media/panorama_F42063FE_FE45_BB85_41E8_9C2FFD114A8B_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -2.1
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -148.35,
        "hfov": 10.04,
        "image": {
         "levels": [
          {
           "height": 141,
           "width": 169,
           "url": "media/panorama_F42063FE_FE45_BB85_41E8_9C2FFD114A8B_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -2.1
       }
      ]
     }
    ]
   }
  ],
  "id": "panorama_F42063FE_FE45_BB85_41E8_9C2FFD114A8B",
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "11-11",
  "vfov": 180,
  "class": "Panorama",
  "partial": false
 },
 {
  "id": "panorama_F42063FE_FE45_BB85_41E8_9C2FFD114A8B_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "thumbnailUrl": "media/panorama_F4274F58_FE45_4C8D_41A0_DB732DC48DD3_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_F4274F58_FE45_4C8D_41A0_DB732DC48DD3_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_F4274F58_FE45_4C8D_41A0_DB732DC48DD3_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F4274F58_FE45_4C8D_41A0_DB732DC48DD3.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_13B83793_0D56_74F9_4186_5F4F45944481",
      "maps": [
       {
        "hfov": 13.46,
        "yaw": 143.27,
        "image": {
         "levels": [
          {
           "height": 109,
           "width": 113,
           "url": "media/panorama_F4274F58_FE45_4C8D_41A0_DB732DC48DD3_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 0.37
       }
      ],
      "items": [
       {
        "yaw": 143.27,
        "hfov": 13.46,
        "image": {
         "levels": [
          {
           "height": 218,
           "width": 227,
           "url": "media/panorama_F4274F58_FE45_4C8D_41A0_DB732DC48DD3_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 0.37
       }
      ],
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_F4221894_FE45_D585_41D3_322EDDA8E7E1, this.camera_3D1B53B4_0DCA_8C3F_412C_275601402FF0); this.mainPlayList.set('selectedIndex', 9)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_10C7601D_0D56_8BE9_419F_C590320DC64E",
      "maps": [
       {
        "hfov": 39.91,
        "yaw": 142.82,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 22,
           "url": "media/panorama_F4274F58_FE45_4C8D_41A0_DB732DC48DD3_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 6.89
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": true,
      "items": [
       {
        "yaw": 142.82,
        "hfov": 39.91,
        "image": {
         "levels": [
          {
           "height": 482,
           "width": 678,
           "url": "media/panorama_F4274F58_FE45_4C8D_41A0_DB732DC48DD3_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 6.89
       }
      ]
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_10058C33_0D55_B439_4192_722DBF268EE1",
      "maps": [
       {
        "hfov": 10.7,
        "yaw": -140.99,
        "image": {
         "levels": [
          {
           "height": 83,
           "width": 90,
           "url": "media/panorama_F4274F58_FE45_4C8D_41A0_DB732DC48DD3_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -0.89
       }
      ],
      "items": [
       {
        "yaw": -140.99,
        "hfov": 10.7,
        "image": {
         "levels": [
          {
           "height": 167,
           "width": 180,
           "url": "media/panorama_F4274F58_FE45_4C8D_41A0_DB732DC48DD3_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -0.89
       }
      ],
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_F41AE162_FE45_F4BD_41E0_F243159C6C64, this.camera_3D39436E_0DCA_8C2B_41A8_F6367966A7FD); this.mainPlayList.set('selectedIndex', 7)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_133A04F6_0D5A_943B_419E_1647197C9097",
      "maps": [
       {
        "hfov": 30.6,
        "yaw": -141.54,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_F4274F58_FE45_4C8D_41A0_DB732DC48DD3_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 4.27
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": true,
      "items": [
       {
        "yaw": -141.54,
        "hfov": 30.6,
        "image": {
         "levels": [
          {
           "height": 528,
           "width": 518,
           "url": "media/panorama_F4274F58_FE45_4C8D_41A0_DB732DC48DD3_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 4.27
       }
      ]
     },
     {
      "areas": [
       {
        "click": "this.openLink(\"https://www.google.co.id/maps/@-6.2714605,106.8343562,3a,75y,119.51h,87.92t/data=!3m7!1e1!3m5!1sR3UjCrfe8EVGwlnqV2Z-Yg!2e0!6s%2F%2Fgeo0.ggpht.com%2Fcbk%3Fpanoid%3DR3UjCrfe8EVGwlnqV2Z-Yg%26output%3Dthumbnail%26cb_client%3Dmaps_sv.tactile.gps%26thumb%3D2%26w%3D203%26h%3D100%26yaw%3D173.51045%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656\", \"_blank\")",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_120BF3AE_0D5A_8C2B_4199_94EB294FE5B6",
      "maps": [
       {
        "hfov": 36,
        "yaw": -37.11,
        "image": {
         "levels": [
          {
           "height": 172,
           "width": 200,
           "url": "media/panorama_F4274F58_FE45_4C8D_41A0_DB732DC48DD3_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -3.4
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -37.11,
        "hfov": 36,
        "image": {
         "levels": [
          {
           "height": 524,
           "width": 609,
           "url": "media/panorama_F4274F58_FE45_4C8D_41A0_DB732DC48DD3_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -3.4
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.setMediaBehaviour(this.playList_233D6E17_0DCA_B7F9_41A5_EDA0EBDEC318, 0, this.panorama_F4274F58_FE45_4C8D_41A0_DB732DC48DD3); this.MainViewerPanoramaPlayer.play()",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_10E5BB88_0D5F_9CD7_4198_997A47770392",
      "maps": [
       {
        "hfov": 39.08,
        "yaw": -87.18,
        "image": {
         "levels": [
          {
           "height": 24,
           "width": 16,
           "url": "media/panorama_F4274F58_FE45_4C8D_41A0_DB732DC48DD3_0_HS_5_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -22.97
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -87.18,
        "hfov": 39.08,
        "image": {
         "levels": [
          {
           "height": 1075,
           "width": 716,
           "url": "media/panorama_F4274F58_FE45_4C8D_41A0_DB732DC48DD3_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -22.97
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_F5FB01F6_FE42_B785_41E5_09665D3B8D68, this.camera_3D084391_0DCA_8CF9_419F_F170CE3B24CB); this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_13B883A9_0D5E_8C29_4198_F58A47406292",
      "maps": [
       {
        "hfov": 9.75,
        "yaw": 16.33,
        "image": {
         "levels": [
          {
           "height": 87,
           "width": 91,
           "url": "media/panorama_F4274F58_FE45_4C8D_41A0_DB732DC48DD3_0_HS_6_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -25.47
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 16.33,
        "hfov": 9.75,
        "image": {
         "levels": [
          {
           "height": 175,
           "width": 182,
           "url": "media/panorama_F4274F58_FE45_4C8D_41A0_DB732DC48DD3_0_HS_6_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -25.47
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.setMediaBehaviour(this.playList_233D6E17_0DCA_B7F9_41A5_EDA0EBDEC318, 0, this.panorama_F4274F58_FE45_4C8D_41A0_DB732DC48DD3); this.MainViewerPanoramaPlayer.play()",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_1302C936_0D5D_BC3B_41A3_EAA532E31412",
      "maps": [
       {
        "hfov": 18.26,
        "yaw": -98.16,
        "image": {
         "levels": [
          {
           "height": 136,
           "width": 156,
           "url": "media/panorama_F4274F58_FE45_4C8D_41A0_DB732DC48DD3_0_HS_7_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 8.79
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -98.16,
        "hfov": 18.26,
        "image": {
         "levels": [
          {
           "height": 273,
           "width": 312,
           "url": "media/panorama_F4274F58_FE45_4C8D_41A0_DB732DC48DD3_0_HS_7_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 8.79
       }
      ]
     }
    ]
   }
  ],
  "id": "panorama_F4274F58_FE45_4C8D_41A0_DB732DC48DD3",
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "12-12",
  "vfov": 180,
  "class": "Panorama",
  "partial": false
 },
 {
  "id": "panorama_F4274F58_FE45_4C8D_41A0_DB732DC48DD3_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "thumbnailUrl": "media/panorama_F43A8A25_FE45_5486_41E9_ACF56C894EFE_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_F43A8A25_FE45_5486_41E9_ACF56C894EFE_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_F43A8A25_FE45_5486_41E9_ACF56C894EFE_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F43A8A25_FE45_5486_41E9_ACF56C894EFE.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_1369AD61_0D5A_B459_41A7_B795CF5C16A5",
      "maps": [
       {
        "hfov": 45.9,
        "yaw": 35.87,
        "image": {
         "levels": [
          {
           "height": 175,
           "width": 200,
           "url": "media/panorama_F43A8A25_FE45_5486_41E9_ACF56C894EFE_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -20.1
       }
      ],
      "items": [
       {
        "yaw": 35.87,
        "hfov": 45.9,
        "image": {
         "levels": [
          {
           "height": 723,
           "width": 825,
           "url": "media/panorama_F43A8A25_FE45_5486_41E9_ACF56C894EFE_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -20.1
       }
      ],
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_13D8B75D_0D5B_9469_4193_E947A66BB521",
      "maps": [
       {
        "hfov": 11.43,
        "yaw": -102.17,
        "image": {
         "levels": [
          {
           "height": 88,
           "width": 96,
           "url": "media/panorama_F43A8A25_FE45_5486_41E9_ACF56C894EFE_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -3.91
       }
      ],
      "items": [
       {
        "yaw": -102.17,
        "hfov": 11.43,
        "image": {
         "levels": [
          {
           "height": 176,
           "width": 193,
           "url": "media/panorama_F43A8A25_FE45_5486_41E9_ACF56C894EFE_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -3.91
       }
      ],
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_F429A486_FE45_7D85_41EA_CEC3F46F473E, this.camera_23B24FDD_0DCA_B469_41A8_C11A96816AC1); this.mainPlayList.set('selectedIndex', 13)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_13D0E374_0D5B_8C3F_41A8_35E69363B1CA",
      "maps": [
       {
        "hfov": 34.96,
        "yaw": -102.73,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 26,
           "url": "media/panorama_F43A8A25_FE45_5486_41E9_ACF56C894EFE_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 0.75
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": true,
      "items": [
       {
        "yaw": -102.73,
        "hfov": 34.96,
        "image": {
         "levels": [
          {
           "height": 358,
           "width": 590,
           "url": "media/panorama_F43A8A25_FE45_5486_41E9_ACF56C894EFE_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 0.75
       }
      ]
     }
    ]
   }
  ],
  "id": "panorama_F43A8A25_FE45_5486_41E9_ACF56C894EFE",
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "13-13",
  "vfov": 180,
  "class": "Panorama",
  "partial": false
 },
 {
  "id": "panorama_F43A8A25_FE45_5486_41E9_ACF56C894EFE_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "thumbnailUrl": "media/panorama_F429A486_FE45_7D85_41EA_CEC3F46F473E_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_F429A486_FE45_7D85_41EA_CEC3F46F473E_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_F429A486_FE45_7D85_41EA_CEC3F46F473E_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F429A486_FE45_7D85_41EA_CEC3F46F473E.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_F43A8A25_FE45_5486_41E9_ACF56C894EFE, this.camera_225D70C5_0DCA_8C59_41A4_C50C5796AD25); this.mainPlayList.set('selectedIndex', 12)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_13F21AF7_0D55_9C39_416B_8D6D9D77AF09",
      "maps": [
       {
        "hfov": 11.79,
        "yaw": 159.53,
        "image": {
         "levels": [
          {
           "height": 79,
           "width": 99,
           "url": "media/panorama_F429A486_FE45_7D85_41EA_CEC3F46F473E_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -3.36
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 159.53,
        "hfov": 11.79,
        "image": {
         "levels": [
          {
           "height": 158,
           "width": 199,
           "url": "media/panorama_F429A486_FE45_7D85_41EA_CEC3F46F473E_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -3.36
       }
      ]
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_2D5FADB9_0D56_7429_41A1_505B89AC5167",
      "maps": [
       {
        "hfov": 42.89,
        "yaw": -50.05,
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 200,
           "url": "media/panorama_F429A486_FE45_7D85_41EA_CEC3F46F473E_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -25.13
       }
      ],
      "items": [
       {
        "yaw": -50.05,
        "hfov": 42.89,
        "image": {
         "levels": [
          {
           "height": 800,
           "width": 800,
           "url": "media/panorama_F429A486_FE45_7D85_41EA_CEC3F46F473E_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -25.13
       }
      ],
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_F4251F63_FE45_4C83_41CC_8AF8ACD65B65, this.camera_224070A7_0DCA_8CD9_4184_6BED43B1EEDE); this.mainPlayList.set('selectedIndex', 14)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_128D130E_0D56_8DEB_4179_1A7487CC1844",
      "maps": [
       {
        "hfov": 11.3,
        "yaw": 68.83,
        "image": {
         "levels": [
          {
           "height": 79,
           "width": 95,
           "url": "media/panorama_F429A486_FE45_7D85_41EA_CEC3F46F473E_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -0.85
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 68.83,
        "hfov": 11.3,
        "image": {
         "levels": [
          {
           "height": 158,
           "width": 190,
           "url": "media/panorama_F429A486_FE45_7D85_41EA_CEC3F46F473E_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -0.85
       }
      ]
     }
    ]
   }
  ],
  "id": "panorama_F429A486_FE45_7D85_41EA_CEC3F46F473E",
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "14-14",
  "vfov": 180,
  "class": "Panorama",
  "partial": false
 },
 {
  "id": "panorama_F429A486_FE45_7D85_41EA_CEC3F46F473E_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "thumbnailUrl": "media/panorama_F4251F63_FE45_4C83_41CC_8AF8ACD65B65_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_F4251F63_FE45_4C83_41CC_8AF8ACD65B65_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_F4251F63_FE45_4C83_41CC_8AF8ACD65B65_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F4251F63_FE45_4C83_41CC_8AF8ACD65B65.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_F429A486_FE45_7D85_41EA_CEC3F46F473E, this.camera_22CDB1D2_0DCA_8C7B_4180_9343E539987A); this.mainPlayList.set('selectedIndex', 13)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_12D7D28E_0D57_8CEB_4186_7F0A0C506C41",
      "maps": [
       {
        "hfov": 15.32,
        "yaw": 170.33,
        "image": {
         "levels": [
          {
           "height": 100,
           "width": 129,
           "url": "media/panorama_F4251F63_FE45_4C83_41CC_8AF8ACD65B65_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 1.66
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 170.33,
        "hfov": 15.32,
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 258,
           "url": "media/panorama_F4251F63_FE45_4C83_41CC_8AF8ACD65B65_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 1.66
       }
      ]
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_2C653DDC_0D56_F46F_419C_342B931DAB14",
      "maps": [
       {
        "hfov": 43.37,
        "yaw": 50.94,
        "image": {
         "levels": [
          {
           "height": 184,
           "width": 200,
           "url": "media/panorama_F4251F63_FE45_4C83_41CC_8AF8ACD65B65_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -34.93
       }
      ],
      "items": [
       {
        "yaw": 50.94,
        "hfov": 43.37,
        "image": {
         "levels": [
          {
           "height": 825,
           "width": 893,
           "url": "media/panorama_F4251F63_FE45_4C83_41CC_8AF8ACD65B65_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -34.93
       }
      ],
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_2C3CCCDB_0D55_F469_41A6_C44F454D4D2B",
      "maps": [
       {
        "hfov": 42.8,
        "yaw": -67.38,
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 200,
           "url": "media/panorama_F4251F63_FE45_4C83_41CC_8AF8ACD65B65_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -25.38
       }
      ],
      "items": [
       {
        "yaw": -67.38,
        "hfov": 42.8,
        "image": {
         "levels": [
          {
           "height": 800,
           "width": 800,
           "url": "media/panorama_F4251F63_FE45_4C83_41CC_8AF8ACD65B65_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -25.38
       }
      ],
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay"
     }
    ]
   }
  ],
  "id": "panorama_F4251F63_FE45_4C83_41CC_8AF8ACD65B65",
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "15-15",
  "vfov": 180,
  "class": "Panorama",
  "partial": false
 },
 {
  "id": "panorama_F4251F63_FE45_4C83_41CC_8AF8ACD65B65_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "thumbnailUrl": "media/panorama_F42FC9E2_FE45_5782_41CE_DFF2D9DC3A07_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_F42FC9E2_FE45_5782_41CE_DFF2D9DC3A07_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_F42FC9E2_FE45_5782_41CE_DFF2D9DC3A07_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F42FC9E2_FE45_5782_41CE_DFF2D9DC3A07.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_F41F0433_FE46_BC83_41E9_227CBD0AB2B1, this.camera_22854282_0DCA_8CDB_41A4_20955775EE5C); this.mainPlayList.set('selectedIndex', 16)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_2D0582D1_0D4A_8C79_41AA_0A0EE2FA7CA5",
      "maps": [
       {
        "hfov": 9.49,
        "yaw": 6.28,
        "image": {
         "levels": [
          {
           "height": 81,
           "width": 95,
           "url": "media/panorama_F42FC9E2_FE45_5782_41CE_DFF2D9DC3A07_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -32.88
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 6.28,
        "hfov": 9.49,
        "image": {
         "levels": [
          {
           "height": 162,
           "width": 190,
           "url": "media/panorama_F42FC9E2_FE45_5782_41CE_DFF2D9DC3A07_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -32.88
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_F42B4F15_FE45_4C87_41E6_311816BE6F5C, this.camera_228A425F_0DCA_8C69_41A4_2A7AB44756CC); this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_2F97A4B5_0D4A_7439_4189_11470474A9EE",
      "maps": [
       {
        "hfov": 28.39,
        "yaw": -70.02,
        "image": {
         "levels": [
          {
           "height": 190,
           "width": 200,
           "url": "media/panorama_F42FC9E2_FE45_5782_41CE_DFF2D9DC3A07_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -5.66
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -70.02,
        "hfov": 28.39,
        "image": {
         "levels": [
          {
           "height": 456,
           "width": 481,
           "url": "media/panorama_F42FC9E2_FE45_5782_41CE_DFF2D9DC3A07_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -5.66
       }
      ]
     }
    ]
   }
  ],
  "id": "panorama_F42FC9E2_FE45_5782_41CE_DFF2D9DC3A07",
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "16-16",
  "vfov": 180,
  "class": "Panorama",
  "partial": false
 },
 {
  "id": "panorama_F42FC9E2_FE45_5782_41CE_DFF2D9DC3A07_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "thumbnailUrl": "media/panorama_F41F0433_FE46_BC83_41E9_227CBD0AB2B1_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_F41F0433_FE46_BC83_41E9_227CBD0AB2B1_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_F41F0433_FE46_BC83_41E9_227CBD0AB2B1_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F41F0433_FE46_BC83_41E9_227CBD0AB2B1.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_F42FC9E2_FE45_5782_41CE_DFF2D9DC3A07, this.camera_22DC81FA_0DCA_8C2B_419B_B37644D7A0D9); this.mainPlayList.set('selectedIndex', 15)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_2DC50742_0D4A_745B_4151_850C6E19E009",
      "maps": [
       {
        "hfov": 9.44,
        "yaw": -78.26,
        "image": {
         "levels": [
          {
           "height": 76,
           "width": 84,
           "url": "media/panorama_F41F0433_FE46_BC83_41E9_227CBD0AB2B1_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 20.13
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -78.26,
        "hfov": 9.44,
        "image": {
         "levels": [
          {
           "height": 153,
           "width": 169,
           "url": "media/panorama_F41F0433_FE46_BC83_41E9_227CBD0AB2B1_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 20.13
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_F4193EF1_FE46_CD9F_41EC_D1684FCE2A43, this.camera_22AED21E_0DCA_8FEB_41A7_DDCBDE7A44EB); this.mainPlayList.set('selectedIndex', 17)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_2C031E0B_0D4E_97E9_419D_63CC3777D60D",
      "maps": [
       {
        "hfov": 10.09,
        "yaw": -7.03,
        "image": {
         "levels": [
          {
           "height": 83,
           "width": 86,
           "url": "media/panorama_F41F0433_FE46_BC83_41E9_227CBD0AB2B1_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -11.65
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -7.03,
        "hfov": 10.09,
        "image": {
         "levels": [
          {
           "height": 166,
           "width": 173,
           "url": "media/panorama_F41F0433_FE46_BC83_41E9_227CBD0AB2B1_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -11.65
       }
      ]
     }
    ]
   }
  ],
  "id": "panorama_F41F0433_FE46_BC83_41E9_227CBD0AB2B1",
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "17-17",
  "vfov": 180,
  "class": "Panorama",
  "partial": false
 },
 {
  "id": "panorama_F41F0433_FE46_BC83_41E9_227CBD0AB2B1_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "thumbnailUrl": "media/panorama_F4193EF1_FE46_CD9F_41EC_D1684FCE2A43_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_F4193EF1_FE46_CD9F_41EC_D1684FCE2A43_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_F4193EF1_FE46_CD9F_41EC_D1684FCE2A43_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F4193EF1_FE46_CD9F_41EC_D1684FCE2A43.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_2CFBA66A_0D4F_9428_4190_E6C6696CDC97",
      "maps": [
       {
        "hfov": 9.97,
        "yaw": -1.88,
        "image": {
         "levels": [
          {
           "height": 74,
           "width": 84,
           "url": "media/panorama_F4193EF1_FE46_CD9F_41EC_D1684FCE2A43_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -7.13
       }
      ],
      "items": [
       {
        "yaw": -1.88,
        "hfov": 9.97,
        "image": {
         "levels": [
          {
           "height": 149,
           "width": 169,
           "url": "media/panorama_F4193EF1_FE46_CD9F_41EC_D1684FCE2A43_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -7.13
       }
      ],
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_F42A999F_FE46_D782_41EE_41EF573916FE, this.camera_3D43C30A_0DCA_8DEB_4191_142BE95DB1EF); this.mainPlayList.set('selectedIndex', 18)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_2FAA122D_0D4E_8C29_41A9_233AD821997D",
      "maps": [
       {
        "hfov": 39.21,
        "yaw": -2.11,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 27,
           "url": "media/panorama_F4193EF1_FE46_CD9F_41EC_D1684FCE2A43_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -1.89
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": true,
      "items": [
       {
        "yaw": -2.11,
        "hfov": 39.21,
        "image": {
         "levels": [
          {
           "height": 379,
           "width": 662,
           "url": "media/panorama_F4193EF1_FE46_CD9F_41EC_D1684FCE2A43_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -1.89
       }
      ]
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_2F1AAD34_0D4D_943F_419C_79140FD13DB2",
      "maps": [
       {
        "hfov": 9.79,
        "yaw": -105.26,
        "image": {
         "levels": [
          {
           "height": 72,
           "width": 82,
           "url": "media/panorama_F4193EF1_FE46_CD9F_41EC_D1684FCE2A43_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -1.48
       }
      ],
      "items": [
       {
        "yaw": -105.26,
        "hfov": 9.79,
        "image": {
         "levels": [
          {
           "height": 145,
           "width": 165,
           "url": "media/panorama_F4193EF1_FE46_CD9F_41EC_D1684FCE2A43_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -1.48
       }
      ],
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay"
     }
    ]
   }
  ],
  "id": "panorama_F4193EF1_FE46_CD9F_41EC_D1684FCE2A43",
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "18-18",
  "vfov": 180,
  "class": "Panorama",
  "partial": false
 },
 {
  "id": "panorama_F4193EF1_FE46_CD9F_41EC_D1684FCE2A43_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "thumbnailUrl": "media/panorama_F42A999F_FE46_D782_41EE_41EF573916FE_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_F42A999F_FE46_D782_41EE_41EF573916FE_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_F42A999F_FE46_D782_41EE_41EF573916FE_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F42A999F_FE46_D782_41EE_41EF573916FE.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_F5FB01F6_FE42_B785_41E5_09665D3B8D68, this.camera_222F10E8_0DCA_8C57_419F_0BC19D796652); this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_2F5F31FF_0D4B_8C29_4183_4F572194F780",
      "maps": [
       {
        "hfov": 13.66,
        "yaw": 2.21,
        "image": {
         "levels": [
          {
           "height": 103,
           "width": 115,
           "url": "media/panorama_F42A999F_FE46_D782_41EE_41EF573916FE_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -5.29
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 2.21,
        "hfov": 13.66,
        "image": {
         "levels": [
          {
           "height": 206,
           "width": 231,
           "url": "media/panorama_F42A999F_FE46_D782_41EE_41EF573916FE_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -5.29
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_F4193EF1_FE46_CD9F_41EC_D1684FCE2A43, this.camera_2238210A_0DCA_8DEB_4199_795BDB1B4E3D); this.mainPlayList.set('selectedIndex', 17)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_29612D9D_0D4A_74E9_4190_FBD54E48EAD1",
      "maps": [
       {
        "hfov": 11.8,
        "yaw": -174.6,
        "image": {
         "levels": [
          {
           "height": 79,
           "width": 99,
           "url": "media/panorama_F42A999F_FE46_D782_41EE_41EF573916FE_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -1.6
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -174.6,
        "hfov": 11.8,
        "image": {
         "levels": [
          {
           "height": 158,
           "width": 199,
           "url": "media/panorama_F42A999F_FE46_D782_41EE_41EF573916FE_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -1.6
       }
      ]
     }
    ]
   }
  ],
  "id": "panorama_F42A999F_FE46_D782_41EE_41EF573916FE",
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "19-19",
  "vfov": 180,
  "class": "Panorama",
  "partial": false
 },
 {
  "id": "panorama_F42A999F_FE46_D782_41EE_41EF573916FE_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_F5FB01F6_FE42_B785_41E5_09665D3B8D68_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F5FB01F6_FE42_B785_41E5_09665D3B8D68",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_F4E56EA6_FE45_4D85_41E8_AA5AC389A545_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F4E56EA6_FE45_4D85_41E8_AA5AC389A545",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_F4C1F983_FE45_7783_41EE_FAACB82CD48D_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F4C1F983_FE45_7783_41EE_FAACB82CD48D",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_F43C5432_FE45_5C9D_41E6_2337D3DD5F6A_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F43C5432_FE45_5C9D_41E6_2337D3DD5F6A",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_F42B4F15_FE45_4C87_41E6_311816BE6F5C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F42B4F15_FE45_4C87_41E6_311816BE6F5C",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_F424BA21_FE45_B4BF_41E2_DF55EBCF5D82_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F424BA21_FE45_B4BF_41E2_DF55EBCF5D82",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_F426E5C9_FE45_DF8E_41CE_98C97F4B6443_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F426E5C9_FE45_DF8E_41CE_98C97F4B6443",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_F41AE162_FE45_F4BD_41E0_F243159C6C64_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F41AE162_FE45_F4BD_41E0_F243159C6C64",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_F422BD0B_FE45_CC83_41DC_38BC3F40C39E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F422BD0B_FE45_CC83_41DC_38BC3F40C39E",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_F4221894_FE45_D585_41D3_322EDDA8E7E1_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F4221894_FE45_D585_41D3_322EDDA8E7E1",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_F42063FE_FE45_BB85_41E8_9C2FFD114A8B_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F42063FE_FE45_BB85_41E8_9C2FFD114A8B",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_F4274F58_FE45_4C8D_41A0_DB732DC48DD3_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F4274F58_FE45_4C8D_41A0_DB732DC48DD3",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_F43A8A25_FE45_5486_41E9_ACF56C894EFE_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F43A8A25_FE45_5486_41E9_ACF56C894EFE",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_F429A486_FE45_7D85_41EA_CEC3F46F473E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F429A486_FE45_7D85_41EA_CEC3F46F473E",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_F4251F63_FE45_4C83_41CC_8AF8ACD65B65_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F4251F63_FE45_4C83_41CC_8AF8ACD65B65",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_F42FC9E2_FE45_5782_41CE_DFF2D9DC3A07_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F42FC9E2_FE45_5782_41CE_DFF2D9DC3A07",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_F41F0433_FE46_BC83_41E9_227CBD0AB2B1_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F41F0433_FE46_BC83_41E9_227CBD0AB2B1",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_F4193EF1_FE46_CD9F_41EC_D1684FCE2A43_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F4193EF1_FE46_CD9F_41EC_D1684FCE2A43",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_F42A999F_FE46_D782_41EE_41EF573916FE_camera",
    "media": "this.panorama_F42A999F_FE46_D782_41EE_41EF573916FE",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 0)"
   }
  ]
 },
 {
  "thumbnailUrl": "media/media_EBBCE794_FE45_BB85_41EC_536CAABE8C56_t.jpg",
  "video": [
   {
    "type": "video/mp4",
    "width": 3840,
    "url": "media/media_EBBCE794_FE45_BB85_41EC_536CAABE8C56.mp4",
    "height": 1920,
    "posterURL": "media/media_EBBCE794_FE45_BB85_41EC_536CAABE8C56_poster.jpg",
    "bitrate": 16588,
    "framerate": 30,
    "class": "Video360Resource"
   },
   {
    "type": "video/mp4",
    "width": 3168,
    "url": "media/media_EBBCE794_FE45_BB85_41EC_536CAABE8C56_ios.mp4",
    "height": 1584,
    "posterURL": "media/media_EBBCE794_FE45_BB85_41EC_536CAABE8C56_poster.jpg",
    "bitrate": 11290,
    "framerate": 30,
    "class": "Video360Resource"
   }
  ],
  "partial": false,
  "id": "media_EBBCE794_FE45_BB85_41EC_536CAABE8C56",
  "loop": false,
  "hfovMax": 140,
  "pitch": 0,
  "hfov": 360,
  "hfovMin": 60,
  "label": "selamat datang",
  "vfov": 180,
  "overlays": [
   {
    "enabledInCardboard": true,
    "areas": [
     {
      "click": "this.startPanoramaWithCamera(this.panorama_F5FB01F6_FE42_B785_41E5_09665D3B8D68, this.camera_3D2CC34B_0DCA_8C69_41A2_D7C459CE7217); this.mainPlayList.set('selectedIndex', 0)",
      "mapColor": "#FF0000",
      "class": "HotspotPanoramaOverlayArea"
     }
    ],
    "id": "overlay_28F5C6F3_0D36_9439_418D_FBE05A08C6D5",
    "maps": [
     {
      "playbackPositions": [
       {
        "hfov": 10.95,
        "yaw": 85.5,
        "roll": 0,
        "timestamp": 0,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "pitch": -8.34
       }
      ],
      "yaw": 0,
      "image": {
       "levels": [
        {
         "height": 59,
         "width": 59,
         "url": "media/media_EBBCE794_FE45_BB85_41EC_536CAABE8C56_HS_0_0_0_map.gif",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "HotspotPanoramaOverlayMap",
      "pitch": 0
     }
    ],
    "useHandCursor": true,
    "data": {
     "label": "Image"
    },
    "class": "HotspotPanoramaOverlay",
    "rollOverDisplay": false,
    "items": [
     {
      "yaw": 0,
      "playbackPositions": [
       {
        "hfov": 10.95,
        "yaw": 85.5,
        "roll": 0,
        "timestamp": 0,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "pitch": -8.34
       }
      ],
      "image": {
       "levels": [
        {
         "height": 119,
         "width": 118,
         "url": "media/media_EBBCE794_FE45_BB85_41EC_536CAABE8C56_HS_0_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "HotspotPanoramaOverlayImage",
      "pitch": 0
     }
    ]
   },
   {
    "areas": [
     {
      "click": "this.openLink(\"https://www.google.co.id/maps/@-6.2714605,106.8343562,3a,75y,119.51h,87.92t/data=!3m7!1e1!3m5!1sR3UjCrfe8EVGwlnqV2Z-Yg!2e0!6s%2F%2Fgeo0.ggpht.com%2Fcbk%3Fpanoid%3DR3UjCrfe8EVGwlnqV2Z-Yg%26output%3Dthumbnail%26cb_client%3Dmaps_sv.tactile.gps%26thumb%3D2%26w%3D203%26h%3D100%26yaw%3D173.51045%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656\", \"_blank\")",
      "mapColor": "#FF0000",
      "class": "HotspotPanoramaOverlayArea"
     }
    ],
    "id": "overlay_244DB55A_0D35_F46C_4170_F6094685168F",
    "maps": [
     {
      "playbackPositions": [
       {
        "hfov": 33.66,
        "yaw": 44.86,
        "roll": 0,
        "timestamp": 0,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "pitch": 20.32
       }
      ],
      "yaw": 0,
      "image": {
       "levels": [
        {
         "height": 200,
         "width": 200,
         "url": "media/media_EBBCE794_FE45_BB85_41EC_536CAABE8C56_HS_1_0_0_map.gif",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "HotspotPanoramaOverlayMap",
      "pitch": 0
     }
    ],
    "useHandCursor": true,
    "data": {
     "label": "Image"
    },
    "class": "HotspotPanoramaOverlay",
    "rollOverDisplay": false,
    "items": [
     {
      "yaw": 0,
      "playbackPositions": [
       {
        "hfov": 33.66,
        "yaw": 44.86,
        "roll": 0,
        "timestamp": 0,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "pitch": 20.32
       }
      ],
      "image": {
       "levels": [
        {
         "height": 800,
         "width": 800,
         "url": "media/media_EBBCE794_FE45_BB85_41EC_536CAABE8C56_HS_1_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "HotspotPanoramaOverlayImage",
      "pitch": 0
     }
    ]
   },
   {
    "useHandCursor": true,
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotPanoramaOverlayArea"
     }
    ],
    "id": "overlay_2AD31B18_0D3A_7DF7_41A2_2CC268555013",
    "maps": [
     {
      "playbackPositions": [
       {
        "hfov": 11.19,
        "yaw": -58.78,
        "roll": 0,
        "timestamp": 0,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "pitch": -1.19
       }
      ],
      "yaw": 0,
      "image": {
       "levels": [
        {
         "height": 59,
         "width": 59,
         "url": "media/media_EBBCE794_FE45_BB85_41EC_536CAABE8C56_HS_2_0_0_map.gif",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "HotspotPanoramaOverlayMap",
      "pitch": 0
     }
    ],
    "items": [
     {
      "yaw": 0,
      "playbackPositions": [
       {
        "hfov": 11.19,
        "yaw": -58.78,
        "roll": 0,
        "timestamp": 0,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "pitch": -1.19
       }
      ],
      "image": {
       "levels": [
        {
         "height": 119,
         "width": 118,
         "url": "media/media_EBBCE794_FE45_BB85_41EC_536CAABE8C56_HS_2_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "HotspotPanoramaOverlayImage",
      "pitch": 0
     }
    ],
    "enabledInCardboard": true,
    "data": {
     "label": "Image"
    },
    "rollOverDisplay": false,
    "class": "HotspotPanoramaOverlay"
   },
   {
    "enabledInCardboard": true,
    "areas": [
     {
      "click": "this.startPanoramaWithCamera(this.panorama_F43C5432_FE45_5C9D_41E6_2337D3DD5F6A, this.camera_3D5C532D_0DCA_8C29_4198_BA33B0BDC99B); this.mainPlayList.set('selectedIndex', 3)",
      "mapColor": "#FF0000",
      "class": "HotspotPanoramaOverlayArea"
     }
    ],
    "id": "overlay_24F427D1_0D3B_B479_41A6_AABAA212835A",
    "maps": [
     {
      "playbackPositions": [
       {
        "hfov": 41.86,
        "yaw": -58.7,
        "roll": 0,
        "timestamp": 0,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "pitch": 4.11
       }
      ],
      "yaw": 0,
      "image": {
       "levels": [
        {
         "height": 16,
         "width": 28,
         "url": "media/media_EBBCE794_FE45_BB85_41EC_536CAABE8C56_HS_3_0_0_map.gif",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "HotspotPanoramaOverlayMap",
      "pitch": 0
     }
    ],
    "useHandCursor": true,
    "data": {
     "label": "Image"
    },
    "class": "HotspotPanoramaOverlay",
    "rollOverDisplay": true,
    "items": [
     {
      "yaw": 0,
      "playbackPositions": [
       {
        "hfov": 41.86,
        "yaw": -58.7,
        "roll": 0,
        "timestamp": 0,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "pitch": 4.11
       }
      ],
      "image": {
       "levels": [
        {
         "height": 821,
         "width": 1460,
         "url": "media/media_EBBCE794_FE45_BB85_41EC_536CAABE8C56_HS_3_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "HotspotPanoramaOverlayImage",
      "pitch": 0
     }
    ]
   }
  ],
  "class": "Video360"
 },
 {
  "id": "media_EBBCE794_FE45_BB85_41EC_536CAABE8C56_camera",
  "initialPosition": {
   "hfov": 120,
   "yaw": 0,
   "class": "RotationalCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "manualRotationSpeed": 1800,
  "manualZoomSpeed": 1,
  "automaticRotationSpeed": 10,
  "class": "RotationalCamera"
 },
 {
  "id": "playList_23395E0D_0DCA_B7E9_419A_D6CC2DA9F55D",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.media_EBBCE794_FE45_BB85_41EC_536CAABE8C56",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)",
    "camera": "this.media_EBBCE794_FE45_BB85_41EC_536CAABE8C56_camera",
    "class": "Video360PlayListItem",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_23395E0D_0DCA_B7E9_419A_D6CC2DA9F55D, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_23395E0D_0DCA_B7E9_419A_D6CC2DA9F55D, 0, this.media_EBBCE794_FE45_BB85_41EC_536CAABE8C56)"
   }
  ]
 },
 {
  "thumbnailUrl": "media/media_18A160E6_0D5A_8C5B_417C_8C0CC71E887E_t.jpg",
  "video": [
   {
    "type": "video/mp4",
    "width": 3840,
    "url": "media/media_18A160E6_0D5A_8C5B_417C_8C0CC71E887E.mp4",
    "height": 1920,
    "posterURL": "media/media_18A160E6_0D5A_8C5B_417C_8C0CC71E887E_poster.jpg",
    "bitrate": 5971,
    "framerate": 15,
    "class": "Video360Resource"
   },
   {
    "type": "video/mp4",
    "width": 3168,
    "url": "media/media_18A160E6_0D5A_8C5B_417C_8C0CC71E887E_ios.mp4",
    "height": 1584,
    "posterURL": "media/media_18A160E6_0D5A_8C5B_417C_8C0CC71E887E_poster.jpg",
    "bitrate": 5645,
    "framerate": 15,
    "class": "Video360Resource"
   }
  ],
  "partial": false,
  "id": "media_18A160E6_0D5A_8C5B_417C_8C0CC71E887E",
  "loop": false,
  "hfovMax": 140,
  "pitch": 0,
  "hfov": 360,
  "hfovMin": 60,
  "label": "video penjelasan edit",
  "vfov": 180,
  "overlays": [
   {
    "useHandCursor": true,
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotPanoramaOverlayArea"
     }
    ],
    "id": "overlay_2BB7C4E4_0D3D_945F_41A5_2DEBCD635F81",
    "maps": [
     {
      "playbackPositions": [
       {
        "hfov": 57.82,
        "yaw": -141.36,
        "roll": 0,
        "timestamp": 0,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "pitch": -10.1
       }
      ],
      "yaw": 0,
      "image": {
       "levels": [
        {
         "height": 200,
         "width": 200,
         "url": "media/media_18A160E6_0D5A_8C5B_417C_8C0CC71E887E_HS_0_0_0_map.gif",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "HotspotPanoramaOverlayMap",
      "pitch": 0
     }
    ],
    "items": [
     {
      "yaw": 0,
      "playbackPositions": [
       {
        "hfov": 57.82,
        "yaw": -141.36,
        "roll": 0,
        "timestamp": 0,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "pitch": -10.1
       }
      ],
      "image": {
       "levels": [
        {
         "height": 800,
         "width": 800,
         "url": "media/media_18A160E6_0D5A_8C5B_417C_8C0CC71E887E_HS_0_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "HotspotPanoramaOverlayImage",
      "pitch": 0
     }
    ],
    "enabledInCardboard": true,
    "data": {
     "label": "Image"
    },
    "rollOverDisplay": false,
    "class": "HotspotPanoramaOverlay"
   },
   {
    "useHandCursor": true,
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotPanoramaOverlayArea"
     }
    ],
    "id": "overlay_2A7CD091_0D3E_8CF9_41A5_8C73602E00AF",
    "maps": [
     {
      "playbackPositions": [
       {
        "hfov": 42.8,
        "yaw": 67.89,
        "roll": 0,
        "timestamp": 0,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "pitch": -19.96
       }
      ],
      "yaw": 0,
      "image": {
       "levels": [
        {
         "height": 200,
         "width": 200,
         "url": "media/media_18A160E6_0D5A_8C5B_417C_8C0CC71E887E_HS_1_0_0_map.gif",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "HotspotPanoramaOverlayMap",
      "pitch": 0
     }
    ],
    "items": [
     {
      "yaw": 0,
      "playbackPositions": [
       {
        "hfov": 42.8,
        "yaw": 67.89,
        "roll": 0,
        "timestamp": 0,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "pitch": -19.96
       }
      ],
      "image": {
       "levels": [
        {
         "height": 800,
         "width": 800,
         "url": "media/media_18A160E6_0D5A_8C5B_417C_8C0CC71E887E_HS_1_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "HotspotPanoramaOverlayImage",
      "pitch": 0
     }
    ],
    "enabledInCardboard": true,
    "data": {
     "label": "Image"
    },
    "rollOverDisplay": false,
    "class": "HotspotPanoramaOverlay"
   },
   {
    "enabledInCardboard": true,
    "areas": [
     {
      "click": "this.startPanoramaWithCamera(this.panorama_F43C5432_FE45_5C9D_41E6_2337D3DD5F6A, this.camera_23177E94_0DCA_B4FF_4180_46C155CB8B08); this.mainPlayList.set('selectedIndex', 3)",
      "mapColor": "#FF0000",
      "class": "HotspotPanoramaOverlayArea"
     }
    ],
    "id": "overlay_2A02F95B_0D3F_9C69_419B_DBA65F4DF760",
    "maps": [
     {
      "playbackPositions": [
       {
        "hfov": 32.33,
        "yaw": 102.12,
        "roll": 0,
        "timestamp": 0,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "pitch": 12.45
       }
      ],
      "yaw": 0,
      "image": {
       "levels": [
        {
         "height": 200,
         "width": 200,
         "url": "media/media_18A160E6_0D5A_8C5B_417C_8C0CC71E887E_HS_2_0_0_map.gif",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "HotspotPanoramaOverlayMap",
      "pitch": 0
     }
    ],
    "useHandCursor": true,
    "data": {
     "label": "Image"
    },
    "class": "HotspotPanoramaOverlay",
    "rollOverDisplay": false,
    "items": [
     {
      "yaw": 0,
      "playbackPositions": [
       {
        "hfov": 32.33,
        "yaw": 102.12,
        "roll": 0,
        "timestamp": 0,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "pitch": 12.45
       }
      ],
      "image": {
       "levels": [
        {
         "height": 800,
         "width": 800,
         "url": "media/media_18A160E6_0D5A_8C5B_417C_8C0CC71E887E_HS_2_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "HotspotPanoramaOverlayImage",
      "pitch": 0
     }
    ]
   },
   {
    "useHandCursor": true,
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotPanoramaOverlayArea"
     }
    ],
    "id": "overlay_253FF586_0D37_B4DB_419E_39EF7434FA05",
    "maps": [
     {
      "playbackPositions": [
       {
        "hfov": 7.12,
        "yaw": 27.21,
        "roll": 0,
        "timestamp": 0,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "pitch": -0.44
       }
      ],
      "yaw": 0,
      "image": {
       "levels": [
        {
         "height": 59,
         "width": 59,
         "url": "media/media_18A160E6_0D5A_8C5B_417C_8C0CC71E887E_HS_3_0_0_map.gif",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "HotspotPanoramaOverlayMap",
      "pitch": 0
     }
    ],
    "items": [
     {
      "yaw": 0,
      "playbackPositions": [
       {
        "hfov": 7.12,
        "yaw": 27.21,
        "roll": 0,
        "timestamp": 0,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "pitch": -0.44
       }
      ],
      "image": {
       "levels": [
        {
         "height": 119,
         "width": 118,
         "url": "media/media_18A160E6_0D5A_8C5B_417C_8C0CC71E887E_HS_3_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "HotspotPanoramaOverlayImage",
      "pitch": 0
     }
    ],
    "enabledInCardboard": true,
    "data": {
     "label": "Image"
    },
    "rollOverDisplay": false,
    "class": "HotspotPanoramaOverlay"
   },
   {
    "enabledInCardboard": true,
    "areas": [
     {
      "click": "this.startPanoramaWithCamera(this.panorama_F42FC9E2_FE45_5782_41CE_DFF2D9DC3A07, this.camera_23EB2EA7_0DCA_B4D9_4174_25452D9291F2); this.mainPlayList.set('selectedIndex', 15)",
      "mapColor": "#FF0000",
      "class": "HotspotPanoramaOverlayArea"
     }
    ],
    "id": "overlay_2485CB5D_0D36_BC69_41A2_AFF7420E4BF6",
    "maps": [
     {
      "playbackPositions": [
       {
        "hfov": 24.81,
        "yaw": 27.13,
        "roll": 0,
        "timestamp": 0,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "pitch": 3.54
       }
      ],
      "yaw": 0,
      "image": {
       "levels": [
        {
         "height": 16,
         "width": 22,
         "url": "media/media_18A160E6_0D5A_8C5B_417C_8C0CC71E887E_HS_4_0_0_map.gif",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "HotspotPanoramaOverlayMap",
      "pitch": 0
     }
    ],
    "useHandCursor": true,
    "data": {
     "label": "Image"
    },
    "class": "HotspotPanoramaOverlay",
    "rollOverDisplay": true,
    "items": [
     {
      "yaw": 0,
      "playbackPositions": [
       {
        "hfov": 24.81,
        "yaw": 27.13,
        "roll": 0,
        "timestamp": 0,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "pitch": 3.54
       }
      ],
      "image": {
       "levels": [
        {
         "height": 923,
         "width": 1299,
         "url": "media/media_18A160E6_0D5A_8C5B_417C_8C0CC71E887E_HS_4_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "HotspotPanoramaOverlayImage",
      "pitch": 0
     }
    ]
   },
   {
    "useHandCursor": true,
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotPanoramaOverlayArea"
     }
    ],
    "id": "overlay_25A07C0A_0D35_9BEB_4157_752A6E15E660",
    "maps": [
     {
      "playbackPositions": [
       {
        "hfov": 7.73,
        "yaw": -30.1,
        "roll": 0,
        "timestamp": 0,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "pitch": -0.4
       }
      ],
      "yaw": 0,
      "image": {
       "levels": [
        {
         "height": 59,
         "width": 59,
         "url": "media/media_18A160E6_0D5A_8C5B_417C_8C0CC71E887E_HS_5_0_0_map.gif",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "HotspotPanoramaOverlayMap",
      "pitch": 0
     }
    ],
    "items": [
     {
      "yaw": 0,
      "playbackPositions": [
       {
        "hfov": 7.73,
        "yaw": -30.1,
        "roll": 0,
        "timestamp": 0,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "pitch": -0.4
       }
      ],
      "image": {
       "levels": [
        {
         "height": 119,
         "width": 118,
         "url": "media/media_18A160E6_0D5A_8C5B_417C_8C0CC71E887E_HS_5_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "HotspotPanoramaOverlayImage",
      "pitch": 0
     }
    ],
    "enabledInCardboard": true,
    "data": {
     "label": "Image"
    },
    "rollOverDisplay": false,
    "class": "HotspotPanoramaOverlay"
   },
   {
    "enabledInCardboard": true,
    "areas": [
     {
      "click": "this.startPanoramaWithCamera(this.panorama_F424BA21_FE45_B4BF_41E2_DF55EBCF5D82, this.camera_23ED2EBB_0DCA_B429_4193_EC1A0C1C1F3B); this.mainPlayList.set('selectedIndex', 5)",
      "mapColor": "#FF0000",
      "class": "HotspotPanoramaOverlayArea"
     }
    ],
    "id": "overlay_2760E3E4_0DCA_8C5F_4183_81B6DCDEBE80",
    "maps": [
     {
      "playbackPositions": [
       {
        "hfov": 23.23,
        "yaw": -30.08,
        "roll": 0,
        "timestamp": 0,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "pitch": 1.71
       }
      ],
      "yaw": 0,
      "image": {
       "levels": [
        {
         "height": 16,
         "width": 22,
         "url": "media/media_18A160E6_0D5A_8C5B_417C_8C0CC71E887E_HS_6_0_0_map.gif",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "HotspotPanoramaOverlayMap",
      "pitch": 0
     }
    ],
    "useHandCursor": true,
    "data": {
     "label": "Image"
    },
    "class": "HotspotPanoramaOverlay",
    "rollOverDisplay": true,
    "items": [
     {
      "yaw": 0,
      "playbackPositions": [
       {
        "hfov": 23.23,
        "yaw": -30.08,
        "roll": 0,
        "timestamp": 0,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "pitch": 1.71
       }
      ],
      "image": {
       "levels": [
        {
         "height": 923,
         "width": 1299,
         "url": "media/media_18A160E6_0D5A_8C5B_417C_8C0CC71E887E_HS_6_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "HotspotPanoramaOverlayImage",
      "pitch": 0
     }
    ]
   }
  ],
  "class": "Video360"
 },
 {
  "id": "media_18A160E6_0D5A_8C5B_417C_8C0CC71E887E_camera",
  "initialPosition": {
   "hfov": 120,
   "yaw": 0,
   "class": "RotationalCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "manualRotationSpeed": 1800,
  "manualZoomSpeed": 1,
  "automaticRotationSpeed": 10,
  "class": "RotationalCamera"
 },
 {
  "id": "playList_233E4E0F_0DCA_B7E9_41A6_7AB82BDD9C1E",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.media_18A160E6_0D5A_8C5B_417C_8C0CC71E887E",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)",
    "camera": "this.media_18A160E6_0D5A_8C5B_417C_8C0CC71E887E_camera",
    "class": "Video360PlayListItem",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_233E4E0F_0DCA_B7E9_41A6_7AB82BDD9C1E, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_233E4E0F_0DCA_B7E9_41A6_7AB82BDD9C1E, 0, this.media_18A160E6_0D5A_8C5B_417C_8C0CC71E887E)"
   }
  ]
 },
 {
  "thumbnailUrl": "media/media_16263ECE_0D4A_B46B_418B_72DF63983A62_t.jpg",
  "video": [
   {
    "type": "video/mp4",
    "width": 3840,
    "url": "media/media_16263ECE_0D4A_B46B_418B_72DF63983A62.mp4",
    "height": 1920,
    "posterURL": "media/media_16263ECE_0D4A_B46B_418B_72DF63983A62_poster.jpg",
    "bitrate": 5946,
    "framerate": 15,
    "class": "Video360Resource"
   },
   {
    "type": "video/mp4",
    "width": 3168,
    "url": "media/media_16263ECE_0D4A_B46B_418B_72DF63983A62_ios.mp4",
    "height": 1584,
    "posterURL": "media/media_16263ECE_0D4A_B46B_418B_72DF63983A62_poster.jpg",
    "bitrate": 5645,
    "framerate": 15,
    "class": "Video360Resource"
   }
  ],
  "partial": false,
  "id": "media_16263ECE_0D4A_B46B_418B_72DF63983A62",
  "loop": false,
  "hfovMax": 140,
  "pitch": 0,
  "hfov": 360,
  "hfovMin": 60,
  "label": "penjelasan di lorong",
  "vfov": 180,
  "overlays": [
   {
    "enabledInCardboard": true,
    "areas": [
     {
      "click": "this.startPanoramaWithCamera(this.panorama_F43A8A25_FE45_5486_41E9_ACF56C894EFE, this.camera_23F82EE1_0DCA_B459_4194_ABEB28FBF92C); this.mainPlayList.set('selectedIndex', 12)",
      "mapColor": "#FF0000",
      "class": "HotspotPanoramaOverlayArea"
     }
    ],
    "id": "overlay_2BAFC227_0D3D_8FD9_41A9_B5FE60C6D9D2",
    "maps": [
     {
      "playbackPositions": [
       {
        "hfov": 42.13,
        "yaw": 114.82,
        "roll": 0,
        "timestamp": 0,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "pitch": 32.84
       }
      ],
      "yaw": 0,
      "image": {
       "levels": [
        {
         "height": 200,
         "width": 200,
         "url": "media/media_16263ECE_0D4A_B46B_418B_72DF63983A62_HS_0_0_0_map.gif",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "HotspotPanoramaOverlayMap",
      "pitch": 0
     }
    ],
    "useHandCursor": true,
    "data": {
     "label": "Image"
    },
    "class": "HotspotPanoramaOverlay",
    "rollOverDisplay": false,
    "items": [
     {
      "yaw": 0,
      "playbackPositions": [
       {
        "hfov": 42.13,
        "yaw": 114.82,
        "roll": 0,
        "timestamp": 0,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "pitch": 32.84
       }
      ],
      "image": {
       "levels": [
        {
         "height": 800,
         "width": 800,
         "url": "media/media_16263ECE_0D4A_B46B_418B_72DF63983A62_HS_0_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "HotspotPanoramaOverlayImage",
      "pitch": 0
     }
    ]
   },
   {
    "enabledInCardboard": true,
    "areas": [
     {
      "click": "this.startPanoramaWithCamera(this.panorama_F4221894_FE45_D585_41D3_322EDDA8E7E1, this.camera_23F3CEF4_0DCA_B43F_41A7_77BC2C457FFB); this.mainPlayList.set('selectedIndex', 9)",
      "mapColor": "#FF0000",
      "class": "HotspotPanoramaOverlayArea"
     }
    ],
    "id": "overlay_2A950AF0_0D3B_9C37_41A8_5BD67CA08361",
    "maps": [
     {
      "playbackPositions": [
       {
        "hfov": 36.09,
        "yaw": -41.84,
        "roll": 0,
        "timestamp": 0,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "pitch": 29.06
       }
      ],
      "yaw": 0,
      "image": {
       "levels": [
        {
         "height": 200,
         "width": 200,
         "url": "media/media_16263ECE_0D4A_B46B_418B_72DF63983A62_HS_1_0_0_map.gif",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "HotspotPanoramaOverlayMap",
      "pitch": 0
     }
    ],
    "useHandCursor": true,
    "data": {
     "label": "Image"
    },
    "class": "HotspotPanoramaOverlay",
    "rollOverDisplay": false,
    "items": [
     {
      "yaw": 0,
      "playbackPositions": [
       {
        "hfov": 36.09,
        "yaw": -41.84,
        "roll": 0,
        "timestamp": 0,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "pitch": 29.06
       }
      ],
      "image": {
       "levels": [
        {
         "height": 800,
         "width": 800,
         "url": "media/media_16263ECE_0D4A_B46B_418B_72DF63983A62_HS_1_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "HotspotPanoramaOverlayImage",
      "pitch": 0
     }
    ]
   },
   {
    "enabledInCardboard": true,
    "areas": [
     {
      "click": "this.startPanoramaWithCamera(this.panorama_F41AE162_FE45_F4BD_41E0_F243159C6C64, this.camera_23E68ECD_0DCA_B469_41A2_3F78BC977DA2); this.mainPlayList.set('selectedIndex', 7)",
      "mapColor": "#FF0000",
      "class": "HotspotPanoramaOverlayArea"
     }
    ],
    "id": "overlay_25C09CCA_0D3A_B46B_419A_E7656B42E0AF",
    "maps": [
     {
      "playbackPositions": [
       {
        "hfov": 31.25,
        "yaw": -102.9,
        "roll": 0,
        "timestamp": 0,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "pitch": 36.07
       }
      ],
      "yaw": 0,
      "image": {
       "levels": [
        {
         "height": 200,
         "width": 200,
         "url": "media/media_16263ECE_0D4A_B46B_418B_72DF63983A62_HS_2_0_0_map.gif",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "HotspotPanoramaOverlayMap",
      "pitch": 0
     }
    ],
    "useHandCursor": true,
    "data": {
     "label": "Image"
    },
    "class": "HotspotPanoramaOverlay",
    "rollOverDisplay": false,
    "items": [
     {
      "yaw": 0,
      "playbackPositions": [
       {
        "hfov": 31.25,
        "yaw": -102.9,
        "roll": 0,
        "timestamp": 0,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "pitch": 36.07
       }
      ],
      "image": {
       "levels": [
        {
         "height": 800,
         "width": 800,
         "url": "media/media_16263ECE_0D4A_B46B_418B_72DF63983A62_HS_2_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "HotspotPanoramaOverlayImage",
      "pitch": 0
     }
    ]
   }
  ],
  "class": "Video360"
 },
 {
  "id": "media_16263ECE_0D4A_B46B_418B_72DF63983A62_camera",
  "initialPosition": {
   "hfov": 120,
   "yaw": 0,
   "class": "RotationalCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "manualRotationSpeed": 1800,
  "manualZoomSpeed": 1,
  "automaticRotationSpeed": 10,
  "class": "RotationalCamera"
 },
 {
  "id": "playList_233F4E12_0DCA_B7FB_41A7_069AA5DE35E0",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.media_16263ECE_0D4A_B46B_418B_72DF63983A62",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)",
    "camera": "this.media_16263ECE_0D4A_B46B_418B_72DF63983A62_camera",
    "class": "Video360PlayListItem",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_233F4E12_0DCA_B7FB_41A7_069AA5DE35E0, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_233F4E12_0DCA_B7FB_41A7_069AA5DE35E0, 0, this.media_16263ECE_0D4A_B46B_418B_72DF63983A62)"
   }
  ]
 },
 {
  "thumbnailUrl": "media/media_1303D6D0_0D5E_9477_418D_6C69E4D7DCD9_t.jpg",
  "video": [
   {
    "type": "video/mp4",
    "width": 3840,
    "url": "media/media_1303D6D0_0D5E_9477_418D_6C69E4D7DCD9.mp4",
    "height": 1920,
    "posterURL": "media/media_1303D6D0_0D5E_9477_418D_6C69E4D7DCD9_poster.jpg",
    "bitrate": 16588,
    "framerate": 30,
    "class": "Video360Resource"
   },
   {
    "type": "video/mp4",
    "width": 3168,
    "url": "media/media_1303D6D0_0D5E_9477_418D_6C69E4D7DCD9_ios.mp4",
    "height": 1584,
    "posterURL": "media/media_1303D6D0_0D5E_9477_418D_6C69E4D7DCD9_poster.jpg",
    "bitrate": 11290,
    "framerate": 30,
    "class": "Video360Resource"
   }
  ],
  "partial": false,
  "id": "media_1303D6D0_0D5E_9477_418D_6C69E4D7DCD9",
  "loop": false,
  "hfovMax": 140,
  "pitch": 0,
  "hfov": 360,
  "hfovMin": 60,
  "label": "penutupan asoka",
  "vfov": 180,
  "overlays": [
   {
    "useHandCursor": true,
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotPanoramaOverlayArea"
     }
    ],
    "id": "overlay_2536ADF0_0D35_9437_41A5_233860946ACA",
    "maps": [
     {
      "playbackPositions": [
       {
        "hfov": 56,
        "yaw": -75.56,
        "roll": 0,
        "timestamp": 0,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "pitch": -18.24
       }
      ],
      "yaw": 0,
      "image": {
       "levels": [
        {
         "height": 200,
         "width": 200,
         "url": "media/media_1303D6D0_0D5E_9477_418D_6C69E4D7DCD9_HS_0_0_0_map.gif",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "HotspotPanoramaOverlayMap",
      "pitch": 0
     }
    ],
    "items": [
     {
      "yaw": 0,
      "playbackPositions": [
       {
        "hfov": 56,
        "yaw": -75.56,
        "roll": 0,
        "timestamp": 0,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "pitch": -18.24
       }
      ],
      "image": {
       "levels": [
        {
         "height": 800,
         "width": 800,
         "url": "media/media_1303D6D0_0D5E_9477_418D_6C69E4D7DCD9_HS_0_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "HotspotPanoramaOverlayImage",
      "pitch": 0
     }
    ],
    "enabledInCardboard": true,
    "data": {
     "label": "Image"
    },
    "rollOverDisplay": false,
    "class": "HotspotPanoramaOverlay"
   },
   {
    "areas": [
     {
      "click": "this.openLink(\"https://www.google.co.id/maps/@-6.2714605,106.8343562,3a,75y,119.51h,87.92t/data=!3m7!1e1!3m5!1sR3UjCrfe8EVGwlnqV2Z-Yg!2e0!6s%2F%2Fgeo0.ggpht.com%2Fcbk%3Fpanoid%3DR3UjCrfe8EVGwlnqV2Z-Yg%26output%3Dthumbnail%26cb_client%3Dmaps_sv.tactile.gps%26thumb%3D2%26w%3D203%26h%3D100%26yaw%3D173.51045%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656\", \"_blank\")",
      "mapColor": "#FF0000",
      "class": "HotspotPanoramaOverlayArea"
     }
    ],
    "id": "overlay_25A1F56A_0D36_F42B_4108_9D59934C04A0",
    "maps": [
     {
      "playbackPositions": [
       {
        "hfov": 32.2,
        "yaw": -36.13,
        "roll": 0,
        "timestamp": 0,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "pitch": 45.16
       }
      ],
      "yaw": 0,
      "image": {
       "levels": [
        {
         "height": 200,
         "width": 200,
         "url": "media/media_1303D6D0_0D5E_9477_418D_6C69E4D7DCD9_HS_1_0_0_map.gif",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "HotspotPanoramaOverlayMap",
      "pitch": 0
     }
    ],
    "useHandCursor": true,
    "data": {
     "label": "Image"
    },
    "class": "HotspotPanoramaOverlay",
    "rollOverDisplay": false,
    "items": [
     {
      "yaw": 0,
      "playbackPositions": [
       {
        "hfov": 32.2,
        "yaw": -36.13,
        "roll": 0,
        "timestamp": 0,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "pitch": 45.16
       }
      ],
      "image": {
       "levels": [
        {
         "height": 800,
         "width": 800,
         "url": "media/media_1303D6D0_0D5E_9477_418D_6C69E4D7DCD9_HS_1_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "HotspotPanoramaOverlayImage",
      "pitch": 0
     }
    ]
   }
  ],
  "class": "Video360"
 },
 {
  "id": "media_1303D6D0_0D5E_9477_418D_6C69E4D7DCD9_camera",
  "initialPosition": {
   "hfov": 120,
   "yaw": 0,
   "class": "RotationalCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "manualRotationSpeed": 1800,
  "manualZoomSpeed": 1,
  "automaticRotationSpeed": 10,
  "class": "RotationalCamera"
 },
 {
  "id": "playList_233D6E17_0DCA_B7F9_41A5_EDA0EBDEC318",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.media_1303D6D0_0D5E_9477_418D_6C69E4D7DCD9",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)",
    "camera": "this.media_1303D6D0_0D5E_9477_418D_6C69E4D7DCD9_camera",
    "class": "Video360PlayListItem",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_233D6E17_0DCA_B7F9_41A5_EDA0EBDEC318, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_233D6E17_0DCA_B7F9_41A5_EDA0EBDEC318, 0, this.media_1303D6D0_0D5E_9477_418D_6C69E4D7DCD9)"
   }
  ]
 },
 {
  "id": "camera_23066E4B_0DCA_B469_41A8_388F0FF527D1",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -169.9,
   "class": "PanoramaCameraPosition",
   "pitch": -5.51
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_231A6E5E_0DCA_B46B_419A_48B8DB0B96AF",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -50.51,
   "class": "PanoramaCameraPosition",
   "pitch": -3.67
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_23199E6F_0DCA_B429_41A8_181E20742485",
  "initialPosition": {
   "hfov": 120,
   "yaw": 0,
   "class": "RotationalCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "manualRotationSpeed": 1800,
  "manualZoomSpeed": 1,
  "automaticRotationSpeed": 10,
  "class": "RotationalCamera"
 },
 {
  "id": "camera_23129E81_0DCA_B4D9_41AA_7BFA74F79976",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_23177E94_0DCA_B4FF_4180_46C155CB8B08",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -141.43,
   "class": "PanoramaCameraPosition",
   "pitch": 9.18
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_23EB2EA7_0DCA_B4D9_4174_25452D9291F2",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 112.96,
   "class": "PanoramaCameraPosition",
   "pitch": 11.94
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_23ED2EBB_0DCA_B429_4193_EC1A0C1C1F3B",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -111.12,
   "class": "PanoramaCameraPosition",
   "pitch": 15.61
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_23E68ECD_0DCA_B469_41A2_3F78BC977DA2",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -21.12,
   "class": "PanoramaCameraPosition",
   "pitch": 1.84
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_23F82EE1_0DCA_B459_4194_ABEB28FBF92C",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 17.45,
   "class": "PanoramaCameraPosition",
   "pitch": 0.92
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_23F3CEF4_0DCA_B43F_41A7_77BC2C457FFB",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 13.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_23CBCF06_0DCA_B5DB_4196_A5C782D35EF0",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -37.65,
   "class": "PanoramaCameraPosition",
   "pitch": 1.84
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_23C23F3A_0DCA_B42B_4192_853719EB2664",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 176.33,
   "class": "PanoramaCameraPosition",
   "pitch": 9.18
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_23DA1F5D_0DCA_B469_4190_02467AEA06CF",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 119.39,
   "class": "PanoramaCameraPosition",
   "pitch": 21.12
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_23D03F7B_0DCA_B429_41A3_E696D19B84D1",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -134.08,
   "class": "PanoramaCameraPosition",
   "pitch": 7.35
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_23A95F9C_0DCA_B4EF_4198_33A5C91FB75C",
  "initialPosition": {
   "hfov": 120,
   "yaw": 1.84,
   "class": "RotationalCameraPosition",
   "pitch": 5.51
  },
  "automaticZoomSpeed": 10,
  "manualRotationSpeed": 1800,
  "manualZoomSpeed": 1,
  "automaticRotationSpeed": 10,
  "class": "RotationalCamera"
 },
 {
  "id": "camera_23A64FBE_0DCA_B42B_4191_059A29280595",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -101.94,
   "class": "PanoramaCameraPosition",
   "pitch": 14.69
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_23B24FDD_0DCA_B469_41A8_C11A96816AC1",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -35.82,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_238F8000_0DCA_8BD7_41A2_B0DC54B66C00",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 80.82,
   "class": "PanoramaCameraPosition",
   "pitch": 1.84
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_23991022_0DCA_8BDB_4197_A5F3F0B09DEF",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 180,
   "class": "PanoramaCameraPosition",
   "pitch": 10.1
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_226A303F_0DCA_8C29_41A5_C2F652A0DAF2",
  "initialPosition": {
   "hfov": 120,
   "yaw": -10.1,
   "class": "RotationalCameraPosition",
   "pitch": 2.76
  },
  "automaticZoomSpeed": 10,
  "manualRotationSpeed": 1800,
  "manualZoomSpeed": 1,
  "automaticRotationSpeed": 10,
  "class": "RotationalCamera"
 },
 {
  "id": "camera_2264C063_0DCA_8C59_4194_8E09410D9759",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -155.2,
   "class": "PanoramaCameraPosition",
   "pitch": -4.59
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_2276E084_0DCA_8CD8_4177_2D06F165BD66",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 58.78,
   "class": "PanoramaCameraPosition",
   "pitch": -0.92
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_224070A7_0DCA_8CD9_4184_6BED43B1EEDE",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -10.1,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_225D70C5_0DCA_8C59_41A4_C50C5796AD25",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 79.9,
   "class": "PanoramaCameraPosition",
   "pitch": 4.59
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_222F10E8_0DCA_8C57_419F_0BC19D796652",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 170.82,
   "class": "PanoramaCameraPosition",
   "pitch": 12.86
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_2238210A_0DCA_8DEB_4199_795BDB1B4E3D",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 147.86,
   "class": "PanoramaCameraPosition",
   "pitch": 1.84
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_220BE12D_0DCA_8C29_41A3_A5B64D9C354C",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 55.1,
   "class": "PanoramaCameraPosition",
   "pitch": -5.51
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_22057150_0DCA_8C77_4185_A8F0AE60D16A",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -109.29,
   "class": "PanoramaCameraPosition",
   "pitch": 4.59
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_2216316E_0DCA_8C2B_418E_109F5DF83654",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 29.39,
   "class": "PanoramaCameraPosition",
   "pitch": 2.76
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_22E0618E_0DCA_8CEB_41A5_BC09EF67F702",
  "initialPosition": {
   "hfov": 120,
   "yaw": 90.92,
   "class": "RotationalCameraPosition",
   "pitch": -2.76
  },
  "automaticZoomSpeed": 10,
  "manualRotationSpeed": 1800,
  "manualZoomSpeed": 1,
  "automaticRotationSpeed": 10,
  "class": "RotationalCamera"
 },
 {
  "id": "camera_22F0E1B0_0DCA_8C37_41A0_C1D7C885D03C",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_22CDB1D2_0DCA_8C7B_4180_9343E539987A",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -99.18,
   "class": "PanoramaCameraPosition",
   "pitch": 3.67
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_22DC81FA_0DCA_8C2B_419B_B37644D7A0D9",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 178.16,
   "class": "PanoramaCameraPosition",
   "pitch": 14.69
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_22AED21E_0DCA_8FEB_41A7_DDCBDE7A44EB",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 72.55,
   "class": "PanoramaCameraPosition",
   "pitch": -3.67
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_22B9D241_0DCA_8C59_41A5_F989D032AAB0",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -47.76,
   "class": "PanoramaCameraPosition",
   "pitch": 3.67
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_228A425F_0DCA_8C69_41A4_2A7AB44756CC",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 162.55,
   "class": "PanoramaCameraPosition",
   "pitch": 5.51
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_22854282_0DCA_8CDB_41A4_20955775EE5C",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 106.53,
   "class": "PanoramaCameraPosition",
   "pitch": 4.59
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_2297D2A0_0DCA_8CD7_4185_F76A19625E7C",
  "initialPosition": {
   "hfov": 120,
   "yaw": 91.84,
   "class": "RotationalCameraPosition",
   "pitch": 4.59
  },
  "automaticZoomSpeed": 10,
  "manualRotationSpeed": 1800,
  "manualZoomSpeed": 1,
  "automaticRotationSpeed": 10,
  "class": "RotationalCamera"
 },
 {
  "id": "camera_3D6622C3_0DCA_8C59_41A0_7A170E7E1F4C",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0.92
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_3D70C2E6_0DCA_8C5B_41AA_5D8497EF0348",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -27.55,
   "class": "PanoramaCameraPosition",
   "pitch": 5.51
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_3D43C30A_0DCA_8DEB_4191_142BE95DB1EF",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -11.02,
   "class": "PanoramaCameraPosition",
   "pitch": -5.51
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_3D5C532D_0DCA_8C29_4198_BA33B0BDC99B",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 78.98,
   "class": "PanoramaCameraPosition",
   "pitch": -3.67
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_3D2CC34B_0DCA_8C69_41A2_D7C459CE7217",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 177.24,
   "class": "PanoramaCameraPosition",
   "pitch": 8.27
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_3D39436E_0DCA_8C2B_41A8_F6367966A7FD",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -126.73,
   "class": "PanoramaCameraPosition",
   "pitch": 3.67
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_3D084391_0DCA_8CF9_419F_F170CE3B24CB",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -171.73,
   "class": "PanoramaCameraPosition",
   "pitch": 9.18
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_3D1B53B4_0DCA_8C3F_412C_275601402FF0",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 119.39,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_3D1583D2_0DCA_8C7B_41A5_59442D063B18",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -139.59,
   "class": "PanoramaCameraPosition",
   "pitch": 5.51
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_3DE443F6_0DCA_8C3B_41A5_EEC9CA9D37CC",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 132.24,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 }
], "children": [
 {
  "progressHeight": 10,
  "toolTipOpacity": 1,
  "progressBottom": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "playbackBarProgressBorderRadius": 0,
  "paddingRight": 0,
  "transitionMode": "blending",
  "toolTipPaddingTop": 4,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipTextShadowOpacity": 0,
  "toolTipDisplayTime": 600,
  "toolTipFontColor": "#606060",
  "borderRadius": 0,
  "progressBorderSize": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipShadowSpread": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "minWidth": 100,
  "toolTipShadowOpacity": 1,
  "class": "ViewerArea",
  "shadow": false,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarBottom": 5,
  "playbackBarProgressOpacity": 1,
  "playbackBarBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "paddingBottom": 0,
  "toolTipFontSize": 12,
  "playbackBarHeadBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBorderSize": 0,
  "progressBarOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBarBorderRadius": 0,
  "toolTipShadowColor": "#333333",
  "height": "100%",
  "playbackBarHeadShadow": true,
  "toolTipTextShadowColor": "#000000",
  "paddingTop": 0,
  "toolTipShadowBlurRadius": 3,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarLeft": 0,
  "width": "100%",
  "progressBackgroundColorRatios": [
   0
  ],
  "paddingLeft": 0,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadHeight": 15,
  "progressRight": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadOpacity": 1,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "minHeight": 50,
  "toolTipBorderRadius": 3,
  "toolTipPaddingBottom": 4,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipFontFamily": "Arial",
  "playbackBarHeight": 10,
  "progressBorderRadius": 0,
  "toolTipBorderColor": "#767676",
  "id": "MainViewer",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadWidth": 6,
  "progressBorderColor": "#000000",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarBorderRadius": 0,
  "progressOpacity": 1,
  "progressLeft": 0,
  "toolTipFontWeight": "normal",
  "progressBarBorderSize": 0,
  "toolTipFontStyle": "normal",
  "playbackBarBackgroundOpacity": 1,
  "transitionDuration": 500,
  "playbackBarRight": 0,
  "playbackBarOpacity": 1,
  "toolTipBorderSize": 1,
  "borderSize": 0,
  "toolTipPaddingRight": 6
 },
 {
  "verticalAlign": "top",
  "children": [
   {
    "verticalAlign": "middle",
    "borderSize": 0,
    "paddingRight": 0,
    "height": "100%",
    "maxHeight": 823,
    "paddingTop": 0,
    "paddingLeft": 0,
    "borderRadius": 0,
    "url": "skin/Image_E578083A_FEC2_D48D_41E4_89AA075DFC34.png",
    "horizontalAlign": "center",
    "maxWidth": 1457,
    "width": "100%",
    "minWidth": 1,
    "class": "Image",
    "top": "0%",
    "minHeight": 1,
    "shadow": false,
    "backgroundOpacity": 0,
    "id": "Image_E578083A_FEC2_D48D_41E4_89AA075DFC34",
    "data": {
     "name": "logo"
    },
    "scaleMode": "fit_inside",
    "paddingBottom": 0,
    "left": "0%"
   }
  ],
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "paddingRight": 0,
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "height": "9.891%",
  "paddingTop": 0,
  "borderRadius": 0,
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "gap": 10,
  "horizontalAlign": "left",
  "width": "10.615%",
  "minWidth": 1,
  "class": "Container",
  "top": "0%",
  "minHeight": 1,
  "shadow": false,
  "scrollBarMargin": 2,
  "backgroundOpacity": 0,
  "id": "Container_E7EB2192_FEC6_B79D_41EA_EEA782BCEA42",
  "data": {
   "name": "Containerlogo"
  },
  "layout": "absolute",
  "creationPolicy": "delayed",
  "paddingBottom": 0,
  "scrollBarOpacity": 0.5,
  "right": "0%",
  "overflow": "scroll"
 },
 {
  "verticalAlign": "top",
  "children": [
   {
    "verticalAlign": "top",
    "children": [
     {
      "verticalAlign": "top",
      "children": [
       {
        "verticalAlign": "middle",
        "borderSize": 0,
        "paddingRight": 0,
        "mode": "push",
        "width": 95,
        "height": 105,
        "maxHeight": 600,
        "paddingTop": 0,
        "borderRadius": 0,
        "paddingLeft": 0,
        "iconURL": "skin/IconButton_1EA43467_0CCE_9459_41A3_894C06C6BED8.png",
        "click": "this.setComponentVisibility(this.Container_1E6CC0D0_0CDD_8C77_4198_D491EAA50E6C, false, 0, null, null, false)",
        "horizontalAlign": "center",
        "maxWidth": 600,
        "minWidth": 1,
        "class": "IconButton",
        "minHeight": 1,
        "cursor": "hand",
        "shadow": false,
        "backgroundOpacity": 0,
        "id": "IconButton_1EA43467_0CCE_9459_41A3_894C06C6BED8",
        "data": {
         "name": "IconButton10900"
        },
        "paddingBottom": 0,
        "transparencyActive": true
       }
      ],
      "scrollBarVisible": "rollOver",
      "borderSize": 0,
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "scrollBarColor": "#000000",
      "paddingRight": 0,
      "height": "15%",
      "paddingTop": 0,
      "borderRadius": 0,
      "paddingLeft": 0,
      "scrollBarWidth": 10,
      "backgroundColorRatios": [
       0,
       1
      ],
      "gap": 10,
      "backgroundColorDirection": "vertical",
      "minWidth": 1,
      "class": "Container",
      "shadow": false,
      "minHeight": 1,
      "scrollBarMargin": 2,
      "backgroundOpacity": 0.3,
      "id": "Container_1ECDEB78_0CCA_9C37_4199_B1D19C49885E",
      "data": {
       "name": "close button frane"
      },
      "layout": "horizontal",
      "horizontalAlign": "right",
      "creationPolicy": "delayed",
      "paddingBottom": 0,
      "scrollBarOpacity": 0.5,
      "width": "100%",
      "contentOpaque": false,
      "overflow": "scroll"
     },
     {
      "verticalAlign": "top",
      "children": [
       {
        "verticalAlign": "top",
        "children": [
         {
          "borderSize": 0,
          "backgroundColor": [
           "#FFFFFF"
          ],
          "scrollEnabled": true,
          "paddingRight": 0,
          "height": "98.716%",
          "paddingTop": 0,
          "borderRadius": 0,
          "paddingLeft": 0,
          "url": "https://sketchfab.com/models/130602dfea3f4b61a914bdd5c48c1ced/embed",
          "backgroundColorRatios": [
           0
          ],
          "backgroundColorDirection": "vertical",
          "insetBorder": false,
          "minWidth": 1,
          "class": "WebFrame",
          "shadow": false,
          "minHeight": 1,
          "backgroundOpacity": 1,
          "id": "WebFrame_1F3A9B80_0D3D_9CD7_418C_55D8338D5428",
          "data": {
           "name": "WebFrame12088"
          },
          "width": "96.936%",
          "paddingBottom": 0
         }
        ],
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "scrollBarColor": "#000000",
        "paddingRight": 0,
        "height": "100%",
        "paddingTop": 0,
        "borderRadius": 0,
        "paddingLeft": 0,
        "scrollBarWidth": 10,
        "backgroundColorRatios": [
         0,
         1
        ],
        "gap": 10,
        "backgroundColorDirection": "vertical",
        "minWidth": 1,
        "class": "Container",
        "shadow": false,
        "minHeight": 1,
        "scrollBarMargin": 2,
        "backgroundOpacity": 0.3,
        "id": "Container_1F5F05A6_0D35_B4DB_419B_F8D2FA8C69B2",
        "data": {
         "name": "3dltille frame"
        },
        "layout": "vertical",
        "horizontalAlign": "right",
        "creationPolicy": "delayed",
        "paddingBottom": 0,
        "scrollBarOpacity": 0.5,
        "width": "65%",
        "contentOpaque": false,
        "overflow": "scroll"
       },
       {
        "verticalAlign": "top",
        "children": [
         {
          "verticalAlign": "middle",
          "borderSize": 0,
          "paddingRight": 0,
          "height": "62.752%",
          "maxHeight": 428,
          "paddingTop": 0,
          "paddingLeft": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "url": "skin/Image_1F163DEA_0D3D_942B_416A_F7C81FC5A406.jpeg",
          "maxWidth": 540,
          "width": "100%",
          "minWidth": 1,
          "class": "Image",
          "shadow": false,
          "minHeight": 1,
          "backgroundOpacity": 0,
          "id": "Image_1F163DEA_0D3D_942B_416A_F7C81FC5A406",
          "data": {
           "name": "Image12261"
          },
          "scaleMode": "fit_inside",
          "paddingBottom": 0
         },
         {
          "verticalAlign": "middle",
          "borderSize": 0,
          "paddingRight": 0,
          "mode": "push",
          "width": 135,
          "height": 52,
          "maxHeight": 160,
          "paddingTop": 0,
          "rollOverIconURL": "skin/IconButton_1C9F4F50_0D3A_B477_4161_8B3FE6A39E04_rollover.jpg",
          "borderRadius": 0,
          "paddingLeft": 0,
          "iconURL": "skin/IconButton_1C9F4F50_0D3A_B477_4161_8B3FE6A39E04.jpg",
          "click": "this.openLink(\"https://www.ikea.co.id/in/produk/ruang-keluarga/sofa-dan-kursi-berlengan/sofa/stockholm-sofa-3-dudukan-alami-art-30245044\", \"_blank\")",
          "horizontalAlign": "center",
          "maxWidth": 390,
          "minWidth": 1,
          "class": "IconButton",
          "minHeight": 1,
          "cursor": "hand",
          "shadow": false,
          "backgroundOpacity": 0,
          "id": "IconButton_1C9F4F50_0D3A_B477_4161_8B3FE6A39E04",
          "data": {
           "name": "IconButton12873"
          },
          "paddingBottom": 0,
          "transparencyActive": false
         }
        ],
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "scrollBarColor": "#000000",
        "paddingRight": 0,
        "height": "100%",
        "paddingTop": 0,
        "borderRadius": 0,
        "paddingLeft": 0,
        "scrollBarWidth": 10,
        "backgroundColorRatios": [
         0,
         1
        ],
        "gap": 50,
        "backgroundColorDirection": "vertical",
        "minWidth": 1,
        "class": "Container",
        "shadow": false,
        "minHeight": 1,
        "scrollBarMargin": 2,
        "backgroundOpacity": 0.3,
        "id": "Container_1F67B7AE_0D3A_742B_41A6_C30EE97F16A1",
        "data": {
         "name": "ketbarang"
        },
        "layout": "vertical",
        "horizontalAlign": "left",
        "creationPolicy": "delayed",
        "paddingBottom": 0,
        "scrollBarOpacity": 0.5,
        "width": "34.524%",
        "contentOpaque": false,
        "overflow": "scroll"
       }
      ],
      "scrollBarVisible": "rollOver",
      "borderSize": 0,
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "scrollBarColor": "#000000",
      "paddingRight": 0,
      "height": "77.976%",
      "paddingTop": 0,
      "borderRadius": 0,
      "paddingLeft": 0,
      "scrollBarWidth": 10,
      "backgroundColorRatios": [
       0,
       1
      ],
      "gap": 25,
      "backgroundColorDirection": "vertical",
      "minWidth": 1,
      "class": "Container",
      "shadow": false,
      "minHeight": 1,
      "scrollBarMargin": 2,
      "backgroundOpacity": 0.3,
      "id": "Container_1F68764B_0D35_F469_419C_027D6BCC5D35",
      "data": {
       "name": "3dframe"
      },
      "layout": "horizontal",
      "horizontalAlign": "center",
      "creationPolicy": "delayed",
      "paddingBottom": 0,
      "scrollBarOpacity": 0.5,
      "width": "100%",
      "contentOpaque": false,
      "overflow": "scroll"
     }
    ],
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "paddingRight": 0,
    "scrollBarColor": "#000000",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "paddingTop": 0,
    "paddingLeft": 0,
    "borderRadius": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "gap": 1,
    "backgroundColorDirection": "vertical",
    "width": "76%",
    "minWidth": 1,
    "class": "Container",
    "top": "12%",
    "minHeight": 1,
    "shadow": false,
    "scrollBarMargin": 2,
    "backgroundOpacity": 1,
    "id": "Container_1EF518DF_0CDF_BC69_4191_6CB778BDDE83",
    "bottom": "12%",
    "scrollBarWidth": 10,
    "horizontalAlign": "left",
    "creationPolicy": "delayed",
    "paddingBottom": 0,
    "data": {
     "name": "frame beli 1"
    },
    "left": "12%",
    "layout": "vertical",
    "scrollBarOpacity": 0.5,
    "contentOpaque": false,
    "overflow": "scroll"
   }
  ],
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "scrollBarColor": "#000000",
  "paddingRight": 0,
  "height": "100%",
  "paddingTop": 0,
  "paddingLeft": 0,
  "borderRadius": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "gap": 10,
  "backgroundColorDirection": "vertical",
  "width": "100%",
  "minWidth": 1,
  "class": "Container",
  "top": "0%",
  "minHeight": 1,
  "visible": false,
  "shadow": false,
  "scrollBarMargin": 2,
  "backgroundOpacity": 0.6,
  "id": "Container_1E6CC0D0_0CDD_8C77_4198_D491EAA50E6C",
  "data": {
   "name": "frame beli sofa"
  },
  "layout": "absolute",
  "scrollBarWidth": 10,
  "horizontalAlign": "left",
  "creationPolicy": "delayed",
  "paddingBottom": 0,
  "left": "0%",
  "scrollBarOpacity": 0.5,
  "contentOpaque": false,
  "overflow": "scroll"
 },
 {
  "verticalAlign": "middle",
  "children": [
   "this.IconButton_212B6B7F_0DD5_FC29_41A7_5D8E8AB80CE4"
  ],
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "paddingRight": 0,
  "scrollBarColor": "#000000",
  "height": "12.614%",
  "paddingTop": 0,
  "borderRadius": 0,
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "gap": 10,
  "horizontalAlign": "right",
  "width": "100%",
  "minWidth": 1,
  "class": "Container",
  "shadow": false,
  "minHeight": 1,
  "scrollBarMargin": 2,
  "backgroundOpacity": 0,
  "id": "Container_2189B594_0DCA_94FF_41A6_33FB910AD51D",
  "data": {
   "name": "Container87737"
  },
  "bottom": "0%",
  "creationPolicy": "delayed",
  "paddingBottom": 0,
  "left": "0%",
  "layout": "horizontal",
  "scrollBarOpacity": 0.5,
  "contentOpaque": false,
  "overflow": "scroll"
 }
], 
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_212B6B7F_0DD5_FC29_41A7_5D8E8AB80CE4], 'cardboardAvailable'); this.mainPlayList.set('selectedIndex', 0)",
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "mouseWheelEnabled": true,
 "scrollBarColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "vrPolyfillScale": 0.5,
 "height": "100%",
 "paddingTop": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "mobileMipmappingEnabled": false,
 "gap": 10,
 "minWidth": 20,
 "class": "Player",
 "minHeight": 20,
 "scripts": {
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "getKey": function(key){  return window[key]; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "existsKey": function(key){  return key in window; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } }
 },
 "shadow": false,
 "scrollBarMargin": 2,
 "id": "rootPlayer",
 "data": {
  "name": "Player508"
 },
 "layout": "absolute",
 "horizontalAlign": "left",
 "creationPolicy": "delayed",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "backgroundPreloadEnabled": true,
 "contentOpaque": false,
 "overflow": "visible"
})