import React from 'react'

type ProfileInfoType = {
    username: string,
    id: string,
    iat?: number
}

type ProfileContextType = {
    profileInfo: ProfileInfoType | null,
    setProfileInfo: React.Dispatch<React.SetStateAction<ProfileInfoType | null>>
}

const ProfileContext = React.createContext<ProfileContextType | null>(null)

export const useProfile = () => {
    const context = React.useContext(ProfileContext)
    if(!context) throw new Error('context_error: profilecontex :(')
    return context
}

export const ProfileInfoTypeProvider = ({children}: {children: React.ReactNode}) => {
    const [profileInfo, setProfileInfo] = React.useState<ProfileInfoType | null>(null)
    return (
        <ProfileContext.Provider value={{profileInfo, setProfileInfo}}>
            {children}
        </ProfileContext.Provider>
    )
}