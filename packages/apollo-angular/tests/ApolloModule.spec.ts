import './_setup';

import {NgModule} from '@angular/core';

import {getNgModuleMetadata} from './_utils';
import {ApolloModule} from '../src/ApolloModule';
import {Apollo} from '../src/Apollo';
import {SelectPipe} from '../src/SelectPipe';

describe('ApolloModule', () => {
  const metadata: NgModule = getNgModuleMetadata(ApolloModule);

  test('should be defined', () => {
    expect(ApolloModule).toBeDefined();
  });

  test.skip('should provide Apollo', () => {
    expect(metadata.providers).toContain(Apollo);
  });

  test.skip('should declare SelectPipe', () => {
    expect(metadata.declarations).toContain(SelectPipe);
  });

  test.skip('should export SelectPipe', () => {
    expect(metadata.exports).toContain(SelectPipe);
  });
});
