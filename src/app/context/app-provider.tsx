import { useState, type PropsWithChildren } from "react"
import { AppContext } from "./app-context"
import type { UserType } from "../../features/auth/types/user-type"
import type { SpaceType } from "../../entities/spaces/types/spaces-type"

function AppProvider({children}: PropsWithChildren) {
    const [user, setUser] = useState<UserType | null>(null)
    const [spaces, setSpaces] = useState<SpaceType[]>([])

    const value = {
        user,
        setUser,
        spaces,
        setSpaces
    }
  return (
    <AppContext value={value}>{children}</AppContext>
  )
}

export default AppProvider