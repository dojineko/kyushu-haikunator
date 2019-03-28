import KyushuHaikunator from '~/src';

test('generate by default', () => {
  const kh = new KyushuHaikunator()
  expect(kh.haikunate()).toMatch(/^[a-z]+-[a-z]+-\d{4}$/)
  expect(kh.haikunate(({ tokenLength: 6 }))).toMatch(/^[a-z]+-[a-z]+-\d{6}$/)
  expect(kh.haikunate(({ tokenHex: true }))).toMatch(/^[a-z]+-[a-z]+-[0-9a-z]{4}$/)
})

test('contains custom nouns and adjectives', () => {
  const kh = new KyushuHaikunator()
  expect(kh.nouns.includes('hakata')).toBeTruthy()
  expect(kh.adjectives.includes('square')).toBeTruthy()
})
