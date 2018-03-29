import {NgModule, Pipe} from '@angular/core';

export function getNgModuleMetadata(module: any): NgModule {
  return module.__annotations__[0];
}

export function getPipeMetadata(pipe: Pipe): Pipe {
  return (pipe as any).__annotations__[0];
}
