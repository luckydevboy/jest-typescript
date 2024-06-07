import { isIsogram } from "./solution";

test('isIsogram correctly identifies isograms', () => {
  expect(isIsogram("Dermatoglyphics")).toBe(true);
  expect(isIsogram("isogram")).toBe(true);
  expect(isIsogram("aba")).toBe(false);
  expect(isIsogram("moOse")).toBe(false);
  expect(isIsogram("isIsogram")).toBe(false);
  expect(isIsogram("")).toBe(true);
});
