export default class communal {
  init() {
    if (this.inited != true)
    {
      let headerEl = document.querySelector('header');
      if (window.scrollY > 20) headerEl.classList.add('sticky');
      window.addEventListener('scroll', e => {
        if (window.scrollY > 20)
        {
          headerEl.classList.add('sticky');
        }
        else
        {
          headerEl.classList.remove('sticky');
        };
      });
      headerEl.delegateEventListener('navicon', 'click', function(){
        if (!this.classList.contains('on'))
        {
          this.classList.add('on');
          headerEl.classList.add('on');
          this.parentElement.querySelector('mainmenu')?.classList.add('on');
        }
        else
        {
          this.classList.remove('on');
          headerEl.classList.remove('on');
          this.parentElement.querySelector('mainmenu')?.classList.remove('on');
        };
      });
      headerEl.querySelectorAll('mainmenu li').forEach(li => {
        if (li.getAttribute('genre') == document.body.dataset.genre)
        {
          li.classList.add('on');
        };
      });
      this.inited = true;
    };
  };

  readiedCallback() {
    let init = this.self.getAttribute('init');
    if (Reflect.has(this, init)) Reflect.get(this, init).call(this);
  };

  constructor(self) {
    this.self = self;
    this.inited = false;
  };
};