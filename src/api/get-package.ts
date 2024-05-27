import { api } from '@/lib/axios'

export interface GetPackageBody {
  text: string
}

export async function getPackage({ text }: GetPackageBody) {
  await api.get('/search', {
    params: { text },
  })
}
