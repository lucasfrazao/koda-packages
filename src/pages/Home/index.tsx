import { useQuery } from '@tanstack/react-query'
import { Carrot } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Link, useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { getPackages } from '@/api/get-packages'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const searchFormSchema = z.object({
  search: z.string(),
})

type SearchFormSchema = z.infer<typeof searchFormSchema>

export function Home() {
  const [searchParams, setSearchParams] = useSearchParams()

  const packageName = searchParams.get('packageName')

  const { register, handleSubmit } = useForm<SearchFormSchema>({
    defaultValues: {
      search: packageName ?? '',
    },
  })

  const { data: resultPackages } = useQuery({
    queryKey: ['packages', packageName],
    queryFn: () => getPackages({ text: packageName }),
  })

  function handleFilter({ search }: SearchFormSchema) {
    if (search !== '' && search.length < 3) return

    setSearchParams((state) => {
      if (search) {
        state.set('packageName', search)
      } else {
        state.delete('packageName')
      }

      return state
    })
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <form
        onChange={handleSubmit(handleFilter)}
        className="relative mb-80 flex w-2/3 flex-col items-center sm:mb-0"
      >
        <img className="h-24 w-24" src="./koda.svg" alt="logo koda packages" />
        <Label
          htmlFor="search"
          className="text-md my-4 font-mono tracking-wider text-foreground"
        >
          koda package
        </Label>
        <Input
          id="search"
          className="w-full font-mono"
          placeholder="> type package name here"
          {...register('search')}
        />
        <ul
          hidden={!resultPackages?.total}
          className="absolute top-full z-10 mt-4 max-h-60 w-full overflow-auto rounded-lg border border-slate-200 p-4 shadow-sm"
        >
          {resultPackages?.objects.map((item, index) => {
            return (
              <li key={index} className="mb-2 flex justify-between">
                <div className="flex w-full flex-col">
                  <div className="flex flex-row items-baseline gap-2">
                    <span className="font-mono font-semibold">
                      {item.package.name}
                    </span>
                    <span className="text-xs text-[#E4434C]">
                      @{item.package.publisher.username}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {item.package.description}
                  </span>
                </div>

                <div className="text-xs">@{item.package.version}</div>
              </li>
            )
          })}
        </ul>
      </form>

      <small className="fixed bottom-2 flex flex-row items-center gap-1">
        <span>made with love by</span>
        <Link
          className="font-bold hover:text-[#E4434C]"
          to="github.com/lucasfrazao"
        >
          Lucas Frazao
        </Link>
        <Carrot size={18} />
      </small>
    </div>
  )
}
