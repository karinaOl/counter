type initialStateCounterType = typeof initialState

type CounterActionType = IncreaseValueActionType | ResetValueActionType | SetMinValueActionType | SetMaxValueActionType | SetErrorValueActionType

type IncreaseValueActionType = ReturnType<typeof increaseValue>
type ResetValueActionType = ReturnType<typeof resetValue>
type SetMinValueActionType = ReturnType<typeof setMinValue>
type SetMaxValueActionType = ReturnType<typeof setMaxValue>
type SetErrorValueActionType = ReturnType<typeof setErrorValue>

const initialState = {
    value: 0 as number | string,
    minValue: 0,
    maxValue: 5,

}

export const counterReducer = (state = initialState, action: CounterActionType): initialStateCounterType => {
    switch (action.type) {
        case "INCREASE_VALUE":
            return {
                ...state, value: +state.value + 1
            }
        case "RESET_VALUE":
            return {
                ...state, value: state.minValue
            }
        case "SET_MIN_VALUE":
            return {
                ...state, minValue: action.value
            }
        case "SET_MAX_VALUE":
            return {
                ...state, maxValue: action.value
            }
        case "SET_ERROR_VALUE":
            return {
                ...state, value: action.error
            }
        default:
            return state
    }
}

export const increaseValue = () => ({type: "INCREASE_VALUE"} as const)

export const resetValue = () => ({type: "RESET_VALUE"} as const)

export const setMinValue = (value: number) => ({type: "SET_MIN_VALUE", value, } as const)

export const setMaxValue = (value: number) => ({type: "SET_MAX_VALUE", value, } as const)

export const setErrorValue = (error: string) => ({type: "SET_ERROR_VALUE", error, } as const)