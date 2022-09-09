export function generarId() {
  const random = Math.random().toString(36).substring(2)
  const fecha = generarId.toString(36);
  return random + fecha;
}