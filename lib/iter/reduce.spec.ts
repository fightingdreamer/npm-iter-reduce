import { test, expect, describe } from "vitest";
import { reduceWithInitial, reduceWithDefault } from "./reduce";

describe("reduceWithInitial", () => {
  test.each([
    {
      value: [],
      fn: (r: any, v: any) => r + v,
      initialValue: 0,
      expected: 0,
    },
    {
      value: [1],
      fn: (r: any, v: any) => r + v,
      initialValue: 3,
      expected: 4,
    },
    {
      value: [1, 2, 3],
      fn: (r: any, v: any) => r + v,
      initialValue: 3,
      expected: 9,
    },
  ])(
    "reduce($value, ..., $initialValue) -> $expected",
    ({ value, fn, initialValue, expected }) => {
      const ivalue = value[Symbol.iterator]();
      expect(reduceWithInitial(ivalue, fn, initialValue)).toEqual(expected);
    },
  );
});

describe("reduceWithDefault", () => {
  test.each([
    {
      value: [],
      fn: (r: any, v: any) => r + v,
      defaultValue: null,
      expected: null,
    },
    {
      value: [1],
      fn: (r: any, v: any) => r + v,
      defaultValue: null,
      expected: 1,
    },
    {
      value: [1, 2, 3],
      fn: (r: any, v: any) => r + v,
      defaultValue: null,
      expected: 6,
    },
  ])(
    "reduce($value, ..., $defaultValue) -> $expected",
    ({ value, fn, defaultValue, expected }) => {
      const ivalue = value[Symbol.iterator]();
      expect(reduceWithDefault(ivalue, fn, defaultValue)).toEqual(expected);
    },
  );
});
