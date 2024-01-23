<script lang="tsx">
//这种tsx的写法好处在于是单文件组件，可以集成css。减少文件数

export default defineComponent({
  name: 'ModeTwoTsx',
  setup() {
    return () => (
      <>
        <p class="one">ModeTwoTsx</p>
      </>
    )
  }
})
</script>
<style scoped>
.one {
  color: blue;
}
</style>
