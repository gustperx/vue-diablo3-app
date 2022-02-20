const useMedia = () => {
  const sizes = {
    21: 21,
    42: 42,
    64: 64,
  };

  const host = "http://media.blizzard.com/d3/icons/";

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
  };
};

export { useMedia };
