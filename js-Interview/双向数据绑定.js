let obj = {}
let input = document.getElementById('input')
let box = document.getElementById('box')
// 数据劫持
Object.defineProperty(obj, 'text', {
  configurable: true,
  enumerable: true,
  get() {
    // 获取数据就直接拿
    console.log('获取数据了')
  },
  set(newVal) {
    // 修改数据就重新赋值
    console.log('数据更新了')
    input.value = newVal
    box.innerHTML = newVal
  }
})
// 输入监听
input.addEventListener('keyup', function(e) {
  obj.text = e.target.value
})

// 双向绑定
// 双向绑定是指，当我们在输入框中输入文字，那么我们的框中的文字也会跟着变化
// 双向绑定是指，当我们在框中点击文字，那么我们的输入框中的文字也会跟着变化

