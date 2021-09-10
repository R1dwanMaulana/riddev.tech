---
title: Bagaimana bikin unit test di Vuejs ?
author: Ridwan Maulana
bio: Software Developer
img: "../testing.jpg"
---

## Apa itu unit testing ✅

Unit testing adalah suatu metode untuk pengujian komponen software, untuk meminimalisir adanya bug sebelum <span style="color: rgb(68, 68, 212); background-color: rgb(231, 231, 255); border-radius: 4px; padding-left: 4px; padding-right: 4px">production</span>. Unit testing termasuk dalam tahapan software development. fungsi dari unit testing adalah memastikan bahwa seluruh kode berjalan sesuai yang diinginkan. 
Nah disini saya ingin menjelaskan unit testing di vuejs.

berikut contoh implementasinya:

katakanlah kita mempunyai berkas untuk mengecek komponen.
```js{}[Hello.vue]
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
</template>

export default {
  name: 'Hello',
  props: {
    msg: String,
  },
};
```

```js{}[hello.spec.js]
import { shallowMount } from '@vue/test-utils';
import Hello from '@/components/Hello.vue';

describe('Hello.vue', () => {
  it('renders props.msg ketika dilempar', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Hello, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
```
Dari kode diatas kita menggunakan API shallowMount untuk mendefinisikan komponen yang dibutuhkan. lalu kita menambahkan opsi <span style="color: rgb(68, 68, 212); background-color: rgb(231, 231, 255); border-radius: 4px; padding-left: 4px; padding-right: 4px">```propsData```</span> untuk mengoper props.

Sekian penjelasan dari saya, lebih jelasnya lagi bisa pelajari di <span style="background-color:rgb(236, 236, 163); color: rgb(68, 68, 212); border-radius: 4px; padding-left: 4px; padding-right: 4px">[unit testing vue component](https://vuejs.org/v2/cookbook/unit-testing-vue-components.html)</span>

