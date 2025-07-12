import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from '@/app/providers/StoreProvider/config/store' //TEMPO

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
