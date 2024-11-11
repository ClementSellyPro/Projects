import Image from "next/image"

export default function Component({ phoneNumber } : { phoneNumber?: string }) {
    const formattedNumber = phoneNumber?.replace(/\D/g, '');
    
    function handleclick(){
        console.log(formattedNumber)
    }
    
    return (
      <div onClick={handleclick} className="flex items-center justify-center rounded-md md:w-40 w-36 md:px-4 px-2 py-2 bg-slate-200">
        <a
          href={`tel:${formattedNumber}`}
          className="flex items-center gap-2"
        >
            <Image src='/icon/phone-icon.png' alt='Icone telephone' width={18} height={18} />
            <span className="md:text-xl text-base">{phoneNumber}</span>
        </a>
      </div>
    )
  }