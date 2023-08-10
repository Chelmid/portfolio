type FlipCardProps = {
  date: string;
  name: string;
  city: string;
  description: string;
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
};

export const FlipCard = ({ data }: datasProps) => {
  return (
    <div className="flex justify-end m-auto">
      <div>
        <div className="my-6">
          <div className="flip-card other">
            <div className="flip-card-inner">
              <div className="flip-card-front p-3">
                <p>{data?.cardfront?.description}</p>
              </div>
              <div className="flip-card-back">
                <div className="p-1">
                  {data?.cardback?.description.map((item) => (
                    <div>{item}</div>
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
