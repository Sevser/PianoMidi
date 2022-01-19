(function(e){function t(t){for(var n,r,d=t[0],s=t[1],c=t[2],m=0,f=[];m<d.length;m++)r=d[m],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var e,t=0;t<a.length;t++){for(var i=a[t],n=!0,d=1;d<i.length;d++){var s=i[d];0!==o[s]&&(n=!1)}n&&(a.splice(t--,1),e=r(r.s=i[0]))}return e}var n={},o={app:0},a=[];function r(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=n,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/PianoMidi/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=t,d=d.slice();for(var c=0;c<d.length;c++)t(d[c]);var u=s;a.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"1b52":function(e,t,i){},2028:function(e,t,i){},4080:function(e,t,i){},"44a8":function(e,t,i){"use strict";i("2028")},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("7a23"),o={class:"app container"};function a(e,t,i,a,r,d){var s=Object(n["m"])("canvas-backdrop"),c=Object(n["m"])("Piano");return Object(n["i"])(),Object(n["f"])("div",o,[Object(n["g"])(s),Object(n["g"])(c)])}var r=i("b85c"),d=(i("4ec9"),i("d3b7"),i("3ca3"),i("ddb0"),i("b0c0"),i("159b"),i("5530")),s=(i("d81d"),i("7db0"),[{midiId:108,pianoKey:"88",NoteName:"C8",freq:4186.01},{midiId:107,pianoKey:"87",NoteName:"B7",freq:3951.07},{midiId:106,pianoKey:"86",NoteName:"A#7/Bb7",freq:3729.31},{midiId:105,pianoKey:"85",NoteName:"A7",freq:3520},{midiId:104,pianoKey:"84",NoteName:"G#7/Ab7",freq:3322.44},{midiId:103,pianoKey:"83",NoteName:"G7",freq:3135.96},{midiId:102,pianoKey:"82",NoteName:"F#7/Gb7",freq:2959.96},{midiId:101,pianoKey:"81",NoteName:"F7",freq:2793.83},{midiId:100,pianoKey:"80",NoteName:"E7",freq:2637.02},{midiId:99,pianoKey:"79",NoteName:"D#7/Eb7",freq:2489.02},{midiId:98,pianoKey:"78",NoteName:"D7",freq:2349.32},{midiId:97,pianoKey:"77",NoteName:"C#7/Db7",freq:2217.46},{midiId:96,pianoKey:"76",NoteName:"C7",freq:2093},{midiId:95,pianoKey:"75",NoteName:"B6",freq:1975.53},{midiId:94,pianoKey:"74",NoteName:"A#6/Bb6",freq:1864.66},{midiId:93,pianoKey:"73",NoteName:"A6",freq:1760},{midiId:92,pianoKey:"72",NoteName:"G#6/Ab6",freq:1661.22},{midiId:91,pianoKey:"71",NoteName:"G6",freq:1567.98},{midiId:90,pianoKey:"70",NoteName:"F#6/Gb6",freq:1479.98},{midiId:89,pianoKey:"69",NoteName:"F6",freq:1396.91},{midiId:88,pianoKey:"68",NoteName:"E6",freq:1318.51},{midiId:87,pianoKey:"67",NoteName:"D#6/Eb6",freq:1244.51},{midiId:86,pianoKey:"66",NoteName:"D6",freq:1174.66},{midiId:85,pianoKey:"65",NoteName:"C#6/Db6",freq:1108.73},{midiId:84,pianoKey:"64",NoteName:"C6",freq:1046.5},{midiId:83,pianoKey:"63",NoteName:"B5",freq:987.77},{midiId:82,pianoKey:"62",NoteName:"A#5/Bb5",freq:932.33},{midiId:81,pianoKey:"61",NoteName:"A5",freq:880},{midiId:80,pianoKey:"60",NoteName:"G#5/Ab5",freq:830.61},{midiId:79,pianoKey:"59",NoteName:"G5",freq:783.99},{midiId:78,pianoKey:"58",NoteName:"F#5/Gb5",freq:739.99},{midiId:77,pianoKey:"57",NoteName:"F5",freq:698.46},{midiId:76,pianoKey:"56",NoteName:"E5",freq:659.26},{midiId:75,pianoKey:"55",NoteName:"D#5/Eb5",freq:622.25},{midiId:74,pianoKey:"54",NoteName:"D5",freq:587.33},{midiId:73,pianoKey:"53",NoteName:"C#5/Db5",freq:554.37},{midiId:72,pianoKey:"52",NoteName:"C5",freq:523.25},{midiId:71,pianoKey:"51",NoteName:"B4",freq:493.88},{midiId:70,pianoKey:"50",NoteName:"A#4/Bb4",freq:466.16},{midiId:69,pianoKey:"49",NoteName:"A4 concert pitch",freq:440},{midiId:68,pianoKey:"48",NoteName:"G#4/Ab4",freq:415.3},{midiId:67,pianoKey:"47",NoteName:"G4",freq:392},{midiId:66,pianoKey:"46",NoteName:"F#4/Gb4",freq:369.99},{midiId:65,pianoKey:"45",NoteName:"F4",freq:349.23},{midiId:64,pianoKey:"44",NoteName:"E4",freq:329.63},{midiId:63,pianoKey:"43",NoteName:"D#4/Eb4",freq:311.13},{midiId:62,pianoKey:"42",NoteName:"D4",freq:293.66},{midiId:61,pianoKey:"41",NoteName:"C#4/Db4",freq:277.18},{midiId:60,pianoKey:"40",NoteName:"C4 (middle C)",freq:261.63},{midiId:59,pianoKey:"39",NoteName:"B3",freq:246.94},{midiId:58,pianoKey:"38",NoteName:"A#3/Bb3",freq:233.08},{midiId:57,pianoKey:"37",NoteName:"A3",freq:220},{midiId:56,pianoKey:"36",NoteName:"G#3/Ab3",freq:207.65},{midiId:55,pianoKey:"35",NoteName:"G3",freq:196},{midiId:54,pianoKey:"34",NoteName:"F#3/Gb3",freq:185},{midiId:53,pianoKey:"33",NoteName:"F3",freq:174.61},{midiId:52,pianoKey:"32",NoteName:"E3",freq:164.81},{midiId:51,pianoKey:"31",NoteName:"D#3/Eb3",freq:155.56},{midiId:50,pianoKey:"30",NoteName:"D3",freq:146.83},{midiId:49,pianoKey:"29",NoteName:"C#3/Db3",freq:138.59},{midiId:48,pianoKey:"28",NoteName:"C3",freq:130.81},{midiId:47,pianoKey:"27",NoteName:"B2",freq:123.47},{midiId:46,pianoKey:"26",NoteName:"A#2/Bb2",freq:116.54},{midiId:45,pianoKey:"25",NoteName:"A2",freq:110},{midiId:44,pianoKey:"24",NoteName:"G#2/Ab2",freq:103.83},{midiId:43,pianoKey:"23",NoteName:"G2",freq:98},{midiId:42,pianoKey:"22",NoteName:"F#2/Gb2",freq:92.5},{midiId:41,pianoKey:"21",NoteName:"F2",freq:87.31},{midiId:40,pianoKey:"20",NoteName:"E2",freq:82.41},{midiId:39,pianoKey:"19",NoteName:"D#2/Eb2",freq:77.78},{midiId:38,pianoKey:"18",NoteName:"D2",freq:73.42},{midiId:37,pianoKey:"17",NoteName:"C#2/Db2",freq:69.3},{midiId:36,pianoKey:"16",NoteName:"C2",freq:65.41},{midiId:35,pianoKey:"15",NoteName:"B1",freq:61.74},{midiId:34,pianoKey:"14",NoteName:"A#1/Bb1",freq:58.27},{midiId:33,pianoKey:"13",NoteName:"A1",freq:55},{midiId:32,pianoKey:"12",NoteName:"G#1/Ab1",freq:51.91},{midiId:31,pianoKey:"11",NoteName:"G1",freq:49},{midiId:30,pianoKey:"10",NoteName:"F#1/Gb1",freq:46.25},{midiId:29,pianoKey:"9",NoteName:"F1",freq:43.65},{midiId:28,pianoKey:"8",NoteName:"E1",freq:41.2},{midiId:27,pianoKey:"7",NoteName:"D#1/Eb1",freq:38.89},{midiId:26,pianoKey:"6",NoteName:"D1",freq:36.71},{midiId:25,pianoKey:"5",NoteName:"C#1/Db1",freq:34.65},{midiId:24,pianoKey:"4",NoteName:"C1",freq:32.7},{midiId:23,pianoKey:"3",NoteName:"B0",freq:30.87},{midiId:22,pianoKey:"2",NoteName:"A#0/Bb0",freq:29.14},{midiId:21,pianoKey:"1",NoteName:"A0",freq:27.5}]),c=s.map((function(e){return Object(d["a"])({},e)})),u={getNoteByMIDINumber:function(e){return s.find((function(t){return t.midiId===e}))}},m={class:"container"};function f(e,t,i,o,a,r){var d=Object(n["m"])("white-button");return Object(n["i"])(),Object(n["f"])("div",m,[(Object(n["i"])(!0),Object(n["f"])(n["a"],null,Object(n["l"])(a.whites,(function(e){return Object(n["i"])(),Object(n["d"])(d,{key:e.NoteName,button:e},null,8,["button"])})),128))])}i("4de4");function p(e,t,i,o,a,r){var d=Object(n["m"])("black-button");return Object(n["i"])(),Object(n["f"])("div",{class:Object(n["h"])([{active:r.active},"white-button-container"])},[r.hasNoteDies?(Object(n["i"])(),Object(n["d"])(d,{key:0,button:i.button.noteDies},null,8,["button"])):Object(n["e"])("",!0)],2)}var N=i("4978"),l=i.n(N),h={$on:function(){return l.a.on.apply(l.a,arguments)},$once:function(){return l.a.once.apply(l.a,arguments)},$off:function(){return l.a.off.apply(l.a,arguments)},$emit:function(){return l.a.emit.apply(l.a,arguments)}};function b(e,t,i,o,a,r){return Object(n["i"])(),Object(n["f"])("div",{class:Object(n["h"])([{active:r.active},"black-button-container"])},null,2)}var I={inject:["activeButtons"],name:"blackButton",components:{},watch:{active:function(e){e&&h.$emit("press:button",Object(d["a"])(Object(d["a"])({},this.topCenterPosition),{},{power:this.activeButtons.value.get(this.button.NoteName)}))}},props:{button:{type:Object,required:!0}},computed:{active:function(){return this.activeButtons.value.has(this.button.NoteName)}},methods:{},data:function(){return{topCenterPosition:{top:null,left:null,width:null,center:null}}},mounted:function(){this.topCenterPosition.top=this.$el.getBoundingClientRect().top,this.topCenterPosition.width=this.$el.getBoundingClientRect().width,this.topCenterPosition.left=this.$el.getBoundingClientRect().left,this.topCenterPosition.center=this.topCenterPosition.left+this.topCenterPosition.width/2}},y=(i("44a8"),i("6b0d")),v=i.n(y);const q=v()(I,[["render",b],["__scopeId","data-v-b342d834"]]);var K=q,w={inject:["activeButtons"],name:"whiteButton",components:{BlackButton:K},props:{button:{type:Object,required:!0}},watch:{active:function(e){e&&h.$emit("press:button",Object(d["a"])(Object(d["a"])({},this.topCenterPosition),{},{power:this.activeButtons.value.get(this.button.NoteName)}))}},computed:{hasNoteDies:function(){return void 0!==this.button.noteDies},active:function(){return this.activeButtons.value.has(this.button.NoteName)}},methods:{},data:function(){return{topCenterPosition:{top:null,left:null,width:null,center:null}}},mounted:function(){this.topCenterPosition.top=this.$el.getBoundingClientRect().top,this.topCenterPosition.width=this.$el.getBoundingClientRect().width,this.topCenterPosition.left=this.$el.getBoundingClientRect().left,this.topCenterPosition.center=this.topCenterPosition.left+this.topCenterPosition.width/2}};i("623d");const g=v()(w,[["render",p],["__scopeId","data-v-b75b5924"]]);var B=g,O={name:"Piano",components:{WhiteButton:B},props:{},computed:{},methods:{createWhites:function(e){return e.filter((function(e){return 2===e.NoteName.length})).reverse().map((function(t){return Object(d["a"])(Object(d["a"])({},t),{},{noteDies:e.find((function(e){return e.NoteName[0]===t.NoteName[0]&&e.NoteName[2]===t.NoteName[1]}))})}))}},data:function(){return{whites:this.createWhites(c),notes:c}}};i("5a0f");const j=v()(O,[["render",f],["__scopeId","data-v-2053170e"]]);var P=j,C={ref:"canvas"};function D(e,t,i,o,a,r){return Object(n["i"])(),Object(n["f"])("canvas",C,null,512)}i("7898"),i("cb29");var L=120,A={name:"canvasBackdrop",components:{},props:{},computed:{lastButton:function(){return this.lastReleasedButton.value&&this.lastReleasedButton.value.NoteName}},methods:{handlePressedButton:function(e){var t,i=Math.floor(e.center/window.innerWidth*L),n=this.drawLines[this.drawLines.length-1].additionalPoints[i],o=e.power;t=n+o>200?200:n+o,this.drawLines[this.drawLines.length-1].additionalPoints[i]=t;for(var a=10;a>0;a--){if(i+a<this.drawLines[this.drawLines.length-1].additionalPoints.length){var r=this.drawLines[this.drawLines.length-1].additionalPoints[i+a],d=t*Math.tanh((10-a)/19);this.drawLines[this.drawLines.length-1].additionalPoints[i+a]=r+d>200?200:r+d}if(i-a>=0){var s=this.drawLines[this.drawLines.length-1].additionalPoints[i-a],c=t*Math.tanh((10-a)/19);this.drawLines[this.drawLines.length-1].additionalPoints[i-a]=s+c>200?200-3*a:s+c}}},draw:function(){this.ctx.clearRect(0,0,window.innerWidth,window.innerHeight);for(var e=0;e<this.drawLines.length-1;e++){this.ctx.beginPath(),this.ctx.moveTo(0,this.drawLines[e].baseHeight);for(var t=0;t<L;t++)this.ctx.lineTo(t*this.step,this.drawLines[e].baseHeight-this.drawLines[e].additionalPoints[t]),this.drawLines[e].additionalPoints[t]=this.drawLines[e+1].additionalPoints[t];this.ctx.lineTo(window.innerWidth,this.drawLines[e].baseHeight),this.ctx.fillStyle="white",this.ctx.fill(),this.ctx.stroke()}for(var i=0;i<L;i++)this.drawLines[this.drawLines.length-1].additionalPoints[i]=Math.floor(.9*this.drawLines[this.drawLines.length-2].additionalPoints[i])}},data:function(){return{ctx:null,intervalId:null,drawLines:new Array(46),step:0}},beforeUnmount:function(){clearInterval(this.intervalId)},mounted:function(){this.$refs.canvas.width=window.innerWidth,this.step=Math.floor(window.innerWidth/L),this.$refs.canvas.height=window.innerHeight,this.ctx=this.$refs.canvas.getContext("2d"),h.$on("press:button",this.handlePressedButton.bind(this)),this.intervalId=setInterval(this.draw.bind(this),100),this.drawLines.fill(1),this.drawLines=this.drawLines.map((function(e,t){return{index:t,baseHeight:0+(window.innerHeight-window.innerWidth/100*13)/46*(t+1),additionalPoints:new Array(L).fill(0)}}))}};const M=v()(A,[["render",D]]);var G=M,x={provide:function(){var e=this;return{activeButtons:Object(n["b"])((function(){return e.activeButtons})),lastReleasedButton:Object(n["b"])((function(){return e.lastReleasedButton}))}},name:"App",components:{CanvasBackdrop:G,Piano:P},data:function(){return{logs:[],pressedButtons:[],lastReleasedButton:null,midi:null,activeButtons:new Map}},methods:{onMIDISuccess:function(e){console.log("MIDI ready!"),this.midi=e,this.listInputsAndOutputs(this.midi),this.startLoggingMIDIInput(this.midi)},onMIDIFailure:function(e){console.log("Failed to get MIDI access - "+e)},listInputsAndOutputs:function(e){var t,i=Object(r["a"])(e.inputs);try{for(i.s();!(t=i.n()).done;){var n=t.value,o=n[1];console.log("Input port [type:'"+o.type+"'] id:'"+o.id+"' manufacturer:'"+o.manufacturer+"' name:'"+o.name+"' version:'"+o.version+"'")}}catch(u){i.e(u)}finally{i.f()}var a,d=Object(r["a"])(e.outputs);try{for(d.s();!(a=d.n()).done;){var s=a.value,c=s[1];console.log("Output port [type:'"+c.type+"'] id:'"+c.id+"' manufacturer:'"+c.manufacturer+"' name:'"+c.name+"' version:'"+c.version+"'")}}catch(u){d.e(u)}finally{d.f()}},onMIDIMessage:function(e){128===e.data[0]?this.activeButtons.delete(u.getNoteByMIDINumber(e.data[1]).NoteName):144===e.data[0]&&(this.lastReleasedButton=u.getNoteByMIDINumber(e.data[1]),this.activeButtons.set(this.lastReleasedButton.NoteName,e.data[2]))},startLoggingMIDIInput:function(e){var t=this;e.inputs.forEach((function(e){e.onmidimessage=t.onMIDIMessage}))}},mounted:function(){navigator.requestMIDIAccess().then(this.onMIDISuccess.bind(this),this.onMIDIFailure.bind(this))}};i("fa2a"),i("ad3b");const F=v()(x,[["render",a],["__scopeId","data-v-271bf90e"]]);var $=F;Object(n["c"])($,{}).mount("#app")},"5a0f":function(e,t,i){"use strict";i("5a27")},"5a27":function(e,t,i){},"623d":function(e,t,i){"use strict";i("7a5d")},"7a5d":function(e,t,i){},ad3b:function(e,t,i){"use strict";i("4080")},fa2a:function(e,t,i){"use strict";i("1b52")}});
//# sourceMappingURL=app.d2e8ede4.js.map