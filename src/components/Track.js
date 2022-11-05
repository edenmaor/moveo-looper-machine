

const track1 = require('../audio-files/DRUMS.mp3')
const track2 = require('../audio-files/_tambourine_shake_higher.mp3')
const track3 = require('../audio-files/ALL TRACK.mp3')
const track4 = require('../audio-files/B VOC.mp3')
const track5 = require('../audio-files/HIGH VOC.mp3')
const track6 = require('../audio-files/HE HE VOC.mp3')
const track7 = require('../audio-files/JIBRISH.mp3')
const track8 = require('../audio-files/LEAD 1.mp3')
const track9 = require('../audio-files/UUHO VOC.mp3')


const drums = new Audio(track1)
const tambourineShake = new Audio(track2)
const allTrack = new Audio(track3)
const bVoc = new Audio(track4)
const highVoc = new Audio(track5)
const heVoc = new Audio(track6)
const gibberish = new Audio(track7)
const lead = new Audio(track8)
const uhoVoc = new Audio(track9)

const audioFiles = [
    {
        id:'track1', file:drums,path:track1, color:'rgb(248, 187, 208)'
    },
    {
        id:'track2', file:tambourineShake,path:track2, color:'rgb(244, 143, 177 )'
    },
    {
        id:'track3', file:allTrack,path:track3, color:'rgb(240, 98, 146)'
    },
    {
        id:'track4', file:bVoc,path:track4,color:'rgb(236, 64, 122)'
    },
    {
        id:'track5', file:highVoc,path:track5, color:'rgb(233, 30, 99)'
    },
    {
        id:'track6', file:heVoc,path:track6, color:'rgb(216, 27, 96)'
    },
    {
        id:'track7', file:gibberish,path:track7, color:'rgb(194, 24, 91)'
    },
    {
        id:'track8', file:lead,path:track8, color:'rgb(173, 20, 87)'
    },
    {
        id:'track9', file:uhoVoc,path:track9, color:'rgb(136, 14, 79)'
    }
]
export default audioFiles;