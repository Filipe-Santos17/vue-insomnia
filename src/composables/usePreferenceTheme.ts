import { ref, watch, onMounted } from "vue"

export default function usePreferenceTheme() {
  const preferedTheme = ref('default')

  const changeTheme = (theme: string) => { //oldTheme = ''
    // document.body.classList.remove(oldTheme) //ARRAY DE THEMES - revisar isso
    document.body.classList.add(theme)
  }

  watch(preferedTheme, (newTheme) => {
    console.log(newTheme)
    localStorage.setItem('vue-insomnia-theme-storaged', newTheme)
    changeTheme(newTheme)
  })

  onMounted(() => {
    const themeStoraged = localStorage.getItem('vue-insomnia-theme-storaged')
    themeStoraged ? preferedTheme.value = themeStoraged : changeTheme(preferedTheme.value)
  })

  return preferedTheme
}