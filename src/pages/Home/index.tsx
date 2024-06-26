import { useQuery } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { getPackages } from '@/api/node-registry/get-packages'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const searchFormSchema = z.object({
  search: z.string(),
})

type SearchFormSchema = z.infer<typeof searchFormSchema>

export function Home() {
  const navigate = useNavigate()
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

  function handleRedirect(packageName: string, version: string) {
    navigate(`/detail-package`, {
      state: {
        packageName,
        version,
      },
    })
  }

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
    <div className="flex w-full flex-col items-center justify-center">
      <form
        onChange={handleSubmit(handleFilter)}
        className="relative mt-20 flex w-2/3 flex-col items-center sm:mt-80"
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
          hidden={!resultPackages || resultPackages.total <= 0}
          className="absolute top-full z-10 mt-4 max-h-60 w-full overflow-auto rounded-lg border border-zinc-200 shadow-sm dark:border-zinc-500"
        >
          {resultPackages?.objects.map((item, index) => {
            const packageName = item.package.name
            const version = item.package.version

            return (
              <li
                key={index}
                className="mb-2 flex justify-between p-4 hover:bg-zinc-100 dark:hover:bg-zinc-500"
                onClick={() => handleRedirect(packageName, version)}
                role="button"
              >
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
    </div>
  )
}
