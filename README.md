# 🗾 Kyushu Haikunator

Generate Heroku-like random names to use in your applications.  
Random names will be select from location names of Kyushu Japan.

powered by [HaikunatorJS][]

```ts
import KyushuHaikunator from 'kyushu-haikunator'

const kh = new KyushuHaikunator()

// default usage
kh.haikunate()
'romantic-saga-1992'

// custom length (default=4)
kh.haikunate({tokenLength: 6})
'gentle-moji-012345'

// use hex instead of numbers
kh.haikunate({tokenHex: true})
'dark-tenjin-ff13'
```

see also [HaikunatorJS][]

[HaikunatorJS]:https://github.com/Atrox/haikunatorjs
