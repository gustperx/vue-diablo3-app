import numeral from "numeral";

const useNumeral = () => {
  return {
    formatNumber: (num: number | string) => {
      if (!num) return 0;
      return numeral(Number(num)).format();
    },
  };
};

export { useNumeral };
