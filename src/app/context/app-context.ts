import { createContext, type Dispatch } from "react";
import type { UserType } from "../../features/auth/types/user-type";
import type { SpaceType } from "../../entities/spaces/types/spaces-type";

type DefaultValuesType = {
    user: UserType | null,
    setUser: Dispatch<React.SetStateAction<UserType>>,
    spaces: SpaceType[],
    setSpaces: Dispatch<React.SetStateAction<SpaceType[]>>
}

const defaultValues: DefaultValuesType = {
    user: null,
    setUser: () => { },
    spaces: [],
    setSpaces: () => {}
}

export const AppContext = createContext(defaultValues)