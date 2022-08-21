export interface IRoute {
  name?: string
  path: string
  meta?: Record<string, unknown>
  component: any,
  children: any[]
}
