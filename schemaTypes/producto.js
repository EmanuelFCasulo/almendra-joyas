export const producto = {
  name: 'producto',
  title: 'Producto',
  type: 'document',
  fields: [
    {
      name: 'nombre',
      title: 'Nombre de la Joya (ej: Pulsera de Plata)',
      type: 'string',
    },
    {
      name: 'precio',
      title: 'Precio ($)',
      type: 'number',
    },
    {
      name: 'imagen',
      title: 'Foto del Producto',
      type: 'image',
      options: {
        hotspot: true, // Esto le permite a tu pareja recortar la foto directamente en el panel
      }
    },
    {
      name: 'stock',
      title: 'Cantidad en Stock',
      type: 'number',
    },
    {
      name: 'descripcion',
      title: 'Descripción / Detalles',
      type: 'text',
    }
  ]
}