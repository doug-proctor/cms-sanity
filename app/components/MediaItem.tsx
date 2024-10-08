import Image from "next/image"
import Heading from "@/app/components/Heading"
import { urlForImage } from "@/sanity/lib/utils"
import Link from "@/app/components/Link"
import GoogleMap from "@/app/components/GoogleMap"
import InvisibleBookingForm from "@/app/components/InvisibleBookingForm"

type Props = {
  image?: any;
  title?: string;
  reverse?: boolean;
  mapApiKey?: string;
  description?: string;
  showBookingCta?: boolean;
  children?: React.ReactNode;
  button?: { href: string; text: string };
}

export default function MediaItem({ children, mapApiKey, title, description, image, reverse, showBookingCta, button }: Props) {
  const src = urlForImage(image)?.height(1000).width(2000).url() as string

  return (
    <section className={`flex flex-col md:flex-row items-stretch overflow-hidden ${reverse && "md:flex-row-reverse"}`}>
      <div className="relative overflow-hidden w-full h-[240px] md:h-auto">
        {image && (
          <Image
            src={src}
            width={1000}
            height={800}
            alt={image?.alt}
            className="object-cover absolute top-0 bottom-0 left-0 right-0 h-full w-full -z-10"
          />
        )}
        {mapApiKey && (
          <GoogleMap apiKey={mapApiKey} />
        )}
      </div>
      <div className="w-full">
        <div className="my-64 md:my-80 lg:my-96 mx-auto px-16 md:px-32 lg:px-64 text-center min-h-[250px]">
          {title && <Heading level="h2" className="mb-8">{title}</Heading>}
          {children ? children : (
            <>
              {description && <div className="mb-24 max-w-[500px] mx-auto">{description}</div>}
              {button && <Link href={button.href}>{button.text}</Link>}
              {showBookingCta && <InvisibleBookingForm showSubmitButton={true} />}
            </>
          )}
        </div>
      </div>
    </section>
  )
}