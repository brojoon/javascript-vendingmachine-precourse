import { $, $$ } from './utils/dom-control.js';

export default class App {
  constructor($target) {
    $target.innerHTML = `<h1>자판기</div>
		<nav>
			<button id="section-1">상품 관리</button>
			<button id="section-2">잔돈 충전</button>
			<button id="section-3">상품 구매</button>
		</nav>
		<section class="tab open" id="section-1">섹션1</section>
		<section class="tab" id="section-2">섹션2</section>
		<section class="tab" id="section-3">섹션3</section>`;
    this.bindEvents();
  }

  bindEvents() {
    document.querySelectorAll('nav > button').forEach(($button) =>
      $button.addEventListener('click', (e) => {
        $$('.tab').forEach(($element) => $element.classList.remove('open'));
        $(`.tab[id="${e.target.id}"]`).classList.add('open');
      })
    );
  }
}
