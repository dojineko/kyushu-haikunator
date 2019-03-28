import { RandomSeed } from 'random-seed'
import Haikunator, { Options, Config } from 'haikunator'

const defaultNouns = [
  'tenjin', 'iizuka', 'ohmuta', 'kurume', 'kokura', 'kurosaki', 'tagawa',
  'dazaifu', 'tanushimaru', 'nogata', 'hakata', 'maebaru', 'moji',
  'yanagawa', 'yame', 'arita', 'imari', 'ureshino', 'karatsu', 'saga',
  'takeo', 'tosu', 'yobuko', 'iki', 'isahaya', 'ohmura', 'goto', 'sasebo',
  'shimabara', 'tsushima', 'nagasaki', 'hirado', 'aso', 'amakusa',
  'kumamoto', 'hitoyoshi', 'yatsushiro', 'usa', 'usuki', 'ohita',
  'kitsuki', 'kusu', 'saiki', 'tsukumi', 'nakatsu', 'hiji', 'hita',
  'bungotaketa', 'beppu', 'yufuin', 'ebino', 'obi', 'kirishima',
  'saito', 'takachiho', 'nichinan', 'nobeoka', 'hyuga', 'miyakonojo',
  'miyazaki', 'akune', 'amami', 'ibusuki', 'kagoshima', 'kushikino',
  'kokubu', 'sakurajima', 'shibushi', 'sendai', 'tanegashima',
  'tokunoshima', 'makurazaki', 'yakushima', 'yoron', 'ishigakijima',
  'itoman', 'ginowan', 'kumejima', 'naha', 'miyakojima', 'yonakunijima',
]

const defaultAdjectives = [
  'aged', 'agile', 'ambitious', 'ancient', 'autumn', 'awesome',
  'billowing', 'bitter', 'black', 'blue', 'bold', 'brave', 'bright',
  'broad', 'calm', 'charming', 'cloudy', 'cold', 'cool', 'creative', 'crimson',
  'curly', 'damp', 'dark', 'dawn', 'delicate', 'diligent', 'divine',
  'dreamy', 'dry', 'dynamic', 'eager', 'electric', 'eloquent', 'empty',
  'fancy', 'fast', 'flat', 'floral', 'flying', 'fragrant', 'friendly',
  'frosty', 'gentle', 'glorious', 'graceful', 'gray', 'green', 'hidden',
  'holy', 'humorous', 'icy', 'intelligent', 'intrepid', 'jolly',
  'jungly', 'keen', 'late', 'little', 'lively', 'long',
  'loving', 'lucky', 'misty', 'modest', 'morning', 'mute',
  'nameless', 'noisy', 'odd', 'old', 'orange', 'passionate', 'patient',
  'placid', 'plain', 'polished', 'powerful', 'proud', 'purple', 'quiet',
  'rapid', 'red', 'reliable', 'restless', 'romantic', 'rough',
  'round', 'royal', 'shiny', 'shy', 'silent', 'sincere',
  'small', 'smart', 'snowy', 'sociable', 'soft', 'sparkling',
  'spring', 'square', 'steep', 'still', 'summer', 'sunny', 'super',
  'sweet', 'thoughtful', 'throbbing', 'tidy', 'tight', 'tiny',
  'twilight', 'wandering', 'warmhearted', 'weathered', 'white', 'wild',
  'windy', 'winter', 'wispy', 'witty', 'yellow', 'young',
]

class KyushuHaikunator {
  private core: Haikunator

  constructor(options?: Options) {
    this.core = new Haikunator({
      nouns: defaultNouns,
      adjectives: defaultAdjectives,
      ...options,
    })
  }

  public haikunate(options?: Config): string {
    return this.core.haikunate(options)
  }
  public get adjectives(): string[] {
    return this.core.adjectives
  }
  public set adjectives(x: string[]) {
    this.core.adjectives = x
  }
  public get nouns(): string[] {
    return this.core.nouns
  }
  public set nouns(x: string[]) {
    this.core.nouns = x
  }
  public get random(): RandomSeed {
    return this.core.random
  }
  public set random(x: RandomSeed) {
    this.core.random = x
  }
  public get config(): Config {
    return this.core.config
  }
  public set config(x: Config) {
    this.core.config = x
  }
}

export default KyushuHaikunator

module.exports = KyushuHaikunator
module.exports.default = KyushuHaikunator
