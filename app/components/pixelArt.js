import Image from 'next/image';

const PixelArt = ({ src, alt, text }) => {
  return (
    <div className="card flex flex-col w-full mb-10 items-center transition bg-[#2E485C]/10 
            bg-opacity-10 backdrop-blur-sm bg-clip-padding 
            backdrop-filter shadow-xl rounded-lg px-6">
      <div className="flex items-center justify-center w-full h-full">
        <Image className="max-h-full max-w-full" src={src} alt={alt} width={500} height={500} />
      </div>
      <h3 className="my-6">{text}</h3>
    </div>
  );
};

export default PixelArt;
