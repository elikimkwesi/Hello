import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  isLight?: boolean
}

export default function Logo({ isLight = false }: LogoProps) {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="relative w-10 h-10">
        {/* Replace this with your actual logo when available */}
        <Image
          src="/Images/company.png"
          alt="FedgeCo Logo"
          width={1000}
          height={300}
          className="object-contain"
        />
      </div>
      <span className={`text-2xl font-bold ${isLight ? "text-white" : "text-violet-600"}`}>FedgeCo</span>
    </Link>
  )
}
