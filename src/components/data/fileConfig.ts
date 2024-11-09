import Alpine from "alpinejs"

const fileConfigData = Alpine.data("file", () => ({
    formatFileSize(bytesSize: number) {
        if(bytesSize == 0) return '0 Bytes';
        var k = 1000,
            dm = 2,
            sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
            i = Math.floor(Math.log(bytesSize) / Math.log(k));
        return parseFloat((bytesSize / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
  })
)

export default fileConfigData;