export default function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    // on success
    fileReader.onload = () => {
      resolve(fileReader.result);
    }
    // on error
    fileReader.onerror = (error) => reject(error)
  })
}