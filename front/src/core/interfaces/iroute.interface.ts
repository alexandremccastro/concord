export interface IRoute {
  name?: string
  path: string
  redirect?: any
  meta?: Record<string, unknown>
  component: any
  children: any[]
}
