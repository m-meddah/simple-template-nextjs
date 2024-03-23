import { Section } from "./Section";

export const ProblemsSection = () => {
  return (
    <Section>
      <h2 className="text-center text-3xl font-bold">
        More time to set up your app = Less time to sale your products
      </h2>
      <div className="m-auto mt-4 flex max-w-3xl gap-4 max-lg:flex-col">
        <div className="flex flex-1 flex-col items-start rounded-lg bg-red-500/50 p-4 shadow lg:p-8">
          <h3 className="text-xl font-bold">Without Our Template</h3>
          <ul className="flex list-disc flex-col items-start text-left ml-1">
            <li>You take hours to choose your stack</li>
            <li>You take hours to set up authentication</li>
            <li>You take hours to set up payments</li>
          </ul>
        </div>
        <div className="flex flex-1 flex-col items-start rounded-lg bg-green-500/50 p-4 shadow lg:p-8">
          <h3 className="text-xl font-bold">With Our Template</h3>
          <ul className="flex list-disc flex-col items-start text-left ml-1">
            <li>All the set up is made for you</li>
            <li>You just to customize your application</li>
            <li>Sell your products NOW !</li>
          </ul>
        </div>
      </div>
    </Section>
  );
};