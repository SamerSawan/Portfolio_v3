import Image from "next/image";

export default function Home() {
  return (
    <div class="flex h-screen overflow-scroll">
      <div class="py-24 border-2 w-1/2 flex flex-col justify-between items-center text-center sticky top-0">
        <div>
          <p className="text-3xl font-bold">Samer Sawan</p>
          <p>Software Developer</p>
          <p>I bring innovative ideas to life</p>
        </div>
        <div>
          Navigation
        </div>
        <div>
          Socials
        </div>
      </div>
      <div class="border-2 w-1/2 flex flex-col justify-center items-center">
        <text class="">Hello World</text>
        <text>Hidden</text>
      </div>
    </div>
  );
}
