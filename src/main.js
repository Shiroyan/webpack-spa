import 'normalize.css';
import 'animate.css';
import '@/styles/global.less';
import Home from '@/view/home';
import Info from '@/view/info';
import Search from '@/view/search';
import { getHash, $ } from '@/utils';

const APP = document.querySelector('#app');

window.onhashchange = function ({newURL}) {
  let hash = getHash(newURL);
  switch(hash) {
    case '/info':
      APP.innerHTML = Info;
      break;
    case '/search':
      APP.innerHTML = Search;
      break;
    default:
      APP.innerHTML = Home;
  }
}

