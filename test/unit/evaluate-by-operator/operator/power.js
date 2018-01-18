/* eslint-disable import/no-named-as-default-member */
import func from '../../../../src/evaluate-by-operator/operator/power';

describe('power operator', () => {
  it('should set SYMBOL const', () => {
    expect(func.SYMBOL).toBe('^');
  });

  it('should correctly process values', () => {
    expect(func(2, 8)).toBe(256);
    expect(func('2', 8)).toBe(256);
    expect(func('2', '8')).toBe(256);
    expect(func('2', '8', 6, 0.4)).toBe(256);
    expect(() => func('foo', ' ', 'bar', ' baz')).toThrow('VALUE');
    expect(() => func('foo', 2)).toThrow('VALUE');
  });
});
