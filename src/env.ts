export function env(name: string, fallback?: string): string | undefined {
  return process.env[name] || fallback;
}
