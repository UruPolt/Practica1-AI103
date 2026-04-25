import { useEffect, useState } from 'react'

function PhotoUpload() {
  const [previewUrl, setPreviewUrl] = useState(null)

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl)
      }
    }
  }, [previewUrl])

  function handleFileChange(event) {
    const file = event.target.files?.[0]
    if (!file) {
      return
    }

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl)
    }

    setPreviewUrl(URL.createObjectURL(file))
  }

  return (
    <div className="upload-panel">
      <div className="upload-copy">
        <h3>Sube tu foto</h3>
        <p>Selecciona una imagen de tu planta. La vista previa se mostrará solo en tu navegador.</p>
        <label className="upload-button">
          Seleccionar imagen
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </label>
      </div>
      <div className="upload-preview">
        {previewUrl ? (
          <img src={previewUrl} alt="Vista previa de la planta" />
        ) : (
          <div className="upload-placeholder">Aquí aparecerá la imagen seleccionada.</div>
        )}
      </div>
    </div>
  )
}

export default PhotoUpload
