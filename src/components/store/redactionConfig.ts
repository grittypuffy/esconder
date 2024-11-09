import Alpine from "alpinejs";

const redactionConfigStore = Alpine.store("redaction", () => ({
    removeMetadata: true,
    sensitivity: 2,
    redactionColor: "#000000",
  
    setRemoveMetadata() {
      this.removeMetadata = ! this.removeMetadata;
    },
  
    setSensitivity(sensitivity: number) {
      this.sensitivity = sensitivity;
    },
  
    setRedactionColor(redactionColor: string) {
      this.redactionColor = redactionColor;
    }
}))

export default redactionConfigStore;