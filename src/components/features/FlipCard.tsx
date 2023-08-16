import { useTranslation } from "react-i18next";

type FlipCardProps = {
  cardfront: {
    name: string;
    description: string;
  };
  cardback: {
    name: string;
    description: string[];
  };
};

type datasProps = {
  data: FlipCardProps;
  index: number;
};

export const FlipCard = ({ data, index = 0 }: Partial<datasProps>) => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-end m-auto">
      <div>
        <div className="my-6">
          <div className="flip-card other">
            <div className="flip-card-inner">
              <div className="flip-card-front p-3">
                <p>{t(`experience.description${index}`)}</p>
              </div>
              <div className="flip-card-back">
                <div className="p-1">
                  {data?.cardback?.description.map((item) => (
                    <div key={item}>{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
