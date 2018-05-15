declare module 'kyushu-haikunator' {
  export interface IHaikunatorOptions {
    adjectives?: string[]
    nouns?: string[]
    seed?: string
    defaults?: IHaikunateOptions
  }
  export interface IHaikunateOptions {
    delimiter?: string
    tokenLength?: number
    tokenHex?: boolean
    tokenChars?: string
  }
  export default class KyushuHaukunator {
    constructor(options?: IHaikunatorOptions)
    haikunate(options?: IHaikunateOptions): string
  }
}
