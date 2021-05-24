const size = {
    mobile: 500,
    mobileS: 600
};

export const device = {
    mobile: 'mobile',
    mobileS: 'mobileS',
    web: 'web',
};

export const screen = {
    [device.mobile]: `screen and (max-width: ${size.mobile}px)`,
    [device.web]: `screen and (min-width: ${size.mobile + 1}px)`,
    [device.mobileS]: `screen and (max-height: ${size.mobileS}px)`
};
