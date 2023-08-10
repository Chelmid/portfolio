type cardFrontProps = "description" | "name";
type FlipCardProps = {
  cardFront: { [key in cardFrontProps]: string };
  cardBack: { [key in cardFrontProps]: string | string[] };
};

export const FlipCard = ({ cardFront, cardBack }: FlipCardProps) => {
  return (
    <div className="flex justify-end m-auto">
      <div>
        <div className="my-6">
          <div className="flip-card other">
            <div className="flip-card-inner">
              <div className="flip-card-front md">
                <p>{cardFront.description}</p>
              </div>
              <div className="flip-card-back">
                <h1>{cardBack.description}</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
