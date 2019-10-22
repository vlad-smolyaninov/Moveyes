import { flow } from 'mobx'

export function flowed(_: Object, _1: string, descriptor: TypedPropertyDescriptor<() => Generator<any>>) {
    if (descriptor.value) {
      descriptor.value = flow(descriptor.value) as any
    }
  }
  