import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="fixed top-0 left-0 object-cover object-center w-full h-full opacity-40 -z-50"
      />

      <article className="relative flex flex-col items-center justify-center w-full py-8 space-y-8 sm:py-0">
        <div className="flex flex-col items-center justify-center w-full space-y-6 sm:w-3/4">
          <h1 className="text-4xl font-semibold text-center capitalize text-accent">
            summon the wizard
          </h1>
          <p className="text-sm font-light leading-loose text-center xs:text-base">
            Step into the circle of enchantment and weave your words into the
            fabric of the cosmos. Whether you seek to conjure collaborations,
            unlock mysteries, or simply share tales of adventure, your messages
            are treasured scrolls within this realm. Use the form below to send
            your missives through the ethereal network, and await the whisper of
            magic in response.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
