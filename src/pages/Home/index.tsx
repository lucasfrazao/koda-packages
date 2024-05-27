import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const searchForm = z.object({
  search: z.string(),
})

type SearchForm = z.infer<typeof searchForm>

export function Home() {
  const { register, handleSubmit } = useForm<SearchForm>({
    defaultValues: {
      search: '',
    },
  })

  const handleSearch = (data: SearchForm) => {
    console.log(data)
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit(handleSearch)}
        className="flex w-full flex-col items-center"
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
          className="w-[300px]"
          placeholder="type package name here"
          {...register('search')}
        />
      </form>

      <small className="fixed bottom-2">made with love by Lucas Frazao</small>
    </div>
  )
}
