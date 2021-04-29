---
title: Bagaimana bikin unit test di Vuejs ?
author: Ridwan Maulana
bio: Software Developer
---

## Apa itu unit testing ✅

Unit testing adalah suatu metode untuk pengujian komponen software, untuk meminimalisir adanya bug sebelum <span class="bg-blue-100 rounded pr-2 pl-2 text-blue-800">production</span>. Unit testing termasuk dalam tahapan software development. fungsi dari unit testing adalah memastikan bahwa seluruh kode berjalan sesuai yang diinginkan. 
Nah disini saya ingin menjelaskan unit testing di vuejs.

berikut contoh implementasinya:

katakanlah kita mempunyai berkas untuk mengecek komponen.
```js{}[Hello.vue]
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
</template>

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
```

```js{}[hello.spec.js]
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg ketika dilempar', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
```
Dari kode diatas kita menggunakan API shallowMount untuk mendefinisikan komponen yang dibutuhkan. lalu kita menambahkan opsi <span class="bg-blue-100 rounded pr-2 pl-2 text-blue-800">```propsData```</span> untuk mengoper props.

Sekian penjelasan dari saya, lebih jelasnya lagi bisa pelajari di [unit testing vue component](https://vuejs.org/v2/cookbook/unit-testing-vue-components.html)

