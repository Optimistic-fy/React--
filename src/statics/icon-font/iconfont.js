import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {font-family: "iconfont";
      src: url('。/iconfont.eot?t=1540886185702'); /* IE9*/
      src: url('。/iconfont.eot?t=1540886185702#iefix') format('embedded-opentype'), /* IE6-IE8 */
      url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
      url('。/iconfont.ttf?t=1540886185702') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
      url('。/iconfont.svg?t=1540886185702#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
      font-family:"iconfont" !important;
      font-size:16px;
      font-style:normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }
`

