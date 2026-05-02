"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TeamCardTen from '@/components/sections/team/TeamCardTen';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Clock, Smile, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="mediumLargeSizeMediumTitles"
        background="floatingGradient"
        cardStyle="glass-depth"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "home",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Grass Valley Mercantile"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-static",
      }}
      title="A Slice of History, A Stop for Everything."
      description="More than just a store—we’re the heartbeat of Koosharem. Whether you’re fueling up for the road ahead, grabbing local essentials, or just stopping for a friendly wave, we’ve been here since the beginning."
      buttons={[
        {
          text: "Visit Us Today",
          href: "#contact",
        },
      ]}
      carouselItems={[
        {
          id: "h1",
          imageSrc: "http://img.b2bpic.net/free-photo/pretty-young-girl-thinking-library_23-2148727803.jpg",
          imageAlt: "Historic interior",
        },
        {
          id: "h2",
          imageSrc: "http://img.b2bpic.net/free-photo/two-happy-women-holding-ice-cream-amusement-park_23-2147911706.jpg",
          imageAlt: "Store exterior",
        },
        {
          id: "h3",
          imageSrc: "http://img.b2bpic.net/free-photo/black-cup-food-new-year-decorations-are-table-room-new-year-eve-concept_132075-11339.jpg",
          imageAlt: "Local goods",
        },
        {
          id: "h4",
          imageSrc: "http://img.b2bpic.net/free-photo/elevated-view-hat-map-passport-pen-wooden-surface_23-2147837137.jpg",
          imageAlt: "Post office",
        },
        {
          id: "h5",
          imageSrc: "http://img.b2bpic.net/free-photo/people-spending-time-gas-station_23-2150440250.jpg",
          imageAlt: "Gas pumps",
        },
        {
          id: "h6",
          imageSrc: "http://img.b2bpic.net/free-photo/realistic-scene-neighborhood-yard-sale-with-miscellaneous-items_23-2151238313.jpg",
          imageAlt: "Store welcome",
        },
      ]}
    />
  </div>

  <div id="offerings" data-section="offerings">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "o1",
          title: "Fresh & Local",
          description: "Grab a hot snack, cold drink, or the local supplies you need.",
          tag: "Essentials",
          imageSrc: "http://img.b2bpic.net/free-photo/veggie-food-with-copy-space_23-2148305833.jpg",
        },
        {
          id: "o2",
          title: "Fuels Your Journey",
          description: "Reliable gas to get you through the scenic desert miles.",
          tag: "Fuel",
          imageSrc: "http://img.b2bpic.net/free-photo/rear-view-young-female-paying-parking-street_23-2147862789.jpg",
        },
        {
          id: "o3",
          title: "Post Office Services",
          description: "We take care of your mail with the same attention we give our store.",
          tag: "Postal",
          imageSrc: "http://img.b2bpic.net/free-photo/mailbox-empty-snowy-field_181624-19004.jpg",
        },
        {
          id: "o4",
          title: "Hard-to-Find Goods",
          description: "We keep what you need right when you need it most.",
          tag: "General",
          imageSrc: "http://img.b2bpic.net/free-photo/bulk-products-reusable-jars-display-local-supermarket_482257-98955.jpg",
        },
        {
          id: "o5",
          title: "Home Essentials",
          description: "Daily household items to keep your life running smoothly.",
          tag: "Supplies",
          imageSrc: "http://img.b2bpic.net/free-photo/organized-pantry-with-glass-jars_23-2151951188.jpg",
        },
      ]}
      title="A Little Bit of Everything"
      description="From daily necessities to those unexpected finds, our shelves are stocked to keep your journey moving and your day bright."
    />
  </div>

  <div id="experience" data-section="experience">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          title: "Customer Rating",
          value: "4.7*",
          icon: Star,
        },
        {
          id: "m2",
          title: "Years Serving",
          value: "100+",
          icon: Clock,
        },
        {
          id: "m3",
          title: "Happy Travelers",
          value: "10K+",
          icon: Smile,
        },
      ]}
      title="Built on Community"
      description="We’ve been serving this stretch of Utah for generations. Here's what makes the stop worth it."
    />
  </div>

  <div id="services" data-section="services">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Convenience, Country Style"
      description="Whether you are a local neighbor or just passing through Koosharem, our store is your comfort zone. We blend convenience with that authentic, small-town feeling you won't find at a chain gas station."
      metrics={[
        {
          value: "Convenient",
          title: "Gas & Supplies",
        },
        {
          value: "Reliable",
          title: "Post Office",
        },
        {
          value: "Warm",
          title: "Community Vibes",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/half-built-large-wooden-structure-dry-desert-field-with-grey_181624-1356.jpg"
      imageAlt="Storefront history"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <TeamCardTen
      useInvertedBackground={false}
      title="Meet the Folks Keeping Tradition Alive"
      tag="Our Story"
      membersAnimation="slide-up"
      members={[
        {
          id: "t1",
          name: "The Mercantile Team",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-couple-with-baked-croissant-cup-coffee-bed_23-2147966489.jpg",
        },
        {
          id: "t2",
          name: "Historic Koosharem",
          imageSrc: "http://img.b2bpic.net/free-photo/pelisor-castle-from-sinaia-romania-medieval-castle_482257-34215.jpg",
        },
        {
          id: "t3",
          name: "Always Welcoming",
          imageSrc: "http://img.b2bpic.net/free-photo/watercolor-pottery-illustration_23-2151809888.jpg",
        },
      ]}
      memberVariant="card"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah Miller",
          date: "Oct 2024",
          title: "Great Stop!",
          quote: "A true hidden gem. Everything you need and the best folks around.",
          tag: "Road Traveler",
          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-joyful-woman-holding-mobile-phone_171337-4024.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/pretty-young-girl-thinking-library_23-2148727803.jpg",
          imageAlt: "happy road traveler smiling",
        },
        {
          id: "2",
          name: "Joe Hansen",
          date: "Sept 2024",
          title: "Authentic Place",
          quote: "Reminds me of how stores used to be. Friendly and very convenient.",
          tag: "Local Resident",
          avatarSrc: "http://img.b2bpic.net/free-photo/funny-girl-with-curly-hair-taking-selfie-sitting-restaurant-s-wooden-table_651396-869.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/two-happy-women-holding-ice-cream-amusement-park_23-2147911706.jpg",
          imageAlt: "happy road traveler smiling",
        },
        {
          id: "3",
          name: "Emily Wright",
          date: "Aug 2024",
          title: "Best in the Valley",
          quote: "We stop here every single time we drive through. Love the atmosphere.",
          tag: "Repeat Traveler",
          avatarSrc: "http://img.b2bpic.net/free-photo/woman-hitch-hiking-car-mountains_23-2148785870.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/black-cup-food-new-year-decorations-are-table-room-new-year-eve-concept_132075-11339.jpg",
          imageAlt: "happy road traveler smiling",
        },
        {
          id: "4",
          name: "Mark Stevens",
          date: "July 2024",
          title: "Everything you need",
          quote: "Gas, food, and friendly conversation. Can't beat that.",
          tag: "Adventure Seeker",
          avatarSrc: "http://img.b2bpic.net/free-photo/full-shot-couple-spending-time-outdoors_23-2150494459.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/elevated-view-hat-map-passport-pen-wooden-surface_23-2147837137.jpg",
          imageAlt: "happy road traveler smiling",
        },
        {
          id: "5",
          name: "Janet Lee",
          date: "June 2024",
          title: "A Town Staple",
          quote: "The heart of Koosharem. So glad they are here.",
          tag: "Local Patron",
          avatarSrc: "http://img.b2bpic.net/free-photo/merry-young-adult-enjoying-christmas-conversation-video-call-room-decorated-festivity-celebration-talking-woman-preparing-drink-wine-kitchen-with-joyful-ornaments_482257-28400.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/people-spending-time-gas-station_23-2150440250.jpg",
          imageAlt: "happy road traveler smiling",
        },
      ]}
      title="Loved by Neighbors & Travelers"
      description="Don't just take our word for it—here is why people keep coming back to Grass Valley."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Stop By and Say Hello"
      description="Located in the heart of Koosharem, Utah. We are open and ready to welcome you."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Have a question? Ask us anything!",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/colorful-mexican-architecture-urban-landscape_23-2149749926.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/cozy-lively-home-interior-design_23-2151118973.jpg"
      logoText="Grass Valley Mercantile"
      columns={[
        {
          title: "Store Info",
          items: [
            {
              label: "Koosharem, Utah",
              href: "#",
            },
            {
              label: "4.7 Star Service",
              href: "#",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              label: "General Essentials",
              href: "#",
            },
            {
              label: "Post Office",
              href: "#",
            },
            {
              label: "Gas & Fuel",
              href: "#",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "Contact Us",
              href: "#contact",
            },
            {
              label: "Directions",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
