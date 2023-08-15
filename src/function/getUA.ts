
const getUA = () => {
    let device = "Unknown";
    const ua: any = {
        Linux: /Linux/i,
        Android: /Android/i,
        BlackBerry: /BlackBerry/i,
        Bluebird: /EF500/i,
        ChromeOS: /CrOS/i,
        Datalogic: /DL-AXIS/i,
        Honeywell: /CT50/i,
        iPad: /iPad/i,
        iPhone: /iPhone/i,
        iPod: /iPod/i,
        macOS: /Macintosh/i,
        Windows: /IEMobile|Windows/i,
        Zebra: /TC70|TC55/i,
    };
    Object.keys(ua).map((v) => {
        const regex = ua[v]
        return navigator.userAgent.match(regex) && (device = v)
    }
    );

    return device;
};
export default getUA