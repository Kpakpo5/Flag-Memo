import monocle from './assets/emoji/monocle.gif';
import troll from './assets/emoji/troll.gif';
import phew from './assets/emoji/phew.gif';
import smirking from './assets/emoji/smirking.gif';
import beaming from './assets/emoji/beaming.gif';
import boss from './assets/emoji/boss.gif';
import clapping from './assets/emoji/clapping.gif';
import crown from './assets/emoji/crown.gif';
import relieved from './assets/emoji/relieved.gif';
import ok from './assets/emoji/ok.gif';

const EmojiData = {

  mediocre:{
    comment: "Il y a moyen de faire mieux. Tu as de la marge!",
    emojis : [monocle, troll],
  },
  notBad: {
    comment: "Un peu laborieux, mais tu as pu sauver les meubles.",
    emojis : [phew, relieved],
  },
  good: {
    comment: "Bien joué! test passé avec succès.",
    emojis : [beaming, ok],
  },
  excellent: {
    comment: "Excellent quiz! Tu t'en sors à merveille",
    emojis : [smirking, clapping],
  },
  master: {
    comment: "Quelle maîtrise! Quelle mémoire!",
    emojis : [crown, boss],
  }

}

export default EmojiData;
