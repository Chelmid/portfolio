import { useTranslation } from "react-i18next";

type datasProps = {
  index: number;
};

export const FlipCard = ({ index = 0 }: Partial<datasProps>) => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-end m-auto">
      <div>
        <div className="my-6">
          <div className="flip-card other">
            <div className="flip-card-inner">
              <div className="flip-card-front p-2">
                <p>{t(`experience.cardFront.description${index}`)}</p>
              </div>
              <div className="flip-card-back">
                <div className="pt-1">
                  {t(`experience.cardBack.description${index}`, {
                    returnObjects: true,
                  }).map((item: string) => (
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
