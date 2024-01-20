import "./search.css";

export const CatalogSearch = ({
  searchPhrase,
  onChange,
}: {
  searchPhrase: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="search">
      <input
        type="text"
        name="search"
        value={searchPhrase}
        onChange={onChange}
        placeholder="Поиск"
      />
    </div>
  );
};
