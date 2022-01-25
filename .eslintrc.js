module.exports = {
  root: true,
  // 사전에 정의된 전역 변수를 설정합니다.
  env: {
    browser: true,
    node: true,
    jest: true,
    'cypress/globals': true,
  },

  plugins: ['cypress', 'prettier', 'vue'],

  // 사용 가능한 규칙 세트입니다.
  extends: ['eslint:recommended', 'plugin:vue/vue3-strongly-recommended', 'plugin:cypress/recommended'],

  // 구문 분석할 패키지를 설정합니다.(Babel, ES6^ => ES5)
  parserOptions: {
    parser: 'babel-eslint',
  },

  // 추가적인 코드 규칙을 설정합니다.
  rules: {
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'never',
      },
    ],
  },
};
