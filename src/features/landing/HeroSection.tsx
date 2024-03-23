import { buttonVariants } from "@/components/ui/button";
import { Section } from "./Section";

export const HeroSection = () => {
  return (
    <Section className="text-center">
      <a
        href="#"
        className="mb-7  inline-flex items-center justify-between rounded-full bg-accent/50 p-1 pr-4 text-sm text-card-foreground hover:bg-accent"
        role="alert"
      >
        <span className="mr-3 rounded-full bg-primary px-4 py-1.5 text-xs text-primary-foreground">
          New
        </span>{" "}
        <span className="text-sm font-medium">
          Add here your newest features
        </span>
        <svg
          className="ml-2 size-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-foreground  md:text-5xl lg:text-6xl">
        Create a web application effortlessly
      </h1>
      <p className="mb-8 text-lg font-normal text-muted-foreground sm:px-16 lg:text-xl xl:px-48">
        Using our template you can make it in minutes
      </p>
      <div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 lg:mb-16">
        <a
          href="#"
          className={buttonVariants({
            size: "lg",
          })}
        >
          Learn more
          <svg
            className="-mr-1 ml-2 size-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <a
          href="#"
          className={buttonVariants({
            size: "lg",
            variant: "secondary",
          })}
        >
          <svg
            className="-ml-1 mr-2 size-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
          </svg>
          Watch video
        </a>
      </div>
      <div className="mx-auto px-4 text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
        
      </div>
    </Section>
  );
};