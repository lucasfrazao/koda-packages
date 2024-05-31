import { UserRound } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

interface AvatarMaintainerProps {
  name: string
}

export function AvatarMaintainer({ name }: AvatarMaintainerProps) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Avatar>
          <AvatarImage src={`https://github.com/${name}.png`} />
          <AvatarFallback>
            <UserRound />
          </AvatarFallback>
        </Avatar>
      </TooltipTrigger>

      <TooltipContent>{name}</TooltipContent>
    </Tooltip>
  )
}
