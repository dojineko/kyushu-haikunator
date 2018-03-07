import test from 'ava'
import KH from '.'

test('default export', (t) => {
  t.is(KH, KH.default)
})

test('generate by default', (t) => {
  t.regex(new KH().haikunate(), /^[a-z]+-[a-z]+-\d{4}$/)
  t.regex(new KH().haikunate(({ tokenLength: 6 })), /^[a-z]+-[a-z]+-\d{6}$/)
  t.regex(new KH().haikunate(({ tokenHex: true })), /^[a-z]+-[a-z]+-[0-9a-z]{4}$/)
})
