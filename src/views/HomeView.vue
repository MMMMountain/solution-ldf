<script lang="tsx">
import './HomeView.css'
import AboutView from './AboutView'

export default defineComponent({
  name: 'HomeVies',

  setup() {
    return () => (
      <>
        <div>
          <p class="one">homeviews12</p>
          <p class="two">homeviews12</p>
          <AboutView />
        </div>
      </>
    )
  }
})
</script>
<style scoped>
.two {
  color: purple;
}
</style>
