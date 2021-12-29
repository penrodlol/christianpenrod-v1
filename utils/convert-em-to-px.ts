export function emToPx(em: string) {
  return Number(`${em.replace(/em/i, '')}`) * 16;
}
