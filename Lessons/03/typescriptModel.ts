export enum OperatingSystem {
    Windows = 'windows',
    Linux = 'linux',
    MacOS = 'macOS',
}

export enum Status {
    NotStarted,
    InProgress,
    Postponed = 91,
    Cancleded,
    Finished = 'ended',
    AfterPenalties = 'AP',
}

export type Browser = 'firefox' | 'chrome' | 'safari'

export interface Device {
    os: OperatingSystem,
    browser: Browser,
}

const mac: Device = {os: OperatingSystem.MacOS, browser: 'safari'}

export type DeviceType = {
    os: OperatingSystem,
    browser: Browser
    keyboardType: 'touch' | 'physical'
    isBroken?: boolean
}

const samsungS20: DeviceType = {os: OperatingSystem.Linux, browser: 'chrome', keyboardType: 'physical'}

export interface MobileDevice extends Device {
    hasCamera?: boolean
}

export interface MobilePhone extends MobileDevice {
    hasCamera: boolean
}

export type MobileDeviceType = Device & {hasCamera?: boolean}

export type DesktopDeviceType = Omit<DeviceType, 'keyboardType' | 'isBroken'>
export type Plane = Pick<Device, 'os'>

