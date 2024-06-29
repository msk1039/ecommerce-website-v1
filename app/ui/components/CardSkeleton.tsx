import Image from "next/image";

export default function CardSkeleton() {
  return (
    <>
      <Image
        src={"/loading-image.jpg"}
        alt={"loading"}
        className="mx-auto h-full w-full "
        loading="eager"
        height={512}
        width={512}
      />
    </>
  );
}
