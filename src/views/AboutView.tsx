import Song from './Song'

export default defineComponent({
  name: 'AboutView',
  setup() {
    const num = ref(1)
    console.log(num, 999)
    return () => (
      <>
        AboutView
        <Song />
      </>
    )
  }
})
