import Image from "next/image"

export default function Component({ phoneNumber } : { phoneNumber?: string }) {
    const formattedNumber = phoneNumber?.replace(/\D/g, '');
    
    function handleclick(){
        console.log(formattedNumber)
    }

    return (
      <div onClick={handleclick} className="flex items-center justify-center rounded-md w-fit bg-gray-100">
        <a
          href={`tel:${formattedNumber}`}
          className="flex items-center space-x-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
        >
            <Image src='/icon/phone-icon.png' alt='Icone telephone' width={18} height={18} />
            <span className="md:text-xl text-base">{phoneNumber}</span>
        </a>
      </div>
    )
  }