import { useFetchAllHitsQuery } from "../api/hitsApi";
import "./hits.css";
import { CardItem } from "entities/cardItem/CardItem";

export const Hits = () => {
  const { data: hits } = useFetchAllHitsQuery(3);
  return (
    <div className="hits">
      <div className="title">Хиты продаж</div>
      <div className="items-card">
        <div>
          <div className="items-card">
            {hits &&
              hits.map(({ title, price, images, id, category }) => (
                <div key={id}>
                  <CardItem
                    id={id}
                    title={title}
                    price={price}
                    images={images}
                    category={category}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
