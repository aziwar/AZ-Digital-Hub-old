import { cn, formatDate, formatCurrency } from '../../src/lib/utils/index';

describe('cn', () => {
  test('combines class names and ignores falsy values', () => {
    expect(cn('foo', false && 'bar', null, undefined, 'baz')).toBe('foo baz')
  })

  test('merges tailwind classes', () => {
    expect(cn('p-2', 'p-4')).toBe('p-4')
  })
})

describe('formatDate', () => {
  test('formats Date instances', () => {
    const date = new Date('2020-05-02')
    expect(formatDate(date)).toBe('May 2, 2020')
  })

  test('formats ISO date strings', () => {
    expect(formatDate('2021-12-25')).toBe('December 25, 2021')
  })
})

describe('formatCurrency', () => {
  test('formats USD by default', () => {
    expect(formatCurrency(1234)).toBe('$1,234.00')
  })

  test('formats other currencies', () => {
    expect(formatCurrency(500, 'EUR')).toBe('€500.00')
  })
})
