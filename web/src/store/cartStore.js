import { persistentAtom } from '@nanostores/persistent';

// El carrito se guarda en localStorage con la clave 'almendra-cart'.
// Si el usuario cierra y reabre el navegador, el carrito persiste.
export const cartStore = persistentAtom('almendra-cart', [], {
  encode: JSON.stringify,
  decode: JSON.parse,
});

/**
 * Agrega un producto al carrito.
 * Si el producto ya existe (mismo id), solo suma 1 a la cantidad.
 * @param {{ id: string, nombre: string, precio: number }} product
 */
export function addToCart(product) {
  const current = cartStore.get();
  const existing = current.find((item) => item.id === product.id);

  if (existing) {
    cartStore.set(
      current.map((item) =>
        item.id === product.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      )
    );
  } else {
    cartStore.set([...current, { ...product, cantidad: 1 }]);
  }
}

/**
 * Elimina un producto del carrito por su id.
 * @param {string} id
 */
export function removeFromCart(id) {
  cartStore.set(cartStore.get().filter((item) => item.id !== id));
}

/** Vacía el carrito por completo. */
export function clearCart() {
  cartStore.set([]);
}
