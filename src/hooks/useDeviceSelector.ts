import { useEffect, useState } from "react";

const DEVICE_SIZE = {
  MOBILE: 600,
  LAPTOP: 1440,
  /** NOTE: 명시적 정의 */
  DESKTOP: 1920,
} as const;

type DEVICE_SIZE = (typeof DEVICE_SIZE)[keyof typeof DEVICE_SIZE];

export const useDeviceSelector = () => {
  const [currentDevice, setCurrentDevice] = useState<DEVICE_SIZE>(
    DEVICE_SIZE.DESKTOP
  );

  function handleResize() {
    const { clientWidth } = document.documentElement;

    switch (true) {
      case clientWidth <= DEVICE_SIZE.MOBILE:
        setCurrentDevice(DEVICE_SIZE.MOBILE);
        break;
      case clientWidth <= DEVICE_SIZE.LAPTOP:
        setCurrentDevice(DEVICE_SIZE.LAPTOP);
        break;
      default:
        setCurrentDevice(DEVICE_SIZE.DESKTOP);
    }
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = currentDevice === DEVICE_SIZE.MOBILE;
  const isLaptop = currentDevice === DEVICE_SIZE.LAPTOP;
  const isDesktop = currentDevice === DEVICE_SIZE.DESKTOP;

  return {
    isMobile,
    isLaptop,
    isDesktop,
  };
};
