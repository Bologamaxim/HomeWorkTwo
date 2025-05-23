import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name:string)=>void // need to fix any
}

export const pureAddUser = (name:string, setError: any, setName: any, addUserCallback: any) => {

    if (!name.trim()) {
        setError("Ошибка! Введите имя!")
        return
    }

    addUserCallback(name)
    setName("")

    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}

export const pureOnBlur = (name: any, setError: any) => {
    if (!name.trim()) {
        setError("Ошибка! Введите имя!")
    }


}

export const pureOnEnter = (e: any, addUser: any) => { // если нажата кнопка Enter - добавить

    if(e == 13){
        addUser()
    }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<any>('') // need to fix any
    const [error, setError] = useState<any>('') // need to fix any

    const setNameCallback = (e: any) => { // need to fix any
        setName(e) // need to fix
        setError("")


    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {

        pureOnBlur(name, setError)
    }

    const onEnter = (e: number) => {

        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // need to fix
    const lastUserName = users[users.length-1].name // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
