
//1.倒计时结束 弹出 很遗憾！再接再厉！
//2.完成时，弹出 恭喜🎉完成

function Popups() {
  this.dom = document.querySelector('.popups');
  this.closeBtn = document.querySelector('.close');
  this.nextBtn = document.querySelector('.nextBtn');
  this.lastBtn = document.querySelector('.lastBtn');
  this.content = document.querySelector('.pContent');
  this.status = 'none';
  this.dom.addEventListener('touchstart', ev => {
    ev.preventDefault();
  })

  this.closeBtn.addEventListener('touchstart', () => {
    this.none();
  })

  this.nextBtn.addEventListener('touchstart', () => {
    initGame(8, 60)
    setTimeout(()=>{
      this.none();
    },500)
    oFluidWrap.classList.add('grid4');
    oFluidWrap.classList.remove('grid2');
  })

  this.lastBtn.addEventListener('touchstart', () => {
    initGame(18, 120)
    setTimeout(()=>{
      this.none();
    },500)
    oFluidWrap.classList.add('grid6');
    oFluidWrap.classList.remove('grid4');
  })
}

Popups.prototype.none = function () {

  this.dom.classList.add('none');
  this.status = 'none';
}

Popups.prototype.block = function () {
  this.dom.classList.remove('none');
  this.status = 'block';
}

Popups.prototype.setContent = function (flag) {
  if (flag == 1) {
    this.content.innerHTML = `<p style='font-size:26px;color:#fff;text-align:center;line-height:10'>恭喜🎉过关</p>`;
  } else if (flag == 0) {
    this.content.innerHTML = `<p style='font-size:26px;color:#fff;text-align:center;line-height:10'>遗憾！再接再厉！</p>`;
  }
}

const pop = new Popups();







// (function () {

//   const oUl = document.querySelector('ul');
//   const oContarner = document.querySelector('.container');

//   //清除移动端默认事件
//   oContarner.addEventListener('touchstart',ev=>{
//     ev.preventDefault();
//   })




//   oUl.addEventListener('touchstart', function (e) {

//     let target = e.target;
//     if (target.nodeName == "IMG") {
//       target = target.parentElement;
//     }

//     if (target.classList.contains('select')) {
//       target.classList.remove('select');
//     } else {
//       target.classList.add('select');
//     }
//   }, false)

// }())