import crying from './assets/emoji/crying.gif';
import shushing from './assets/emoji/shushing.gif';
import omg from './assets/emoji/omg.gif';
import wonder from './assets/emoji/wonder.gif';
import beaming from './assets/emoji/beaming.gif';
import boss from './assets/emoji/boss.gif';
import clapping from './assets/emoji/clapping.gif';
import crown from './assets/emoji/crown.gif';
import frustrated from './assets/emoji/frustrated.gif';
import jaded from './assets/emoji/jaded.gif';
import nope from './assets/emoji/nope.gif';
import relieved from './assets/emoji/relieved.gif';
import sad from './assets/emoji/sad.gif';
import upset from './assets/emoji/upset.gif';
import ok from './assets/emoji/ok.gif';

const EmojiData = {

  mediocre:{
    msg: "Peux mieux faire! Il y a de la marge",
    emojis : [crying, shushing],
  },
  notBad: {
    comment: "Pas mal, tu as de la marge pour faire mieux",
    emojis : [crying, shushing],
  },
  good: {
    comment: "Bien joué! Tu assures",
    emojis : [crying, shushing],
  },
  veryGood: {
    comment: "Excellent! Tu t'en sors à merveille!",
    emojis : [crying, shushing],
  },
  excellent: {
    comment: "Quelle maîtrise! Quelle mémoire!",
    emojis : [crying, shushing],
  }

}

export default EmojiData;
