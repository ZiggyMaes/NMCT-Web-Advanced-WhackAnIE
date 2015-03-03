/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.1.1.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'background',
                            display: 'none',
                            type: 'image',
                            rect: ['1px', '0px', '480px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"background.png",'0px','0px']
                        },
                        {
                            id: 'header_bg',
                            display: 'none',
                            type: 'rect',
                            rect: ['1px', '0px', '480px', '97px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(5,2,2,0.71)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'lifeLabel',
                            display: 'none',
                            type: 'text',
                            rect: ['14px', '36px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Lives:",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'scoreLabel',
                            display: 'none',
                            type: 'text',
                            rect: ['322px', '36px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Score:",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'scorePlaceholder',
                            display: 'none',
                            type: 'text',
                            rect: ['402px', '36px', 'auto', 'auto', 'auto', 'auto'],
                            text: "0",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'life1',
                            display: 'none',
                            type: 'image',
                            rect: ['74px', '27px', '45px', '45px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IE_persona.png",'0px','0px']
                        },
                        {
                            id: 'life2',
                            display: 'none',
                            type: 'image',
                            rect: ['122px', '27px', '45px', '45px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IE_persona.png",'0px','0px']
                        },
                        {
                            id: 'life3',
                            display: 'none',
                            type: 'image',
                            rect: ['170px', '27px', '45px', '45px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IE_persona.png",'0px','0px']
                        },
                        {
                            id: 'life4',
                            display: 'none',
                            type: 'image',
                            rect: ['218px', '27px', '45px', '45px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IE_persona.png",'0px','0px']
                        },
                        {
                            id: 'life5',
                            display: 'none',
                            type: 'image',
                            rect: ['269px', '27px', '45px', '45px', 'auto', 'auto'],
                            overflow: 'visible',
                            fill: ["rgba(0,0,0,0)",im+"IE_persona.png",'0px','0px']
                        },
                        {
                            id: 'IE_persona1',
                            display: 'none',
                            type: 'image',
                            rect: ['19px', '94px', '158px', '158px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IE_persona.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'IE_persona2',
                            display: 'none',
                            type: 'image',
                            rect: ['264px', '94px', '158px', '158px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IE_persona.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'IE_persona3',
                            display: 'none',
                            type: 'image',
                            rect: ['19px', '264px', '158px', '158px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IE_persona.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'IE_persona4',
                            display: 'none',
                            type: 'image',
                            rect: ['264px', '264px', '158px', '158px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IE_persona.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'IE_persona5',
                            display: 'none',
                            type: 'image',
                            rect: ['19px', '434px', '158px', '158px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IE_persona.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'IE_persona6',
                            display: 'none',
                            type: 'image',
                            rect: ['264px', '434px', '158px', '158px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IE_persona.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'IE_persona7',
                            display: 'none',
                            type: 'image',
                            rect: ['19px', '607px', '158px', '158px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IE_persona.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'IE_persona8',
                            display: 'none',
                            type: 'image',
                            rect: ['264px', '607px', '158px', '158px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IE_persona.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'FX_persona1',
                            display: 'none',
                            type: 'image',
                            rect: ['30px', '83px', '158px', '158px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"FX_persona.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'FX_persona2',
                            display: 'none',
                            type: 'image',
                            rect: ['272px', '83px', '158px', '158px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"FX_persona.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'FX_persona3',
                            display: 'none',
                            type: 'image',
                            rect: ['30px', '258px', '158px', '158px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"FX_persona.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'FX_persona4',
                            display: 'none',
                            type: 'image',
                            rect: ['272px', '258px', '158px', '158px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"FX_persona.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'FX_persona5',
                            display: 'none',
                            type: 'image',
                            rect: ['30px', '426px', '158px', '158px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"FX_persona.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'FX_persona6',
                            display: 'none',
                            type: 'image',
                            rect: ['272px', '426px', '158px', '158px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"FX_persona.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'FX_persona7',
                            display: 'none',
                            type: 'image',
                            rect: ['30px', '598px', '158px', '158px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"FX_persona.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'FX_persona8',
                            display: 'none',
                            type: 'image',
                            rect: ['272px', '598px', '158px', '158px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"FX_persona.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'highscores_bg',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', '480px', '800px', 'auto', 'auto'],
                            fill: ["rgba(177,237,76,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'highscore_header_score',
                            display: 'none',
                            type: 'text',
                            rect: ['395px', '97px', '69px', '45px', 'auto', 'auto'],
                            text: "Score",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'highscore_header_naam',
                            display: 'none',
                            type: 'text',
                            rect: ['206px', '97px', '69px', '28px', 'auto', 'auto'],
                            text: "Naam",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'highscore_header_pos',
                            display: 'none',
                            type: 'text',
                            rect: ['45px', '97px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Pos",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'highscore_header_titel',
                            display: 'none',
                            type: 'text',
                            rect: ['152px', '31px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Highscores",
                            font: ['Arial, Helvetica, sans-serif', [32, "px"], "rgba(0,0,0,1)", "700", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'highscore_backbutton',
                            display: 'none',
                            type: 'image',
                            rect: ['28px', '25px', '50px', '50px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"back.png",'0px','0px']
                        },
                        {
                            id: 'highscore_poslabel_1',
                            display: 'none',
                            type: 'text',
                            rect: ['60px', '141px', 'auto', 'auto', 'auto', 'auto'],
                            text: "1",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'highscore_poslabel_2',
                            display: 'none',
                            type: 'text',
                            rect: ['60px', '206px', 'auto', 'auto', 'auto', 'auto'],
                            text: "2",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'highscore_poslabel_3',
                            display: 'none',
                            type: 'text',
                            rect: ['60px', '280px', 'auto', 'auto', 'auto', 'auto'],
                            text: "3",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'highscore_poslabel_4',
                            display: 'none',
                            type: 'text',
                            rect: ['60px', '348px', 'auto', 'auto', 'auto', 'auto'],
                            text: "4",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'highscore_poslabel_5',
                            display: 'none',
                            type: 'text',
                            rect: ['60px', '416px', 'auto', 'auto', 'auto', 'auto'],
                            text: "5",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'highscore_poslabel_6',
                            display: 'none',
                            type: 'text',
                            rect: ['59px', '485px', 'auto', 'auto', 'auto', 'auto'],
                            text: "6",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'highscore_poslabel_7',
                            display: 'none',
                            type: 'text',
                            rect: ['60px', '556px', 'auto', 'auto', 'auto', 'auto'],
                            text: "7<br>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'highscore_poslabel_8',
                            display: 'none',
                            type: 'text',
                            rect: ['59px', '626px', 'auto', 'auto', 'auto', 'auto'],
                            text: "8",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'highscore_poslabel_9',
                            display: 'none',
                            type: 'text',
                            rect: ['59px', '696px', 'auto', 'auto', 'auto', 'auto'],
                            text: "9",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'highscore_poslabel_10',
                            display: 'none',
                            type: 'text',
                            rect: ['53px', '765px', 'auto', 'auto', 'auto', 'auto'],
                            text: "10",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'highscore_naamlabel_1',
                            display: 'none',
                            type: 'text',
                            rect: ['145px', '128px', '223px', '54px', 'auto', 'auto'],
                            text: "",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'highscore_naamlabel_2',
                            display: 'none',
                            type: 'text',
                            rect: ['145px', '193px', '223px', '54px', 'auto', 'auto'],
                            text: "",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'highscore_naamlabel_3',
                            display: 'none',
                            type: 'text',
                            rect: ['144px', '267px', '223px', '54px', 'auto', 'auto'],
                            text: "",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'highscore_naamlabel_4',
                            display: 'none',
                            type: 'text',
                            rect: ['144px', '335px', '223px', '54px', 'auto', 'auto'],
                            text: "",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'highscore_naamlabel_5',
                            display: 'none',
                            type: 'text',
                            rect: ['144px', '403px', '223px', '54px', 'auto', 'auto'],
                            text: "",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'highscore_naamlabel_6',
                            display: 'none',
                            type: 'text',
                            rect: ['144px', '472px', '223px', '54px', 'auto', 'auto'],
                            text: "",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'highscore_naamlabel_7',
                            display: 'none',
                            type: 'text',
                            rect: ['144px', '543px', '223px', '54px', 'auto', 'auto'],
                            text: "",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'highscore_naamlabel_8',
                            display: 'none',
                            type: 'text',
                            rect: ['144px', '613px', '223px', '54px', 'auto', 'auto'],
                            text: "",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'highscore_naamlabel_9',
                            display: 'none',
                            type: 'text',
                            rect: ['144px', '683px', '223px', '54px', 'auto', 'auto'],
                            text: "",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'highscore_naamlabel_10',
                            display: 'none',
                            type: 'text',
                            rect: ['144px', '747px', '223px', '48px', 'auto', 'auto'],
                            text: "",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'highscore_scorelabel_1',
                            display: 'none',
                            type: 'text',
                            rect: ['410px', '141px', 'auto', 'auto', 'auto', 'auto'],
                            text: "",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'highscore_scorelabel_2',
                            display: 'none',
                            type: 'text',
                            rect: ['410px', '206px', 'auto', 'auto', 'auto', 'auto'],
                            text: "",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'highscore_scorelabel_3',
                            display: 'none',
                            type: 'text',
                            rect: ['410px', '280px', 'auto', 'auto', 'auto', 'auto'],
                            text: "",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'highscore_scorelabel_4',
                            display: 'none',
                            type: 'text',
                            rect: ['410px', '348px', 'auto', 'auto', 'auto', 'auto'],
                            text: "",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'highscore_scorelabel_5',
                            display: 'none',
                            type: 'text',
                            rect: ['410px', '416px', 'auto', 'auto', 'auto', 'auto'],
                            text: "",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'highscore_scorelabel_6',
                            display: 'none',
                            type: 'text',
                            rect: ['410px', '485px', 'auto', 'auto', 'auto', 'auto'],
                            text: "",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'highscore_scorelabel_7',
                            display: 'none',
                            type: 'text',
                            rect: ['410px', '556px', 'auto', 'auto', 'auto', 'auto'],
                            text: "",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'highscore_scorelabel_8',
                            display: 'none',
                            type: 'text',
                            rect: ['410px', '626px', 'auto', 'auto', 'auto', 'auto'],
                            text: "",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'highscore_scorelabel_9',
                            display: 'none',
                            type: 'text',
                            rect: ['410px', '706px', 'auto', 'auto', 'auto', 'auto'],
                            text: "",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'highscore_scorelabel_10',
                            display: 'none',
                            type: 'text',
                            rect: ['410px', '765px', 'auto', 'auto', 'auto', 'auto'],
                            text: "",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'splash_bg',
                            display: 'block',
                            type: 'rect',
                            rect: ['0px', '0px', '480px', '800px', 'auto', 'auto'],
                            fill: ["rgba(177,237,76,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'splash_IE_alive',
                            display: 'block',
                            type: 'image',
                            rect: ['99px', '38px', '256px', '256px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IE_persona.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'splash_IE_dead',
                            display: 'none',
                            type: 'image',
                            rect: ['99px', '154px', '256px', '256px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IE_persona_dead.png",'0px','0px']
                        },
                        {
                            id: 'splash_hammer',
                            type: 'image',
                            rect: ['506px', '110px', '275px', '104px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Hammer.png",'0px','0px'],
                            transform: [[],['73'],[],['0','0']]
                        },
                        {
                            id: 'splash_title',
                            display: 'none',
                            type: 'text',
                            rect: ['-313px', '62px', 'auto', 'auto', 'auto', 'auto'],
                            text: "WhackIE",
                            align: "left",
                            font: ['Verdana, Geneva, sans-serif', [60, "px"], "rgba(255,0,0,1.00)", "700", "none solid rgb(255, 255, 255)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'splash_button_highscores',
                            symbolName: 'splash_button_highscores',
                            display: 'none',
                            type: 'rect',
                            rect: ['-322px', '628', '309', '73', 'auto', 'auto']
                        },
                        {
                            id: 'splash_button_play',
                            symbolName: 'splash_button_play',
                            display: 'none',
                            type: 'rect',
                            rect: ['490px', '492', '309', '73', 'auto', 'auto']
                        },
                        {
                            id: 'gameover_bg',
                            display: 'none',
                            type: 'rect',
                            rect: ['1px', '-712px', '480px', '702px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0.71)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'gameover_title',
                            display: 'none',
                            type: 'text',
                            rect: ['-368px', '143px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Game over",
                            align: "left",
                            font: ['Verdana, Geneva, sans-serif', [60, "px"], "rgba(255,255,255,1)", "700", "none solid rgb(255, 255, 255)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'gameover_button_retry',
                            symbolName: 'gameover_button_retry',
                            display: 'none',
                            type: 'rect',
                            rect: ['500px', '315px', '310', '73', 'auto', 'auto']
                        },
                        {
                            id: 'gameover_button_savescore',
                            symbolName: 'gameover_button_savescore',
                            display: 'none',
                            type: 'rect',
                            rect: ['-322px', '484px', '310', '73', 'auto', 'auto'],
                            transform: [[],[],[],['0.99718']]
                        },
                        {
                            id: 'savescore_button_save',
                            symbolName: 'savescore_button_save',
                            display: 'none',
                            type: 'rect',
                            rect: ['86', '484px', '309', '73', 'auto', 'auto']
                        },
                        {
                            id: 'savescore_name_placeholder',
                            display: 'none',
                            type: 'rect',
                            rect: ['-318px', '498px', '310px', '46px', 'auto', 'auto'],
                            fill: ["rgba(212,212,212,0.79)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'bg_music',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"bg_music.mp3"],
                            preload: 'auto'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '480px', '800px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 7250,
                    autoPlay: true,
                    labels: {
                        "Splash": 0,
                        "Highscores": 3000,
                        "Game": 5000,
                        "Gameover": 6000,
                        "Savescore": 7000
                    },
                    data: [
                        [
                            "eid314",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${splash_IE_dead}",
                            'none',
                            'block'
                        ],
                        [
                            "eid330",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${splash_IE_dead}",
                            'block',
                            'none'
                        ],
                        [
                            "eid315",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${splash_IE_alive}",
                            'block',
                            'none'
                        ],
                        [
                            "eid329",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${splash_IE_alive}",
                            'none',
                            'none'
                        ],
                        [
                            "eid173",
                            "display",
                            0,
                            0,
                            "linear",
                            "${highscore_header_pos}",
                            'none',
                            'none'
                        ],
                        [
                            "eid238",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${highscore_header_pos}",
                            'none',
                            'block'
                        ],
                        [
                            "eid274",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${highscore_header_pos}",
                            'block',
                            'none'
                        ],
                        [
                            "eid195",
                            "display",
                            0,
                            0,
                            "linear",
                            "${highscore_naamlabel_10}",
                            'none',
                            'none'
                        ],
                        [
                            "eid216",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${highscore_naamlabel_10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid252",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${highscore_naamlabel_10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid177",
                            "display",
                            0,
                            0,
                            "linear",
                            "${highscore_poslabel_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid234",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${highscore_poslabel_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid270",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${highscore_poslabel_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid200",
                            "display",
                            0,
                            0,
                            "linear",
                            "${highscore_scorelabel_5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid211",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${highscore_scorelabel_5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid247",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${highscore_scorelabel_5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid161",
                            "display",
                            0,
                            0,
                            "linear",
                            "${IE_persona8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid286",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${IE_persona8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid342",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${IE_persona8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid169",
                            "display",
                            0,
                            0,
                            "linear",
                            "${FX_persona8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid278",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${FX_persona8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid350",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${FX_persona8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid322",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${splash_title}",
                            'none',
                            'block'
                        ],
                        [
                            "eid332",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${splash_title}",
                            'block',
                            'none'
                        ],
                        [
                            "eid150",
                            "display",
                            0,
                            0,
                            "linear",
                            "${life2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid297",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${life2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid369",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${life2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid152",
                            "display",
                            0,
                            0,
                            "linear",
                            "${life4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid295",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${life4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid371",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${life4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid198",
                            "display",
                            0,
                            0,
                            "linear",
                            "${highscore_scorelabel_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid213",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${highscore_scorelabel_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid249",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${highscore_scorelabel_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid167",
                            "display",
                            0,
                            0,
                            "linear",
                            "${FX_persona6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid280",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${FX_persona6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid348",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${FX_persona6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid194",
                            "display",
                            0,
                            0,
                            "linear",
                            "${highscore_naamlabel_9}",
                            'none',
                            'none'
                        ],
                        [
                            "eid217",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${highscore_naamlabel_9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid253",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${highscore_naamlabel_9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid326",
                            "left",
                            1500,
                            250,
                            "linear",
                            "${splash_button_highscores}",
                            '-322px',
                            '86px'
                        ],
                        [
                            "eid175",
                            "display",
                            0,
                            0,
                            "linear",
                            "${highscore_backbutton}",
                            'none',
                            'none'
                        ],
                        [
                            "eid236",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${highscore_backbutton}",
                            'none',
                            'block'
                        ],
                        [
                            "eid272",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${highscore_backbutton}",
                            'block',
                            'none'
                        ],
                        [
                            "eid171",
                            "display",
                            0,
                            0,
                            "linear",
                            "${highscore_header_score}",
                            'none',
                            'none'
                        ],
                        [
                            "eid240",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${highscore_header_score}",
                            'none',
                            'block'
                        ],
                        [
                            "eid276",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${highscore_header_score}",
                            'block',
                            'none'
                        ],
                        [
                            "eid186",
                            "display",
                            0,
                            0,
                            "linear",
                            "${highscore_naamlabel_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid225",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${highscore_naamlabel_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid261",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${highscore_naamlabel_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid180",
                            "display",
                            0,
                            0,
                            "linear",
                            "${highscore_poslabel_5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid231",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${highscore_poslabel_5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid267",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${highscore_poslabel_5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid156",
                            "display",
                            0,
                            0,
                            "linear",
                            "${IE_persona3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid291",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${IE_persona3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid337",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${IE_persona3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid154",
                            "display",
                            0,
                            0,
                            "linear",
                            "${IE_persona1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid293",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${IE_persona1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid335",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${IE_persona1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid355",
                            "left",
                            6250,
                            250,
                            "linear",
                            "${gameover_title}",
                            '-368px',
                            '60px'
                        ],
                        [
                            "eid204",
                            "display",
                            0,
                            0,
                            "linear",
                            "${highscore_scorelabel_9}",
                            'none',
                            'none'
                        ],
                        [
                            "eid207",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${highscore_scorelabel_9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid243",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${highscore_scorelabel_9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid179",
                            "display",
                            0,
                            0,
                            "linear",
                            "${highscore_poslabel_4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid232",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${highscore_poslabel_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid268",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${highscore_poslabel_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid178",
                            "display",
                            0,
                            0,
                            "linear",
                            "${highscore_poslabel_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid233",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${highscore_poslabel_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid269",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${highscore_poslabel_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid316",
                            "top",
                            1500,
                            250,
                            "linear",
                            "${splash_IE_dead}",
                            '38px',
                            '154px'
                        ],
                        [
                            "eid374",
                            "left",
                            7000,
                            250,
                            "linear",
                            "${savescore_name_placeholder}",
                            '-318px',
                            '85px'
                        ],
                        [
                            "eid165",
                            "display",
                            0,
                            0,
                            "linear",
                            "${FX_persona4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid282",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${FX_persona4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid346",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${FX_persona4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid313",
                            "rotateZ",
                            750,
                            250,
                            "linear",
                            "${splash_hammer}",
                            '73deg',
                            '12deg'
                        ],
                        [
                            "eid351",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${gameover_bg}",
                            'none',
                            'block'
                        ],
                        [
                            "eid376",
                            "top",
                            7000,
                            250,
                            "linear",
                            "${savescore_button_save}",
                            '484px',
                            '656px'
                        ],
                        [
                            "eid151",
                            "display",
                            0,
                            0,
                            "linear",
                            "${life3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid296",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${life3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid370",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${life3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid361",
                            "left",
                            6250,
                            250,
                            "linear",
                            "${gameover_button_savescore}",
                            '-322px',
                            '86px'
                        ],
                        [
                            "eid153",
                            "display",
                            0,
                            0,
                            "linear",
                            "${life5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid294",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${life5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid372",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${life5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid311",
                            "scaleX",
                            500,
                            250,
                            "linear",
                            "${splash_hammer}",
                            '0',
                            '1'
                        ],
                        [
                            "eid146",
                            "display",
                            0,
                            0,
                            "linear",
                            "${lifeLabel}",
                            'none',
                            'none'
                        ],
                        [
                            "eid301",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${lifeLabel}",
                            'none',
                            'block'
                        ],
                        [
                            "eid325",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${splash_button_highscores}",
                            'none',
                            'block'
                        ],
                        [
                            "eid333",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${splash_button_highscores}",
                            'block',
                            'none'
                        ],
                        [
                            "eid323",
                            "left",
                            1500,
                            250,
                            "linear",
                            "${splash_title}",
                            '-313px',
                            '90px'
                        ],
                        [
                            "eid356",
                            "display",
                            6250,
                            0,
                            "linear",
                            "${gameover_button_retry}",
                            'none',
                            'block'
                        ],
                        [
                            "eid147",
                            "display",
                            0,
                            0,
                            "linear",
                            "${scoreLabel}",
                            'none',
                            'none'
                        ],
                        [
                            "eid300",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${scoreLabel}",
                            'none',
                            'block'
                        ],
                        [
                            "eid359",
                            "display",
                            6250,
                            0,
                            "linear",
                            "${gameover_button_savescore}",
                            'none',
                            'block'
                        ],
                        [
                            "eid375",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${gameover_button_savescore}",
                            'block',
                            'none'
                        ],
                        [
                            "eid310",
                            "scaleY",
                            0,
                            500,
                            "easeInOutElastic",
                            "${splash_IE_alive}",
                            '0',
                            '1'
                        ],
                        [
                            "eid312",
                            "scaleY",
                            500,
                            250,
                            "linear",
                            "${splash_hammer}",
                            '0',
                            '1'
                        ],
                        [
                            "eid358",
                            "top",
                            6500,
                            0,
                            "linear",
                            "${gameover_button_savescore}",
                            '484px',
                            '484px'
                        ],
                        [
                            "eid362",
                            "top",
                            7000,
                            250,
                            "linear",
                            "${gameover_button_savescore}",
                            '484px',
                            '660px'
                        ],
                        [
                            "eid181",
                            "display",
                            0,
                            0,
                            "linear",
                            "${highscore_poslabel_6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid230",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${highscore_poslabel_6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid266",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${highscore_poslabel_6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid172",
                            "display",
                            0,
                            0,
                            "linear",
                            "${highscore_header_naam}",
                            'none',
                            'none'
                        ],
                        [
                            "eid239",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${highscore_header_naam}",
                            'none',
                            'block'
                        ],
                        [
                            "eid275",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${highscore_header_naam}",
                            'block',
                            'none'
                        ],
                        [
                            "eid324",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${splash_button_play}",
                            'none',
                            'block'
                        ],
                        [
                            "eid334",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${splash_button_play}",
                            'block',
                            'none'
                        ],
                        [
                            "eid157",
                            "display",
                            0,
                            0,
                            "linear",
                            "${IE_persona4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid290",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${IE_persona4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid338",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${IE_persona4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid203",
                            "display",
                            0,
                            0,
                            "linear",
                            "${highscore_scorelabel_8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid208",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${highscore_scorelabel_8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid244",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${highscore_scorelabel_8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid187",
                            "display",
                            0,
                            0,
                            "linear",
                            "${highscore_naamlabel_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid224",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${highscore_naamlabel_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid260",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${highscore_naamlabel_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid377",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${savescore_button_save}",
                            'none',
                            'block'
                        ],
                        [
                            "eid170",
                            "display",
                            0,
                            0,
                            "linear",
                            "${highscores_bg}",
                            'none',
                            'none'
                        ],
                        [
                            "eid241",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${highscores_bg}",
                            'none',
                            'block'
                        ],
                        [
                            "eid277",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${highscores_bg}",
                            'block',
                            'none'
                        ],
                        [
                            "eid158",
                            "display",
                            0,
                            0,
                            "linear",
                            "${IE_persona5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid289",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${IE_persona5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid339",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${IE_persona5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid148",
                            "display",
                            0,
                            0,
                            "linear",
                            "${scorePlaceholder}",
                            'none',
                            'none'
                        ],
                        [
                            "eid299",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${scorePlaceholder}",
                            'none',
                            'block'
                        ],
                        [
                            "eid162",
                            "display",
                            0,
                            0,
                            "linear",
                            "${FX_persona1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid285",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${FX_persona1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid343",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${FX_persona1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid327",
                            "left",
                            1500,
                            250,
                            "linear",
                            "${splash_button_play}",
                            '490px',
                            '86px'
                        ],
                        [
                            "eid184",
                            "display",
                            0,
                            0,
                            "linear",
                            "${highscore_poslabel_9}",
                            'none',
                            'none'
                        ],
                        [
                            "eid227",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${highscore_poslabel_9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid263",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${highscore_poslabel_9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid185",
                            "display",
                            0,
                            0,
                            "linear",
                            "${highscore_poslabel_10}",
                            'none',
                            'none'
                        ],
                        [
                            "eid226",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${highscore_poslabel_10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid262",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${highscore_poslabel_10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid188",
                            "display",
                            0,
                            0,
                            "linear",
                            "${highscore_naamlabel_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid223",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${highscore_naamlabel_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid259",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${highscore_naamlabel_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid319",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${splash_hammer}",
                            'block',
                            'none'
                        ],
                        [
                            "eid331",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${splash_hammer}",
                            'none',
                            'none'
                        ],
                        [
                            "eid166",
                            "display",
                            0,
                            0,
                            "linear",
                            "${FX_persona5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid281",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${FX_persona5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid347",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${FX_persona5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid168",
                            "display",
                            0,
                            0,
                            "linear",
                            "${FX_persona7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid279",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${FX_persona7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid349",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${FX_persona7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid373",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${savescore_name_placeholder}",
                            'none',
                            'block'
                        ],
                        [
                            "eid318",
                            "left",
                            1500,
                            250,
                            "linear",
                            "${splash_hammer}",
                            '285px',
                            '506px'
                        ],
                        [
                            "eid176",
                            "display",
                            0,
                            0,
                            "linear",
                            "${highscore_poslabel_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid235",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${highscore_poslabel_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid271",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${highscore_poslabel_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid192",
                            "display",
                            0,
                            0,
                            "linear",
                            "${highscore_naamlabel_7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid219",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${highscore_naamlabel_7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid255",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${highscore_naamlabel_7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid174",
                            "display",
                            0,
                            0,
                            "linear",
                            "${highscore_header_titel}",
                            'none',
                            'none'
                        ],
                        [
                            "eid237",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${highscore_header_titel}",
                            'none',
                            'block'
                        ],
                        [
                            "eid273",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${highscore_header_titel}",
                            'block',
                            'none'
                        ],
                        [
                            "eid190",
                            "display",
                            0,
                            0,
                            "linear",
                            "${highscore_naamlabel_5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid221",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${highscore_naamlabel_5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid257",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${highscore_naamlabel_5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid163",
                            "display",
                            0,
                            0,
                            "linear",
                            "${FX_persona2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid284",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${FX_persona2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid344",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${FX_persona2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid309",
                            "scaleX",
                            0,
                            500,
                            "easeInOutElastic",
                            "${splash_IE_alive}",
                            '0',
                            '1'
                        ],
                        [
                            "eid196",
                            "display",
                            0,
                            0,
                            "linear",
                            "${highscore_scorelabel_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid215",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${highscore_scorelabel_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid251",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${highscore_scorelabel_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid202",
                            "display",
                            0,
                            0,
                            "linear",
                            "${highscore_scorelabel_7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid209",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${highscore_scorelabel_7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid245",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${highscore_scorelabel_7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid205",
                            "display",
                            0,
                            0,
                            "linear",
                            "${highscore_scorelabel_10}",
                            'none',
                            'none'
                        ],
                        [
                            "eid206",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${highscore_scorelabel_10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid242",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${highscore_scorelabel_10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid160",
                            "display",
                            0,
                            0,
                            "linear",
                            "${IE_persona7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid287",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${IE_persona7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid341",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${IE_persona7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid199",
                            "display",
                            0,
                            0,
                            "linear",
                            "${highscore_scorelabel_4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid212",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${highscore_scorelabel_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid248",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${highscore_scorelabel_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid159",
                            "display",
                            0,
                            0,
                            "linear",
                            "${IE_persona6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid288",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${IE_persona6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid340",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${IE_persona6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid144",
                            "display",
                            0,
                            0,
                            "linear",
                            "${background}",
                            'none',
                            'none'
                        ],
                        [
                            "eid303",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${background}",
                            'none',
                            'block'
                        ],
                        [
                            "eid145",
                            "display",
                            0,
                            0,
                            "linear",
                            "${header_bg}",
                            'none',
                            'none'
                        ],
                        [
                            "eid302",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${header_bg}",
                            'none',
                            'block'
                        ],
                        [
                            "eid189",
                            "display",
                            0,
                            0,
                            "linear",
                            "${highscore_naamlabel_4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid222",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${highscore_naamlabel_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid258",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${highscore_naamlabel_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid354",
                            "display",
                            6250,
                            0,
                            "linear",
                            "${gameover_title}",
                            'none',
                            'block'
                        ],
                        [
                            "eid149",
                            "display",
                            0,
                            0,
                            "linear",
                            "${life1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid298",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${life1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid368",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${life1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid304",
                            "display",
                            0,
                            0,
                            "linear",
                            "${splash_bg}",
                            'block',
                            'block'
                        ],
                        [
                            "eid328",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${splash_bg}",
                            'block',
                            'none'
                        ],
                        [
                            "eid182",
                            "display",
                            0,
                            0,
                            "linear",
                            "${highscore_poslabel_7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid229",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${highscore_poslabel_7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid265",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${highscore_poslabel_7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid164",
                            "display",
                            0,
                            0,
                            "linear",
                            "${FX_persona3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid283",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${FX_persona3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid345",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${FX_persona3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid201",
                            "display",
                            0,
                            0,
                            "linear",
                            "${highscore_scorelabel_6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid210",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${highscore_scorelabel_6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid246",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${highscore_scorelabel_6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid155",
                            "display",
                            0,
                            0,
                            "linear",
                            "${IE_persona2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid292",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${IE_persona2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid336",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${IE_persona2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid191",
                            "display",
                            0,
                            0,
                            "linear",
                            "${highscore_naamlabel_6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid220",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${highscore_naamlabel_6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid256",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${highscore_naamlabel_6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid352",
                            "top",
                            6000,
                            250,
                            "linear",
                            "${gameover_bg}",
                            '-712px',
                            '97px'
                        ],
                        [
                            "eid193",
                            "display",
                            0,
                            0,
                            "linear",
                            "${highscore_naamlabel_8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid218",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${highscore_naamlabel_8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid254",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${highscore_naamlabel_8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid183",
                            "display",
                            0,
                            0,
                            "linear",
                            "${highscore_poslabel_8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid228",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${highscore_poslabel_8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid264",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${highscore_poslabel_8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid197",
                            "display",
                            0,
                            0,
                            "linear",
                            "${highscore_scorelabel_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid214",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${highscore_scorelabel_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid250",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${highscore_scorelabel_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid357",
                            "left",
                            6250,
                            250,
                            "linear",
                            "${gameover_button_retry}",
                            '500px',
                            '86px'
                        ],
                            [ "eid380", "trigger", 5000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${bg_music}', [] ] ],
                            [ "eid381", "trigger", 6000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${bg_music}', [] ] ]
                    ]
                }
            },
            "splash_button_highscores": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['1px', '0px', '309px', '73px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'splash_button_highscores',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(220,21,21,1.00)']
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [30, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'splash_button_highscores_label',
                            text: 'Highscores',
                            align: 'center',
                            rect: ['0px', '17px', '309px', '41px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '309px', '73px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "splash_button_play": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '309px', '73px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'splash_button_play',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(220,21,21,1)']
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [30, 'px'], 'rgba(255,255,255,1)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'splash_button_play_label',
                            text: 'Play',
                            align: 'center',
                            rect: ['0px', '18px', '309px', '36px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '309px', '73px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "gameover_button_retry": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '309px', '73px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'gameover_button_retry',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(220,20,20,0.99)']
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [30, 'px'], 'rgba(255,255,255,1)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'gameover_button_retry_label',
                            text: 'Retry',
                            align: 'center',
                            rect: ['1px', '18px', '309px', '36px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '310px', '73px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "gameover_button_savescore": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '310px', '73px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'gameover_button_savescore',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(220,20,20,0.99)']
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [30, 'px'], 'rgba(255,255,255,1)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'gameover_button_savescore_label',
                            text: 'Save highscore',
                            align: 'center',
                            rect: ['0px', '18px', '310px', '35px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '310px', '73px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "savescore_button_save": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '309px', '73px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'savescore_button_save',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(216,16,16,0.99)']
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [30, 'px'], 'rgba(255,255,255,1)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'savescore_button_save_label',
                            text: 'Save',
                            align: 'center',
                            rect: ['0px', '18px', '309px', '37px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '309px', '73px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("game_edgeActions.js");
})("Game");
