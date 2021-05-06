
```js
첫 페이지는 SSR로 작동하며 이후 CSR로 화면을 렌더링하게 되는데, 이때 서버에서 받은 해시+클래스명과 이후 클라이언트에서 작동하는 해시+클래스 명이 달라지면서 스타일을 불러올수 없는 문제가 발생한다.

이때는 바벨 플러그인 babel-plugin-styled-components를 설치하고 바벨설정을 추가함으로 해결할 수 있다.
이 플러그인은 서버와 클라이언트의 클래스명을 일치 시켜줌으로 문제를 해결!

.babelrc
{
  "presets": ["next/babel"],
  "plugins": ["babel-plugin-styled-components"]
}
```