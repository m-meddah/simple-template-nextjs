import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import { Section } from "./Section";

export const FeaturesSection = () => {
  return (
    <Section className="relative " id="features">
      <div className="relative flex flex-col gap-16 lg:gap-28">
        <div className="flex flex-col items-center gap-2">
          <Badge>The features you NEED.</Badge>
          <Typography variant="h2" className="m-auto max-w-xl text-center">
            More than a template, we will help you <u>grow</u>.
          </Typography>
          <Typography
            variant="muted"
            className="m-auto max-w-lg text-center text-base"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            consequuntur! Similique, nulla placeat in expedita omnis ab error
            eaque esse a doloremque, iusto libero eligendi, animi minus
            architecto. Modi, consectetur?
          </Typography>
        </div>
      </div>
    </Section>
  );
};
