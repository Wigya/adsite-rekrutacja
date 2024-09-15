import { useState } from "react";
import { faqSection } from "../utils/constants";

type ExpandButton = {
  isExpanded: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ExpandButton = ({ isExpanded, ...props }: ExpandButton) => {
  console.log("isExpanded=>", isExpanded);
  return (
    <button
      {...props}
      className="flex space-x-2 border-b-[1.5px] font-roboto-condensed"
    >
      <span>Rozwiń</span>
      <img
        src="/adsite-rekrutacja/arrow-down-icon.svg"
        style={{
          transform: isExpanded ? "rotate(180deg)" : "",
        }}
      />
    </button>
  );
};

export const ExpandableText = ({
  text,
  limit,
}: {
  text: string;
  limit: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="space-y-6 text-left font-roboto-condensed text-sm">
      <div>
        {/* Show full text if expanded, otherwise cut */}
        {!isExpanded ? text.substring(0, limit) : text}
        {/* Show the [...] if text longer than limit and is not expanded */}
        {text.length > limit && !isExpanded && " [...]"}
      </div>
      {/* If text longer than limit, show the Expand Button */}
      {text.length > limit && (
        <ExpandButton
          isExpanded={isExpanded}
          onClick={() => setIsExpanded((prev) => !prev)}
        />
      )}
    </div>
  );
};

type InfoItemProps = {
  title: string;
  content: string;
};
export const InfoItem = ({ title, content }: InfoItemProps) => {
  const limit = 180;
  return (
    <div className="w-1/2 text-white sm:space-y-4">
      <p className="font-bebas">{title}</p>
      <ExpandableText text={content} limit={limit} />
    </div>
  );
};

const Info = () => {
  return (
    <section
      className="flex flex-col space-y-12 bg-secondary p-14 sm:flex-row sm:space-x-12 sm:space-y-0 sm:px-standard sm:py-[88px]"
      id="faq"
    >
      {faqSection.map((item) => (
        <InfoItem key={item.title} title={item.title} content={item.content} />
      ))}
    </section>
  );
};

export default Info;
