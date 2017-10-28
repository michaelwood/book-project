/* Config for Artist book project. 
 * This is a js object that is loaded as a js file to the main index
 *
 * Width/Height/X/Y all in pixels
 * goesTo can be:
 *  - A url
 *  - A texts file from the ./texts/ directory
 *  - A page name
 */


var config = {

  pages: [
  {
    name: "front-cover",
    showPagination: true,
    clickTargets: [
    { 
      name: "title",
      width: 450,
      height: 212,
      x: 656,
      y: 172,
      goesTo: "front-pages",
    },
   ]
  },
  {
    name: "front-pages",
    showPagination: true,
  },
  {
    name: "title-page",
    showPagination: true,
    clickTargets: [
    { 
      name: "introduction",
      width: 424,
      height: 123,
      x: 298,
      y: 45,
      goesTo: "texts://intro-and-statement.html",
    },
    { 
      name: "inside-title",
      width: 512,
      height: 240,
      x: 954,
      y: 154,
      goesTo: "front-garden",
    },

   ]

  },
  {
    name: "front-garden",
    showPagination: true,
    audio: "audio/MW_sampled_269405__kiefspoon__road-traffic-ambience-in-london.mp3",
    clickTargets: [
    { 
      name: "demo",
      width: 204,
      height: 164,
      x: 576,
      y: 475,
      goesTo: "texts://a.html",
    },
    { 
      name: "poster",
      width: 102,
      height: 133,
      x: 107,
      y: 459,
      goesTo: "texts://a.html",
    },
    { 
      name: "dove",
      width: 127,
      height: 52,
      x: 368,
      y: 304,
      goesTo: "texts://a.html",
    },
    { 
      name: "noticeboard",
      width: 289,
      height: 187,
      x: 951,
      y: 243,
      goesTo: "texts://b.html",
    },
    {
      name: "front door",
      width: 232,
      height: 391,
      x: 1305,
      y: 250,
      goesTo: "library",
    },

    ]
  },
  /* Library page 1 */
  {
    name: "library",
    clickTargets: [
      {
        name: "painting",
        width: 232,
        height: 159,
        x: 377,
        y: 195,
        goesTo: "texts://z.html",
      },
      {
        name: "picture-meeting-in-park",
        width: 97,
        height: 95,
        x: 619,
        y: 200,
        goesTo: "texts://y.html",
      },
      {
        name: "leaflet-QW",
        width: 66,
        height: 36,
        x: 520,
        y: 371,
        goesTo: "minibooks://QW",
      },
      {
        name: "leaflet-QP",
        width: 66,
        height: 36,
        x: 585,
        y: 371,
        goesTo: "minibooks://QP",
      },
      {
        name: "leaflet-QT",
        width: 64,
        height: 27,
        x: 584,
        y: 406,
        goesTo: "minibooks://QT",
      },

      {
        name: "leaflet-QFT",
        width: 64,
        height: 27,
        x: 519,
        y: 406,
        goesTo: "minibooks://QFT",
      },
      {
        name: "booklet-1",
        width: 107,
        height: 78,
        x: 825,
        y: 85,
        goesTo: "minibooks://book-1",
      },
      {
        name: "booklet-2",
        width: 86,
        height: 61,
        x: 1083,
        y: 99,
        goesTo: "minibooks://book-2",
      },
      {
        name: "booklet-3",
        width: 90,
        height: 49,
        x: 1206,
        y: 114,
        goesTo: "minibooks://book-3",
      },
      {
        name: "booklet-4",
        width: 102,
        height: 59,
        x: 1327,
        y: 103,
        goesTo: "minibooks://book-4",
      }, 
      {
        name: "booklet-5",
        width: 94,
        height: 72,
        x: 1460,
        y: 90,
        goesTo: "minibooks://book-5",
      },
      /* Row 2 */
      {
        name: "booklet-6",
        width: 91,
        height: 22,
        x: 960,
        y: 302,
        goesTo: "minibooks://book-6",
      },
      {
        name: "booklet-7",
        width: 100,
        height: 62,
        x: 1080,
        y: 262,
        goesTo: "minibooks://book-7",
      },
      {
        name: "booklet-8",
        width: 102,
        height: 39,
        x: 1330,
        y: 281,
        goesTo: "minibooks://book-8",
      },
      {
        name: "booklet-9",
        width: 97,
        height: 35,
        x: 1457,
        y: 283,
        goesTo: "minibooks://book-9",
      },
      {
        name: "door",
        width: 250,
        height: 410,
        x: 9,
        y: 229,
        goesTo: "front-garden",
      },

      {
        name: "meeting-room-sign",
        width: 173,
        height: 34,
        x: 1372,
        y: 436,
        goesTo: "meeting-room",
      },


    ],
  },
  {
    name: "meeting-room",
    clickTargets: [
    {
        name: "library-sign",
        width: 108,
        height: 51,
        x: 1,
        y: 447,
        goesTo: "library",
    },
    {
        name: "booklet-10",
        width: 162,
        height: 212,
        x: 21,
        y: 243,
        goesTo: "minibooks://book-10",
      },
      {
        name: "booklet-11",
        width: 135,
        height: 252,
        x: 189,
        y: 173,
        goesTo: "minibooks://book-11",
      },
      {
        name: "booklet-12",
        width: 136,
        height: 204,
        x: 319,
        y: 209,
        goesTo: "minibooks://book-12",
      },
      {
        name: "booklet-13",
        width: 124,
        height: 183,
        x: 453,
        y: 211,
        goesTo: "minibooks://book-13",
      }, 
      {
        name: "booklet-14",
        width: 104,
        height: 174,
        x: 664,
        y: 194,
        goesTo: "minibooks://book-14",
      },
      {
        name: "booklet-15",
        width: 103,
        height: 164,
        x: 919,
        y: 202,
        goesTo: "minibooks://book-15",
      },
      {
        name: "booklet-16",
        width: 116,
        height: 156,
        x: 1029,
        y: 215,
        goesTo: "minibooks://book-16",
      },
      {
        name: "booklet-17",
        width: 120,
        height: 179,
        x: 1149,
        y: 200,
        goesTo: "minibooks://book-17",
      },
      {
        name: "booklet-18",
        width: 150,
        height: 183,
        x: 1269,
        y: 194,
        goesTo: "minibooks://book-18",
      },
      {
        name: "booklet-19",
        width: 157,
        height: 217,
        x: 1428,
        y: 176,
        goesTo: "minibooks://book-19",
      },
      {
        name: "clock",
        width: 110,
        height: 108,
        x: 1401,
        y: 20,
        goesTo: "texts://d.html",
      },
      {
        name: "handshake",
        width: 275,
        height: 80,
        x: 1213,
        y: 373,
        goesTo: "childrens-room",
      },
    ],
  },
  {
    name: "childrens-room",
    audio: "audio/MW_sampled_156909__alistair-i-macdonald__cafe-noise.mp3",
    clickTargets: [

      {
        name: "meeting-house-sign",
        width: 150,
        height: 44,
        x: 1,
        y: 300,
        goesTo: "meeting-room",
      },
      {
        name: "refreshments",
        width: 169,
        height: 109,
        x: 168,
        y: 301,
        goesTo: "texts://e.html",
      },
      {
        name: "peaceable-k-painting",
        width: 203,
        height: 158,
        x: 41,
        y: 107,
        goesTo: "texts://f.html",
      },
      {
        name: "childrens-box",
        width: 264,
        height: 83,
        x: 488,
        y: 572,
        goesTo: "texts://g.html",
      },
      {
        name: "quaker-meeting-and-me",
        width: 94,
        height: 92,
        x: 613,
        y: 429,
        goesTo: "minibooks://QMM",
      },
      {
        name: "teach-peace-pack",
        width: 87,
        height: 87,
        x: 496,
        y: 466,
        goesTo: "texts://h.html",
      },
      {
        name: "living-simply-poster",
        width: 127,
        height: 169,
        x: 628,
        y: 202,
        goesTo: "texts://j.html",
      },
      {
        name: "prayer-flag",
        width: 276,
        height: 126,
        x: 449,
        y: 91,
        goesTo: "texts://k.html",
      },
      {
        name: "crane",
        width: 174,
        height: 109,
        x: 326,
        y: 120,
        goesTo: "texts://i.html",
      },
      {
        name: "fairtrade-mark",
        width: 50,
        height: 55,
        x: 852,
        y: 208,
        goesTo: "texts://l.html",
      },
      {
        name: "poster-sustain-life",
        width: 81,
        height: 104,
        x: 1137,
        y: 215,
        goesTo: "texts://n.html",
      },
      {
        name: "hands",
        width: 354,
        height: 297,
        x: 1217,
        y: 370,
        goesTo: "back-garden",
      },
      
    ],
  },
  {
    name: "back-garden",
    audio: "audio/MW_sampled_101393__earthsounds__garden-birds-3.mp3",
    clickTargets: [
    {
      name: "way-in-sign",
      width: 104,
      height: 70,
      x: 37,
      y: 173,
      goesTo: "childrens-room",
    },
    {
      name: "in-glad-remembrance",
      width: 126,
      height: 22,
      x: 168,
      y: 402,
      goesTo: "text-o",
    },
    {
      name: "tomb-curle",
      width: 134,
      height: 220,
      x: 102,
      y: 424,
      goesTo: "texts://p.html",
    },
    {
      name: "tomb-naylor",
      width: 128,
      height: 209,
      x: 452,
      y: 436,
      goesTo: "texts://q.html",
    },
    {
      name: "tomb-fox",
      width: 133,
      height: 193,
      x: 592,
      y: 452,
      goesTo: "texts://r.html",
    },
    {
      name: "noticeboard",
      width: 213,
      height: 242,
      x: 1236,
      y: 265,
      goesTo: "back-pages",
    },
    {
      name: "bird",
      width: 127,
      height: 62,
      x: 1394,
      y: 48,
      goesTo: "back-pages",
    },
    ],
  },
  {
    name: "back-pages",
    showPagination: true,
    clickTargets: [
    {
      name: "further-info",
      width: 612,
      height: 400,
      x: 59,
      y: 131,
      goesTo: "texts://further-info.html",
    }
    ]
  },
  {
    name: "back-cover",
    showPagination: true,
  },



  ],
  /* End pages */


  /* Mini book definitions 
   * Auto generated using ./tools/makejsarr.sh
   */
  miniBooks: [
  {
    name: "QW",
    pages: [
      "QWcrp1.jpg",
      "QWcrp2.jpg",
      "QWcrp3.jpg",
    ]
  },

 {
    name: "QFT",
    pages: [
      "QFTcrp1.jpg",
      "QFTcrp2.jpg",
      "QFTcrp3.jpg",
    ]
  },


 {
    name: "QT",
    pages: [
      "QTcrp1.jpg",
      "QTcrp2.jpg",
      "QTcrp3.jpg",
    ]
  },

 {
    name: "QP",
    pages: [
      "QPcrp1.jpg",
      "QPcrp2.jpg",
      "QPcrp3.jpg",
    ]
  },



  {
    name: "book-1",
    pages: [

      "book1.1.png",
      "book1.2.png",
      "book1.3.png",
      "book1.4.png",
      "book1.5.png",
      "book1.6.png",
      "book1.7.png",
      "book1.8.png",
      "book1.9.png",
      "book1.10.png",
      "book1.11.png",
    ]
  },
  {
    name: "book-2",
    pages: [

      "book2.1.png",
      "book2.2.png",
      "book2.3.png",
      "book2.4.png",
      "book2.5.png",
    ]
  },
  {
    name: "book-3",
    pages: [

      "book3.1.png",
      "book3.2.png",
      "book3.3.png",
/*      "book3.3rev.png",*/
      "book3.4.png",
      "book3.5.png",
      "book3.6.png",
      "book3.7.png",
    ]
  },
  {
    name: "book-4",
    pages: [

      "book4.1.png",
      "book4.2.png",
      "book4.3.png",
      "book4.4.png",
      "book4.5.png",
      "book4.6.png",
      "book4.7.png",
      "book4.8.png",
    ]
  },
  {
    name: "book-5",
    pages: [

      "book5.1.png",
      "book5.2.png",
      "book5.3.png",
      "book5.4.png",
      "book5.5.png",
      "book5.6.png",
      "book5.7.png",
      "book5.8.png",
      "book5.9.png",
      "book5.10.png",
      "book5.11.png",
      "book5.12.png",
    ]
  },
  {
    name: "book-6",
    pages: [

      "book6.1.png",
      "book6.2.png",
      "book6.3.png",
      "book6.4.png",
      "book6.5.png",
      "book6.6.png",
    ]
  },
  {
    name: "book-7",
    pages: [

      "book7.1.png",
      "book7.2.png",
      "book7.3.png",
      "book7.4.png",
      "book7.5.png",
      "book7.6.png",
    ]
  },
  {
    name: "book-8",
    pages: [

      "book8.1.png",
      "book8.2.png",
      "book8.3.png",
      "book8.4.png",
      "book8.5.png",
      "book8.6.png",
      "book8.7.png",
      "book8.8.png",
      "book8.10.png",
      "book8.11.png",
      "book8.12.png",
      "book8.13.png",
    ]
  },
  {
    name: "book-9",
    pages: [

      "book9.1.png",
      "book9.2.png",
      "book9.3.png",
      "book9.4.png",
    ]
  },
  {
    name: "book-10",
    pages: [

      "book10.1.png",
      "book10.2.png",
      "book10.4.png",
      "book10.5.png",
      "book10.6.png",
      "book10.7.png",
      "book10.8.png",
      "book10.10.png",
      "book10.11.png",
    ]
  },
  {
    name: "book-11",
    pages: [

      "book11.1.png",
      "book11.1a.png",
      "book11.1b.png",
      "book11.1c.png",
      "book11.1d.png",
      "book11.2.png",
      "book11.2a.png",
      "book11.3.png",
      "book11.4.png",
    ]
  },
  {
    name: "book-12",
    pages: [

      "book12.1.png",
      "book12.4.png",
      "book12.2.png",
      "book12.3.png",
    ]
  },
  {
    name: "book-13",
    pages: [

      "book13.1.png",
      "book13.2.png",
      "book13.3.png",
    ]
  },
  {
    name: "book-14",
    pages: [

      "book14.1.png",
      "book14.2.png",
      "book14.3.png",
      "book14.4.png",
      "book14.5.png",
    ]
  },
  {
    name: "book-15",
    pages: [

      "book15.1.png",
      "book15.2.png",
      "book15.3.png",
      "book15.4.png",
    ]
  },
  {
    name: "book-16",
    pages: [

      "book16.1.png",
      "book16.2.png",
      "book16.3.png",
      "book16.4.png",
      "book16.5.png",
    ]
  },
  {
    name: "book-17",
    pages: [

      "book17.1.png",
      "book17.2.png",
      "book17.3.png",
      "book17.4.png",
    ]
  },
  {
    name: "book-18",
    pages: [

      "book18.1.png",
      "book18.2.png",
      "book18.3.png",
    ]
  },
  {
    name: "book-19",
    pages: [

      "book19.1.png",
      "book19.2.png",
      "book19.3.png",
      "book19.4.png",
      "book19.5.png",
      "book19.6.png",
      "book19.7.png",
      "book19.8.png",
      "book19.9.png",
      "book19.10.png",
    ]
  },


  {
    name: "QMM",
    pages: [

      "QMM1crp.jpg",
      "QMM3.jpg",
      "QMM4.jpg",
      "QMM5.jpg",
      "QMM6.jpg",
      "QMM7.jpg",
      "QMM8.jpg",
      "QMM9.jpg",
      "QMM10.jpg",
      "QMM11.jpg",
      "QMM12.jpg",
      "QMM13.jpg",
    ]
  },





  ]

};
