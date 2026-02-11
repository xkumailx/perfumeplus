export const Banner = ({ property1, className }) => {
  return (
    <div
      className={`w-[1920px] left-5 bg-cover h-[600px] bg-[50%_50%] relative ${property1 === "banner-02" ? "top-[761px]" : property1 === "variant-3" ? "top-[1502px]" : "top-5"} ${property1 === "banner-02" ? "bg-[url(/Perfume-Collection.png)]" : property1 === "variant-3" ? "bg-[url(/Perfume-Collection.png)]" : "bg-[url(/Perfume-Collection.png)]"} ${className}`}
    />
  );
};
