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
  worst: [crying, shushing],
  bad: [sad, wonder],
  mediocre: [jaded, upset],
  almost: [nope, frustrated],
  good: [relieved, ok],
  veryGood: [beaming, clapping],
  excellent: [boss, clapping],
  perfect: [omg, crown]
}

export default EmojiData;
