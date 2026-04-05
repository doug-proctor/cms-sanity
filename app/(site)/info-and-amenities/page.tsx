import { aboutQuery, amenitiesQuery } from "@/sanity/lib/queries"
import { sanityFetch } from "@/sanity/lib/fetch"
import { type Amenity } from "@/sanity.types"
import Testimonials from "@/app/components/Testimonials"
import PageHeader from "@/app/components/PageHeader"
import Highlights from "@/app/components/Highlights"
import MediaItem from "@/app/components/MediaItem"
import Contact from "@/app/components/Contact"
import Faqs from "@/app/components/Faqs"

export default async function Page() {
  const about = await sanityFetch({ query: aboutQuery })
  const amenities = await sanityFetch({ query: amenitiesQuery }) as Amenity[]
  const amenitiesSorted = amenities.sort((a, b) => a.order! - b.order!)

  return (
    <>
      <PageHeader image={about?.picture} title={about?.title} />
      {amenitiesSorted.map((amenity, index) => (
        <MediaItem
          key={amenity._id}
          title={amenity.name}
          image={amenity.picture}
          description={amenity.description}
          link={{ label: "View rooms", href: "/accommodation" }}
          reverse={index % 2 !== 0}
        />
      ))}
      <Highlights />
      <Testimonials />
      <Faqs />
      <Contact />
    </>
  )
}
