import Alpine from "alpinejs";

const ACCEPTED_FILES = [
  "application/pdf",
  "text/plain",
  "image/jpeg",
  "image/png",
];

interface UploadFileError {
  fileName: string;
  type: string;
  reason: string;
}

const uploadConfigData = Alpine.data("upload", () => ({
  files: <File[]>[],
  clicked: false,
  errorFiles: <UploadFileError[]>[],
  uploaded: false,

  init() {
    this.files = []
    this.errorFiles = []
    this.uploaded = false
  },

  setClicked() {
    this.clicked = ! this.clicked;
  },

  async selectFiles(event: Event) {
    // isTrusted is used to check for duplicate event triggers, which will have a false value to prevent duplicate entries.
    const filesElement = document.querySelector("#files") as HTMLInputElement;
    if (event.isTrusted) {
      filesElement.click();
      let filesInput = filesElement.files || <FileList>{ length: 0 };
      await Array.from({length: filesInput.length}, (value, index) => {
        console.log("Array")
        let file = filesInput.item(index);
        if (file !== null) {
          if (ACCEPTED_FILES.includes(file?.type || '')) {
            this.files.push(file);
          } else {
            let fileName = file.name;
            let fileType = file.type;
            let errorFile = {
              fileName: fileName,
              type: fileType,
              reason: `Unsupported file type: ${fileType}`,
            } as UploadFileError;
            return value = this.errorFiles.push(errorFile);
          }
        }
      })
    }
  },

  dummyClick(event: Event) {
    // isTrusted is used to check for duplicate event triggers, which will have a false value to prevent duplicate entries.
    if (event.isTrusted) {
      event.preventDefault();
    }
  },
  async uploadFiles() {},

  //async uploadFile(file: File) {

  //}
}));

export default uploadConfigData;
