import React, {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode, useEffect, useState} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        children,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const [currentChildren, setCurrentChildren] = useState<ReactNode>(children)

    const finalClassName = s.button
        + (' ' + (xType === 'red' ? s.red : s.secondary))
        + (' ' + (!xType && !disabled ? s.default : ''))
        + (' ' + (disabled ? s.disabled : ''))
        + (' ' + (className ? className : '')) // задачка на смешивание классов

    const onMouseEnter = () => {
        if (disabled)
            return

        setCurrentChildren("При наведении")
    }

    const onMouseLeave = () => {
        setCurrentChildren(children)
    }

    const onMouseDown = () => {
        if (disabled)
            return

        setCurrentChildren("При нажатии")
    }

    const onMouseUp = () => {
        setCurrentChildren(children)
    }

    return (
        <button
            disabled={disabled}
            className={finalClassName}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseDown={onMouseDown}
            children={currentChildren}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
