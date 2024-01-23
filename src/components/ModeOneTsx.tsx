import './ModeOneTsx.css' //第一种方式：样式引入
// import style from './Model1.module.less'  第二种：样式引入，通过module引入

export default defineComponent({
  name: 'ModeOne',
  setup() {
    return () => (
      <>
        <p class="one">mode1</p>
        {/* <p class={style.two}>model1</p> */}
      </>
    )
  }
})

// 通过tsx使用，就是元素js的使用，样式可通过2中方式引入
