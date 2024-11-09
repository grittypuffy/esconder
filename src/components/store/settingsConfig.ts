import Alpine from "alpinejs";

const settingsConfigStore = Alpine.store("settings", () => ({
  expanded: false,
  darkTheme: true,
  
  setOpen() {
    this.expanded = ! this.expanded;
  },

  setDarkTheme() {
    this.darkTheme = ! this.darkTheme
  }
}))

export default settingsConfigStore;