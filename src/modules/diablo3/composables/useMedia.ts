const useMedia = () => {
  const sizes = {
    21: 21,
    42: 42,
    64: 64,
  };

  let host = "/images/";
  if (import.meta.env.VITE_URL_DIABLO_IMG) {
    host = <string>import.meta.env.VITE_URL_DIABLO_IMG;
  }

  let cloudinary = "/img/";
  if (import.meta.env.VITE_URL_CLOUDINATY) {
    cloudinary = <string>import.meta.env.VITE_URL_CLOUDINATY;
  }

  return {
    mediaSkill: (icon: string): string => {
      return `${host}skills/${sizes[42]}/${icon}.png`;
    },
    mediaItem: (icon: string): string => {
      return `${host}items/large/${icon}.png`;
    },
    mediaGem: (icon: string): string => {
      return `${host}items/small/${icon}.png`;
    },
    mediaCloudinary: (path: string): string => {
      return `${cloudinary}${path}`;
    },
  };
};

export { useMedia };
