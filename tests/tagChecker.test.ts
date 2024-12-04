import { completeInput, delimiter } from "../src";
import { tagChecker } from "../src/tagChecker";


describe('tagChecker function tests', () => {
  it('correctly identifies if first paragraph in the given input is tagged correctly', () => {
    const output = tagChecker(completeInput, delimiter);
    expect(output[0]).toEqual('Correctly tagged paragraph');
  });
  it('correctly identifies if second paragraph in the given input is tagged correctly', () => {
    const output = tagChecker(completeInput, delimiter);
    expect(output[1]).toEqual('Correctly tagged paragraph');
  });
  it('correctly identifies if third paragraph in the given input is tagged correctly', () => {
    const output = tagChecker(completeInput, delimiter);
    expect(output[2]).toEqual('Expected </C> found </B>');
  });
  it('correctly identifies if forth paragraph in the given input is tagged correctly', () => {
    const output = tagChecker(completeInput, delimiter);
    expect(output[3]).toEqual('Expected # found </C>');
  });
  it('correctly identifies if fifth paragraph in the given input is tagged correctly', () => {
    const output = tagChecker(completeInput, delimiter);
    expect(output[4]).toEqual('Expected </B> found #');
  });
  it('correctly identifies if each paragraphs in the given input is tagged correctly', () => {
    const output = tagChecker(completeInput, delimiter);
    expect(output).toEqual([
      'Correctly tagged paragraph',
      'Correctly tagged paragraph',
      'Expected </C> found </B>',
      'Expected # found </C>',
      'Expected </B> found #',
    ]);
  });
});