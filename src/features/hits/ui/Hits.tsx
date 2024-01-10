import { useFetchAllHitsQuery } from "../api/hitsApi";
import "./hits.css";
import { CardProduct } from "entities/cardProduct/CardProduct";

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
                  <CardProduct
                    id={id}
                    title={title}
                    price={price}
                    images={images}
                    category={category}
                  />
                </div>
              ))}
          </div>
        </div>{" "}
      </div>
    </div>
  );
};
