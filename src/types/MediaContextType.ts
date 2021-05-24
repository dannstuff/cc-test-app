import { device } from '../utils/devices';

export type MediaContextType = {
    [key in keyof typeof device]: boolean
}
